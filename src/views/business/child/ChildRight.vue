<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 11:03:27
 * @LastEditTime: 2023-03-16 16:38:43
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\child\ChildRight.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childright_box">
    <header>
      <h5>商圈人群构成</h5>
    </header>
    <main>
      <section class="item sex_item">
        <div class="item_title">性别构成</div>
        <div class="item_content">
          <div v-for="item in sexList" :key="item.id" class="item_content_list">
            <div class="item_content_list_left">
              <p>
                <img :src="item.icon" alt="" />
              </p>
              <p :style="`color:${item.color}`">
                <span>{{ item.sexVal }}</span>
                <span>
                  <b>{{ item.count }}</b>
                  <b>人</b>
                </span>
              </p>
            </div>
            <div class="item_content_list_right">
              <el-progress
                :stroke-width="10"
                type="circle"
                :percentage="item.percentage"
                :color="item.color"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="item">
        <div class="item_title">
          <p>年龄分布</p>
          <p>单位：%</p>
        </div>
        <div class="item_content">
          <div id="age_chart"></div>
        </div>
      </section>
      <section class="item">
        <div class="item_title">
          <p>文化程度</p>
          <p>单位：%</p>
        </div>
        <div class="item_content">
          <div id="culture_chart"></div>
        </div>
      </section>
      <section class="item">
        <div class="item_title">
          <p>月收入占比(千元/月)</p>
          <p>单位：%</p>
        </div>
        <div class="item_content">
          <div id="income_chart"></div>
        </div>
      </section>
    </main>
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
      sexList: [
        {
          id: 0,
          sex: 'MAN',
          sexVal: '男性',
          count: '123213',
          percentage: 50,
          color: '#66BBF9',
          icon: require('@/assets/img/business/right/right1.svg')
        },
        {
          id: 1,
          sex: 'WOMAN',
          sexVal: '女性',
          count: '123213',
          percentage: 30,
          color: '#87F7C7',
          icon: require('@/assets/img/business/right/right2.svg')
        }
      ],
      ageChart: null,
      cultureChart: null,
      incomeChart: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initAgeChart, this.initCultureChart, this.initIncomeChart])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initAgeChart, this.initCultureChart, this.initIncomeChart])

      myChartsScree([this.ageChart, this.cultureChart, this.incomeChart])
    },
    initAgeChart() {
      const barData = [100, 400, 290, 200, 400, 300]
      const bgData = this.changeData(barData)
      const xData = ['19~10', '22~29', '77', '2', '33']

      const option = {
        xAxis: {
          type: 'category',
          data: xData,

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
            fontSize: this.$chartsSize(12)
          }
        },
        yAxis: {
          show: true,
          type: 'value',
          data: [],
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(12)
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
          height: '90%',
          containLabel: true
        },

        series: [
          // 背景
          {
            type: 'bar',
            itemStyle: {
              width: '100%',
              color: 'rgb(68 119 164 / 50%)'
            },
            silent: true,
            barWidth: '30%',
            barGap: '-100%',
            data: bgData
          },

          // 真实数据 柱状图
          {
            type: 'bar',
            barWidth: '30%',
            data: barData,
            itemStyle: {
              // 渐变色
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: '#63B7F5' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#276AA7' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.ageChart = myChartsItem(this.ageChart, '#age_chart', option)
    },
    initCultureChart() {
      const barData = [400, 600, 650, 400, 170]
      const bgData = this.changeData(barData)

      const option = {
        xAxis: {
          show: false,
          type: 'value',
          data: []
        },
        yAxis: {
          type: 'category',
          data: ['本科', '专科', '研究生', '博士以上', '高中以上'],
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
            fontSize: this.$chartsSize(12)
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
              width: '100%',
              color: 'rgb(68 119 164 / 50%)'
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
              fontSize: this.$chartsSize(12),
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
            type: 'bar',
            barWidth: '30%',
            data: barData,
            itemStyle: {
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
                    color: '#63B7F5' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#276AA7' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.cultureChart = myChartsItem(this.cultureChart, '#culture_chart', option)
    },
    initIncomeChart() {
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            fontSize: this.$chartsSize(12)
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: this.$chartsSize(12)
          }
        },
        grid: {
          x: '1%',
          height: '80%',
          bottom: '5%',
          containLabel: true
        },
        series: [
          {
            data: [820, 200, 901, 934, 100, 1330, 800],
            type: 'line',
            smooth: true,
            showSymbol: false,
            color: '#1ac9ff',
            areaStyle: {}
          }
        ]
      }
      this.incomeChart = myChartsItem(this.incomeChart, '#income_chart', option)
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
  padding: 0 3% 0 3%;
  background-color: rgba(0, 0, 0, 0.498039215686275);
  header {
    width: 100%;
    height: 5%;
    h5::before {
      content: '';
      display: inline-block;
      width: vw(3);
      height: vh(15);
      background: #31a7ff;
      margin-right: vh(6);
    }
  }
  main {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      width: 100%;
      height: 22%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item_title {
        width: 100%;
        height: 10%;
        font-size: vw(16);
        padding: 0 5% 0 5%;
        display: flex;
        justify-content: space-between;
      }
      .item_content {
        width: 100%;
        height: 85%;
      }
    }
    .sex_item {
      .item_content {
        display: flex;
        flex-direction: column;
        &_list {
          width: 100%;
          height: 50%;
          display: flex;
          &_left {
            width: 70%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            p:nth-child(1) {
              width: 20%;
              height: 100%;
              img {
                width: 70%;
                height: 70%;
              }
            }
            p:nth-child(2) {
              width: 70%;
              height: 100%;
              display: flex;
              flex-direction: column;
              span:nth-child(1) {
                font-size: vw(15);
              }
              span:nth-child(2) {
                font-size: vw(25);
                b:nth-child(2) {
                  font-weight: normal;
                  font-size: vw(15);
                }
              }
            }
          }
          &_right {
            width: 30%;
            height: 100%;
            display: flex;
            align-items: inherit;
          }
        }
      }
    }
  }
}

::v-deep .el-progress {
  width: 70%;
  height: 70%;
}
::v-deep .el-progress-circle {
  width: 70% !important;
  height: 70% !important;
  // margin-bottom: 15%;
}
::v-deep .el-progress__text {
  font-size: vw(15) !important;
  color: #fff !important;
  display: flex !important;
  justify-content: center !important;
  width: 70% !important;
  // margin-left: 15%;
}

#age_chart {
  width: 100%;
  height: 100%;
}
#culture_chart {
  width: 100%;
  height: 100%;
}
#income_chart {
  width: 100%;
  height: 100%;
}
</style>
