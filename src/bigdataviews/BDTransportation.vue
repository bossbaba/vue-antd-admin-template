<template>
  <div class="bdtst">
    <div class="nav-title">
      <div class="title">实时监测</div>
    </div>
    <div class="wrapper">
      <div class="wrapper-first">
        <div class="hight-time" id="height-time" style="height:300px;color:#fff!important"></div>
        <div class="hight-danger" id="hight-danger" style="height:500px;"></div>
      </div>
      <div class="wrapper-scound map">
        <Amap
          :show2DBtn="false"
          :show3DBtn="false"
          :showMoveBtn="false"
          :showInfoWindow="false"
          :showSearch="false"
          height="400px"
          :showTheme="false"
        />
        <div class="hight-wraing" id="height-wraing" style="height:300px;margin-top:60px"></div>
      </div>
      <div class="wrapper-three">
        <div class="hight-wraing" id="height-line" style="height:600px;"></div>
        <div class="hight-wraing" id="ybp" style="height:300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Amap from "@/components/Amap.vue";
import echarts from "echarts";
export default {
  components: {
    Amap
  },
  mounted() {
    this.createHightTime();
    this.createDanger();
    this.createWraing();
    this.createLine();
    this.createProYBP();
  },
  methods: {
    createHightTime() {
      /*################### 问题等级    ###################*/
      var dom = document.getElementById("height-time");
      var myChart = echarts.init(dom);
      // var app = {};
      let option = null;
      option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"],
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          }
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 180, 0, 0.5)"
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 180, 0, 0.5)"
            }
          ]
        },
        series: [
          {
            name: "高峰时段",
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "green",
              width: 5
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 400],
              ["2019-10-12", 650],
              ["2019-10-13", 500],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100]
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
        setInterval(function() {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart.setOption(option, true);
        }, 2000);
      }
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    createDanger() {
      let data = [
        ["2000-06-05", 116],
        ["2000-06-06", 129],
        ["2000-06-07", 135],
        ["2000-06-08", 86],
        ["2000-06-09", 73],
        ["2000-06-10", 85],
        ["2000-06-11", 73],
        ["2000-06-12", 68],
        ["2000-06-13", 92],
        ["2000-06-14", 130],
        ["2000-06-15", 245],
        ["2000-06-16", 139],
        ["2000-06-17", 115],
        ["2000-06-18", 111],
        ["2000-06-19", 309],
        ["2000-06-20", 206],
        ["2000-06-21", 137],
        ["2000-06-22", 128],
        ["2000-06-23", 85],
        ["2000-06-24", 94],
        ["2000-06-25", 71],
        ["2000-06-26", 106],
        ["2000-06-27", 84],
        ["2000-06-28", 93],
        ["2000-06-29", 85],
        ["2000-06-30", 73],
        ["2000-07-01", 83],
        ["2000-07-02", 125],
        ["2000-07-03", 107],
        ["2000-07-04", 82],
        ["2000-07-05", 44],
        ["2000-07-06", 72],
        ["2000-07-07", 106],
        ["2000-07-08", 107],
        ["2000-07-09", 66],
        ["2000-07-10", 91],
        ["2000-07-11", 92],
        ["2000-07-12", 113],
        ["2000-07-13", 107],
        ["2000-07-14", 131],
        ["2000-07-15", 111],
        ["2000-07-16", 64],
        ["2000-07-17", 69],
        ["2000-07-18", 88],
        ["2000-07-19", 77],
        ["2000-07-20", 83],
        ["2000-07-21", 111],
        ["2000-07-22", 57],
        ["2000-07-23", 55],
        ["2000-07-24", 60]
      ];

      var dateList = data.map(function(item) {
        return item[0];
      });
      var valueList = data.map(function(item) {
        return item[1];
      });

      var dom = document.getElementById("hight-danger");
      var myChart = echarts.init(dom);
      // var app = {};
      let option = null;
      option = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400
          },
          {
            show: false,
            type: "continuous",
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          }
        ],

        title: [
          {
            left: "center",
            text: "Gradient along the y axis"
          },
          {
            top: "55%",
            left: "center",
            text: "Gradient along the x axis"
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        xAxis: [
          {
            data: dateList,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12"
              }
            }
          },
          {
            data: dateList,
            gridIndex: 1,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12"
              }
            }
          }
        ],
        yAxis: [
          {
            splitLine: { show: false },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12"
              }
            }
          },
          {
            splitLine: { show: false },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12"
              }
            },
            gridIndex: 1
          }
        ],
        grid: [
          {
            bottom: "60%"
          },
          {
            top: "60%"
          }
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
          }
        ]
      };
      myChart.setOption(option, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    createWraing() {
      /*################### 问题等级    ###################*/
      var dom = document.getElementById("height-wraing");
      var myChart = echarts.init(dom);
      // var app = {};
      // let option = null;

      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 100; i++) {
        xAxisData.push("类目" + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }

      let option = {
        title: {
          text: "柱状图动画延迟"
        },
        legend: {
          data: ["bar", "bar2"]
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ["stack", "tiled"]
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          }
        },
        series: [
          {
            name: "bar",
            type: "bar",
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            }
          },
          {
            name: "bar2",
            type: "bar",
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
      };
      // if (option && typeof option === "object") {
      //   myChart.setOption(option, true);
      //   setInterval(function() {
      //     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      //     myChart.setOption(option, true);
      //   }, 2000);
      // }
      myChart.setOption(option, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    createLine() {
      /*################### 问题等级    ###################*/
      var dom = document.getElementById("height-line");
      var myChart = echarts.init(dom);
      // var app = {};
      let option = null;
      option = {
        color: ["#8EC9EB"],
        legend: {
          data: ["高度(km)与气温(°C)变化关系"]
        },
        tooltip: {
          trigger: "axis",
          formatter: "Temperature : <br/>{b}km : {c}°C"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: "{value} °C",
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: { onZero: false },
          axisLabel: {
            formatter: "{value} km",
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontSize: "12"
            }
          },

          boundaryGap: true,
          data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"]
        },
        graphic: [
          {
            type: "image",
            id: "logo",
            right: 20,
            top: 20,
            z: -10,
            bounding: "raw",
            origin: [75, 75],
            style: {
              image: "http://echarts.baidu.com/images/favicon.png",
              width: 150,
              height: 150,
              opacity: 0.4
            }
          }
        ],
        series: [
          {
            name: "高度(km)与气温(°C)变化关系",
            type: "bar",
            smooth: true,
            barCategoryGap: 25,
            lineStyle: {
              width: 3,
              shadowColor: "rgba(0,0,0,0.4)",
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
          }
        ]
      };

      var rotation = 0;
      setInterval(function() {
        myChart.setOption({
          graphic: {
            id: "logo",
            rotation: (rotation += Math.PI / 360) % (Math.PI * 2)
          }
        });
      }, 30);

      myChart.setOption(option, true);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    createProYBP() {
      /*################### 问题等级    ###################*/
      var dom = document.getElementById("ybp");
      var myChart = echarts.init(dom);
      // var app = {};
      let option = null;
      option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
        setInterval(function() {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart.setOption(option, true);
        }, 2000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bdtst {
  background: rgba(0, 0, 0, 1);
  padding: 10px;
  color: #fff;
  .nav-title {
    width: 100%;
    height: 62px;
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border;
    .title {
      text-align: center;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    min-height: 300px;
    margin-top: 30px;
    & > div {
      min-height: 100px;
      border: 1px solid #fff;
      border-radius: 10px;
      margin: 0 10px;
      &:first-child {
        width: 30%;
        box-sizing: border-box;
        .text {
          height: 54px;
          text-align: center;
          line-height: 54px;
        }
      }
      &:nth-child(2) {
        width: 50%;
      }
      &:last-child {
        width: 20%;
      }
    }
    .map {
      padding: 8px;
    }
  }
}
</style>