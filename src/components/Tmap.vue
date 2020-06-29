<template>
  <div class="tmap">
    <div class="btn">
      <button @click="getMapCenter">获取中心</button>
      <button @click="change2D">2D视图</button>
      <button @click="change3D">3D视图</button>
      <div>
        <input type="text" placeholder="请输入地名" v-model="keywords" />
        <button @click="searchEvent">搜索</button>
      </div>
    </div>
    <div class="map" id="container" ref="tmap" style="height:400px"></div>
  </div>
</template>

<script>
import jsonp from "jsonp";
export default {
  name: "TMap",
  data() {
    return {
      map: {},
      center: {},
      TMap: {},
      marker: {},
      keywords: ""
    };
  },
  props: {
    tMapKey: {
      default: "OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77",
      type: String
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadScript(() => {
       setTimeout(()=>{
          this.initTMap();
       },200)
      });
    });
  },
  methods: {
    initTMap() {
      // this.$refs.tmap
      //   获取地图ContainerDom
      let tMapDom = document.getElementById("container");
      //   把挂载在window上面的Tmap对象放到组件内部
      this.TMap = window.TMap;
      window.console.log(tMapDom);
      //   初始化地图中心
      let defaultcenter = new this.TMap.LatLng(
        25.031639292195205,
        102.66665434472793
      );
      //   创建地图对象
      this.map = new this.TMap.Map(tMapDom, {
        center: defaultcenter, //设置地图中心点坐标
        zoom: 17, //设置地图缩放级别
        pitch: 43.5, //设置俯仰角
        rotation: 45 //设置地图旋转角度
      });
      this.createMarker(defaultcenter);
      //   创建信息窗口
      let info = new this.TMap.InfoWindow({
        map: this.map,
        position: this.map.getCenter(),
        offset: { x: -3, y: -35 } //向上偏移35像素坐标，向左偏移3像素坐标
      }).close();
      //   监听地图点击事件
      this.map.on("click", event => {
        // var lat = evt.latLng.getLat();
        // var lng = evt.latLng.getLng();
        window.console.log(event);
        // 设置当前地图中心点
        this.setMapCenter(event.latLng);
        // 如果存在marker伤处marker
        if (this.marker) {
          this.marker.setMap(null);
          this.marker = null;
        }
        // 重新创建marker
        this.createMarker(event.latLng);
        let poi = event.poi;
        if (poi) {
          // 拾取到POI
          //   设置信息窗口
          info
            .setContent(poi.name)
            .setPosition(poi.latLng)
            .open();
        } else {
          // 没有拾取到POI
          info.close();
        }
      });
    },
    // 地点搜索
    searchEvent() {
      // https://apis.map.qq.com/ws/place/v1/search?keyword=酒店&boundary=nearby(39.908491,116.374328,1000)&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77
      // https://apis.map.qq.com/ws/place/v1/search
      jsonp(
        `https://apis.map.qq.com/ws/place/v1/search?keyword=${this.keywords}&key=${this.tMapKey}&boundary=region(云南,0)`,
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(data);
          }
        }
      );
    },
    // 创建信息窗口

    // 创建marker
    createMarker(defaultcenter) {
      this.marker = new this.TMap.MultiMarker({
        id: "marker-layer", //图层id
        map: this.map,
        styles: {
          //点标注的相关样式
          marker: new this.TMap.MarkerStyle({
            width: 25,
            height: 35,
            anchor: { x: 16, y: 32 },
            src:
              "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png"
          })
        },
        geometries: [
          {
            //点标注数据数组
            id: "demo",
            styleId: "marker",
            position: defaultcenter,
            properties: {
              title: "marker"
            }
          }
        ]
      });
    },
    // 2d视角
    change2D() {
      this.map.setViewMode("2D");
    },
    // 3D视角
    change3D() {
      this.map.setViewMode("3D");
      //设置斜角
      this.map.setPitch(70);
    },
    // 获取中心
    // 也就是初始化的位置
    getMapCenter() {
      window.console.log(this.map.getCenter());
      this.setMapCenter(this.map.getCenter());
    },
    // 设置中心位置
    setMapCenter(center) {
      window.console.log(center);

      // 平滑移动到某个位置
      this.map.easeTo(
        {
          center: new this.TMap.LatLng(center.getLat(), center.getLng()),
          zoom: 17,
          rotation: 90
        },
        { duration: 2000 }
      );
    },
    // 加载javascript GL SDK
    loadScript(callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${this.tMapKey}&callback=init`;

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

<style>
</style>
