# 基于vue+antdUI的管理系统前端模板

## 运行

```bash
git clone https://gitee.com/onlymry/vue-antd-admin.git
```

```bash
$yarn/cnpm/npm i && yarn/cnpm/npm run serve
```

## 预览

[预览地址](http://blog.onlyylt.top/)

## 使用

1. 菜单请到`config/config.js`里面配置,如：

```js
    {
      key: "home",
      title: "主页",
      icon: "user",
      system:'dev',
      children: [
        {
          key: "home",
          title: "主页"
        }
      ]
    },
    {
      key: "components",
      title: "组件",
      icon: "user",
      system:'default',
      children: [
        {
          key: "charts",
          title: "图表"
        }
      ]
    }
```

1. 注意：菜单和路由是相互依赖的

## 依赖

|名称|依赖|功能|
--|:--:|--:
|highcharts|yarn add / npm i / cnpm i  highcharts |图表|
|v-charts|yarn add / npm i / cnpm i  echarts  v-charts |图表|
|g2|yarn add / npm i / cnpm i  @antv/g2 |图表|
|xlsx|yarn add / npm i / cnpm i xlsx |execl|
|clipboard|yarn add / npm i / cnpm i clipboard |文字拷贝|
|lodash|yarn add / npm i / cnpm i lodash |实用工具库|
|wangeditor|yarn add / npm i / cnpm i  wangeditor  cos-js-sdk-v5 |富文本编辑|

## 计划

1. 先把Antd组件的示例写入到系统中
1. 下一步准备集成常用功能组件
1. ...

### 提交规范

```bash
feat:新增功能
fix:修复bug
docs:增加文档
style:代码格式优化（不影响代码运行的变动）
test:增加测试
refactor:重构代码
chore:构建过程或者辅助工具的变动
```
