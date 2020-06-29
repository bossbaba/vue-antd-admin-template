<template>
  <div class="lodash">
    <a-row :gutter="[8,8]">
      <a-col :span="8" v-for="(item, index) in lodashList" :key="index">
        <a-card :title="item.title">
          <p>{{item.method}}</p>
          <p>// => {{item.result}}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lodashList: [
        {title: "将array拆分成多个size长度的区块", method: "this.$baseLodash.chunk(['a', 'b', 'c', 'd'], 2)", result: "[['a', 'b'], ['c', 'd']]"},
        {title: "排除给定array中的值", method: "this.$baseLodash.difference([3, 2, 1], [4, 2])", result: "[3, 1]"},
        {title: "去除array前面的n个元素", method: "this.$baseLodash.drop([1, 2, 3], 1)", result: "[2, 3]"},
        {title: "去除array尾部的n个元素", method: "this.$baseLodash.dropRight([1, 2, 3], 1)", result: "[1, 2]"},
        {title: "返回首次value在数组array中被找到的索引值", method: "this.$baseLodash.indexOf([1, 2, 1, 2], 2)", result: "1"},
        {title: "将array中的所有元素转换为指定分隔的字符串", method: "this.$baseLodash.join(['a', 'b', 'c'], '~')", result: "'a~b~c'"},
        {title: "反转array", method: "this.$baseLodash.reverse([1, 2, 3])", result: "[3, 2, 1]"},
        {title: "优化并排序array", method: "this.$baseLodash.sortedUniq([1, 1, 2])", result: "[1, 2]"},
        {title: "向上舍入number", method: "this.$baseLodash.ceil(6.004, 2)", result: "6.01"},
        {title: "向下舍入number", method: "this.$baseLodash.floor(0.046, 2)", result: "0.04"},
        {title: "四舍五入number", method: "this.$baseLodash.round(4.006, 2)", result: "4.01"},
        {title: "返回指定范围内的随机数", method: "this.$baseLodash.random(0, 5)", result: " 0到5任意数"},
        {title: "从string字符串中移除空格或指定的字符", method: "this.$baseLodash.trim('-_-abc-_-', '_-')", result: "abc"},
        {title: "事件防抖动", method: "this.$baseLodash.debounce(@click的事件,延迟的毫秒数)", result: "点击后多久不可以点击"},
      ],
    };
  },
  mounted(){
    console.log(this.$baseLodash.initial([1, 2, 3]) )
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
