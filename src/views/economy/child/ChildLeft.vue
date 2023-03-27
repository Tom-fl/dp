<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-24 11:14:27
 * @LastEditTime: 2023-03-15 17:34:25
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\economy\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childLeft_box">
    <section class="top">
      <h5 class="top_title">支付方式分析</h5>
      <div class="top_charts">
        <div class="top_circle_chart">
          <div v-for="item in payObj.list" :key="item.title" class="item">
            <div :id="item.type"></div>
            <div>{{ item.title }}</div>
          </div>
        </div>
        <div id="top_line_chart"></div>
      </div>
    </section>

    <section class="bottom">
      <h5 class="bottom_title">货品出口全球数</h5>
      <div class="bottom_charts">
        <div id="goods_chart"></div>
        <div></div>
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

export default {
  name: 'ChildLeft',
  data() {
    return {
      payObj: {
        list: [
          {
            title: '电子产品',
            type: 'pay_chart_1',
            value: 20,
            name: '120万'
          },
          {
            title: '出口服饰',
            type: 'pay_chart_2',
            value: 20,
            name: '20万'
          },
          {
            title: '进口食品',
            type: 'pay_chart_3',
            value: 40,
            name: '10万'
          },
          {
            title: '出口其它',
            type: 'pay_chart_4',
            value: 40,
            name: '1万'
          }
        ]
      },
      topLineChart: null,
      goodsChart: null,
      payChart_1: null,
      payChart_2: null,
      payChart_3: null,
      payChart_4: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([
      this.initPayLineChart,
      this.initGoodsChart,
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
        this.initPayLineChart,
        this.initGoodsChart,
        this.initPayChart,
        this.initPayChart,
        this.initPayChart,
        this.initPayChart
      ])

      myChartsScree([
        this.topLineChart,
        this.goodsChart,
        this.payChart_1,
        this.payChart_2,
        this.payChart_3,
        this.payChart_4
      ])
    },

    initPayLineChart() {
      const option = {
        color: ['#4cec70cc', '#1fc2ff', '#9476ef'],
        title: {
          text: '单位:亿元',
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
          data: ['出口额', '进口额'],
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
            name: '出口额',
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
            name: '进口额',
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
      this.topLineChart = myChartsItem(this.topLineChart, '#top_line_chart', option)
    },
    initGoodsChart() {
      const option = {
        legend: {
          data: ['河北', '山东'],
          show: false,
          textStyle: {
            // 字体的颜色
            color: 'red'
          }
        },
        radar: {
          indicator: [
            { name: '山东', max: 65 },
            { name: '河北', max: 160 },
            { name: '陕西', max: 300 },
            { name: '山西', max: 380 },
            { name: '河南', max: 520 },
            { name: '江苏', max: 250 }
          ],

          // 雷达图的大小  半径
          // radius: [this.$chartsSize(0), this.$chartsSize(100)],
          radius: ['0%', '60%'],
          // 坐标线轴的颜色
          axisLine: {
            show: true,
            symbol: 'none',
            lineStyle: {
              color: '#31a7ff',
              width: this.$chartsSize(0.5)
            }
          },
          // 坐标线的颜色
          splitLine: {
            lineStyle: {
              color: '#31a7ff',
              width: this.$chartsSize(0.5)
            }
          },
          axisName: { fontSize: this.$chartsSize(20) }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [42, 30, 200, 350, 500, 180],
                name: '山东'
              },
              {
                value: [50, 140, 280, 260, 420, 210],
                name: '河北'
              }
            ]
          }
        ]
      }

      this.goodsChart = myChartsItem(this.goodsChart, '#goods_chart', option)
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
                borderWidth: this.$chartsSize(1),
                borderColor: '#ffffff'
              }
            },
            axisLine: {
              lineStyle: {
                width: this.$chartsSize(8),
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
              fontSize: this.$chartsSize(10),
              color: '#cccccc',
              offsetCenter: ['0%', '55%']
            },
            detail: {
              width: this.$chartsSize(10),
              height: this.$chartsSize(10),
              fontSize: this.$chartsSize(20),
              color: '#ffffff',
              formatter: '{value}%',
              valueAnimation: true,
              offsetCenter: ['0%', '-20%']
            }
          }
        ]
      }
      this.payChart_1 = myChartsItem(this.payChart_1, '#pay_chart_1', option)
      this.payChart_2 = myChartsItem(this.payChart_2, '#pay_chart_2', option)
      this.payChart_3 = myChartsItem(this.payChart_3, '#pay_chart_3', option)
      this.payChart_4 = myChartsItem(this.payChart_4, '#pay_chart_4', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childLeft_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 60%;
    &_charts {
      width: 100%;
      height: 95%;
      display: flex;
      flex-direction: column;
      .top_circle_chart {
        width: 100%;
        height: 50%;
        display: flex;
        .item {
          width: 22%;
          height: 100%;
          div:nth-child(2) {
            width: vw(150);
            height: vh(60);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ccc;
            font-size: vw(15);
          }
        }
      }
    }
    &_title {
      color: #29ffe6;
      padding-left: 5%;
    }
  }
  .bottom {
    width: 100%;
    height: 40%;
    .bottom_charts {
      width: 100%;
      height: 90%;
    }
    &_title {
      color: #29ffe6;
      padding: 3% 5%;
    }
  }
}
#top_line_chart {
  width: 100%;
  height: 100%;
}
#goods_chart {
  width: 100%;
  height: 100%;
}
#pay_chart_1 {
  width: vw(150);
  height: vh(150);
}
#pay_chart_2 {
  width: vw(150);
  height: vh(150);
}
#pay_chart_3 {
  width: vw(150);
  height: vh(150);
}
#pay_chart_4 {
  width: vw(150);
  height: vh(150);
}
</style>
