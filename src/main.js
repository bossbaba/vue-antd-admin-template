import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VCharts from 'v-charts';
import { message } from 'ant-design-vue';
import './assets/iconfont.css';
import * as lodash from "lodash";

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VCharts)

/* 全局lodash */
Vue.prototype.$baseLodash = lodash;
//注入全局属性$msg
Vue.prototype.$msg = message;

message.config({
    duration: 2,// 持续时间
    top:`100px`, // 到页面顶部距离
    maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
