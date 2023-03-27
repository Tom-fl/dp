<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-24 11:14:56
 * @LastEditTime: 2023-03-15 17:32:24
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\economy\child\ChildRight.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childright_box">
    <section class="top">
      <h5>销售目标情况</h5>
      <div class="top_content">
        <div v-for="item in salesList" :key="item.id" class="item">
          <div>
            <img :src="item.img" alt="" />
          </div>
          <div>
            <p>{{ item.title }}</p>
            <p>{{ item.value }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom">
      <div id="chart_map"></div>
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

import '@/utils/maps/globalJSON.js' // 世界地图数据
import { globalMap } from '@/utils/maps/globalMap.js' // 世界地图数据

export default {
  name: 'ChildRight',
  data() {
    return {
      salesList: [
        {
          id: 1,
          title: '完成交易额',
          value: '3112.00亿',
          img: require('@/assets/img/economy/right1.svg')
        },
        {
          id: 2,
          title: '目标交易额',
          value: '9812.00亿',
          img: require('@/assets/img/economy/right2.svg')
        },
        {
          id: 3,
          title: '完成出货数',
          value: '12312件',
          img: require('@/assets/img/economy/right3.svg')
        },
        {
          id: 4,
          title: '目标出货数',
          value: '87877812件',
          img: require('@/assets/img/economy/right4.svg')
        }
      ],
      chartMap: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initMap])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initMap])

      myChartsScree([this.chartMap])
    },
    initMap() {
      const data_tmp = [
        { name: '中国', value: 199 },
        { name: '印度', value: 42 },
        { name: '韩国', value: 102 },
        { name: '日本', value: 81 }
      ]

      const convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = globalMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      const option = {
        title: {
          bottom: 0,
          text: '世界流量统计',
          x: 'center',
          textStyle: {
            color: '#fff',
            fontSize: this.$chartsSize(18)
          }
        },
        geo: {
          map: 'world',
          zoom: 1,
          show: true,
          roam: true,
          emphasis: {
            show: true,
            areaColor: '#050D3B', // 悬浮区背景
            itemStyle: {
              areaColor: '#3a7fd5',
              borderColor: '#0a53e9', // 线
              shadowColor: '#092f8f', // 外发光
              shadowBlur: 40
            }
          },
          // 地图板块的颜色
          itemStyle: {
            areaColor: '#1267E3',
            borderColor: '#000',
            borderWidth: 0.2
          }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
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
            roam: true,
            animation: false,
            data: data_tmp
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data_tmp),
            symbolSize: 5,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            emphasis: {
              show: true,
              label: {
                position: 'right',
                show: true, // 是否显示地名
                formatter: function (params) {
                  for (let i = 0; i < data_tmp.length; i++) {
                    if (params.dataIndex === i) {
                      return data_tmp[i].name + ' ' + data_tmp[i].value
                    }
                  }
                }
              }
            },
            itemStyle: {
              color: '#F4E925',
              shadowBlur: 10,
              shadowColor: '#05C3F9'
            },
            zlevel: 1
          }
        ]
      }

      this.chartMap = myChartsItem(this.chartMap, '#chart_map', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childright_box {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 60%;
    h5 {
      width: 100%;
      height: 10%;
      padding: 0;
      margin: 0;
      color: #29ffe6;
      display: flex;
      align-items: center;
      font-size: vw(20);
    }
    .top_content {
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .item {
        width: 100%;
        height: 22%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        div:nth-child(1) {
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          img {
            width: vw(65);
            height: vh(65);
          }
        }
        div:nth-child(2) {
          width: 45%;
          height: 90%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background: #0c4575;
          p {
            padding: 0;
            margin: 0;
          }
          p:nth-child(1) {
            font-size: vw(15);
          }
          p:nth-child(2) {
            font-size: vw(25);
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 40%;
  }
}

#chart_map {
  width: 100%;
  height: 100%;
}
</style>
