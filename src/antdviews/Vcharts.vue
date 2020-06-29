<template>
  <div class="vcharts">
    <a-card class="card">
      <div class="title">
        <span>柱状图</span>
      </div>
      <ve-bar v-if="isShowVcharts" :data="chartData"></ve-bar>
    </a-card>

    <a-card class="card">
      <div class="title">
        <span>饼状玫瑰图</span>
      </div>
      <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </a-card>

    <a-card class="card">
      <div class="title">
        <span>环形图</span>
      </div>
      <ve-ring :data="chartData"></ve-ring>
    </a-card>

    <a-card class="card">
      <div class="title">
        <span>金字塔</span>
      </div>
      <ve-funnel :data="TchartData"></ve-funnel>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: {
        roseType: "radius"
      },
      TchartData: {
        columns: ["状态", "数值"],
        rows: [
          { 状态: "展示", 数值: 900 },
          { 状态: "访问", 数值: 600 },
          { 状态: "点击", 数值: 300 },
          { 状态: "订单", 数值: 100 }
        ]
      },
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
      isShowVcharts: false
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.isShowVcharts = true;
    });
  }
};
</script>

<style lang="less" scoped>
.vcharts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.card {
  width: 46%;
  margin-right: 30px;
  margin-top: 10px;
}
</style>