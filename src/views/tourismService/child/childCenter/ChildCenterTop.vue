<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-28 19:01:07
 * @LastEditTime: 2023-03-16 10:26:02
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\childCenter\ChildCenterTop.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childcenter_top_box">
    <section class="left">
      <section class="top">
        <div class="title">
          <h5>实时流量</h5>
          <div>
            <p>
              <span>{{ dateObj.hour }}</span>
              <span>:</span>
              <span>{{ dateObj.minute }}</span>
              <span>:</span>
              <span>{{ dateObj.second }}</span>
            </p>
          </div>
        </div>
        <div class="num">
          <p v-for="(item, index) in realtimeData.total" :key="index">{{ item }}</p>
          <div>人</div>
        </div>
        <div class="text">
          <p>
            <span>{{ realtimeData.yesterDayTitle }}</span>
            <span>{{ realtimeData.yesterDayVal }}</span>
          </p>
          <p>
            <span>{{ realtimeData.addTitle }}</span>
            <span>{{ realtimeData.addVal }}</span>
          </p>
          <p>
            <img :src="realtimeData.icon" alt="" />
          </p>
        </div>
      </section>
      <section class="center">
        <div class="title">
          <h5>分时游客量</h5>
        </div>
        <div id="charts_hour"></div>
      </section>
      <section class="bottom">
        <div class="title">
          <h5>游客来源</h5>
        </div>
        <div class="progress">
          <div v-for="item in sourceList" :key="item.id" class="item">
            <el-progress
              :stroke-width="15"
              type="circle"
              :percentage="item.value"
              :color="item.color"
            />
            <p class="item_num">
              <span>{{ item.title }}</span>
              <span>{{ item.num }}</span>
            </p>
          </div>
        </div>
      </section>
    </section>
    <section class="right">
      <div id="charts_china"></div>
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

import '@/utils/maps/china.js' // 中国地图
// eslint-disable-next-line
import { geoCoordMap } from '@/utils/maps/geoMap' // 坐标

import initDate from '@/utils/date.js'

export default {
  name: 'ChildCenterTop',
  data() {
    return {
      dateObj: {},

      // 实时流量
      realtimeData: {
        total: '123,3123',
        yesterDayTitle: '昨日游客量',
        yesterDayVal: '363636',
        addTitle: '环比增长',
        addVal: '10%',
        icon: require('@/assets/img/tourismService/center.svg')
      },

      sourceList: [
        {
          id: 1,
          title: '四川',
          value: 20,
          num: '12312',
          color: '#DA0255'
        },
        { id: 2, title: '山东', value: 20, num: '534543', color: '#DFA307' },
        { id: 3, title: '山西', value: 40, num: '4434543', color: '#04C493' }
      ],

      chartsChina: null,
      chartsHour: null
    }
  },
  mounted() {
    this.dateObj = initDate()

    windowAddSize(this.screenAdatper)
    myChartsCall([this.initChartsChina, this.initChartsHour])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initChartsChina, this.initChartsHour])

      myChartsScree([this.chartsChina, this.chartsHour])
    },
    initChartsChina() {
      const data = [
        { name: '北京', value: 22 },
        { name: '天津', value: 88 },
        { name: '上海', value: 66 },
        { name: '重庆', value: 42 },
        { name: '河北', value: 99 },
        { name: '河南', value: 52 },
        { name: '云南', value: 33 },
        { name: '辽宁', value: 22 },
        { name: '黑龙江', value: 22 },
        { name: '湖南', value: 22 },
        { name: '安徽', value: 22 },
        { name: '山东', value: 22 },
        { name: '新疆', value: 22 },
        { name: '江苏', value: 22 },
        { name: '浙江', value: 22 },
        { name: '江西', value: 15 },
        { name: '湖北', value: 33 },
        { name: '广西', value: 22 },
        { name: '甘肃', value: 88 },
        { name: '山西', value: 16 },
        { name: '内蒙古', value: 56 },
        { name: '陕西', value: 33 },
        { name: '吉林', value: 99 },
        { name: '福建', value: 28 },
        { name: '贵州', value: 25 },
        { name: '广东', value: 33 },
        { name: '青海', value: 88 },
        { name: '西藏', value: 25 },
        { name: '四川', value: 45 },
        { name: '宁夏', value: 36 },
        { name: '海南', value: 22 },
        { name: '台湾', value: 22 },
        { name: '香港', value: 22 },
        { name: '澳门', value: 22 }
      ]

      const option = {
        visualMap: [
          {
            type: 'continuous',
            min: 0,
            max: 100,
            right: '10%',
            bottom: '5%',
            text: ['高', '低'],
            textStyle: {
              color: '#ffffff'
            },
            realtime: false,
            calculable: true,
            inRange: {
              symbol: 'diamond',
              color: ['#4599D5', '#184799']
            },
            orient: 'horizontal'
          }
        ],
        series: [
          {
            type: 'map',
            // 点击选择 变黄 变成单选
            // selectedMode: "multiple",
            map: 'china',
            aspectScale: 0.8,
            layoutCenter: ['50%', '50%'], // 地图位置
            layoutSize: '100%',
            zoom: 1, // 当前视角的缩放比例
            roam: true, // 是否开启平游或缩放
            scaleLimit: {
              // 滚轮缩放的极限控制
              min: 1,
              max: 2
            },
            itemStyle: {
              areaColor: '#0c3653',
              borderColor: '#1cccff',
              borderWidth: 0.1
            },
            emphasis: {
              areaColor: '#56b1da',
              label: {
                show: true,
                color: '#fff'
              }
            },
            data: data
          }
        ]
      }

      this.chartsChina = myChartsItem(this.chartsChina, '#charts_china', option)
    },

    initChartsHour() {
      const option = {
        grid: {
          left: '3%',
          right: '5%',
          bottom: '0%',
          top: '15%',
          containLabel: true
        },
        dataset: {
          source: [
            ['8点', 13, 45, 13],
            ['9点', 23, 33, 25],
            ['10点', 36, 25, 32],
            ['12点', 42, 13, 49]
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
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
                    color: '#7207D8' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#CC01D0' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }

      this.chartsHour = myChartsItem(this.chartsHour, '#charts_hour', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childcenter_top_box {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: vw(15);
      }
      .num {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        p {
          background: #03cfd0;
          font-weight: 800;
          font-size: vw(15);
        }
        p,
        div {
          width: 8%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: vw(15);
        }
      }
      .text {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: vw(15);
          img {
            width: 70%;
            height: 40%;
          }
        }
      }
    }
    .center {
      width: 100%;
      height: 35%;
    }
    .bottom {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .title {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
      }
      .progress {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        .item {
          width: 30%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          &_num {
            font-size: vw(15);
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
        }
      }
    }
  }
  .right {
    width: 60%;
    height: 100%;
  }
}

::v-deep .el-progress-circle {
  width: 60% !important;
  height: 60% !important;
  margin-left: 20%;
}
::v-deep .el-progress__text {
  font-size: vw(15) !important;
  color: #fff !important;
  display: flex !important;
  justify-content: center !important;
  width: 60% !important;
  margin-left: 20%;
}
#charts_china {
  width: 100%;
  height: 100%;
}
#charts_hour {
  width: 100%;
  height: 100%;
}
</style>
