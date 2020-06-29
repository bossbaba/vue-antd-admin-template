<template>
  <div>
    <a-layout-header class="header">
      <div class="logo">
        <img src="@/assets/logo.svg" alt />
        <div>
          <div class="platform">
            <span>Vue-Antd-Admin</span>
          </div>
        </div>
      </div>
      <div :style="style">
        <a-menu :selectedKeys="[defaultSystem]" theme="dark" mode="horizontal">
          <a-menu-item @click="changeSystem" v-for="item in system" :key="item.key">{{item.title}}</a-menu-item>
        </a-menu>
        <div class="avactor">
          <a-dropdown :trigger="['contextmenu']">
            <a-badge :count="1000" :overflow-count="999">
              <a-avatar :size="32" class="avatar" icon="user" />
            </a-badge>
            <a-menu slot="overlay">
              <a-menu-item key="1">1st menu item</a-menu-item>
              <a-menu-item key="2">2nd menu item</a-menu-item>
              <a-menu-item key="3" @click="showConfirm">退出</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Menu,TopMenu } from "@/config/config";
export default {
  data() {
    return {
      style: {
        lineHeight: "64px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "64px"
      },
      system: TopMenu
    };
  },
  computed: {
    ...mapState(["defaultSystem"])
  },
  methods: {
    ...mapMutations(["setCurrentSystem"]),
    // 点击退出按钮时弹框提示
    showConfirm() {
      this.$confirm({
        title: "Do you Want to delete these items?",
        content: () => <div style="color:red;">Some descriptions</div>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test"
      });
    },
    //
    changeSystem(args) {
      let key = args.key;
      this.setCurrentSystem(key);
      let currentMenuGroup = Menu.find(ele => {
        if (ele.system == key) {
          return true;
        }
        return false;
      });
      console.log(currentMenuGroup);
      this.$router.push(`/${currentMenuGroup.children[0].key}`);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .platform {
    color: #fff;
  }
  .avactor {
    float: right;
    margin-left: 20px;
  }
  .ant-menu-item,
  .ant-menu-item-selected {
    height: 64px;
    line-height: 64px;
  }
}
#components-layout-demo-top-side-2 .logo {
  width: 220px;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
}
</style>