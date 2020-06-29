<template>
  <div class="analysis">
    <div class="top-card-group">
      <a-card class="card">
        <a-statistic title="总销售额" :value="112893">
          <template #suffix>
            <a-icon type="info-circle" />
          </template>
        </a-statistic>
        <div class="pi">
          <a-statistic
            title="同周比"
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
          <a-statistic
            title="同周比"
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
        </div>
        <a-divider></a-divider>
        <span>人均销售额：￥18000225</span>
      </a-card>
      <a-card class="card">
        <a-statistic title="总销售额" :value="112893">
          <template #suffix>
            <a-icon type="info-circle" />
          </template>
        </a-statistic>
        <div class="charts">
          <ve-line height="200px" :data="chartData" :settings="chartSettings"></ve-line>
        </div>
      </a-card>
      <a-card class="card">
        <a-statistic title="总销售额" :value="112893">
          <template #suffix>
            <a-icon type="info-circle" />
          </template>
        </a-statistic>
        <ve-histogram height="200px" :data="chartData"></ve-histogram>
      </a-card>
      <a-card class="card">
        <a-statistic title="总销售额" :value="112893">
          <template #suffix>
            <a-icon type="info-circle" />
          </template>
        </a-statistic>
        <div style="margin:20px 0">
          <a-progress stroke-linecap="square" :percent="75" />
        </div>
        <a-divider></a-divider>
        <div class="pi">
          <a-statistic
            title="同周比"
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
          <a-statistic
            title="同周比"
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
        </div>
      </a-card>
    </div>
    <div class="middle-card-group">
      <a-card>
        <a-tabs default-active-key="1" :activeKey="activeName" @change="callback">
          <a-tab-pane tab="用户管理" key="1">
            <div class="tab-children">
              <div class="line-chart">
                <ve-line :data="chartDataTab" ref="chart1"></ve-line>
              </div>
              <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="配置管理" key="2">
            <div class="tab-children">
              <div class="line-chart">
                <ve-line :data="chartDataTab" ref="chart2"></ve-line>
              </div>
              <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="角色管理" key="3">
            <div class="tab-children">
              <div class="line-chart">
                <ve-line :data="chartDataTab" ref="chart3"></ve-line>
              </div>
              <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="定时任务" key="4">
            <div class="tab-children">
              <div class="line-chart">
                <ve-line :data="chartDataTab" ref="chart4"></ve-line>
              </div>
              <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
                <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: {
        area: true,
        xAxis: {
          show: false //不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
        },
        yAxis: {
          show: false
        }
      },
      chartData: {
        columns: ["日期", "下单用户"],
        rows: [
          { 日期: "1/1", 下单用户: 1093 },
          { 日期: "1/2", 下单用户: 3230 },
          { 日期: "1/3", 下单用户: 2623 },
          { 日期: "1/4", 下单用户: 1423 },
          { 日期: "1/5", 下单用户: 3492 },
          { 日期: "1/6", 下单用户: 4293 }
        ]
      },
      activeName: "1",
      chartDataTab: {
        columns: ["日期", "销售额-1季度"],
        rows: [
          { 日期: "1月1日", "销售额-1季度": 1523 },
          { 日期: "1月2日", "销售额-1季度": 1223 },
          { 日期: "1月3日", "销售额-1季度": 2123 },
          { 日期: "1月4日", "销售额-1季度": 4123 },
          { 日期: "1月5日", "销售额-1季度": 3123 },
          { 日期: "1月6日", "销售额-1季度": 7123 }
        ]
      }
    };
  },
  methods: {
    callback(key) {
      console.log(key);
      this.activeName = key;
    },
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  },
  watch: {
    activeName(v) {
      console.log(v);
      this.$nextTick(() => {
        // console.log();
        this.$refs[`chart${v}`].echarts.resize();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.analysis {
  width:100%;
  .top-card-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .card {
      width: 24%;
      height: 240px;
      i {
        color: #09f;
      }
      .pi {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
  .middle-card-group {
    width: 100%;
    margin-top: 30px;
    .tab-children {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line-chart{
        width: calc(100% - 350px);
      }
    }
  }
}
</style>