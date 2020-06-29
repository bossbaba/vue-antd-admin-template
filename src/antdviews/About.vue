<template>
  <div>
    <a-list :grid="{ gutter: 16, column: 1 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.title">{{item.content}}</a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import lin from "@/config/license";
export default {
  data() {
    return {
      data: [
        {
          title: "开源协议",
          content: lin
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>