<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-22 19:07:16
 * @LastEditTime: 2023-03-15 17:04:09
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\parking\child\ChildRight.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childright_box">
    <div class="top">
      <h5 class="title">总收入分析图</h5>
      <div id="revenue_chart"></div>
    </div>
    <div class="center">
      <h5 class="title">车场流量分析</h5>
      <div id="car_chart"></div>
    </div>
    <div class="bottom">
      <h5 class="title">进出口流量统计</h5>
      <div id="im_ex_chart"></div>
    </div>
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

export default {
  name: 'ChildRight',
  data() {
    return {
      revenueChart: null,
      carChart: null,
      imExChart: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initRevenueChart, this.initCarChart, this.initImExChart])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initRevenueChart, this.initCarChart, this.initImExChart])

      myChartsScree([this.revenueChart, this.carChart, this.imExChart])
    },
    initRevenueChart() {
      const option = {
        title: {
          text: '单位:万元',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15),
            lineHeight: 60
          }
        },
        legend: {
          data: ['昨日', '今日'],
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          right: '10%',
          top: '10%',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '2%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['24:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '24:00'],
          // Y轴刻度线 文字设置
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(15)
          }
        },
        yAxis: {
          type: 'value',
          // Y轴刻度线 文字设置
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            lineStyle: {
              color: '#00ccff',
              width: 0.2
            }
          }
        },
        series: [
          {
            name: '昨日',
            data: [100, 932, 901, 934, 1290, 1330, 1320, 200, 300],
            type: 'line',
            smooth: true,
            color: '#E86452',
            showSymbol: false
          },
          {
            name: '今日',
            data: [100, 300, 400, 700, 1290, 1330, 1320, 400, 100],
            type: 'line',
            smooth: true,
            color: '#00EAFF',
            showSymbol: false
          }
        ]
      }

      this.revenueChart = myChartsItem(this.revenueChart, '#revenue_chart', option)
    },
    initCarChart() {
      const barData = [400, 600, 290, 400, 170, 200, 310, 420, 331, 203, 533, 244, 308]
      const bgData = this.changeData(barData)

      const option = {
        title: {
          text: '单位:万辆',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15),
            lineHeight: 60
          }
        },
        xAxis: {
          type: 'category',
          data: ['24:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '24:00'],

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
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(15)
          }
        },
        yAxis: {
          show: true,
          type: 'value',
          data: [],
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            lineStyle: {
              color: '#00ccff',
              width: 0.2
            }
          }
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '2%',
          containLabel: true
        },

        series: [
          // 背景
          {
            type: 'bar',
            itemStyle: {
              borderRadius: 6,
              width: '100%',
              color: '#024064'
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
                    color: '#2BD9DA' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2BD9DA' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }
      this.carChart = myChartsItem(this.carChart, '#car_chart', option)
    },
    initImExChart() {
      const option = {
        color: ['#4cec70cc', '#1fc2ff', '#9476ef'],
        title: {
          text: '单位:万辆',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15),
            lineHeight: 60
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['昨日', '今日'],
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          right: '10%',
          top: '10%',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          left: '1%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['12.1', '12.2', '12.3', '12.4', '12.5', '12.6', '12.7'],
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.647058823529412)',
              fontSize: this.$chartsSize(15)
            },
            splitLine: {
              lineStyle: {
                color: '#00ccff',
                width: 0.2
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.647058823529412)',
              fontSize: this.$chartsSize(15)
            },
            splitLine: {
              lineStyle: {
                color: '#00ccff',
                width: 0.2
              }
            }
          }
        ],

        series: [
          {
            name: '昨日',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#b9eac4cc'
                },
                {
                  offset: 1,
                  color: '#4cec70cc'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [600, 132, 201, 800, 190, 130, 1000]
          },
          {
            name: '今日',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2E93B9'
                },
                {
                  offset: 1,
                  color: '#1fc2ff'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          }
        ]
      }

      this.imExChart = myChartsItem(this.imExChart, '#im_ex_chart', option)
    },

    changeData(data) {
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
.childright_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 2%;

  .top {
    width: 100%;
    height: 100%;
  }

  .center {
    width: 100%;
    height: 100%;
  }

  .bottom {
    width: 100%;
    height: 100%;
  }
}

.title {
  margin: 0;
  padding: 0;
  color: #fff;
}
.title::before {
  content: '';
  display: inline-block;
  width: vw(5);
  height: vh(17);
  background: #31a7ff;
  margin-right: vw(6);
}

#revenue_chart {
  width: 100%;
  height: 100%;
}
#car_chart {
  width: 100%;
  height: 100%;
}
#im_ex_chart {
  width: 100%;
  height: 100%;
}
</style>
