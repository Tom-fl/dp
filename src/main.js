/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-15 14:19:45
 * @LastEditTime: 2023-03-17 10:31:52
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\main.js
 * @Environment: Win 11
 * @Description:
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as echarts from 'echarts'
import VueAMap from 'vue-amap'
import { chartsSize } from '@/utils/chartSizeChange.js'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '2f01eeb14b38f4526ad244721a817ae1',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Geolocation',
    'AMap.Size',
    'AMap.Icon',
    'AMap.Geocoder'
  ],
  v: '1.4.4'
})

window._AMapSecurityConfig = {
  securityJsCode: '142adfde420b5cdc2afd9362414e507e'
}

Vue.prototype.$echarts = echarts
Vue.prototype.$chartsSize = chartsSize

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: (h) => h(App)
})
