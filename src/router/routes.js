import Home from '../antdviews/Home.vue'
export default [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../antdviews/About.vue')
    },
    {
        path: '/charts',
        name: "Charts",
        component: () => import('@/antdviews/Charts.vue')
    }, {
        path: '/table',
        name: "Table",
        component: () => import("@/antdviews/Table.vue")
    }, {
        path: '/formmodal',
        name: "FormModal",
        component: () => import("@/antdviews/FormModal.vue")
    }, {
        path: '/404',
        name: "404",
        component: () => import("@/antdviews/404.vue")
    }, {
        path: '/timeline',
        name: "404",
        component: () => import("@/antdviews/DevTimeLine.vue")
    }, {
        path: '/vcharts',
        name: "VCharts",
        component: () => import('@/antdviews/Vcharts.vue')
    }, {
        path: '/upload',
        name: "Upload",
        component: () => import('@/antdviews/DefUpload.vue')
    }, {
        path: '/execl',
        name: "Execl",
        component: () => import('@/antdviews/Execl.vue')
    }, {
        path: '/workerform',
        name: 'workerForm',
        component: () => import('@/workerviews/WorkForm.vue')
    }, {
        path: '/analysis',
        name: 'analysis',
        component: () => import('@/workerviews/Analysis.vue')
    }, {
        path: '/bigcity',
        name: 'bigcity',
        component: () => import('@/bigdataviews/BDCity.vue')
    }, {
        path: '/editor',
        name: 'editor',
        component: () => import('@/antdviews/Editor.vue')
    }, {
        path: '/g2',
        name: 'g2',
        component: () => import('@/antdviews/G2.vue')
    }, {
        path: '/map',
        name: 'map',
        component: () => import('@/antdviews/Map.vue')
    }, {
        path: '/iconfont',
        name: 'iconfont',
        component: () => import('@/antdviews/IconFont.vue')
    }, {
        path: '/bigcs',
        name: 'bigcs',
        component: () => import('@/bigdataviews/BDConstructionSite.vue')
    }, {
        path: '/lodash',
        name: 'lodash',
        component: () => import('@/antdviews/Lodash.vue')
    }, {
        path: '/bigtst',
        name: 'bigtst',
        component: () => import('@/bigdataviews/BDTransportation.vue')
    }, {
        path: '/dialogstep',
        name: 'dialogstep',
        component: () => import('@/antdviews/DialogStep.vue')
    }
]