<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-27 18:46:16
 * @LastEditTime: 2023-03-16 11:41:38
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\ChildRight.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childright_box">
    <section class="item">
      <div class="title">
        <h5>应急分析</h5>
        <p>Contingency analysis</p>
      </div>
      <div class="content">
        <div class="content_top">
          <div v-for="item in contingencyList" :key="item.id">
            <p>{{ item.name }}</p>
            <p>{{ item.val }}</p>
          </div>
        </div>
        <div id="charts_contingency"></div>
      </div>
    </section>
    <section class="item">
      <div class="title">
        <h5>实时环境监测</h5>
        <p>Environmrnt monitoring</p>
      </div>
      <div class="content">
        <div class="left">
          <p>{{ environmrntData.num }}</p>
          <p>
            <img :src="environmrntData.pollutionIcon" alt="" />
            <span>{{ environmrntData.pollution }}</span>
          </p>
          <p>
            <img :src="environmrntData.windIcon" alt="" />
            <span>{{ environmrntData.wind }}</span>
          </p>
          <p>
            <img :src="environmrntData.humidityIcon" alt="" />
            <span>{{ environmrntData.humidity }}</span>
          </p>
          <p>
            <img :src="environmrntData.pressureIcon" alt="" />
            <span>{{ environmrntData.pressure }}</span>
          </p>
          <p>
            <img :src="environmrntData.stateIcon" alt="" />
            <span>{{ environmrntData.state }}</span>
          </p>
        </div>
        <div class="right">
          <div v-for="item in airQualityData" :key="item.id" class="air_quality_item">
            <div>
              <p>
                <span>{{ item.chemical }}</span>
                <span>{{ item.name }}</span>
              </p>
              <p>
                <span>{{ item.val }}</span>
              </p>
            </div>
            <div :style="`background:${item.color}`"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="item">
      <div class="title">
        <h5>搜素热度排名</h5>
        <p>Heat search rankings</p>
      </div>
      <div class="content">
        <el-table :data="tableList" style="width: 100%; background: none" height="100%">
          <el-table-column prop="name" label="关键词" width="100" />
          <el-table-column prop="used" label="PC端" width="60" />
          <el-table-column prop="unused" label="手机" width="60" />
          <el-table-column prop="proportion" label="热度" width="180">
            <template slot-scope="scope">
              <div v-for="i in heatMax" :key="i">
                <span v-show="scope.row.heat == i">
                  <img v-for="j in i" :key="j" :src="heat1" alt="" width="12%" height="12%" />
                  <img
                    v-for="j in heatMax - i"
                    :key="j * 10"
                    :src="heat2"
                    alt=""
                    width="12%"
                    height="12%"
                  />
                </span>
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
  name: 'ChildRight',
  data() {
    return {
      contingencyList: [
        { id: 1, name: '呼入数量', val: '1312' },
        { id: 2, name: '呼出数量', val: '1312' }
      ],
      environmrntData: {
        num: '135',
        pollution: '轻度污染',
        pollutionIcon: require('@/assets/img/tourismService/right1.svg'),
        wind: '西南风二级',
        windIcon: require('@/assets/img/tourismService/right2.png'),
        humidity: '湿度25%',
        humidityIcon: require('@/assets/img/tourismService/right3.png'),
        pressure: '气压1025pa',
        pressureIcon: require('@/assets/img/tourismService/right4.png'),
        state: '良',
        stateIcon: require('@/assets/img/tourismService/right5.png')
      },
      airQualityData: [
        {
          id: 1,
          chemical: 'PM2.5',
          name: '细颗粒',
          val: '222',
          color: '#FBA224'
        },
        {
          id: 2,
          chemical: 'PM10',
          name: '可吸入颗粒',
          val: '22',
          color: '#AAEA00'
        },
        {
          id: 3,
          chemical: 'CO2',
          name: '二氧化碳',
          val: '41',
          color: '#A473E9'
        },
        {
          id: 4,
          chemical: 'SO3',
          name: '二氧化硫',
          val: '53',
          color: '#EF3063'
        }
      ],
      tableList: [
        {
          id: 1,
          name: '光雾山',
          used: '2200',
          unused: '12',
          proportion: 20,
          color: '#D9004F',
          heat: 1
        },
        {
          id: 2,
          name: '桃园景区',
          used: '1100',
          unused: '32',
          proportion: 50,
          color: '#D9004F',
          heat: 2
        },
        {
          id: 3,
          name: '大坝景区',
          used: '2200',
          unused: '12',
          proportion: 20,
          color: '#D9004F',
          heat: 3
        },
        {
          id: 4,
          name: '天泉湖',
          used: '2200',
          unused: '12',
          proportion: 70,
          color: '#FFB409',
          heat: 4
        },
        {
          id: 5,
          name: '小巫峡',
          used: '2200',
          unused: '12',
          proportion: 70,
          color: '#00BE8B',
          heat: 5
        }
      ],
      heatMax: 5,
      heat1: require('@/assets/img/tourismService/heat1.svg'),
      heat2: require('@/assets/img/tourismService/heat2.svg'),

      chartsContingency: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initChartsContingency])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initChartsContingency])

      myChartsScree([this.chartsContingency])
    },
    initChartsContingency() {
      const list = [
        {
          name: '1月',
          value: 220
        },
        {
          name: '6月',
          value: 191
        },
        {
          value: 191,
          name: '7月'
        },
        {
          name: '8月',
          value: 234,
          predict: true
        },
        {
          name: '12月',
          value: 210,
          predict: true
        }
      ]

      const data1 = []
      const data2 = []

      list.forEach((item) => {
        if (item.predict) {
          data2.push([item.name, item.value])
        } else {
          data1.push([item.name, item.value])
        }
      })

      const labels = list.map((m) => {
        return m.name
      })

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
          data: ['呼入', '呼出'],
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
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            fontSize: this.$chartsSize(15)
          },
          data: labels
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
              fontSize: this.$chartsSize(15)
            }
          }
        ],
        series: [
          {
            name: '呼入',
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
                    color: '#0DA6D4' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#9409FB' // 100% 处的颜色
                  }
                ],
                false
              )
            },
            data: data1
          },
          {
            name: '呼出',
            type: 'bar',
            barGap: '-100%',
            lineStyle: {
              type: 'dashed'
            },
            symbol: 'none',
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
                    color: '#22B47B' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#D59C1B' // 100% 处的颜色
                  }
                ],
                false
              )
            },
            data: data2
          }
        ]
      }

      this.chartsContingency = myChartsItem(this.chartsContingency, '#charts_contingency', option)
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

  .item {
    width: 100%;
    height: 33%;
    .content {
      width: 100%;
      height: 80%;
    }
    .title {
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: vw(13);
      }
    }
  }

  .item:nth-child(1) {
    display: flex;
    flex-direction: column;
    .content {
      &_top {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-evenly;
        div {
          width: 40%;
          height: 100%;
          background: url('../../../assets/img/tourismService/right.svg') no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p {
            font-size: vw(18);
          }
        }
      }
    }
  }

  .item:nth-child(2) {
    .content {
      display: flex;
      .left {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
          img {
            padding-right: 10%;
          }
          font-size: vw(15);
        }
        p:nth-child(1) {
          color: #05b4d3;
          font-size: vh(35);
        }
      }
      .right {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .air_quality_item {
          flex: 1;
          div {
            font-size: vw(15);
          }
          div:nth-child(1) {
            width: 80%;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          div:nth-child(2) {
            width: 80%;
            height: 5%;
            border-radius: 10%;
          }
        }
      }
    }
  }

  .item:nth-child(3) {
    .content {
      height: 80%;
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

::v-deep .el-table__header-wrapper {
  height: 20% !important;
}
::v-deep .el-table__header {
  width: 100% !important;
  height: 100% !important;
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

#charts_contingency {
  width: 100%;
  height: 80%;
}
</style>
