<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-27 18:46:05
 * @LastEditTime: 2023-03-16 11:28:04
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childleft_box">
    <section class="item">
      <div class="title">
        <h5>{{ realTraffic.title }}</h5>
        <p>{{ realTraffic.en }}</p>
      </div>
      <div class="charts_wrap">
        <div v-for="item in realTraffic.data" :key="item.id">
          <p><img :src="realTraffic.img" alt="" /></p>
          <p>
            <span>{{ item.text }}</span>
            <span>{{ item.val }}</span>
          </p>
        </div>
      </div>
    </section>
    <section class="item">
      <div class="title">
        <h5>{{ bayonentTraffic.title }}</h5>
        <p>{{ bayonentTraffic.en }}</p>
      </div>
      <div class="charts_wrap">
        <div id="chart_bayonent"></div>
      </div>
    </section>
    <section class="item">
      <div class="title">
        <h5>{{ parkingData.title }}</h5>
        <p>{{ parkingData.en }}</p>
      </div>
      <div class="charts_wrap">
        <el-table :data="tableList" style="width: 100%; background: none" height="100%">
          <el-table-column prop="name" label="停车场名称" width="100" />
          <el-table-column prop="used" label="已使用" width="60" />
          <el-table-column prop="unused" label="未使用" width="60" />
          <el-table-column prop="proportion" label="使用占比" width="180">
            <template slot-scope="scope">
              <div class="progress_box">
                <div class="progress">
                  <el-progress
                    :show-text="false"
                    :color="scope.row.color"
                    :percentage="scope.row.proportion"
                    define-back-color="#3C3356"
                    :stroke-width="26"
                  />
                </div>
                <p :style="`color: ${scope.row.color}`">{{ scope.row.proportion }}%</p>
              </div>
            </template>
          </el-table-column>
        </el-table>
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
      realTraffic: {
        title: '实时车流量',
        en: 'Real-time traffic',
        img: require('@/assets/img/tourismService/left.svg'),
        data: [
          { id: 1, text: '今日到访', val: '131233' },
          { id: 2, text: '今日返程', val: '131233' }
        ]
      },
      bayonentTraffic: {
        title: '各卡口车流量',
        en: 'The bayonent traffic'
      },
      parkingData: {
        title: '停车场数据',
        en: 'The parking lot data'
      },

      tableList: [
        {
          id: 1,
          name: '诺水河停车场',
          used: '2200',
          unused: '12',
          proportion: 20,
          color: '#D9004F'
        },
        {
          id: 2,
          name: '天碰停车',
          used: '1100',
          unused: '32',
          proportion: 50,
          color: '#D9004F'
        },
        {
          id: 3,
          name: '河停车场',
          used: '2200',
          unused: '12',
          proportion: 20,
          color: '#D9004F'
        },
        {
          id: 4,
          name: '诺水',
          used: '2200',
          unused: '12',
          proportion: 70,
          color: '#FFB409'
        },
        {
          id: 5,
          name: '水',
          used: '2200',
          unused: '12',
          proportion: 70,
          color: '#00BE8B'
        }
      ],
      chartBayonent: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initChartBayonent])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initChartBayonent])

      myChartsScree([this.chartBayonent])
    },
    initChartBayonent() {
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
          data: ['到访', '返程'],
          icon: 'rect',
          itemWidth: 15,
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
          bottom: '0%',
          containLabel: true
        },
        dataset: {
          source: [
            ['product', '到访', '返程'],
            ['卡1', 13, 45, 13],
            ['卡2', 23, 33, 25],
            ['卡3', 36, 25, 32],
            ['卡4', 42, 13, 49]
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.647058823529412)',
            fontSize: this.$chartsSize(15)
          }
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: '#27203e'
              }
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.647058823529412)',
              fontSize: this.$chartsSize(15)
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(3, 178, 209, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(151, 5, 252, 1)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          },
          {
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(12, 184, 136, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(231, 153, 17, 1)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.chartBayonent = myChartsItem(this.chartBayonent, '#chart_bayonent', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childleft_box {
  padding-left: 3%;
  width: 95%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;

  .item {
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      width: 100%;
      height: 15%;
      p {
        font-size: vw(13);
      }
    }
    .charts_wrap {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: space-evenly;
      div {
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        p:nth-child(1) {
          width: 70%;
          height: 80%;
        }
        p:nth-child(2) {
          width: 75%;
          height: 15%;
        }
        p {
          font-size: vw(15);
          display: flex;
          justify-content: space-between;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: vw(1) !important;
  height: vh(1) !important;
}
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: vw(1);
}

::v-deep .el-table__header {
  width: 100% !important;
  height: 100%;
  thead {
    tr {
      background: none;
      th {
        background: none;
        color: rgba(255, 255, 255, 0.4);
        font-size: vw(15);
      }
    }
  }
}

::v-deep .el-table__body {
  width: 100% !important;
  height: 100%;
  tr:hover > td {
    background-color: rgba(255, 255, 255, 0.4) !important;
  }
  .el-table__row {
    background: none;
    font-size: vw(15);
    color: #fff;
  }
}

.progress_box {
  width: 75% !important;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  .progress {
    width: 50% !important;
    height: 100% !important;
  }
  p {
    width: 45% !important;
    height: 100% !important;
  }
}
::v-deep .el-progress-bar__outer {
  height: vh(10) !important;
  border-radius: vw(1) !important;
  .el-progress-bar__inner {
    border-radius: vw(1) !important;
  }
}

#chart_bayonent {
  width: 100%;
  height: 100%;
}
#chart_parking {
  width: 100%;
  height: 100%;
}
</style>
