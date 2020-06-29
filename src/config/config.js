let config = {
  Menu: [
    {
      key: "home",
      title: "主页",
      icon: "user",
      system:'dev',
      children: [
        {
          key: "home",
          title: "主页"
        },
        {
          key: "timeline",
          title: "开发生命周期"
        }
      ]
    },
    {
      key: "components",
      title: "Antd组件",
      icon: "ordered-list",
      system:'dev',
      children: [
        {
          key: "table",
          title: "表格"
        },
        {
          key: "formmodal",
          title: "FormModal"
        },
        {
          key: "404",
          title: "404 Page"
        },
        {
          key:'dialogstep',
          title:'弹出框组合系列'
        }
      ]
    },{
      key:'anthorcomponents',
      title:'第三方组件',
      icon:'unordered-list',
      system:'dev',
      children:[
        {
          key: "charts",
          title: "HighCharts图表"
        },{
          key: "vcharts",
          title: "VCharts图表"
        },{
          key: "g2",
          title: "G2图表"
        },{
          key: "execl",
          title: "读取execl"
        },{
          key: "editor",
          title: "富文本编辑"
        },{
          key: "iconfont",
          title: "IconFont图标"
        },{
          key: "lodash",
          title: "JS实用工具库"
        },{
          key:'map',
          title:'地图插件'
        }
      ]
    },{
      key:'about',
      title:'关于系统',
      icon:'copyright',
      system:'dev',
      children:[
        {
          key: "about",
          title: "关于"
        },
      ]
    },{
      key:'defaultcomponents',
      title:'自定义组件',
      icon:'appstore',
      system:'dev',
      children:[
        {
          key: "upload",
          title: "文件上传"
        }
      ]
    },{
      key:"worker",
      title:"业务场景",
      icon:'project',
      system:'dev',
      children:[
        {
          key:'workerform',
          title:"工作表单"
        },
        {
          key:'analysis',
          title:"分析页"
        }
      ]
    },{
      key:'testsystem',
      title:"大数据",
      icon:'alert',
      system:'bigdata',
      children:[
        {
          key:'bigcity',
          title:"大数据可视化展板通用模板"
        },
        {
          key:'bigcs',
          title:"智慧工地模板"
        },
        {
          key:'bigtst',
          title:"智慧交通模板"
        }
      ]
    }
  ],
  TopMenu:[
    {
      title: "开发平台管理",
      key: "dev"
    },
    {
      title: "大数据",
      key: "bigdata"
    }
  ]
}
module.exports = config;