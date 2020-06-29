<template>
  <div class="g2">
    <a-row>
      <a-col :span="12">
        <div id="c1"></div>
      </a-col>
      <a-col :span="12">
        <div id="c2"></div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <div id="c3"></div>
      </a-col>
      <a-col :span="12">
        <div id="c4"></div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <div id="c5"></div>
      </a-col>
      <a-col :span="12">
        <div id="c6"></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Chart, Util } from '@antv/g2';

export default {
  data() {
    return {
      data1:[
        { type: '汽车', value: 34 },
        { type: '建材家居', value: 85 },
        { type: '住宿旅游', value: 103 },
        { type: '交通运输与仓储邮政', value: 142 },
        { type: '建筑房地产', value: 251 },
        { type: '教育', value: 367 },
        { type: 'IT 通讯电子', value: 491 },
        { type: '社会公共管理', value: 672 },
        { type: '医疗卫生', value: 868 },
        { type: '金融保险', value: 1234 },
      ],
      data2:[
        { type: '一线城市', value: 0.19 },
        { type: '二线城市', value: 0.21 },
        { type: '三线城市', value: 0.27 },
        { type: '四线及以下', value: 0.33 },
      ],
      data3:[{"Data":"2010-01","sales":1998},{"Data":"2010-02","sales":1850},{"Data":"2010-03","sales":1720},{"Data":"2010-04","sales":1818},{"Data":"2010-05","sales":1920},{"Data":"2010-06","sales":1802},{"Data":"2010-07","sales":1945},{"Data":"2010-08","sales":1856},{"Data":"2010-09","sales":2107},{"Data":"2010-10","sales":2140},{"Data":"2010-11","sales":2311},{"Data":"2010-12","sales":1972},{"Data":"2011-01","sales":1760},{"Data":"2011-02","sales":1824},{"Data":"2011-03","sales":1801},{"Data":"2011-04","sales":2001},{"Data":"2011-05","sales":1640},{"Data":"2011-06","sales":1502},{"Data":"2011-07","sales":1621},{"Data":"2011-08","sales":1480},{"Data":"2011-09","sales":1549},{"Data":"2011-10","sales":1390},{"Data":"2011-11","sales":1325},{"Data":"2011-12","sales":1250},{"Data":"2012-01","sales":1394},{"Data":"2012-02","sales":1406},{"Data":"2012-03","sales":1578},{"Data":"2012-04","sales":1465},{"Data":"2012-05","sales":1689},{"Data":"2012-06","sales":1755},{"Data":"2012-07","sales":1495},{"Data":"2012-08","sales":1508},{"Data":"2012-09","sales":1433},{"Data":"2012-10","sales":1344},{"Data":"2012-11","sales":1201},{"Data":"2012-12","sales":1065},{"Data":"2013-01","sales":1255},{"Data":"2013-02","sales":1429},{"Data":"2013-03","sales":1398},{"Data":"2013-04","sales":1678},{"Data":"2013-05","sales":1524},{"Data":"2013-06","sales":1688},{"Data":"2013-07","sales":1500},{"Data":"2013-08","sales":1670},{"Data":"2013-09","sales":1734},{"Data":"2013-10","sales":1699},{"Data":"2013-11","sales":1508},{"Data":"2013-12","sales":1680},{"Data":"2014-01","sales":1750},{"Data":"2014-02","sales":1602},{"Data":"2014-03","sales":1834},{"Data":"2014-04","sales":1722},{"Data":"2014-05","sales":1430},{"Data":"2014-06","sales":1280},{"Data":"2014-07","sales":1367},{"Data":"2014-08","sales":1155},{"Data":"2014-09","sales":1289},{"Data":"2014-10","sales":1104},{"Data":"2014-11","sales":1246},{"Data":"2014-12","sales":1098},{"Data":"2015-01","sales":1189},{"Data":"2015-02","sales":1276},{"Data":"2015-03","sales":1033},{"Data":"2015-04","sales":956},{"Data":"2015-05","sales":845},{"Data":"2015-06","sales":1089},{"Data":"2015-07","sales":944},{"Data":"2015-08","sales":1043},{"Data":"2015-09","sales":893},{"Data":"2015-10","sales":840},{"Data":"2015-11","sales":934},{"Data":"2015-12","sales":810},{"Data":"2016-01","sales":782},{"Data":"2016-02","sales":1089},{"Data":"2016-03","sales":745},{"Data":"2016-04","sales":680},{"Data":"2016-05","sales":802},{"Data":"2016-06","sales":697},{"Data":"2016-07","sales":583},{"Data":"2016-08","sales":456},{"Data":"2016-09","sales":524},{"Data":"2016-10","sales":398},{"Data":"2016-11","sales":278},{"Data":"2016-12","sales":195},{"Data":"2017-01","sales":145},{"Data":"2017-02","sales":207}],
      data4:[{'class':'转基因作物种植面积',country:'印度',type:'1',value:10.8},{'class':'转基因作物种植面积',country:'印度',type:'2',value:89.2},{'class':'转基因作物种植面积',country:'美国',type:'1',value:72.9},{'class':'转基因作物种植面积',country:'美国',type:'2',value:27.1},{'class':'转基因作物种植面积',country:'中国',type:'1',value:2.8},{'class':'转基因作物种植面积',country:'中国',type:'2',value:97.2},{'class':'转基因作物种植面积',country:'巴西',type:'1',value:49.1},{'class':'转基因作物种植面积',country:'巴西',type:'2',value:50.9},{'class':'转基因作物种植面积',country:'加拿大',type:'1',value:11.6},{'class':'转基因作物种植面积',country:'加拿大',type:'2',value:88.4},{'class':'转基因作物种植面积',country:'阿根廷',type:'1',value:23.8},{'class':'转基因作物种植面积',country:'阿根廷',type:'2',value:76.2},{'class':'转基因作物种植面积',country:'巴基斯坦',type:'1',value:2.9},{'class':'转基因作物种植面积',country:'巴基斯坦',type:'2',value:97.1},{'class':'转基因作物种植面积',country:'南非',type:'1',value:2.7},{'class':'转基因作物种植面积',country:'南非',type:'2',value:97.3},{'class':'转基因作物种植面积',country:'巴拉圭',type:'1',value:3.6},{'class':'转基因作物种植面积',country:'巴拉圭',type:'2',value:96.4},{'class':'转基因作物种植面积',country:'乌拉圭',type:'1',value:1.3},{'class':'转基因作物种植面积',country:'乌拉圭',type:'2',value:98.7},{'class':'耕地总面积',country:'印度',type:'1',value:175.4},{'class':'耕地总面积',country:'印度',type:'2',value:24.6},{'class':'耕地总面积',country:'美国',type:'1',value:165.2},{'class':'耕地总面积',country:'美国',type:'2',value:34.8},{'class':'耕地总面积',country:'中国',type:'1',value:108.4},{'class':'耕地总面积',country:'中国',type:'2',value:91.6},{'class':'耕地总面积',country:'巴西',type:'1',value:73.2},{'class':'耕地总面积',country:'巴西',type:'2',value:126.8},{'class':'耕地总面积',country:'加拿大',type:'1',value:46.9},{'class':'耕地总面积',country:'加拿大',type:'2',value:153.1},{'class':'耕地总面积',country:'阿根廷',type:'1',value:38.6},{'class':'耕地总面积',country:'阿根廷',type:'2',value:161.4},{'class':'耕地总面积',country:'巴基斯坦',type:'1',value:22},{'class':'耕地总面积',country:'巴基斯坦',type:'2',value:178},{'class':'耕地总面积',country:'南非',type:'1',value:12.1},{'class':'耕地总面积',country:'南非',type:'2',value:187.9},{'class':'耕地总面积',country:'巴拉圭',type:'1',value:5.5},{'class':'耕地总面积',country:'巴拉圭',type:'2',value:194.5},{'class':'耕地总面积',country:'乌拉圭',type:'1',value:1.8},{'class':'耕地总面积',country:'乌拉圭',type:'2',value:198.2},{'class':'转基因作物种植占比（%）',country:'印度',type:'1',value:6.2},{'class':'转基因作物种植占比（%）',country:'印度',type:'2',value:93.8},{'class':'转基因作物种植占比（%）',country:'美国',type:'1',value:44.1},{'class':'转基因作物种植占比（%）',country:'美国',type:'2',value:55.9},{'class':'转基因作物种植占比（%）',country:'中国',type:'1',value:2.6},{'class':'转基因作物种植占比（%）',country:'中国',type:'2',value:97.4},{'class':'转基因作物种植占比（%）',country:'巴西',type:'1',value:67},{'class':'转基因作物种植占比（%）',country:'巴西',type:'2',value:33},{'class':'转基因作物种植占比（%）',country:'加拿大',type:'1',value:24.7},{'class':'转基因作物种植占比（%）',country:'加拿大',type:'2',value:75.3},{'class':'转基因作物种植占比（%）',country:'阿根廷',type:'1',value:61.6},{'class':'转基因作物种植占比（%）',country:'阿根廷',type:'2',value:38.4},{'class':'转基因作物种植占比（%）',country:'巴基斯坦',type:'1',value:13.2},{'class':'转基因作物种植占比（%）',country:'巴基斯坦',type:'2',value:86.8},{'class':'转基因作物种植占比（%）',country:'南非',type:'1',value:22.4},{'class':'转基因作物种植占比（%）',country:'南非',type:'2',value:77.6},{'class':'转基因作物种植占比（%）',country:'巴拉圭',type:'1',value:65.7},{'class':'转基因作物种植占比（%）',country:'巴拉圭',type:'2',value:34.3},{'class':'转基因作物种植占比（%）',country:'乌拉圭',type:'1',value:73},{'class':'转基因作物种植占比（%）',country:'乌拉圭',type:'2',value:27}],
      data5:[{"date":"2017-01-01","nlp":7,"blockchain":14},{"date":"2017-01-08","nlp":8,"blockchain":15},{"date":"2017-01-15","nlp":8,"blockchain":14},{"date":"2017-01-22","nlp":7,"blockchain":15},{"date":"2017-01-29","nlp":8,"blockchain":14},{"date":"2017-02-05","nlp":8,"blockchain":15},{"date":"2017-02-12","nlp":8,"blockchain":15},{"date":"2017-02-19","nlp":8,"blockchain":17},{"date":"2017-02-26","nlp":8,"blockchain":18},{"date":"2017-03-05","nlp":9,"blockchain":18},{"date":"2017-03-12","nlp":8,"blockchain":17},{"date":"2017-03-19","nlp":8,"blockchain":19},{"date":"2017-03-26","nlp":8,"blockchain":17},{"date":"2017-04-02","nlp":8,"blockchain":17},{"date":"2017-04-09","nlp":8,"blockchain":16},{"date":"2017-04-16","nlp":8,"blockchain":17},{"date":"2017-04-23","nlp":8,"blockchain":18},{"date":"2017-04-30","nlp":8,"blockchain":20},{"date":"2017-05-07","nlp":8,"blockchain":23},{"date":"2017-05-14","nlp":8,"blockchain":24},{"date":"2017-05-21","nlp":8,"blockchain":30},{"date":"2017-05-28","nlp":8,"blockchain":26},{"date":"2017-06-04","nlp":8,"blockchain":29},{"date":"2017-06-11","nlp":8,"blockchain":30},{"date":"2017-06-18","nlp":8,"blockchain":29},{"date":"2017-06-25","nlp":8,"blockchain":29},{"date":"2017-07-02","nlp":7,"blockchain":24},{"date":"2017-07-09","nlp":8,"blockchain":26},{"date":"2017-07-16","nlp":8,"blockchain":26},{"date":"2017-07-23","nlp":8,"blockchain":26},{"date":"2017-07-30","nlp":8,"blockchain":27},{"date":"2017-08-06","nlp":8,"blockchain":28},{"date":"2017-08-13","nlp":8,"blockchain":32},{"date":"2017-08-20","nlp":8,"blockchain":33},{"date":"2017-08-27","nlp":7,"blockchain":34},{"date":"2017-09-03","nlp":7,"blockchain":34},{"date":"2017-09-10","nlp":8,"blockchain":36},{"date":"2017-09-17","nlp":8,"blockchain":34},{"date":"2017-09-24","nlp":8,"blockchain":34},{"date":"2017-10-01","nlp":8,"blockchain":35},{"date":"2017-10-08","nlp":9,"blockchain":40},{"date":"2017-10-15","nlp":8,"blockchain":45},{"date":"2017-10-22","nlp":9,"blockchain":46},{"date":"2017-10-29","nlp":9,"blockchain":49},{"date":"2017-11-05","nlp":9,"blockchain":52},{"date":"2017-11-12","nlp":9,"blockchain":51},{"date":"2017-11-19","nlp":8,"blockchain":52},{"date":"2017-11-26","nlp":8,"blockchain":73},{"date":"2017-12-03","nlp":8,"blockchain":86},{"date":"2017-12-10","nlp":8,"blockchain":91},{"date":"2017-12-17","nlp":7,"blockchain":100},{"date":"2017-12-24","nlp":6,"blockchain":71},{"date":"2017-12-31","nlp":7,"blockchain":77},{"date":"2018-01-07","nlp":8,"blockchain":88},{"date":"2018-01-14","nlp":8,"blockchain":78},{"date":"2018-01-21","nlp":8,"blockchain":70},{"date":"2018-01-28","nlp":11,"blockchain":62},{"date":"2018-02-04","nlp":9,"blockchain":57},{"date":"2018-02-11","nlp":8,"blockchain":54},{"date":"2018-02-18","nlp":8,"blockchain":56},{"date":"2018-02-25","nlp":8,"blockchain":52},{"date":"2018-03-04","nlp":9,"blockchain":50},{"date":"2018-03-11","nlp":9,"blockchain":51},{"date":"2018-03-18","nlp":9,"blockchain":50},{"date":"2018-03-25","nlp":8,"blockchain":43},{"date":"2018-04-01","nlp":8,"blockchain":42},{"date":"2018-04-08","nlp":9,"blockchain":44},{"date":"2018-04-15","nlp":9,"blockchain":46},{"date":"2018-04-22","nlp":9,"blockchain":46},{"date":"2018-04-29","nlp":8,"blockchain":45},{"date":"2018-05-06","nlp":8,"blockchain":45},{"date":"2018-05-13","nlp":9,"blockchain":50},{"date":"2018-05-20","nlp":9,"blockchain":43},{"date":"2018-05-27","nlp":8,"blockchain":43},{"date":"2018-06-03","nlp":9,"blockchain":43},{"date":"2018-06-10","nlp":8,"blockchain":40},{"date":"2018-06-17","nlp":8,"blockchain":41},{"date":"2018-06-24","nlp":8,"blockchain":37},{"date":"2018-07-01","nlp":8,"blockchain":36},{"date":"2018-07-08","nlp":8,"blockchain":37},{"date":"2018-07-15","nlp":8,"blockchain":39},{"date":"2018-07-22","nlp":8,"blockchain":39},{"date":"2018-07-29","nlp":8,"blockchain":37},{"date":"2018-08-05","nlp":8,"blockchain":37},{"date":"2018-08-12","nlp":8,"blockchain":37},{"date":"2018-08-19","nlp":8,"blockchain":37}],
      data6:[
        { type: '未知', value: 654, percent: 0.02 },
        { type: '17 岁以下', value: 654, percent: 0.02 },
        { type: '18-24 岁', value: 4400, percent: 0.2 },
        { type: '25-29 岁', value: 5300, percent: 0.24 },
        { type: '30-39 岁', value: 6200, percent: 0.28 },
        { type: '40-49 岁', value: 3300, percent: 0.14 },
        { type: '50 岁以上', value: 1500, percent: 0.06 },
      ]
    }
  },
  mounted() {

    // -------------------------条形图-------------------------------
    const chart1 = this.newChart('c1', 400)
    this.BarChart(chart1, this.data1)

    // -------------------------饼图---------------------------------
    const chart2 = this.newChart('c2', 400)
    this.PieChart(chart2, this.data2)

    // -------------------------面积图-------------------------------
    const chart3 = this.newChart('c3', 400)
    this.AreaChart(chart3, this.data3)

    // -------------------------分面图-------------------------------
    const chart4 = this.newChart('c4', 400)
    this.FacetChart(chart4, this.data4)

    // -------------------------折线图-------------------------------
    const chart5 = this.newChart('c5', 400)
    this.CurveChart(chart5, this.data5)

    // -------------------------柱状图-------------------------------
    const chart6 = this.newChart('c6', 400)
    this.ColumnarChart(chart6, this.data6)
  },
  methods: {
    // 创建 Chart 对象
    newChart(id, height, width, autoFit = true) {
      return new Chart({
        container: id, // 指定图表容器 ID
        autoFit: autoFit, // 是否自适应
        height: height, // 指定图表高度
        width: width // 指定图表宽度
      });
    },
    // 条形图
    BarChart(name, data) {
      name.data(data);
      name.scale({
        value: {
          max: 1400,
          min: 0,
          alias: '销量（百万）',
        },
      });
      name.axis('type', {
        title: null,
        tickLine: null,
        line: null,
      });
      name.axis('value', {
        label: null,
        title: {
          offset: 30,
          style: {
            fontSize: 12,
            fontWeight: 300,
          },
        },
      });
      name.legend(false);
      name.coordinate().transpose();
      name
        .interval()
        .position('type*value')
        .size(26)
        .label('value', {
          style: {
            fill: '#8d8d8d',
          },
          offset: 10,
        });
      name.interaction('element-active');
      name.render();
    },
    // 饼图
    PieChart(name, data) {
      name.data(data);
      //name.legend(false);
      name.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.4
      });
      name.tooltip({
        showMarkers: false
      });
        name
        .interval()
        .adjust('stack')
        .position('value')
        .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
        .style({ opacity: 0.4 })
        .state({
          active: {
            style: (element) => {
              const shape = element.shape;
              return {
                matrix: Util.zoom(shape, 1.1),
              }
            }
          }
        })
        .label('type', (val) => {
          const opacity = val === '四线及以下' ? 1 : 0.5;
          return {
            offset: -30,
            style: {
              opacity,
              fill: 'white',
              fontSize: 12,
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)',
            },
            content: (obj) => {
              return obj.type + '\n' + obj.value + '%';
            },
          };
        });
      name.interaction('legend-active');
      name.render();
    },
    // 面积图
    AreaChart(name, data) {
      name.data(data);
      name.scale('Data', {
        range: [0, 1],
        tickCount: 10,
        type: 'timeCat'
      });
      name.scale('sales', {
        nice: true,
      });
      name.axis('sales', {
        label: {
          formatter: text => {
            return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
          }
        }
      });
      name.tooltip({
        showCrosshairs: true,
      });
      name.annotation().dataMarker({
        position: ['2014-01', 1750],
        top: true,
        text: {
          content: '因政策调整导致销量下滑',
          style: {
            fontSize: 13,
          }
        },
        line: {
          length: 30,
        },
      });
      name.line().position('Data*sales');
      name.area().position('Data*sales');
      name.render();
    },
    // 分面图
    getTypeColor(type) {
      if (type === '转基因作物种植面积') { return '#1890ff'; }
      if (type === '耕地总面积') { return '#2fc25b'; }
      if (type === '转基因作物种植占比（%）') { return '#facc14'; }
    },
    FacetChart(name, data) {
      name.data(data);
      name.legend(false);
      name.tooltip({
        showMarkers: false
      });
      name.facet('rect', {
        fields: ['class'],
        columnTitle: {
          offsetY: -15,
          style: {
            fontSize: 14,
            fontWeight: 300,
            fill: '#8d8d8d'
          }
        },
        eachView: (view, facet) => {
          view.coordinate().transpose();

          if (facet.columnIndex === 0) {
            view.axis('country', {
              tickLine: null,
              line: null,
            });
            view.axis('value', false);
          } else {
            view.axis(false);
          }
          const color = this.getTypeColor(facet.columnValue);
          view
            .interval()
            .adjust('stack')
            .position('country*value')
            .color('type', [color, '#ebedf0'])
            .size(20)
            .label('value*type', (value, type) => {
              if (type === '2') {
                return null;
              }
              const offset = (value < 30) ? 10 : -4;
              return {
                offset,
              };
            });
          view.interaction('element-active');
        }
      });
      name.render();
    },
    // 折线图
    CurveChart(name, data) {
      name.data(data);
      name.scale({
        nlp: {
          min: 0,
          max: 100
        },
        blockchain: {
          min: 0,
          max: 100
        }
      });
      name.axis('nlp', false);
      name.legend({
        custom: true,
        items: [
          { name: 'blockchain', value: 'blockchain', marker: { symbol: 'line', style: { stroke: '#1890ff', lineWidth: 2 } } },
          { name: 'nlp', value: 'nlp', marker: { symbol: 'line', style: { stroke: '#2fc25b', lineWidth: 2 } } },
        ],
      });
      name.line().position('date*blockchain').color('#1890ff');
      name.line().position('date*nlp').color('#2fc25b');
      name.annotation().dataMarker({
        top: true,
        position: ['2016-02-28', 9],
        text: {
          content: 'Blockchain 首超 NLP',
          style: {
            textAlign: 'left',
          },
        },
        line: {
          length: 30,
        },
      });
      name.annotation().dataMarker({
        top: true,
        position: ['2017-12-17', 100],
        line: {
          length: 30,
        },
        text: {
          content: '2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100',
          style: {
            textAlign: 'right',
          }
        },
      });
      name.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
      name.render();
    },
    ColumnarChart(name, data) {
      name.data(data);
      name.scale('value', {
        alias: '销售额(万)',
      });
      name.axis('type', {
        tickLine: {
          alignTick: false,
        },
      });
      name.axis('value', false);
      name.tooltip({
        showMarkers: false,
      });
      name.interval().position('type*value');
      name.interaction('element-active');
      // 添加文本标注
      data.forEach((item) => {
        name
          .annotation()
          .text({
            position: [item.type, item.value],
            content: item.value,
            style: {
              textAlign: 'center',
            },
            offsetY: -30,
          })
          .text({
            position: [item.type, item.value],
            content: (item.percent * 100).toFixed(0) + '%',
            style: {
              textAlign: 'center',
            },
            offsetY: -12,
          });
      });
      name.render();
    }
  }
};
</script>

<style lang="less" scoped>
  .ant-row{
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
</style>