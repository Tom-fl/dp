<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-20 11:32:15
 * @LastEditTime: 2023-03-15 14:28:45
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\creditInfo\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childleft_box">
    <div class="top">
      <div class="com_title">
        <h5>失信波动曲线</h5>
      </div>
      <div id="childleft_top_chart"></div>
      <div id="childleft_top2_chart"></div>
    </div>
    <div class="bottom">
      <div class="com_title">
        <h5>守信波动曲线</h5>
      </div>
      <div id="childleft_bottom_chart"></div>
    </div>
  </div>
</template>

<script>
// import {
//   changeChartView,
//   changeChartResizeListener,
//   windowAddEventListener,
//   windowRemoveEventListener
// } from '@/utils/chartChange.js'

import {
  myChartsItem,
  myChartsScree,
  windowAddSize,
  windowRemoveSize,
  myChartsCall
} from '@/utils/chartSizeChange'

export default {
  name: 'ChildRight',
  data() {
    return {
      topObj: {
        list: [{ name: '' }]
      },
      childleftTopChart: null,
      childleftTop2Chart: null,
      childleftBottomChart: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initTop, this.initTop2, this.initBottom])
    // changeChartView(
    //   ['#childleft_top_chart', '#childleft_top2_chart', '#childleft_bottom_chart'],
    //   [this.initTop(), this.initTop2(), this.initBottom()]
    // )
    // windowAddEventListener([
    //   '#childleft_top_chart',
    //   '#childleft_top2_chart',
    //   '#childleft_bottom_chart'
    // ])
    // changeChartResizeListener(
    //   ['#childleft_top_chart', '#childleft_top2_chart', '#childleft_bottom_chart'],
    //   this.$el
    // )
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
    // windowRemoveEventListener([
    //   '#childleft_top_chart',
    //   '#childleft_top2_chart',
    //   '#childleft_bottom_chart'
    // ])
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initTop, this.initTop2, this.initBottom])

      myChartsScree([this.childleftTopChart, this.childleftTop2Chart, this.childleftBottomChart])
    },
    initTop() {
      const barData = [400, 600, 650, 400, 170]
      const bgData = this.initTopChangeData(barData)

      const option = {
        xAxis: {
          show: false,
          type: 'value',
          data: []
        },
        yAxis: {
          type: 'category',
          data: ['济南', '临沂', '泰安', '淄博', '潍坊'],
          axisPointer: {
            show: true
          },
          // Y轴坐标轴 显示
          axisLine: {
            show: false
          },
          // Y轴刻度线 显示
          axisTick: {
            show: false
          },
          // Y轴刻度线 文字设置
          axisLabel: {
            color: '#66BBF3',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          x: 1, // 相当于padding-left
          y: 1, // 相当于padding-top
          top: 0,
          bottom: -20,
          containLabel: true
        },

        series: [
          // 背景
          {
            type: 'bar',
            itemStyle: {
              borderRadius: 6,
              color: '#0C3668'
            },
            label: {
              // 通过formatter函数来返回想要的数据
              formatter: function (params) {
                for (let i = 0; i < barData.length; i++) {
                  if (params.dataIndex === i) {
                    return barData[i]
                  }
                }
              },
              show: true,
              position: 'right',
              color: '#66BBF3',
              fontSize: this.$chartsSize(15),
              Weight: 'bold'
            },
            silent: true,
            barWidth: '30%',
            barGap: '-100%',
            data: bgData
          },

          // 真实数据 柱状图
          {
            name: '',
            type: 'bar',
            barWidth: '30%',
            data: barData,
            itemStyle: {
              borderRadius: 6,
              label: {
                show: false, // 开启显示
                position: [200, 0], // 在上方显示
                textStyle: {
                  // 数值样式
                  color: '#fff',
                  fontSize: 20
                }
              },
              // 渐变色
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: '#0861B3' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#03BBEF' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.childleftTopChart = myChartsItem(this.childleftTopChart, '#childleft_top_chart', option)
    },
    initTop2() {
      const barData = [400, 600, 650, 400, 170]
      const bgData = this.initTopChangeData(barData)

      const option = {
        xAxis: {
          show: false,
          type: 'value',
          data: []
        },
        yAxis: {
          type: 'category',
          data: ['青岛', '日照', '威海', '烟台', '聊城'],
          axisPointer: {
            show: true
          },
          // Y轴坐标轴 显示
          axisLine: {
            show: false
          },
          // Y轴刻度线 显示
          axisTick: {
            show: false
          },
          // Y轴刻度线 文字设置
          axisLabel: {
            color: '#57E95C',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          x: 1, // 相当于padding-left
          y: 1, // 相当于padding-top
          top: 0,
          bottom: 0,
          containLabel: true
        },

        series: [
          // 背景
          {
            type: 'bar',
            itemStyle: {
              borderRadius: 6,
              color: '#0C3668'
            },
            label: {
              // 通过formatter函数来返回想要的数据
              formatter: function (params) {
                for (let i = 0; i < barData.length; i++) {
                  if (params.dataIndex === i) {
                    return barData[i]
                  }
                }
              },
              show: true,
              position: 'right',
              fontSize: this.$chartsSize(15),
              color: '#57E95C',
              Weight: 'bold'
            },
            silent: true,
            barWidth: '30%',
            barGap: '-100%',
            data: bgData
          },

          // 真实数据 柱状图
          {
            name: '',
            type: 'bar',
            barWidth: '30%',
            data: barData,
            itemStyle: {
              borderRadius: 6,
              label: {
                show: false, // 开启显示
                position: [200, 0], // 在上方显示
                textStyle: {
                  // 数值样式
                  color: '#fff',
                  fontSize: 20
                }
              },
              // 渐变色
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: '#48985B' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#57E95C' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.childleftTop2Chart = myChartsItem(
        this.childleftTop2Chart,
        '#childleft_top2_chart',
        option
      )
    },

    initTopChangeData(data) {
      let max = 0
      const bgData = []

      data.map((i, v) => {
        if (max < Number(i)) max = i
      })
      data.map((i, v) => {
        bgData.push(max)
      })

      return bgData
    },

    initBottom() {
      const option = {
        series: [
          {
            type: 'pie',
            // radius: [20, 120],
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 1
            },
            label: {
              color: '#fff',
              fontSize: this.$chartsSize(15)
            },
            data: [
              { value: 30, name: '1' },
              { value: 29, name: '2' },
              { value: 32, name: '3' },
              { value: 30, name: '4' },
              { value: 28, name: '5' },
              { value: 26, name: '6' },
              { value: 22, name: '7' },
              { value: 18, name: '8' }
            ]
          }
        ]
      }
      this.childleftBottomChart = myChartsItem(
        this.childleftBottomChart,
        '#childleft_bottom_chart',
        option
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.childleft_box {
  padding-left: 5%;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 50%;
  }
  .bottom {
    width: 100%;
    height: 50%;
  }
}

.com_title {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../../../assets/img/creditInfo/creditInfo_right.png') no-repeat 30% 0px;
  background-size: 75% 100%;
  font-size: vw(20);
  h5 {
    margin: 0;
    padding: 0;
  }
}

#childleft_top_chart {
  width: 100%;
  height: 45%;
}
#childleft_top2_chart {
  width: 100%;
  height: 45%;
}
#childleft_bottom_chart {
  width: 100%;
  height: 100%;
}
</style>
