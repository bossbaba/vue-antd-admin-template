<template>
  <div class="basicmodal">
    <div class="modal">
      <!-- basic modal -->
      <!-- button 打开dialog的button按钮 -->
      <a-button class="btn" type="primary" @click="showModal">打开步骤条弹框</a-button>
      <!-- 模态框 -->
      <a-modal
        v-model="visible"
        title="Title"
        @ok="handleOk"
        :bodyStyle="{height:'240px'}"
        :confirm-loading="loading"
        width="50%"
        :destroyOnClose="true"
      >
        <!-- 自定义footer -->
        <template slot="footer">
          <a-button key="back" @click="handleCancel">Return</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
        </template>
        <!-- 步骤框 -->
        <a-steps v-model="current" @change="stepChangeEvent">
          <a-step
            v-for="(item,index) of step"
            :status="item.status"
            :title="item.title"
            :key="index"
          />
        </a-steps>
        <!-- 具体内容 -->
        <!-- 如果要把这个插件做成组件，请注意dialog点击遮罩层事件，另外这里可以直接写成<slot>模式 -->
        <div class="wrapper">
          <div ref="stepWrapper" class="wrapper-container" :style="{width:step.length * 100 +'%'}">
            <div class="animate" v-for="(item,index) of step" :key="index">
              <div class="steps-content">{{item.title}}</div>
            </div>
          </div>
        </div>
      </a-modal>
      <a-button class="btn" type="primary" @click="showBasicModal">打开基本弹框</a-button>
      <a-modal
        v-model="visibleBasic"
        title="Basic Modal"
        :destroyOnClose="true"
        @ok="handleOkBasic"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
      <a-button class="btn" @click="showConfirm">Confirm</a-button>
      <a-button class="btn" type="dashed" @click="showDeleteConfirm">Delete</a-button>
      <a-button class="btn" type="dashed" @click="showPropsConfirm">With extra props</a-button>
      <a-button class="btn" @click="info">Info</a-button>
      <a-button class="btn" @click="success">Success</a-button>
      <a-button class="btn" @click="error">Error</a-button>
      <a-button class="btn" @click="warning">Warning</a-button>
      <!-- form modal -->
    </div>

    <a-divider />
    <div class="confirm-modal">
      <div id="components-a-popconfirm-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
          <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>TL</a-button>
          </a-popconfirm>
          <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>Top</a-button>
          </a-popconfirm>
          <a-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>TR</a-button>
          </a-popconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
          <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>LT</a-button>
          </a-popconfirm>
          <a-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>Left</a-button>
          </a-popconfirm>
          <a-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>LB</a-button>
          </a-popconfirm>
        </div>
        <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
          <a-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>RT</a-button>
          </a-popconfirm>
          <a-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>Right</a-button>
          </a-popconfirm>
          <a-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>RB</a-button>
          </a-popconfirm>
        </div>
        <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
          <a-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>BL</a-button>
          </a-popconfirm>
          <a-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>Bottom</a-button>
          </a-popconfirm>
          <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
            <template slot="title">
              <p>{{ text }}</p>
              <p>{{ text }}</p>
            </template>
            <a-button>BR</a-button>
          </a-popconfirm>
        </div>
      </div>
    </div>
    <a-divider />
    <div class="notice-modal">
      <a-button type="primary" @click="openNotification">Open the notification box</a-button>
      <a-button type="primary" @click="openNotificationHasIcon">Open the notification box</a-button>
      <a-button type="primary" @click="openNotificationDefaultStyle">Open the notification box</a-button>
      <!-- openNotificationHasBtn -->
      <a-button type="primary" @click="openNotificationHasBtn">Open the notification box</a-button>
      <a-button type="primary" @click="openNotificationHasPosition('topLeft')">
        <a-icon type="radius-upleft" />topLeft
      </a-button>
      <a-button type="primary" @click="openNotificationHasPosition('topRight')">
        <a-icon type="radius-upright" />topRight
      </a-button>
      <a-button type="primary" @click="openNotificationHasPosition('bottomLeft')">
        <a-icon type="radius-bottomleft" />bottomLeft
      </a-button>
      <a-button type="primary" @click="openNotificationHasPosition('bottomRight')">
        <a-icon type="radius-bottomright" />bottomRight
      </a-button>
      <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
      <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
      <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
      <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};
export default {
  data() {
    return {
      current: 0,
      loading: false,
      visible: false,
      visibleBasic: false,
      buttonWidth: 70,
      text: "Are you sure to delete this task?",
      step: [
        {
          title: "第一步",
          status: "process"
        },
        {
          title: "第二步",
          status: "wait"
        },
        {
          title: "第三步",
          status: "wait"
        },
        {
          title: "第四步",
          status: "wait"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification."
      });
    },
    openNotificationHasPosition(placement) {
      this.$notification.open({
        message: `Notification ${placement}`,
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        placement
      });
    },
    openNotificationHasBtn() {
      const key = `open${Date.now()}`;
      this.$notification.open({
        message: "Notification Title",
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h => {
          return h(
            "a-button",
            {
              props: {
                type: "primary",
                size: "small"
              },
              on: {
                click: () => this.$notification.close(key)
              }
            },
            "Confirm"
          );
        },
        key,
        onClose: close
      });
    },
    openNotificationDefaultStyle() {
      this.$notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        style: {
          width: "600px",
          marginLeft: `${335 - 600}px`
        }
      });
    },
    openNotificationHasIcon() {
      this.$notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        icon: <a-icon type="smile" style="color: #108ee9" />
      });
    },
    openNotification() {
      this.$notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    },
    showBasicModal() {
      this.visibleBasic = true;
    },
    handleOkBasic() {
      this.visibleBasic = false;
    },
    confirm() {
      message.info("Clicked on Yes.");
    },
    info() {
      const h = this.$createElement;
      this.$info({
        title: "This is a notification message",
        content: h("div", {}, [
          h("p", "some messages...some messages..."),
          h("p", "some messages...some messages...")
        ]),
        onOk() {}
      });
    },

    success() {
      this.$success({
        title: "This is a success message",
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        )
      });
    },

    error() {
      this.$error({
        title: "This is an error message",
        content: "some messages...some messages..."
      });
    },

    warning() {
      this.$warning({
        title: "This is a warning message",
        content: "some messages...some messages..."
      });
    },
    showConfirm() {
      this.$confirm({
        title: "Do you want to delete these items?",
        content:
          "When clicked the OK button, this dialog will be closed after 1 second",
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {}
      });
    },
    showDeleteConfirm() {
      this.$confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    showPropsConfirm() {
      this.$confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        okButtonProps: {
          props: { disabled: true }
        },
        cancelText: "No",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    /**
     * @params null
     * @desc 打开模态框
     * @return null
     */
    showModal() {
      this.visible = true;
      this.current = 0;
      this.step = [
        {
          title: "第一步",
          status: "process"
        },
        {
          title: "第二步",
          status: "wait"
        },
        {
          title: "第三步",
          status: "wait"
        },
        {
          title: "第四步",
          status: "wait"
        }
      ];
    },
    /**
     * @params e 事件原型
     * @desc 关闭模态框
     * @return null
     */
    handleOk() {
      this.loading = true;
      // 模拟网络请求事件
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 2000);
    },
    /**
     * @params e 事件原型
     * @desc 关闭模态框
     * @return null
     */
    handleCancel() {
      this.visible = false;
    },
    /**
     * @params e 当前步骤框index
     * @desc 步骤框改变事件
     * @return null
     */
    stepChangeEvent(e) {
      this.current = e;
      // 修改当前步骤框状态
      if (e > 0) {
        this.step[e].status = "process";
      }
      // 步骤框动画
      this.$refs.stepWrapper.style.transform = `translateX(${-25 *
        this.current}%)`;
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .wrapper-container {
    // width: 400%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    transition: ease-in-out 0.2s;
    .animate {
      width: 25%;
      height: 100%;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 95%;
        width: 100%;
      }
    }
  }
}
.modal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .btn {
    margin-right: 20px;
    margin-top: 10px;
  }
}

#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
.notice-modal {
  .ant-btn {
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>