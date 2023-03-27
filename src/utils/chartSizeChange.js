/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-14 17:38:31
 * @LastEditTime: 2023-03-15 10:46:12
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\utils\chartSizeChange.js
 * @Environment: Win 11
 * @Description:
 */
import * as echarts from 'echarts'

let commonCall = []

function myChartsItem(myChart, el, option) {
  myChart = echarts.getInstanceByDom(document.querySelector(el))

  if (myChart === undefined) {
    myChart = echarts.init(document.querySelector(el))
  }

  myChart.setOption(option)
  return myChart
}

function myChartsScree(myChart) {
  myChartsCall(commonCall)
  myChart.map((item) => {
    item.resize()
  })
}

function myChartsCall(module) {
  commonCall = module
  module.map((item) => {
    item()
  })
}

function windowAddSize(fn) {
  window.addEventListener('resize', fn)
}

function windowRemoveSize(fn) {
  window.removeEventListener('resize', fn)
}

/* Echarts图表字体、间距自适应 */
function chartsSize(size, defalteWidth = 1920) {
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth) return size
  const scale = clientWidth / defalteWidth
  return Number((size * scale).toFixed(3))
}

export { myChartsItem, myChartsScree, windowAddSize, windowRemoveSize, myChartsCall, chartsSize }
