<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-22 19:07:09
 * @LastEditTime: 2023-03-15 16:37:18
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\parking\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childleft_box">
    <div class="childleft_box_top">
      <section
        v-for="item in statementList"
        :key="item.id"
        :style="`color:${item.color}`"
        class="item"
      >
        <div class="item_title">
          <p>{{ item.title }}</p>
        </div>
        <div class="item_content">
          <div>
            <p>
              <span>{{ item.dayName1 }}</span>
              <span>{{ item.dayValProportion1 }}</span>
            </p>
            <p class="nums">
              <span v-for="(j, k) in item.dayVal1" :key="k" :style="`background:${item.bgColor}`">
                {{ j }}
              </span>
              <b>{{ item.after1 }}</b>
            </p>
          </div>

          <div>
            <p>
              <span>{{ item.dayName2 }}</span>
              <span>{{ item.dayValProportion2 }}</span>
            </p>
            <p class="nums">
              <span v-for="(j, k) in item.dayVal2" :key="k" :style="`background:${item.bgColor}`">
                {{ j }}
              </span>
              <b>{{ item.after2 }}</b>
            </p>
          </div>
        </div>
      </section>
    </div>
    <div id="china"></div>
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
// eslint-disable-next-line no-unused-vars
import { geoCoordMap } from '@/utils/maps/geoMap' // 坐标

export default {
  name: 'ChildLeft',
  data() {
    return {
      statementList: [
        {
          id: 0,
          color: '#07A6FF',
          bgColor: '#02447A',
          title: '车辆出入流水',
          dayName1: '今日入场',
          dayVal1: '221,322',
          dayValProportion1: '环比 +12%',
          after2: '辆',
          dayName2: '今日出场',
          dayVal2: '123,456',
          after1: '辆',
          dayValProportion2: '环比 +12%'
        },
        {
          id: 1,
          color: '#00FFFC',
          bgColor: '#006885',
          title: '车辆出入流水',
          dayName1: '今日订单',
          dayVal1: '221,322',
          dayValProportion1: '环比 +12%',
          after1: '笔',
          dayName2: '今日收入',
          dayVal2: '123,456',
          after2: '万元',
          dayValProportion2: '环比 +12%'
        }
      ],
      chinaChart: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initCharts])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initCharts])

      myChartsScree([this.chinaChart])
    },
    initCharts() {
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
        // 视觉映射
        visualMap: [
          {
            type: 'continuous',
            min: 0,
            max: 100,
            left: '5%',
            bottom: '5%',
            text: ['高', '低'],
            textStyle: {
              color: '#ffffff'
            },
            realtime: false,
            calculable: true,
            inRange: {
              symbol: 'diamond',
              color: ['#0B517C', '#01BBEE']
            }
          }
        ],
        geo: {
          map: 'china',
          aspectScale: 0.8,
          layoutCenter: ['50%', '45%'],
          layoutSize: '100%',
          itemStyle: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 1200,
              x2: 1000,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#152E6E' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0673AD' // 50% 处的颜色
                }
              ],
              global: true // 缺省为 false
            },
            // 添加阴影
            shadowColor: '#0f5d9d',
            shadowOffsetX: 0,
            shadowOffsetY: 15,
            opacity: 1
          },
          emphasis: {
            areaColor: '#0f5d9d'
          },
          regions: [
            {
              name: '南海诸岛',
              itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',
                borderColor: 'rgba(0, 10, 52, 1)',
                opacity: 0,
                label: {
                  show: false,
                  color: '#009cc9'
                }
              },
              label: {
                show: false,
                color: '#FFFFFF',
                fontSize: 12
              }
            }
          ]
        },
        series: [
          {
            type: 'map',
            // 点击选择 变黄 变成单选
            // selectedMode: 'multiple',
            map: 'china',
            aspectScale: 0.8,
            layoutCenter: ['50%', '45%'], // 地图位置
            layoutSize: '100%',
            zoom: 1, // 当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
              // 滚轮缩放的极限控制
              min: 1,
              max: 2
            },
            label: {
              show: true,
              color: '#FFFFFF',
              fontSize: 12
            },
            itemStyle: {
              areaColor: '#0c3653',
              borderColor: '#1cccff',
              borderWidth: 1.8
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

      this.chinaChart = myChartsItem(this.chinaChart, '#china', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childleft_box {
  width: 100%;
  height: 100%;
  &_top {
    height: 35%;
    padding-top: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      &_title {
        width: 100%;
        height: 20%;
        font-size: vw(18);
        background: url('../../../assets/img/parking/left1.svg') no-repeat 0% 60%;
        background-size: 100%;
        p {
          padding: 0;
          margin: 0;
          background: url('../../../assets/img/parking/left2.svg') no-repeat 100% 60%;
        }
      }
      &_content {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        div {
          width: 100%;
          height: 45%;
          p:nth-child(1) {
            width: 100%;
            height: 30%;
            font-size: vw(15);
            display: flex;
            justify-content: space-between;
          }
          p:nth-child(2) {
            height: 70%;
          }
          .nums {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              display: inline-block;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 10%;
              height: 100%;
              font-size: vw(25);
              color: #fff;
              font-weight: 800;
              border-radius: 10%;
            }
            b {
              font-size: vw(15);
            }
          }
        }
      }
    }
  }
}
#china {
  width: 100%;
  height: 65%;
}
</style>
