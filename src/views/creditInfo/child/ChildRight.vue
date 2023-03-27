<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-20 11:32:29
 * @LastEditTime: 2023-03-15 16:12:12
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\creditInfo\child\ChildRight.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childright_box">
    <div class="top">
      <div class="com_title">
        <h5>失信波动曲线</h5>
      </div>
      <div id="childright_top_chart"></div>
    </div>
    <div class="bottom">
      <div class="com_title">
        <h5>守信波动曲线</h5>
      </div>
      <div id="childright_bottom_chart"></div>
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
      topObj: {
        list: [{ name: '' }]
      },
      childrightTopChart: null,
      childrightBottomChart: null
    }
  },
  // mounted() {
  //   changeChartView(
  //     ['#childright_top_chart', '#childright_bottom_chart'],
  //     [this.initTop(), this.initBottom()]
  //   )
  //   windowAddEventListener(['#childright_top_chart', '#childright_bottom_chart'])
  //   changeChartResizeListener(['#childright_top_chart', '#childright_bottom_chart'], this.$el)
  // },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initTop, this.initBottom])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initTop, this.initBottom])

      myChartsScree([this.childrightTopChart, this.childrightBottomChart])
    },
    initTop() {
      const option = {
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
          axisLabel: {
            color: '#ccc',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(168 168 168  / 10%)',
              width: 15
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#ccc',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [100, 50, 120, 200, 130, 111, 191],
            type: 'line',
            smooth: true,
            showSymbol: false,
            markPoint: {
              data: [{ type: 'max', name: 'Max' }],
              symbol: 'roundRect',
              symbolSize: [30, 15],
              symbolOffset: [0, '-60%'],
              itemStyle: {
                color: '#C76FF9'
              },
              label: {
                color: '#fff',
                fontSize: 10
              }
            },
            lineStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: '#4f2f61' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#C76FF9' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.childrightTopChart = myChartsItem(
        this.childrightTopChart,
        '#childright_top_chart',
        option
      )
    },
    initBottom() {
      const option = {
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
          axisLabel: {
            color: '#ccc',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(168 168 168  / 10%)',
              width: 15
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#ccc',
            fontSize: this.$chartsSize(15)
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: [100, 50, 120, 200, 130, 111, 191],
            type: 'line',
            smooth: true,
            showSymbol: false,
            markPoint: {
              data: [{ type: 'max', name: 'Max' }],
              symbol: 'roundRect',
              symbolSize: [30, 15],
              symbolOffset: [0, '-60%'],
              itemStyle: {
                color: '#C76FF9'
              },
              label: {
                color: '#fff',
                fontSize: 10
              }
            },
            lineStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: '#0BD1C3' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#09E0CD' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.childrightBottomChart = myChartsItem(
        this.childrightBottomChart,
        '#childright_bottom_chart',
        option
      )
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
  justify-content: space-between;
  .top {
    width: 100%;
    height: 45%;
  }
  .bottom {
    width: 100%;
    height: 45%;
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
  font-size: 16px;
  h5 {
    margin: 0;
    padding: 0;
  }
}

#childright_top_chart {
  width: 100%;
  height: 90%;
}
#childright_bottom_chart {
  width: 100%;
  height: 90%;
}
</style>
