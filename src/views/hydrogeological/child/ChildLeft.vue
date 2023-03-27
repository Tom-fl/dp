<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-15 20:12:17
 * @LastEditTime: 2023-03-15 08:47:35
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\hydrogeological\child\ChildLeft.vue
 * @Environment: Win 10
 * @Description:
-->
<template>
  <div class="child_left_box">
    <h2 class="title">水质情况实时监测预警系统</h2>
    <section class="item">
      <h5 class="item_title">重点水质量检测区</h5>
      <div class="item_charts">
        <div v-for="item in emphasisObj.flow" :key="item.type" class="item_charts_wrap">
          <p class="item_charts_wrap_title">{{ item.title }}</p>
          <p class="item_charts_wrap_num">
            <span>{{ item.value }}</span>
            <span>m3/h</span>
          </p>
          <div :id="`emphasis_charts_${item.type}`"></div>
        </div>
      </div>
    </section>

    <section class="item">
      <h5 class="item_title">水质量分布情况</h5>
      <div class="item_charts">
        <div class="item_charts_wrap">
          <div id="distribution_charts"></div>
        </div>
      </div>
    </section>

    <section class="item">
      <h5 class="item_title">企业污染排放情况</h5>
      <div class="item_charts">
        <div class="item_charts_wrap">
          <div id="contaminate_charts"></div>
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

export default {
  name: 'ChildLeft',
  data() {
    return {
      // 重点水质量监测区
      emphasisObj: {
        flow: [
          {
            type: 'left',
            title: '河北省流量',
            value: '35,533'
          },
          {
            type: 'right',
            title: '山西省流量',
            value: '22,125'
          }
        ],
        chartsLeftList: [
          120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70,
          110, 130
        ],
        chartsRightList: [
          120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70,
          110, 130
        ],
        chartsBorderRadius: [5, 5, 0, 0]
      },

      // 水质量分布情况
      distributionObj: {},

      // 企业污染排放情况
      contaminateObj: {},

      myChart1: null,
      myChart2: null,
      myChart3: null,
      myChart4: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)

    myChartsCall([
      this.emphasisLeftCharts,
      this.emphasisRightCharts,
      this.distributionCharts,
      this.contaminateCharts
    ])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([
        this.emphasisLeftCharts,
        this.emphasisRightCharts,
        this.distributionCharts,
        this.contaminateCharts
      ])
      myChartsScree([this.myChart1, this.myChart2, this.myChart3, this.myChart4])
    },
    // 重点水质量监测区
    emphasisLeftCharts() {
      const option = {
        xAxis: {
          show: false,
          type: 'category',
          data: []
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [
          {
            data: this.emphasisObj.chartsLeftList,
            type: 'bar',
            itemStyle: {
              color: '#FFB822',
              borderRadius: this.emphasisObj.chartsBorderRadius
            }
          }
        ]
      }

      this.myChart1 = myChartsItem(this.myChart1, '#emphasis_charts_left', option)
    },
    emphasisRightCharts() {
      const option = {
        xAxis: {
          show: false,
          type: 'category',
          data: []
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [
          {
            data: this.emphasisObj.chartsRightList,
            type: 'bar',
            itemStyle: {
              color: '#80EC98',
              borderRadius: this.emphasisObj.chartsBorderRadius
            }
          }
        ]
      }

      this.myChart2 = myChartsItem(this.myChart2, '#emphasis_charts_right', option)
    },
    // 水质量分布情况
    distributionCharts() {
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

      this.myChart3 = myChartsItem(this.myChart3, '#distribution_charts', option)
    },
    // 企业污染排放
    contaminateCharts() {
      const barData = [400, 600, 650, 400, 170]
      const bgData = this.contaminateChangeData(barData)

      const option = {
        xAxis: {
          show: false,
          type: 'value',
          data: []
        },
        yAxis: {
          type: 'category',
          data: ['企业总数', '废水企业', '废气企业', '铅污染', '泵污染'],
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
            color: '#ffffff',
            fontSize: this.$chartsSize(17)
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
                    return barData[i] + '家'
                  }
                }
              },
              show: true,
              position: 'right',
              fontSize: this.$chartsSize(15),
              color: '#66BBF3',
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
                color: '#fff',
                fontSize: 120
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

      this.myChart4 = myChartsItem(this.myChart4, '#contaminate_charts', option)
    },

    // 企业污染排放-----背景层数据修改
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
.child_left_box {
  padding-left: vw(20);
  width: vw(500);
  height: vh($designHeight);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    padding-top: vh(25);
    display: flex;
    align-items: center;
  }
}

.item {
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

      &_title {
        font-size: vw(17);
        color: #8ab3d3;
        text-align: center;
      }
      &_num {
        text-align: center;
        color: #31a7ff;
      }
      &_num span:nth-child(1) {
        font-size: vw(30);
        font-weight: 600;
      }
    }
  }
  &_title::before {
    content: '';
    display: inline-block;
    width: vw(3);
    height: vh(10);
    background: #31a7ff;
    margin-right: vw(6);
  }
}

#emphasis_charts_left {
  width: vw(250);
  height: vh(140);
  // width: 100%;
  // height: 80%;
}
#emphasis_charts_right {
  width: vw(250);
  height: vh(140);
  // width: 100%;
  // height: 80%;
}
#distribution_charts {
  width: vw(420);
  height: vh(300);
  // width: 100%;
  // height: 100%;
}
#contaminate_charts {
  width: vw(420);
  height: vh(300);
  // width: 100%;
  // height: 80%;
}
</style>
