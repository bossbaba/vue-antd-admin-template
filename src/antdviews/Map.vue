<template>
  <div class="map-container">
    <div class="map">
      <div class="title">腾讯地图插件</div>
      <TMap />
    </div>
    <div class="map">
      <div class="title">高德地图插件</div>
      <Amap />
    </div>
  </div>
</template>

<script>
import TMap from "@/components/Tmap.vue";
import Amap from "@/components/Amap.vue";
export default {
  components: {
    TMap,
    Amap
  }
};
</script>

<style lang="less" scoped>
.map-container {
  width: 100%;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
}
.title{
  padding: 30px;
}
</style>