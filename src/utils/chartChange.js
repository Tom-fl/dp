/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-08 10:57:31
 * @LastEditTime: 2023-03-14 19:57:26
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\utils\chartChange.js
 * @Environment: Win 11
 * @Description:
 *          为了解决： 窗口发生变化时 echarts 没效果
 *                    窗口像素发生变化  echarts大小跟着变化
 *
 *          使用方法： changeWindowResize( [设置echarts的id,id2,id3] )
 *                    changeChartView( [设置echarts的id,id2,id3],{echarts的配置项option} )
 *                    changeChartResizeListener( [设置echarts的id,id2,id3] ,this.$el)
 *                                          this.$el 指的是当前页面的根元素
 *                    windowAddEventListener
 *                    windowRemoveEventListener
 */
//           字体不能跟着自适应

import * as echarts from 'echarts'
import ResizeListener from 'element-resize-detector'

/**
 * @description: 当窗口缩放时，echart动态调整自身大小
 * @param {*}
 * @return {*}
 */
const changeWindowResize = (element) => {
  if (element.length !== 0) {
    element.map((item, index) => {
      isChart(item, null, index, 'size')
    })
  }
}

/**
 * @description: 更新echart视图
 * @param {*}
 * @return {*}
 */
const changeChartView = (element, option) => {
  if (element.length !== 0) {
    element.map((item, index) => {
      isChart(item, option, index, 'set')
    })
  }
}

/**
 * @description: 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
 * @param {*}
 * @return {*}
 */
const changeChartResizeListener = (element, el) => {
  const instance = ResizeListener({
    strategy: 'scroll',
    callOnAdd: true
  })

  instance.listenTo(el, () => {
    if (element.length !== 0) {
      element.map((item, index) => {
        isChart(item, null, index, 'size')
      })
    }
  })
}

/**
 * @description: 全局触发事件  监听窗口大小改变会触发  一般挂载到 mounted
 * @param {*} element 触发的元素
 * @return {*}
 */
const windowAddEventListener = (element) => {
  window.addEventListener('resize', changeWindowResize(element))
}

/**
 * @description: 全局触发事件  监听窗口大小改变事件  被删除时触发   一般挂载到 beforeDestroy
 * @param {*} element 触发的元素
 * @return {*}
 */
const windowRemoveEventListener = (element) => {
  window.removeEventListener('resize', changeWindowResize(element))
}

/**
 * @description: 判断echarts 是否已经初始化
 * @param {*} el  要初始化的dom
 * @param {*} option  配置项 没有的话填null
 * @param {*} index  第几个
 * @param {*} type   判断进行的什么操作  1.渲染图表  2.窗口发生了变化调整大小
 * @return {*}
 */
function isChart(el, option, index, type) {
  let myChart = echarts.getInstanceByDom(document.querySelector(el))
  if (myChart === undefined) {
    myChart = echarts.init(document.querySelector(el))
  }

  switch (type) {
    case 'set':
      myChart.setOption(option[index], true)
      break
    case 'size':
      myChart.resize()
      break
  }
}

export {
  changeWindowResize,
  changeChartView,
  changeChartResizeListener,
  windowAddEventListener,
  windowRemoveEventListener
}
