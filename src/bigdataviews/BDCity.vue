<template>
  <div class="city">
    <!-- <div class="canvas" style="opacity: .2">
      <iframe
        frameborder="0"
        src="../assets/bigdata/bigcity/js/index.html"
        style="width: 100%; height: 100%"
      ></iframe>
    </div>-->
    <div class="loading" v-if="loading">
      <div class="loadbox">
        <img src="../assets/bigdata/bigcity/picture/loading.gif" /> 页面加载中...
      </div>
    </div>
    <div class="head">
      <!-- <h1>大数据可视化展板通用模板</h1> -->
      <div class="weather">
        <!--<img src="picture/weather.png"><span>多云转小雨</span>-->
        <span id="showtime">{{nowtime}}</span>
      </div>
      <div class="mainbox">
        <ul class="clearfix">
          <li>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">模块标题样式</div>
              <div class="allnav" id="echart1"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">模块标题样式</div>
              <div class="allnav" id="echart2"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div style="height:100%; width: 100%;">
                <div class="sy" id="fb1"></div>
                <div class="sy" id="fb2"></div>
                <div class="sy" id="fb3"></div>
              </div>
              <div class="boxfoot"></div>
            </div>
          </li>
          <li>
            <div class="bar">
              <div class="barbox">
                <ul class="clearfix">
                  <li class="pulll_left counter">12581189</li>
                  <li class="pulll_left counter">3912410</li>
                </ul>
              </div>
              <div class="barbox2">
                <ul class="clearfix">
                  <li class="pulll_left">2018年总收入情况</li>
                  <li class="pulll_left">2018年总支出情况</li>
                </ul>
              </div>
            </div>
            <div class="map">
              <div class="map1">
                <img src="../assets/bigdata/bigcity/picture/lbx.png" />
              </div>
              <div class="map2">
                <img src="../assets/bigdata/bigcity/picture/jt.png" />
              </div>
              <div class="map3">
                <img src="../assets/bigdata/bigcity/picture/map.png" />
              </div>
              <div class="map4" id="map_1"></div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height:3.4rem">
              <div class="alltitle">模块标题样式</div>
              <div class="allnav" id="echart4"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">模块标题样式</div>
              <div class="allnav" id="echart5"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3rem">
              <div class="alltitle">模块标题样式</div>
              <div class="allnav" id="echart6"></div>
              <div class="boxfoot"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import china from '@/assets/bigdata/bigcity/js/china.js';
import map from '@/assets/bigdata/bigcity/js/area_echarts.js'
export default {
  data() {
    return {
      // time
      nowtime: "",
      // loading
      loading:true,
      // timer
      t:null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      window.onload = function() {
        $(".loading").fadeOut();
      };

      /****/
      $(document).ready(function() {
        var whei = $(window).width();
        $("html").css({
          fontSize: whei / 20
        });
        $(window).resize(function() {
          var whei = $(window).width();
          $("html").css({
            fontSize: whei / 20
          });
        });
      });
      this.createTime();
      this.$nextTick(() => {
        setTimeout(() => {
          this.echarts_1();
          this.echarts_2();
          this.echarts_4();
          this.echarts_31();
          this.echarts_32();
          this.echarts_33();
          this.echarts_5();
          this.echarts_6();
          china({},echarts);
          map();
          this.loading = false
        },200);
      });
    },
    createTime(){
      this.t = setTimeout(this.time, 1000); //開始运行
      this.time();
    },
    time() {
      var dt = null;
        clearTimeout(this.t); //清除定时器
        dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        this.nowtime =
          y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
        this.t = setTimeout(this.time, 1000); //设定定时器，循环运行
      },
    echarts_1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart1"));

      let option = {
        //  backgroundColor: '#00265f',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "商超门店",
              "教育培训",
              "房地产",
              "生活服务",
              "汽车销售",
              "旅游酒店",
              "五金建材"
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
              }
            },

            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [200, 300, 300, 900, 1500, 1200, 600],
            barWidth: "35%", //柱子宽度
            // barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color: "#2f89cf",
                opacity: 1,
                barBorderRadius: 5
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart2"));

      let option = {
        //  backgroundColor: '#00265f',
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" }
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["浙江", "上海", "江苏", "广东", "北京", "深圳", "安徽"],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
              }
            },

            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [1500, 1200, 600, 200, 300, 300, 900],
            barWidth: "35%", //柱子宽度
            // barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color: "#27d08a",
                opacity: 1,
                barBorderRadius: 5
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart5"));

      let option = {
        //  backgroundColor: '#00265f',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "2%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "浙江",
              "上海",
              "江苏",
              "广东",
              "北京",
              "深圳",
              "安徽",
              "四川"
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
              }
            },

            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
            barWidth: "35%", //柱子宽度
            // barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color: "#2f89cf",
                opacity: 1,
                barBorderRadius: 5
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_4() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart4"));

      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b"
            }
          }
        },
        legend: {
          top: "0%",
          data: ["安卓", "IOS"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            },

            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24"
            ]
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20
          }
        ],

        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "安卓",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              3,
              4,
              3,
              4,
              3,
              4,
              3,
              6,
              2,
              4,
              2,
              4,
              3,
              4,
              3,
              4,
              3,
              4,
              3,
              6,
              2,
              4,
              2,
              4
            ]
          },
          {
            name: "IOS",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              5,
              3,
              5,
              6,
              1,
              5,
              3,
              5,
              6,
              4,
              6,
              4,
              8,
              3,
              5,
              6,
              1,
              5,
              3,
              7,
              2,
              5,
              1,
              4
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_6() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("echart6"));

      var dataStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
          //shadowBlur: 40,
          //shadowColor: 'rgba(40, 40, 40, 1)',
        }
      };
      var placeHolderStyle = {
        normal: {
          color: "rgba(255,255,255,.05)",
          label: { show: false },
          labelLine: { show: false }
        },
        emphasis: {
          color: "rgba(0,0,0,0)"
        }
      };
      let option = {
        color: ["#0f63d6", "#0f78d6", "#0f8cd6", "#0fa0d6", "#0fb4d6"],
        tooltip: {
          show: true,
          formatter: "{a} : {c} "
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 12,
          bottom: "3%",

          data: ["浙江", "上海", "广东", "北京", "深圳"],
          textStyle: {
            color: "rgba(255,255,255,.6)"
          }
        },

        series: [
          {
            name: "浙江",
            type: "pie",
            clockWise: false,
            center: ["50%", "42%"],
            radius: ["59%", "70%"],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: "01"
              },
              {
                value: 20,
                name: "invisible",
                tooltip: { show: false },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: "上海",
            type: "pie",
            clockWise: false,
            center: ["50%", "42%"],
            radius: ["49%", "60%"],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 70,
                name: "02"
              },
              {
                value: 30,
                name: "invisible",
                tooltip: { show: false },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: "广东",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            center: ["50%", "42%"],
            radius: ["39%", "50%"],
            itemStyle: dataStyle,
            data: [
              {
                value: 65,
                name: "03"
              },
              {
                value: 35,
                name: "invisible",
                tooltip: { show: false },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: "北京",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            center: ["50%", "42%"],
            radius: ["29%", "40%"],
            itemStyle: dataStyle,
            data: [
              {
                value: 60,
                name: "04"
              },
              {
                value: 40,
                name: "invisible",
                tooltip: { show: false },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: "深圳",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            center: ["50%", "42%"],
            radius: ["20%", "30%"],
            itemStyle: dataStyle,
            data: [
              {
                value: 50,
                name: "05"
              },
              {
                value: 50,
                name: "invisible",
                tooltip: { show: false },
                itemStyle: placeHolderStyle
              }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_31() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("fb1"));
      let option = {
        title: [
          {
            text: "年龄分布",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: "16"
            }
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          }
        },
        legend: {
          top: "70%",
          itemWidth: 10,
          itemHeight: 10,
          data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            color: [
              "#065aab",
              "#066eab",
              "#0682ab",
              "#0696ab",
              "#06a0ab",
              "#06b4ab",
              "#06c8ab",
              "#06dcab",
              "#06f0ab"
            ],
            label: { show: false },
            labelLine: { show: false },
            data: [
              { value: 1, name: "0岁以下" },
              { value: 4, name: "20-29岁" },
              { value: 2, name: "30-39岁" },
              { value: 2, name: "40-49岁" },
              { value: 1, name: "50岁以上" }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_32() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("fb2"));
      let option = {
        title: [
          {
            text: "职业分布",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: "16"
            }
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          }
        },
        legend: {
          top: "70%",
          itemWidth: 10,
          itemHeight: 10,
          data: ["电子商务", "教育", "IT/互联网", "金融", "学生", "其他"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            color: [
              "#065aab",
              "#066eab",
              "#0682ab",
              "#0696ab",
              "#06a0ab",
              "#06b4ab",
              "#06c8ab",
              "#06dcab",
              "#06f0ab"
            ],
            label: { show: false },
            labelLine: { show: false },
            data: [
              { value: 5, name: "电子商务" },
              { value: 1, name: "教育" },
              { value: 6, name: "IT/互联网" },
              { value: 2, name: "金融" },
              { value: 1, name: "学生" },
              { value: 1, name: "其他" }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    echarts_33() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("fb3"));
      let option = {
        title: [
          {
            text: "兴趣分布",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: "16"
            }
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function(p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          }
        },
        legend: {
          top: "70%",
          itemWidth: 10,
          itemHeight: 10,
          data: ["汽车", "旅游", "财经", "教育", "软件", "其他"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: "兴趣分布",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            color: [
              "#065aab",
              "#066eab",
              "#0682ab",
              "#0696ab",
              "#06a0ab",
              "#06b4ab",
              "#06c8ab",
              "#06dcab",
              "#06f0ab"
            ],
            label: { show: false },
            labelLine: { show: false },
            data: [
              { value: 2, name: "汽车" },
              { value: 3, name: "旅游" },
              { value: 1, name: "财经" },
              { value: 4, name: "教育" },
              { value: 8, name: "软件" },
              { value: 1, name: "其他" }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>
<style lang="less" scoped>
@charset "utf-8";
/* CSS Document */
.city{
  background: rgba(0, 0, 0, 1);
  position: relative;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
body {
  padding: 0px;
  margin: 0px;
  color: #222;
  font-family: "微软雅黑";
  // background: rgba(101, 132, 226, 0.1);
}
@font-face {
  font-family: electronicFont;
  src: url(../assets/bigdata/bigcity/font/DS-DIGIT.TTF);
}
body {
  background: #000d4a url(../assets/bigdata/bigcity/images/bg.jpg) center top;
  background-size: cover;
  color: #666;
  font-size: 0.1rem;
}
li {
  list-style-type: none;
}
i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}
img {
  border: none;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #399bff;
}
a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}
ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
a:hover {
  color: #06c;
  text-decoration: none !important;
}

.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}
/*谷哥滚动条样式*/

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: #5bc0de;
}
::-webkit-scrollbar-track {
  background-color: #ddd;
}

/***/
// .canvas {
//   position: absolute;
//   width: 100%;
//   left: 0;
//   top: 0;
//   height: 99%;
//   z-index: 1;
// }

.allnav {
  height: calc(100% - 30px);
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 18px;
  z-index: 100000000;
  width: 100%;
  height: 100%;
  background: #1a1a1c;
  text-align: center;
}
.loadbox {
  position: absolute;
  width: 160px;
  height: 150px;
  color: #aaa;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -75px;
}
.loadbox img {
  margin: 10px auto;
  display: block;
  width: 40px;
}

.copyright {
  background: rgba(19, 31, 64, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.05);
  line-height: 0.5rem;
  text-align: center;
  padding-right: 15px;
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.16rem;
}

// .head {
//   height: 1.05rem;
//   // background:#09f url(../assets/bigdata/bigcity/images/head_bg.png) no-repeat center
//   // center;
//   background-size: 100% 100%;
//   position: relative;
//   z-index: 100;
// }
// .head h1 {
//   color: #fff;
//   text-align: center;
//   font-size: 0.4rem;
//   line-height: 0.8rem;
// }
// .head h1 img {
//   width: 1.5rem;
//   display: inline-block;
//   vertical-align: middle;
//   margin-right: 0.2rem;
// }
.weather {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  line-height: 0.75rem;
  text-align: center;
}
.weather img {
  width: 0.37rem;
  display: inline-block;
  vertical-align: middle;
}
.weather span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.18rem;
  padding-right: 0.1rem;
  font-family: electronicFont;
}
.mainbox {
  padding: 0.1rem 0.1rem 0rem 0.1rem;
}
.mainbox > ul > li {
  float: left;
  padding: 0 0.1rem;
}

.mainbox > ul > li {
  width: 30%;
}
.mainbox > ul > li:nth-child(2) {
  width: 40%;
  padding: 0;
}

.boxall {
  border: 1px solid rgba(25, 186, 139, 0.17);
  padding: 0 0.2rem 0.4rem 0.15rem;
  background: rgba(255, 255, 255, 0.04)
    url(../assets/bigdata/bigcity/images/line.png);
  background-size: 100% auto;
  position: relative;
  margin-bottom: 0.15rem;
  z-index: 10;
}
.boxall:before,
.boxall:after {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  content: "";
  border-top: 2px solid #02a6b5;
  top: 0;
}
.boxall:before,
.boxfoot:before {
  border-left: 2px solid #02a6b5;
  left: 0;
}
.boxall:after,
.boxfoot:after {
  border-right: 2px solid #02a6b5;
  right: 0;
}
.alltitle {
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
}

.boxfoot {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.boxfoot:before,
.boxfoot:after {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  content: "";
  border-bottom: 2px solid #02a6b5;
  bottom: 0;
}

.bar {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.15rem;
}
.barbox li,
.barbox2 li {
  width: 50%;
  text-align: center;
  position: relative;
  z-index: 100;
}
.barbox:before,
.barbox:after {
  position: absolute;
  width: 0.3rem;
  height: 0.1rem;
  content: "";
}
.barbox:before {
  border-left: 2px solid #02a6b5;
  left: 0;
  border-top: 2px solid #02a6b5;
}
.barbox:after {
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #02a6b5;
}

.barbox li:first-child:before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}

.barbox {
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
}
.barbox li {
  font-size: 0.7rem;
  color: #ffeb7b;
  padding: 0.05rem 0;
  font-family: electronicFont;
  font-weight: bold;
}
.barbox2 li {
  font-size: 0.19rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.1rem;
}

.map {
  position: relative;
  height: 7.2rem;
  z-index: 9;
}
.map4 {
  width: 200%;
  height: 7rem;
  position: relative;
  left: -50%;
  top: 4%;
  margin-top: 0.2rem;
  z-index: 5;
}
.map1,
.map2,
.map3 {
  position: absolute;
  opacity: 0.5;
}
.map1 {
  width: 6.43rem;
  z-index: 2;
  top: 0.45rem;
  left: 0.7rem;
  animation: myfirst2 15s infinite linear;
}
.map2 {
  width: 5.66rem;
  top: 0.85rem;
  left: 1.2rem;
  z-index: 3;
  opacity: 0.2;
  animation: myfirst 10s infinite linear;
}
.map3 {
  width: 5.18rem;
  top: 1.07rem;
  left: 1.4rem;
  z-index: 1;
}

.tabs {
  text-align: center;
  padding: 0.1rem 0 0 0;
}
.tabs a {
  position: relative;
  display: inline-block;
  margin-left: 1px;
  padding: 0.05rem 0.2rem;
  color: #898989;
  transition: all 0.3s ease-out 0s;
  font-size: 14px;
}
.tabs li {
  display: inline-block;
}
.tabs a:after {
  position: absolute;
  width: 1px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  content: "";
  margin-left: 0;
  right: -1px;
  margin-top: 7px;
}
.tabs li a.active {
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.tit02 {
  text-align: center;
  margin: 0.1rem 0;
  position: relative;
}
.tit02 span {
  border: 1px solid rgba(25, 186, 139, 0.17);
  letter-spacing: 2px;
  padding: 0.01rem 0.2rem;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.18rem;
  color: #49bcf7;
}
.tit02:before,
.tit02:after {
  position: absolute;
  width: 26%;
  height: 1px;
  background: rgba(25, 186, 139, 0.2);
  content: "";
  top: 0.12rem;
}
.tit02:after {
  right: 0;
}
.tit02:before {
  left: 0;
}

.wrap {
  height: 2.54rem;
  overflow: hidden;
}
.wrap li {
  line-height: 0.42rem;
  height: 0.42rem;
  font-size: 0.18rem;
  text-indent: 0.24rem;
  margin-bottom: 0.1rem;
}
.wrap li p {
  border: 1px solid rgba(25, 186, 139, 0.17);
  color: rgba(255, 255, 255, 0.6);
}
.sy {
  float: left;
  width: 33%;
  height: 95%;
  margin-top: 0.25rem;
}

.adduser {
  height: 1.5rem;
  overflow: hidden;
}
.adduser li {
  height: 0.5rem;
}
.adduser img {
  width: 0.4rem;
  border-radius: 0.5rem;
  margin-right: 0.1rem;
  display: inline-block;
  vertical-align: middle;
}
.adduser span {
  line-height: 0.5rem;
  font-size: 0.18rem;
  color: rgba(255, 255, 255, 0.6);
}

.sycm ul {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding: 0.16rem 0;
}
.sycm li {
  float: left;
  width: 33.33%;
  text-align: center;
  position: relative;
}
.sycm li:before {
  position: absolute;
  content: "";
  height: 30%;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  right: 0;
  top: 15%;
}
.sycm li:last-child:before {
  width: 0;
}

.sycm li h2 {
  font-size: 0.3rem;
  color: #c5ccff;
}
.sycm li span {
  font-size: 0.18rem;
  color: #fff;
  opacity: 0.5;
}

@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}

/*Plugin CSS*/
.str_wrap {
  overflow: hidden;
  width: 100%;
  position: relative;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.str_move {
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
}
.str_move_clone {
  display: inline-block;
  vertical-align: top;
  position: absolute;
  left: 100%;
  top: 0;
}
.str_vertical .str_move_clone {
  left: 0;
  top: 100%;
}
.str_down .str_move_clone {
  left: 0;
  bottom: 100%;
}
.str_vertical .str_move,
.str_down .str_move {
  white-space: normal;
  width: 100%;
}
.str_static .str_move,
.no_drag .str_move,
.noStop .str_move {
  cursor: inherit;
}
.str_wrap img {
  max-width: none !important;
}
</style>