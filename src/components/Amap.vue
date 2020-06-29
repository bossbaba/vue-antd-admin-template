<template>
  <div class="tmap">
    <div class="btn">
      <button v-if="show2DBtn" @click="change2D">2D视图</button>
      <button v-if="show3DBtn" @click="change3D">3D视图</button>
      <button v-if="showMoveBtn" @click="moveToLocal">平移</button>
      <button v-if="showInfoWindow" @click="createInfoWindows">开启信息窗口</button>
      <button v-if="showInfoWindow" @click="destroyedInfoWindows">关闭信息窗口</button>
      <div v-if="showTheme" class="selector" id="map-styles">
        选择主题
        <div class="input-item">
          <input type="radio" name="mapStyle" value="dark" checked/>
          <span>幻影黑</span>
          <span class="input-text">dark</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="light" />
          <span>月光银</span>
          <span class="input-text">light</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="whitesmoke"  />
          <span>远山黛</span>
          <span class="input-text">whitesmoke</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="fresh" />
          <span>草色青</span>
          <span class="input-text">fresh</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="grey" />
          <span>雅士灰</span>
          <span class="input-text">grey</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="graffiti" />
          <span>涂鸦</span>
          <span class="input-text">graffiti</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="macaron" />
          <span>马卡龙</span>
          <span class="input-text">macaron</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="blue" />
          <span>靛青蓝</span>
          <span class="input-text">blue</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="darkblue" />
          <span>极夜蓝</span>
          <span class="input-text">darkblue</span>
        </div>
        <div class="input-item">
          <input type="radio" name="mapStyle" value="wine" />
          <span>酱籽</span>
          <span class="input-text">wine</span>
        </div>
      </div>
      <div v-if="showSearch">
        <input id="tipinput" type="text" placeholder="请输入地名" v-model="keywords" />
        <button @click="searchEvent">搜索</button>
      </div>
    </div>
    <div class="map" id="amap-container" ref="tmap" :style="{height:height}"></div>
  </div>
</template>

<script>
export default {
  name: "TMap",
  data() {
    return {
      map: {},
      center: {},
      AMap: {},
      marker: null,
      keywords: "",
      infoWindow: {},
      placeSearch: {},
      hotspotoverEvent: {},
      auto: {}
    };
  },
  props: {
    aMapKey: {
      default: "85c467ada7b08d4b909e233d37e2d7bb",
      type: String
    },
    show2DBtn: {
      default: true,
      type: Boolean
    },
    show3DBtn: {
      default: true,
      type: Boolean
    },
    showMoveBtn: {
      default: true,
      type: Boolean
    },
    showInfoWindow: {
      default: true,
      type: Boolean
    },
    showSearch: {
      default: true,
      type: Boolean
    },
    height: {
      default: "400px",
      type: String
    },
    showTheme: {
      default: true,
      type: Boolean
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadScript(() => {
        setTimeout(() => {
          this.initAMap();
        }, 200);
      });
    });
  },
  methods: {
    // 初始化地图
    // 这里参数有默认值
    // 如果不传按照默认值 渲染
    initAMap(
      ViewMode = "3D", //3d模式
      resizeEnable = true,
      rotateEnable = true,
      pitchEnable = true,
      pitch = 43.5 //斜角
    ) {
      this.AMap = window.AMap; //把AMap对象挂载在当前组件内
      let defaultCenter = [102.66665434472793, 25.031639292195205]; //初始化地图中心
      this.map = new this.AMap.Map("amap-container", {
        //初始化地图
        center: defaultCenter,
        zoom: 17,
        isHotspot: true,
        viewMode: ViewMode, //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        resizeEnable: resizeEnable,
        rotateEnable: rotateEnable,
        pitchEnable: pitchEnable,
        pitch: pitch
      });
      // 地图是否加载完成回调
      this.loadedMap(() => {
        // 设置地图主题
        this.setMapStyle();
        this.selectTheme();
        // 加载地图插件
        this.createAMapPlugins();
        // 创建markeer
        this.createMarker();
        // 监听地图点击事件
        this.map.on("click", e => {
          // 获取点击的位置
          let clickPoint = [e.lnglat.getLng(), e.lnglat.getLat()];
          // 把地图中心移动到当前点击的位置
          this.moveToLocal(clickPoint);
        });
      });
    },
    selectTheme() {
      var radios = document.querySelectorAll("#map-styles input");
      radios.forEach((ratio) => {
        ratio.onclick = (e)=>{
          this.setMapStyle(e.target.value)
        };
      });
    },
    setMapStyle(value='dark') {
      var styleName = "amap://styles/"+value;
      this.map.setMapStyle(styleName);
    },
    // 创建marker
    createMarker(point) {
      this.marker = new this.AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: point
      });
      // 把marker添加到地图上
      this.map.add(this.marker);
    },
    // 关闭提示信息狂
    destroyedInfoWindows() {
      // 移除hotspotver事件
      this.AMap.event.removeListener(this.hotspotoverEvent);
      // 关闭提示框
      this.infoWindow.close();
    },
    // 创建提示信息框
    createInfoWindows() {
      // 添加hotspotover事件
      this.hotspotoverEvent = this.AMap.event.addListener(
        this.map,
        "hotspotover",
        result => {
          // 搜索当前位置信息
          this.placeSearch.getDetails(result.id, (status, result) => {
            if (status === "complete" && result.info === "OK") {
              this.placeSearch_CallBack(result);
            }
          });
        }
      );
    },
    // 转换当前地图信息
    placeSearch_CallBack(data) {
      //infoWindow.open(map, result.lnglat);
      window.console.log(data);
      let poiArr = data.poiList.pois;
      let location = poiArr[0].location;
      // 设置信息
      this.infoWindow.setContent(this.createContent(poiArr[0]));
      // 打开地图
      this.infoWindow.open(this.map, location);
    },
    // 创建窗体
    createContent(poi) {
      //信息窗体内容
      let s = [];
      s.push(
        '<div class="info-title">' +
          poi.name +
          '</div><div class="info-content">' +
          "地址：" +
          poi.address
      );
      s.push("电话：" + poi.tel);
      s.push("类型：" + poi.type);
      s.push("<div>");
      return s.join("<br>");
    },
    // 地图加载完成回调函数
    loadedMap(cb) {
      this.map.on("complete", () => {
        // 地图图块加载完成后触发
        cb && cb();
      });
    },
    // 加载地图插件
    createAMapPlugins() {
      // &plugin=AMap.PlaceSearch,AMap.AdvancedInfoWindow
      this.AMap.plugin(
        [
          "AMap.ToolBar", //工具栏插件
          "AMap.PlaceSearch", //搜索插件
          "AMap.AdvancedInfoWindow", //信息框插件
          "AMap.Autocomplete" //输出提示插件
        ],
        () => {
          //异步加载插件
          let toolbar = new this.AMap.ToolBar();
          // 把工具栏添加到地图上
          this.map.addControl(toolbar);
          this.placeSearch = new this.AMap.PlaceSearch(); //构造地点查询类
          // 创建信息框
          this.infoWindow = new this.AMap.AdvancedInfoWindow({
            retainWhenClose: true
          });
        }
      );
    },
    // 移动
    moveToLocal(point) {
      // 判断当前地图上是否有marker有的话删除
      if (this.marker != null) {
        this.map.remove(this.marker);
        this.marker = null;
      }
      // 创建marker
      this.createMarker(point);
      // 平滑移动地图
      this.map.panTo(point);
    },
    // 搜索
    searchEvent() {
      // 创建提示信息
      this.auto = new this.AMap.Autocomplete({
        input: "tipinput"
      });
      // 获取当前输入框内容
      let keys = document.getElementById("tipinput").value;
      this.keywords = keys;
      // 搜索当前输入框内容相关地点
      this.auto.search(this.keywords, (status, result) => {
        console.log(status, result);
        // 移动到第一个点位置
        this.moveToLocal([
          result.tips[0].location.lng,
          result.tips[0].location.lat
        ]);
      });
    },
    // 创建信息窗口
    // 2d视角
    change2D() {
      this.map.destroy();
      this.initAMap("2D");
    },
    // 3D视角
    change3D() {
      this.map.destroy();
      this.initAMap();
    },
    // 加载高德地图api
    loadScript(callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${this.aMapKey}`;

      document.body.appendChild(script);
      if (script.readyState) {
        //IE
        //这里只有反人类设计的IE才有
        script.onreadystatechange = function() {
          if (
            script.readyState == "complete" ||
            script.readyState == "loaded"
          ) {
            script.onreadystatechange = null;
            //callback&&callback()是判断传入的回调函数是不是空的如果是空的就不执行，如果不是空的就执行
            callback && callback();
          }
        };
      } else {
        //非IE
        script.onload = function() {
          callback && callback();
        };
      }
    }
  },
  destroyed() {
    this.map.destroy();
  }
};
</script>

<style lang='less' scoped>
.map {
  border-radius: 10px;
}
.info-title {
  font-weight: bolder;
  color: #fff;
  font-size: 14px;
  line-height: 26px;
  padding: 0 0 0 6px;
  background: #25a5f7;
}
.info-content {
  padding: 4px;
  color: #666666;
  line-height: 23px;
  font: 12px Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", Arial;
}
.info-content img {
  float: left;
  margin: 3px;
}
.amap-info-combo .keyword-input {
  height: auto;
}
.selector {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    margin: 0 10px;
  }
}
</style>