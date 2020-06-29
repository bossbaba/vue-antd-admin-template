<template>
  <div style="padding:20px;">
    <div id="height-charts"></div>
    <div id="container"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";

export default {
  data() {
    return {
      options: {
        title: {
          text: "Solar Employment Growth by Sector, 2010-2016"
        },

        subtitle: {
          text: "Source: thesolarfoundation.com"
        },

        yAxis: {
          title: {
            text: "Number of Employees"
          }
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2017"
          }
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },

        series: [
          {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            name: "Sales & Distribution",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          },
          {
            name: "Project Development",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          },
          {
            name: "Other",
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.createHightCharts();
    this.createHighChartsDemo();
  },
  methods: {
    createHightCharts() {
      Highcharts.chart("height-charts", this.options);
    },
    createHighChartsDemo() {
      Highcharts.chart("container", {
        chart: {
          type: "line"
        },
        title: {
          text: "Monthly Average Temperature"
        },
        subtitle: {
          text: "Source: WorldClimate.com"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {
          title: {
            text: "Temperature (°C)"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [
          {
            name: "Tokyo",
            data: [
              7.0,
              6.9,
              9.5,
              14.5,
              18.4,
              21.5,
              25.2,
              26.5,
              23.3,
              18.3,
              13.9,
              9.6
            ]
          },
          {
            name: "London",
            data: [
              3.9,
              4.2,
              5.7,
              8.5,
              11.9,
              15.2,
              17.0,
              16.6,
              14.2,
              10.3,
              6.6,
              4.8
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
.height-charts {
  width: 600px;
  height: 300px;
}
</style>