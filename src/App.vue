<template>
  <a-layout id="components-layout-demo-top-side-2">
    <!-- 顶部导航 -->
    <MHeader />
    <a-layout style="margin-top:8px">
      <!-- 侧边栏导航 -->
      <SildeMenu :collapsed="collapsed" @select="selectOpen" />
      <a-layout>
        <div class="flex-start">
          <!-- 隐藏按钮 -->
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <!-- 返回按钮 -->
          <a-icon class="routers" type="left" @click="$router.back()" />
          <!-- 面包屑导航 -->
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>后台管理</a-breadcrumb-item>
            <a-breadcrumb-item>{{this.breadcrumb.currentkey}}</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <a-layout-content class="silderbar"
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px',maxHeight:'calc(100vh - 24px - 8px - 48px - 92px)', overflowY:'auto'}"
        >
          <div >
            <div class="bar">
              <div class="tips">
                <a-alert banner message="部分组件还没有完成，请大家多多担待~" type="info" close-text="关闭" />
              </div>
              <router-view></router-view>
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import MHeader from "@/components/HeaderMenu.vue";
import SildeMenu from "@/components/SildeMenu.vue";
import { mapState } from "vuex";
export default {
  components: {
    MHeader,
    SildeMenu
  },
  data() {
    return {
      collapsed: false,
      breadcrumb: {}
    };
  },
  created() {},
  computed: {
    ...mapState(["currentKey"])
  },
  mounted() {
    this.breadcrumb = {
      currentkey: this.currentKey
    };
  },
  methods: {
    selectOpen(args) {
      this.breadcrumb = args;
    }
  },
  watch: {
    currentKey(val) {
      this.breadcrumb.currentkey = val;
    }
  }
};
</script>

<style lang="less" scoped>
.tips {
  margin-bottom: 10px;
}
.bar {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
}
.silderbar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.silderbar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.silderbar::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.silderbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow: auto;
  float: left;
  margin: 5px;
  border: none;
}
#components-layout-demo-top-side-2 .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-top-side-2 .trigger:hover {
  color: #1890ff;
}
.routers {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
</style>