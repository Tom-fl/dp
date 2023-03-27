<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-22 19:07:26
 * @LastEditTime: 2023-03-15 16:56:07
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\parking\child\ChildCenter.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childcenter_box">
    <section class="top">
      <h5 class="top_title">全国收入排行</h5>
      <div class="top_charts">
        <div class="top_charts_wrap">
          <div id="income_chart"></div>
        </div>
      </div>
    </section>

    <section class="bottom">
      <h5 class="bottom_title">支付方式分析</h5>
      <div class="bottom_charts">
        <div v-for="item in payObj.list" :key="item.title" class="bottom_charts_wrap">
          <div :id="item.type"></div>
          <div>
            <img :src="item.img" alt="" width="25" height="25" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  myChartsItem,
  myChartsScree,
  windowAddSize,
  windowRemoveSize,
  myChartsCall
} from '@/utils/chartSizeChange'

import { geoCoordMap } from '@/utils/maps/geoMap' // 坐标

export default {
  name: 'ChildCenter',
  data() {
    return {
      payObj: {
        list: [
          {
            title: '微信',
            type: 'pay_chart_1',
            value: 20,
            name: '120万',
            img: require('@/assets/img/parking/center4.svg')
          },
          {
            title: '支付宝',
            type: 'pay_chart_2',
            value: 20,
            name: '20万',
            img: require('@/assets/img/parking/center1.svg')
          },
          {
            title: '现金',
            type: 'pay_chart_3',
            value: 40,
            name: '10万',
            img: require('@/assets/img/parking/center2.svg')
          },
          {
            title: '其它',
            type: 'pay_chart_4',
            value: 40,
            name: '1万',
            img: require('@/assets/img/parking/center3.svg')
          }
        ]
      },
      incomeChart: null,
      payChart1: null,
      payChart2: null,
      payChart3: null,
      payChart4: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([
      this.initIncomeChart,
      this.initPayChart,
      this.initPayChart,
      this.initPayChart,
      this.initPayChart
    ])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([
        this.initIncomeChart,
        this.initPayChart,
        this.initPayChart,
        this.initPayChart,
        this.initPayChart
      ])

      myChartsScree([
        this.incomeChart,
        this.payChart1,
        this.payChart2,
        this.payChart3,
        this.payChart4
      ])
    },
    initIncomeChart() {
      const provinceList = Object.keys(geoCoordMap).slice(0, 13)

      const arr = [400, 600, 290, 400, 170, 200, 310, 420, 331, 203, 533, 244, 308]

      const barData = arr.sort(function (a, b) {
        return a - b
      })
      const bgData = this.contaminateChangeData(barData)

      const option = {
        xAxis: {
          show: false,
          type: 'value',
          data: []
        },
        yAxis: {
          type: 'category',
          data: provinceList,

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
            color: '#fff',
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
              width: '100%',
              color: '#0C3668'
            },
            label: {
              // 通过formatter函数来返回想要的数据
              formatter: function (params) {
                for (let i = 0; i < barData.length; i++) {
                  if (params.dataIndex === i) {
                    return barData[i] + '万'
                  }
                }
              },
              show: true,
              position: 'right',
              color: '#66BBF3',
              Weight: 'bold',
              // fontSize: 8
              fontSize: this.$chartsSize(10)
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
              // 渐变色
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(136, 250, 200, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(102, 186, 248, 1)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.incomeChart = myChartsItem(this.incomeChart, '#income_chart', option)
    },

    initPayChart() {
      const option = {
        series: [
          {
            type: 'gauge',
            itemStyle: {
              color: '#3ceca1'
            },
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#ffffff'
              }
            },
            axisLine: {
              lineStyle: {
                width: this.$chartsSize(6),
                color: [[1, 'rgb(228 255 255 / 20%)']]
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 20
            },
            data: [this.payObj.list[0]],
            title: {
              fontSize: this.$chartsSize(15),
              color: '#cccccc',
              offsetCenter: ['0%', '55%']
            },
            detail: {
              width: 10,
              height: 10,
              fontSize: this.$chartsSize(25),
              color: '#ffffff',
              formatter: '{value}%',
              valueAnimation: true,
              offsetCenter: ['0%', '-20%']
            }
          }
        ]
      }
      this.payChart1 = myChartsItem(this.payChart1, '#pay_chart_1', option)
      this.payChart2 = myChartsItem(this.payChart2, '#pay_chart_2', option)
      this.payChart3 = myChartsItem(this.payChart3, '#pay_chart_3', option)
      this.payChart4 = myChartsItem(this.payChart4, '#pay_chart_4', option)
    },

    contaminateChangeData(data) {
      let max = 0
      const bgData = []

      data.map((i, v) => {
        if (max < Number(i)) max = i
      })
      data.map((i, v) => {
        bgData.push(max)
      })

      return bgData
    }
  }
}
</script>

<style lang="scss" scoped>
.childcenter_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 50%;
    &_charts {
      width: 100%;
      height: 100%;
      display: flex;
      &_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 50%;
    padding-top: 5%;
    &_charts {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      &_wrap {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            color: #ccc;
            padding-left: 5%;
            font-size: vw(15);
          }
        }
      }
    }
  }
}

.bottom_title::before,
.top_title::before {
  content: '';
  display: inline-block;
  width: vw(5);
  height: vh(17);
  background: #31a7ff;
  margin-right: vw(6);
}

#income_chart {
  width: 100%;
  height: 100%;
}
#pay_chart_1 {
  width: 100%;
  height: 70%;
}
#pay_chart_2 {
  width: 100%;
  height: 70%;
}
#pay_chart_3 {
  width: 100%;
  height: 70%;
}
#pay_chart_4 {
  width: 100%;
  height: 70%;
}
</style>
