<template>
  <div class="home" ref="home">
    <div class="warp-container">
      <a-card hoverable class="card" style="width: 300px">
        <img
          slot="cover"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="setting" type="setting" />
          <a-icon key="edit" type="edit" />
          <a-icon key="ellipsis" type="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-card-meta>
      </a-card>
      <a-card title="综合展示" class="card" style="width:280px;">
        <!-- <a slot='extra'>查看商品列表</a> -->
        <div class="card-container">
          <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
          <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
          <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
        </div>
      </a-card>
      <a-card title="今日销量" class="card" style="width:580px;">
        <a slot="extra">查看商品列表</a>
        <div class="card-container">
          <div style="background: #ECECEC; padding: 30px">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="Feedback"
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                  >
                    <template #prefix>
                      <a-icon type="arrow-up" />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card>
                  <a-statistic
                    title="Idle"
                    :value="9.3"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template #prefix>
                      <a-icon type="arrow-down" />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-card>
      <a-card class="card" title="日程安排" style="width:100%">
        <a-table :row-selection="rowSelection" :columns="columnsTable" size='small' :data-source="dataTable" />
      </a-card>
      <a-card class="card" title="订单概览" style="width:100%">
        <ve-histogram v-if="showVcharts" :data="chartData"></ve-histogram>
      </a-card>
    </div>
    <div class="highcharts">
      <a-card title="今日活跃用户" ref="chartsCard" class="card">
        <!-- <a slot='extra'>查看商品列表</a> -->
        <div class="card-container">
          <div id="heigh-charts" ref="chartsContainer" style="width:100%"></div>
        </div>
      </a-card>
    </div>
    <div class="table">
      <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle">
          <a-icon type="smile-o" />Name
        </span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >{{ tag.toUpperCase() }}</a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <a-icon type="down" />
          </a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const columnsTable = [
  {
    title: '任务指派',
    dataIndex: 'name',
  },
  {
    title: '备注',
    dataIndex: 'age',
  },
  {
    title: '优先级',
    dataIndex: 'address',
  },
];

const dataTable = [];
for (let i = 0; i < 4; i++) {
  dataTable.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
import Highcharts from "highcharts";
export default {
  components: {},
  data() {
    return {
       dataTable,
      columnsTable,
      selectedRowKeys: [], // Check here to configure the default column
      editPerSonalInfo: true,
      age: 18,
      note: "憨厚老实不是错，错在不吃教训",
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
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
      },
      data,
      columns,
      list: [
        {
          title: "Ant Design Title 1"
        },
        {
          title: "Ant Design Title 2"
        },
        {
          title: "Ant Design Title 3"
        },
        {
          title: "Ant Design Title 4"
        }
      ],
      showVcharts: false
    };
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: 'all-data',
            text: 'Select All Data',
            onSelect: () => {
              this.selectedRowKeys = [...Array(46).keys()]; // 0...45
            },
          },
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
          {
            key: 'even',
            text: 'Select Even Row',
            onSelect: changableRowKeys => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
        ],
        onSelection: this.onSelection,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.createHightCharts();
        this.showVcharts = true;
      }, 100);
    });
  },
  methods: {
    createHightCharts() {
      Highcharts.chart("heigh-charts", this.options);
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    changeEdit() {
      this.editPerSonalInfo = !this.editPerSonalInfo;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  padding-right: 24px;
  box-sizing: border-box;
  .warp-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .card {
    margin-right: 30px;
    margin-top: 20px;
    &:nth-last-child(2){
      margin-right: 0;
    }
    &:last-child{
      margin-right: 0;
    }
  }
  .charts-container {
    margin-right: 0;
    padding: 0;
  }
  .highcharts {
    width: 100%;
    .card {
      width: 100%;
      padding: 20px;
    }
  }
  .table {
    margin-top: 20px;
  }
}
.avatar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.some-info {
  margin-top: 30px;
}
</style>