<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-14 18:37:48
 * @LastEditTime: 2023-03-15 09:07:17
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\hydrogeological\Hydrogeological.vue
 * @Environment: Win 10
 * @Description:  水质情况实时监测预警系统
-->
<template>
  <div class="box">
    <div class="box_left">
      <child-left />
    </div>
    <div class="box_center">
      <div id="china"></div>
      <div class="box_center_cont">
        <child-center />
      </div>
    </div>
    <div class="box_right">
      <child-right />
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

import '@/utils/maps/china.js' // 中国地图
// eslint-disable-next-line
import { geoCoordMap } from '@/utils/maps/geoMap' // 坐标

import ChildLeft from './child/ChildLeft.vue'
import ChildRight from './child/ChildRight.vue'
import ChildCenter from './child/ChildCenter.vue'

export default {
  name: 'Hydrogeological',
  components: { ChildLeft, ChildRight, ChildCenter },
  data() {
    return {
      chartChina: null
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

      myChartsScree([this.chartChina])
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
            right: '10%',
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
          layoutCenter: ['50%', '50%'],
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
            layoutCenter: ['50%', '50%'], // 地图位置
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

          //
          // {
          //   type: "scatter",
          //   coordinateSystem: "geo",
          //   symbol: "pin",
          //   symbolSize: [45, 45],
          //   label: {
          //     show: true,
          //     color: "#fff",
          //     formatter(val) {
          //       return val.data.value[2];
          //     },
          //   },
          //   itemStyle: {
          //     color: "#D8BC37", //标志颜色
          //   },
          //   data: data,
          // },
        ]
      }

      this.chartChina = myChartsItem(this.chartChina, '#china', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: vw($designWidth);
  height: vh($designHeight);
  overflow: hidden;
  background: url('../../assets/img/hydrogeological/hydrogeological_bg.jpg') 50% 50% / 100% 100%
    no-repeat;
  display: flex;
  &_left {
    width: vw(480);
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  &_center {
    width: vw(960);
    height: 100%;
    #china {
      height: vh(864);
    }
    &_cont {
      height: vh(216);
      display: flex;
    }
  }
  &_right {
    width: vw(480);
    height: 100%;
    color: #fff;
    overflow-y: auto;
  }
}
</style>
