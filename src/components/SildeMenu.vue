<template>
  <div class="silder-menu">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible width="200" style="height:100%">
      <a-menu
        mode="inline"
        theme="dark"
        :default-selected-keys="[currentKey]"
        :selectedKeys="[currentKey]"
        :open-keys="openKeys"
        :style="{ height: '100%', borderRight: 0 }"
        @select="selectMenuItem"
        @openChange="openChangeEvent"
      >
        <a-sub-menu 
        v-show="item.system == defaultSystem"
        v-for="(item) of config" :key="item.key">
          <span slot="title">
            <a-icon :type="item.icon" />
            <span v-show="!collapsed">{{item.title}}</span>
          </span>
          <a-menu-item
            @click="changeMenu(sitem)"
            v-for="(sitem) of item.children"
            :key="sitem.key"
          >{{sitem.title}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import config from "@/config/config.js";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      config: config.Menu,
      openKeys: localStorage.getItem('openkey'),
    };
  },
  created() {},
  computed: {
    ...mapState(["currentKey","defaultSystem"])
  },
  methods: {
    ...mapMutations(["setCurrentKey","setCurrentSystem"]),
    // 点击相应菜单导航到相应页面
    changeMenu(argments) {
      localStorage.setItem("currentKey", argments.key);
      this.$router.push(`/${argments.key}`);
    },
    // 选中菜单
    selectMenuItem(argments) {
      this.$emit("select", {
        currentkey: argments.key
      });
    },
    // 菜单组打开或者关闭事件
    openChangeEvent(argments) {
      if (argments.length != 0) {
        // 如果数组length为0表示所有的菜单都是关闭的
        this.openKeys = [argments[argments.length - 1]];
      } else {
        this.openKeys = [];
      }
      localStorage.setItem("opkey", this.openKeys);
    }
  },
  watch: {
    // 监听路由
    $route(to) {
      console.log(to);
      let curreentKey = to.path.slice(1);
      // 设置当前选中菜单
      this.setCurrentKey(curreentKey);
      // 设置当前系统
      this.setCurrentSystem(to.meta.system)
      // 设置当前打开菜单组
      this.openKeys = [to.meta.faKey];
      localStorage.setItem("opkey", this.openKeys);
    }
  }
};
</script>

<style lang="less" scoped>
.silder-menu {
  height: calc(100vh - 72px);
}
</style>