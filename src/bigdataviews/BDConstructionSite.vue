<template>
  <div class="bigcs">
    <!-- <div class="caption-title">
      <i class="fl">
        <img src="@/assets/bigdata/bigcs/images/title-left.png" />
      </i>
      <span class="biaoti fl">智慧工地</span>
      <i class="fr">
        <img src="@/assets/bigdata/bigcs/images/title-right.png" />
      </i>
    </div> -->
    <!-- 内容正文 -->
    <div class="zhenwen">
      <div class="left_zs fl">
        <!-- 项目概览 -->
        <div class="data-box1 left_tb fl">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left fl">[</b>
            <span>项目概览</span>
            <b class="data-title-right fr">]</b>
          </div>
          <!-- 项目概览-->
          <div class="xmglan">
            <ul class="xmgl_heard">
              <li>当前</li>
              <li class="hove">历史</li>
            </ul>
            <div id="xmgl_cen">
              <div class="xmgl_tb">
                <ul class="xm_cszs">
                  <li>
                    在建项目（个）:
                    <span>100</span>个
                  </li>
                  <li>
                    在建工地面积（平米）：
                    <span>100</span>万M
                  </li>
                  <li>
                    <p>
                      市政（%）:
                      <span>100</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      绿化（%）:
                      <span>100</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      房建（%）
                      <span>100</span>
                      <cite>%</cite>
                    </p>
                  </li>
                  <li>
                    <p>
                      交建（%）
                      <span>100</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      其他（%）
                      <span>100</span>
                      <cite>%</cite>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="xmgl_tb none">
                <ul class="xm_cszs">
                  <li>
                    在建项目（个）:
                    <span>140</span>个
                  </li>
                  <li>
                    在建工地面积（平米）：
                    <span>120</span>万M
                  </li>
                  <li>
                    <p>
                      市政（%）:
                      <span>110</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      绿化（%）:
                      <span>140</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      房建（%）
                      <span>180</span>
                      <cite>%</cite>
                    </p>
                  </li>
                  <li>
                    <p>
                      交建（%）
                      <span>10</span>
                      <cite>%</cite>
                    </p>
                    <p>
                      其他（%）
                      <span>140</span>
                      <cite>%</cite>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 项目人员信息状态 -->
        <div class="data-box1 left_tb fl mtop40">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left fl">[</b>
            <span>项目人员信息状态</span>
            <b class="data-title-right fr">]</b>
          </div>
          <!-- 项目人员信息状态-->
          <div class="xmglan">
            <div id="lytj" class="lytj"></div>

            <div class="wgrytj">
              <span class="wgrytj_bt">务工人员工种统计</span>
              <div class="wgrytj_tb">
                <div id="gztj" style="height:163px"></div>
              </div>
            </div>

            <div class="wgrytj">
              <span class="wgrytj_bt">各公司现场人员统计</span>
              <div class="wgrytj_tb">
                <div id="xcrytj" style="height:163px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--仪表盘等展示-->
      <div class="center_zs fl">
        <div class="data-box1 box1-back">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>仪表盘等展示</span>
            <b class="data-title-right">]</b>
          </div>
          <div class="ybp">
            <div id="ybp" style="height:600px"></div>
          </div>
        </div>
      </div>
      <!--右侧图表展示 -->
      <div class="right_zs fl">
        <!-- 巡检风险状态 -->
        <div class="data-box1 right_tb">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>巡检风险状态</span>
            <b class="data-title-right">]</b>
          </div>
          <!--巡检风险状态-->
          <div class="ryclts">
            <div id="xjfxzt" style="height:300px"></div>
          </div>
        </div>

        <!-- 风险变化趋势 -->
        <div class="data-box1 right_tb mtop40">
          <i class="topL"></i>
          <i class="topR"></i>
          <i class="bottomL"></i>
          <i class="bottomR"></i>
          <div class="data-title">
            <b class="data-title-left">[</b>
            <span>风险变化趋势</span>
            <b class="data-title-right">]</b>
          </div>
          <!--问题等级-->
          <div class="ryclts">
            <div class="clearfix">
              <div id="fxbhqs" style="height:300px"></div>
            </div>
            <div class="wgrytj">
              <div class="wenti_dj">
                <div id="wentidj" style="height:100px"></div>
              </div>
              <div class="wenti_bg">
                <table width="200" border="1">
                  <tr>
                    <td>类别</td>
                    <td>发现总是</td>
                    <td>重大问题</td>
                    <td>一般问题</td>
                  </tr>
                  <tr>
                    <td>质量问题</td>
                    <td class="green">45</td>
                    <td class="orange">300</td>
                    <td class="green">40</td>
                  </tr>
                  <tr>
                    <td>安全问题</td>
                    <td class="green">36</td>
                    <td class="orange">100</td>
                    <td class="green">78</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h30 clearfix"></div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //分类选择
      $(".xmgl_heard li").click(function() {
        $(this).attr("class", "");
        $(this)
          .siblings()
          .attr("class", "hove");
        $("#xmgl_cen")
          .find(".xmgl_tb")
          .eq($(this).index())
          .removeClass("none")
          .siblings()
          .addClass("none");
      });
      // /////////////////////////////////////////////
      this.createPromanger();
      this.createPropsonal();
      this.createProworker();
      this.createProdanger();
      this.createProwraing();
      this.createProquestions();
      this.createProYBP();
    },
    createPromanger() {
      /*#################    项目人员信息状态  #####################*/
      var dom = document.getElementById("lytj");
      var myChart = echarts.init(dom);
      var app = {};
      let option = null;
      app.title = "环形图";

      option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  fontWeight: "bolder"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 15,
                  fontWeight: "bolder"
                }
              }
            },
            data: [
              {
                value: 335,
                name: "质量"
              },
              {
                value: 310,
                name: "安全"
              }
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
    createPropsonal() {
      var dom = document.getElementById("gztj");
      var myChart = echarts.init(dom);
      var app = {};
      let option = null;
      app.title = "环形图";

      option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["木工", "钢筋工", "瓦泥工", "电焊工", "起重工"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  fontWeight: "normal"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 335,
                name: "木工"
              },
              {
                value: 310,
                name: "钢筋工"
              },
              {
                value: 234,
                name: "瓦泥工"
              },
              {
                value: 135,
                name: "电焊工"
              },
              {
                value: 1548,
                name: "起重工"
              }
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
    createProworker() {
      var dom = document.getElementById("xcrytj");
      var myChart = echarts.init(dom);
      var app = {};
      let option = null;
      app.title = "环形图";

      option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["中国建筑", "万科", "金地", "韩村河建筑", "中国铁建"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  fontWeight: "normal"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 335,
                name: "中国建筑"
              },
              {
                value: 310,
                name: "万科"
              },
              {
                value: 234,
                name: "金地"
              },
              {
                value: 135,
                name: "韩村河建筑"
              },
              {
                value: 148,
                name: "中国铁建"
              }
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
    createProdanger() {
      /*##################  巡检风险状态     ##################*/
      var option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["所属工地", "风险程度"],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: ["内蒙", "玉树自治区", "河北省张家口", "吉林省"],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#657c97"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "风险程度",
            nameTextStyle: {
              color: "#657c97"
            },
            min: 0,
            max: 100,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: "#657c97"
              }
            }
          }
        ],
        series: [
          {
            name: "所属工地",
            type: "bar",

            /*设置柱状图颜色*/
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#83bff6"
                  },
                  {
                    offset: 0.5,
                    color: "#0ff"
                  },
                  {
                    offset: 1,
                    color: "#188df0"
                  }
                ]),
                /*信息显示方式*/
                label: {
                  show: false,
                  position: "top",
                  formatter: "{b}\n{c}"
                }
              }
            },
            data: [50, 75, 40, 70]
          },
          {
            name: "风险程度",
            type: "line",
            itemStyle: {
              /*设置折线颜色*/
              normal: {
                //color:'#0ff'
              }
            },
            data: [50, 75, 40, 70]
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("xjfxzt"));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    createProwraing() {
      /*##############  风险变化趋势    #####################*/

      var dom = document.getElementById("fxbhqs");
      var myChart = echarts.init(dom);
      let option = null;
      option = {
        title: {
          text: "风险变化趋势",
          //是否显示标题组件
          show: false
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["项目起始时间", "安全问题", "质量问题", "环保问题"],
          top: "3%",
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2018/1",
            "2018/2",
            "2018/3",
            "2018/4",
            "2018/5",
            "2018/6",
            "2018/7"
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#657c97"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#657c97"
            }
          }
        },
        series: [
          {
            name: "项目起始时间",
            type: "line",

            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            // 显示数值
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            }
          },
          {
            name: "安全问题",
            type: "line",
            stack: "总量",
            data: [100, 182, 191, 104, 290, 130, 200],
            // 显示数值
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            }
          },
          {
            name: "质量问题",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            // 显示数值
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            }
          },
          {
            name: "环保问题",
            type: "line",
            stack: "总量",
            data: [120, 102, 121, 124, 110, 120, 110],
            // 显示数值
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            }
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
    createProquestions() {
      /*################### 问题等级    ###################*/
      var dom = document.getElementById("wentidj");
      var myChart = echarts.init(dom);
      // var app = {};
      let option = null;
      option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "问题类别",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%" //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                position: "inside", //让文字显示在柱子上
                formatter: "{d}%" //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
              }
            },
            data: [
              {
                value: 335,
                name: "质量问题"
              },
              {
                value: 310,
                name: "安全问题"
              }
            ]
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
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
@import url("../assets/bigdata/bigcs/css/public.css");
@import url("../assets/bigdata/bigcs/css/jianlixt.css");
@import url("../assets/bigdata/bigcs/css/jianlisw.css");
.bigcs {
  background: rgba(0, 0, 0, 1);
}
</style>