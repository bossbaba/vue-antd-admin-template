<template>
  <div>
    <a-card title="生命周期">
      <a-timeline>
        <a-timeline-item
          :color="item.color"
          v-for="(item,index) of list"
          :key="index"
        >{{item.context}}</a-timeline-item>
      </a-timeline>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          context: "2020/6/4前 完善基本构架",
          color: "green"
        },
        {
          id: 1,
          context: "2020/6/4 添加404页面示例 添加开发时间轴",
          color: "green"
        },
        {
          id: 1,
          context:
            "2020/6/7增加步骤条组件示例 修复侧边栏导航按钮返回菜单不展开bug",
          color: "green"
        },
        {
          id: 1,
          context: "2020/6/8增加提交规范，增加开发者",
          color: "blue"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>