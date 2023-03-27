<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-28 19:01:22
 * @LastEditTime: 2023-03-16 10:43:04
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\childCenter\ChildCenterBottom.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="child_center_bottom_box">
    <section class="left">
      <div class="title">
        <h5>门票销售</h5>
        <p>Ticket sales</p>
      </div>
      <div id="charts_hotel"></div>
      <div class="list">
        <div v-for="item in hotelList" :key="item.id" class="item">
          <div class="item_title">
            <p>{{ item.name }}</p>
            <p>{{ item.proportion }}%</p>
          </div>
          <div class="progress">
            <el-progress
              :percentage="item.proportion"
              :show-text="false"
              define-back-color="#3C3356"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="right">
      <div class="title">
        <h5>实时酒店入住率</h5>
        <p>Hotel occupancy in real time</p>
      </div>
      <div class="content">
        <div id="charts_text"></div>
        <div class="text_list">
          <div v-for="item in textList.arr" :key="item.id"></div>
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
  name: 'ChildCenterBottom',
  data() {
    return {
      hotelList: [
        { id: 1, name: '诺水河', proportion: 40 },
        { id: 2, name: '天盆', proportion: 30 },
        { id: 3, name: '王平列土木qq', proportion: 60 },
        { id: 4, name: '巴山', proportion: 80 }
      ],
      textList: {
        increaseImg: require('@/assets/img/tourismService/center.svg'),
        decreaseImg: require('@/assets/img/tourismService/center2.svg'),
        arr: [
          {
            id: 1,
            title: '今日酒店入住率',
            proportion: '12%',
            isAdd: true,
            increaseOrDecreaseTitle: '环比增长',
            increaseOrDecrease: '12%'
          },
          {
            id: 2,
            title: '昨日酒店入住率',
            proportion: '8.6%',
            isAdd: true,
            increaseOrDecreaseTitle: '环比增长',
            increaseOrDecrease: '8.6%'
          },
          {
            id: 3,
            title: '去年同期酒店总入住率',
            proportion: '12%',
            isAdd: false,
            increaseOrDecreaseTitle: '环比下降',
            increaseOrDecrease: '12%'
          }
        ]
      },
      chartsHotel: null,
      chartsText: null
    }
  },
  mounted() {
    windowAddSize(this.screenAdatper)
    myChartsCall([this.initChartsHotel, this.initChartsText])
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },

  methods: {
    screenAdatper() {
      myChartsCall([this.initChartsHotel, this.initChartsText])

      myChartsScree([this.chartsHotel, this.chartsText])
    },

    initChartsHotel() {
      const option = {
        title: {
          text: '销售数量:张',
          textStyle: {
            color: '#fff',
            fontSize: this.$chartsSize(15),
            lineHeight: 60
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销售额', '销售数量'],
          right: '0%',
          textStyle: {
            color: '#fff',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          top: '30%',
          bottom: '20%'
          // containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            fontSize: this.$chartsSize(15)
          },
          data: ['9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: '#27203e'
            }
          },
          axisLabel: {
            fontSize: this.$chartsSize(15)
          }
        },
        series: [
          {
            name: '销售额',
            type: 'line',
            stack: 'Total',
            data: [12, 12, 11, 32, 90, 23, 20, 30, 13, 40, 40, 30],
            color: '#9505FF'
          },
          {
            name: '销售数量',
            type: 'line',
            stack: 'Total',
            data: [10, 12, 19, 34, 11, 30, 11, 13, 40, 40, 30],
            color: '#05B3D6'
          }
        ]
      }

      this.chartsHotel = myChartsItem(this.chartsHotel, '#charts_hotel', option)
    },
    initChartsText() {
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          icon: 'circle',
          width: '100%',
          height: '10%',
          bottom: '5%',
          left: 'center',
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            color: '#fff',
            fontSize: this.$chartsSize(15)
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '90%'],
            bottom: '20%',
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inner',
              fontSize: this.$chartsSize(15),
              color: '#fff',
              formatter: '{c}'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: this.$chartsSize(15),
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '海珠琶洲大酒店1' },
              { value: 735, name: '海珠琶洲大酒店2' },
              { value: 580, name: '海珠琶洲大酒店3' },
              { value: 484, name: '海珠琶洲大酒店4' },
              { value: 300, name: '海珠琶洲大酒店5' }
            ]
          }
        ]
      }

      this.chartsText = myChartsItem(this.chartsText, '#charts_text', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.child_center_bottom_box {
  width: 100%;
  height: 100%;
  display: flex;
  p,
  h5 {
    margin: 0;
    padding: 0;
  }
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 10%;
    }
    .list {
      width: 100%;
      height: 20%;
      display: flex;
      .item {
        flex: 1;
        padding-right: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &_title {
          font-size: vw(15);
          display: flex;
          justify-content: space-between;
          p:nth-child(2) {
            color: rgba(217, 0, 79, 0.647058823529412);
          }
        }
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
      .text_list {
      }
    }
  }
}

::v-deep .el-progress-bar__outer {
  height: vw(10) !important;
  border-radius: vw(1) !important;
  .el-progress-bar__inner {
    border-radius: vw(1) !important;
  }
}

#charts_hotel {
  width: 100%;
  height: 90%;
}

#charts_text {
  width: 100%;
  height: 100%;
}
</style>
