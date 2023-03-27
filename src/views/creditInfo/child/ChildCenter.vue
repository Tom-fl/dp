<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-20 11:32:36
 * @LastEditTime: 2023-03-15 15:51:36
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\creditInfo\child\ChildCenter.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childcenter_box">
    <div class="top">
      <section v-for="item in topList" :key="item.id" class="top_content">
        <div class="top_content_left">
          <div class="circle"></div>
          <img :src="item.img" alt="" />
        </div>
        <div class="top_content_right">
          <p>{{ item.val }}</p>
          <p>{{ item.title }}</p>
        </div>
      </section>
    </div>
    <div class="center">
      <h5 class="cneter_title">全省信用评价概览</h5>
      <div id="shandong_chart"></div>
    </div>
    <div div class="bottom">
      <h5 class="bottom_title">山东省信用评价情况</h5>
      <div class="bottom_content">
        <div id="pie_chart"></div>
        <div class="pie_list">
          <table>
            <thead>
              <th>信用等级</th>
              <th>数量</th>
              <th>占比</th>
            </thead>
            <tbody>
              <tr v-for="item in pieList.chartData" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
                <td>{{ item.proportion }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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

import '@/utils/maps/shandong.js'
import base64 from '@/assets/img/creditInfo/center4'

export default {
  name: 'ChildCenter',
  data() {
    return {
      topBg: require('@/assets/img/creditInfo/circle.png'),
      topList: [
        {
          id: 1,
          title: '评级对象总数',
          val: '12300',
          img: require('@/assets/img/creditInfo/center1.svg')
        },
        {
          id: 2,
          title: '不良信息总数',
          val: '19900',
          img: require('@/assets/img/creditInfo/center2.svg')
        },
        {
          id: 3,
          title: '联合奖惩总数',
          val: '18800',
          img: require('@/assets/img/creditInfo/center3.svg')
        }
      ],
      pieList: {
        chartData: [
          { value: 1048, name: 'A', proportion: '3%' },
          { value: 735, name: 'B', proportion: '3%' },
          { value: 580, name: 'C', proportion: '3%' },
          { value: 484, name: 'D', proportion: '3%' },
          { value: 300, name: 'E', proportion: '3%' },
          { value: 300, name: 'F', proportion: '3%' },
          { value: 300, name: 'A+', proportion: '3%' },
          { value: 300, name: 'A-', proportion: '3%' }
        ]
      },

      shandongChart: null,
      pieChart: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initCharts, this.initPieChart])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([this.initCharts, this.initPieChart])

      myChartsScree([this.shandongChart, this.pieChart])
    },
    initCharts() {
      const geoCoordMap = {
        济南市: [117.121225, 36.66466],
        菏泽市: [115.480656, 35.23375],
        济宁市: [116.59, 35.38],
        德州市: [116.39, 37.45],
        聊城市: [115.97, 36.45],
        泰安市: [117.13, 36.18],
        临沂市: [118.35, 35.05],
        淄博市: [118.05, 36.78],
        枣庄市: [117.57, 34.86],
        滨州市: [118.03, 37.36],
        潍坊市: [119.1, 36.62],
        东营市: [118.49, 37.46],
        青岛市: [120.3, 36.62],
        烟台市: [120.9, 37.32],
        威海市: [122.1, 37.2],
        日照市: [119.1, 35.62],
        莱芜市: [117.7, 36.28]
      }
      const data = [
        { name: '济南市', value: 390 },
        { name: '菏泽市', value: 158 },
        { name: '德州市', value: 252 },
        { name: '聊城市', value: 99 },
        { name: '泰安市', value: 189 },
        { name: '临沂市', value: 52 },
        { name: '淄博市', value: 158 },
        { name: '枣庄市', value: 152 },
        { name: '滨州市', value: 189 },
        { name: '潍坊市', value: 160 },
        { name: '东营市', value: 80 },
        { name: '青岛市', value: 180 },
        { name: '烟台市', value: 190 },
        { name: '威海市', value: 290 },
        { name: '日照市', value: 190 },
        { name: '济宁市', value: 190 },
        { name: '莱芜市', value: 290 }
      ]

      const convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
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
        // 鼠标放上提示文字
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (typeof params.value[2] === 'undefined') {
              return params.name + ' : ' + params.value
            } else {
              return params.name + ' : ' + params.value[2]
            }
          }
        },
        // 地图坐标系组件
        geo: {
          show: true,
          map: 'shandong',
          aspectScale: 1.1, // 地图的长宽比
          emphasis: {
            show: false,
            label: {
              show: false
            }
          },
          roam: true,
          // 地图板块的颜色
          itemStyle: {
            areaColor: '#04429E',
            borderColor: '#000',
            borderWidth: 0.2
          }
        },
        series: [
          {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10
            },
            emphasis: {
              show: true,
              label: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            }
          },
          {
            type: 'map',
            map: 'shandong',
            geoIndex: 0,
            showLegendSymbol: false, // 存在legend时显示
            roam: true,
            animation: false,
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
          },
          // 落点  散点图 往外扩散 效果 (小圆点)
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 5,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true,
              fontSize: this.$chartsSize(15),
              color: '#fff'
            },
            itemStyle: {
              color: '#F4E925',
              shadowBlur: 10,
              shadowColor: '#05C3F9'
            },
            zlevel: 1
          },

          // 落点 显示数字配置 (气泡)
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: base64.val,
            symbolSize: [60, 30],
            symbolOffset: ['0%', '-90%'],
            label: {
              show: true,
              color: '#fff',
              fontSize: this.$chartsSize(15),
              fontWeight: 600,
              formatter(value) {
                return value.data.value[2]
              }
            },
            itemStyle: {
              color: '#1683AB' // 标志颜色
            },
            zlevel: 6,
            data: convertData(data)
          }
        ]
      }

      this.shandongChart = myChartsItem(this.shandongChart, '#shandong_chart', option)
    },
    initPieChart() {
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '10%',
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: this.$chartsSize(15)
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            width: '100%',
            height: '90%',
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.pieList.chartData
          }
        ]
      }

      this.pieChart = myChartsItem(this.pieChart, '#pie_chart', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.childcenter_box {
  width: 100%;
  height: 100%;

  .top {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    &_content {
      width: 30%;
      display: flex;
      color: #fff;
      &_left {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .circle {
          width: vw(100);
          height: vh(100);
          position: absolute;
          background: url('../../../assets/img/creditInfo/circle.png') no-repeat vw(10) vh(3);
          background-size: 80%;
        }
        img {
          width: 60%;
          height: 60%;
          // padding-right: 25%;
        }
      }
      &_right {
        p:nth-child(1) {
          color: #4df5b0;
          font-weight: 700;
          font-size: vw(30);
        }
        p:nth-child(2) {
          font-size: vw(18);
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;

    .bottom_content {
      width: 100%;
      height: 90%;
      padding-top: vh(10);
      display: flex;
      .pie_list {
        width: 50%;
        display: flex;
        justify-content: center;

        table {
          width: 90%;
          thead {
            background: #0654be;
            th {
              color: #fff;
              font-size: vw(15);
            }
          }
          tbody {
            tr {
              td {
                color: #00daff;
                font-size: vw(15);
                text-align: center;
              }
              td:nth-child(1) {
                color: #fff000;
              }
            }
            tr:nth-child(even) {
              background: #062a68;
            }
          }
        }
      }
    }
    .bottom_title {
      width: 100%;
      // height: 10%;
      height: auto;
      text-align: center;
      background: url('../../../assets/img/creditInfo/creditInfo_title_bg.png') no-repeat 50% 99%;
      color: #fff;
      background-size: 60% 1%;
    }
  }
  .center {
    width: 100%;
    height: 50%;
    .cneter_title {
      width: 100%;
      // height: 10%;
      height: auto;
      text-align: center;
      background: url('../../../assets/img/creditInfo/creditInfo_title_bg.png') no-repeat 50% 99%;
      color: #fff;
      background-size: 60% 1%;
    }
  }

  #shandong_chart {
    width: 100%;
    height: 90%;
  }
  #pie_chart {
    width: 50%;
    height: 100%;
  }
}
</style>
