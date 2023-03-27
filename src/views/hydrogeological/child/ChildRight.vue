<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-15 20:12:27
 * @LastEditTime: 2023-03-15 10:50:56
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\hydrogeological\child\ChildRight.vue
 * @Environment: Win 10
 * @Description:
-->
<template>
  <div class="child_right_box">
    <section class="title_date">
      <div v-show="Object.keys(dateObj).length !== 0" class="date_box">
        <p>
          <span>
            <b style="color: #31a7ff">{{ dateObj.year }}</b>
            <b>年</b>
          </span>
          <span>
            <b style="color: #31a7ff">{{ dateObj.month }}</b>
            <b>月</b>
          </span>
          <span>
            <b style="color: #31a7ff">{{ dateObj.day }}</b>
            <b>日</b>
          </span>
        </p>
        <p>
          <span>
            <b style="color: #31a7ff">{{ dateObj.hour }}</b>
            <b>:</b>
          </span>
          <span>
            <b style="color: #31a7ff">{{ dateObj.minute }}</b>
            <b>:</b>
          </span>
          <span>
            <b style="color: #31a7ff">{{ dateObj.second }}</b>
          </span>
        </p>
        <p>
          <span>
            <b>星期</b>
            <b style="color: #31a7ff">{{ dateObj.week }}</b>
          </span>
        </p>
      </div>
    </section>
    <div class="content">
      <section>
        <h5 class="item_title">水质污染区TOP10</h5>
        <div class="scroll_box">
          <div class="scroll_list item_charts_scroll" :style="{ top: tableTop + 'px' }">
            <div
              v-for="(item, index) in scrollList"
              :key="index"
              class="scroll_item item_charts_scroll_content"
            >
              <span>{{ item.id }}</span>
              <span :style="`background:${item.bgColor}`">{{ item.class }}</span>
              <span>{{ item.river }}</span>
              <span>{{ item.province }}</span>
              <span>{{ item.km }}</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h5 class="item_title">水质类别占比</h5>
        <div class="item_charts_category">
          <div
            v-for="item in categoryObj.list"
            :key="item.type"
            class="item_charts_category_content"
          >
            <div :id="item.type" class="category_charts_all"></div>
            <div>{{ item.title }}</div>
          </div>
        </div>
      </section>
      <section>
        <h5 class="item_title">主要地区水流量</h5>
        <div class="item_charts_main_area">
          <div class="item_charts_main_area_content">
            <div class="main_area_charts_title_wrap">
              <div
                v-for="item in mainAreaObj.titleList"
                :key="item.name"
                class="main_area_charts_title_content"
              >
                <p>
                  <span>{{ item.name }}</span>
                  <span>流量</span>
                </p>
                <p>
                  <span>{{ item.val }}</span>
                  <span>m³/h</span>
                </p>
              </div>
            </div>
            <div id="main_area_charts"></div>
          </div>
        </div>
      </section>
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

import initDate from '@/utils/date.js'

export default {
  name: 'ChildRight',
  data() {
    return {
      scrollList: [
        {
          id: 1,
          class: '1级',
          river: '松花江',
          province: '河北省',
          km: '200公里',
          bgColor: '#FFB822'
        },
        {
          id: 2,
          class: '2级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 3,
          class: '3级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 4,
          class: '4级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里',
          bgColor: '#ADA6DA'
        },
        {
          id: 5,
          class: '5级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 6,
          class: '6级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 7,
          class: '7级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里',
          bgColor: '#02AEE0'
        },
        {
          id: 8,
          class: '7级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 9,
          class: '7级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 10,
          class: '7级',
          river: '鸭子河',
          province: '河南省',
          km: '900公里'
        }
      ],
      tableTimer: null,
      tableTop: 0, // 列表向上移动的像素
      maxCanSee: 0, // maxCanSee代表可视范围内的最大完整数据条数
      tableLineHeight: 25, // tableLineHeight代表列表中一行的高度

      // 水质类别占比
      categoryObj: {
        list: [
          {
            title: '数据指标1',
            type: 'category_charts_1',
            value: 20,
            name: 'Perfect'
          },
          {
            title: '数据指标2',
            type: 'category_charts_2',
            value: 20,
            name: 'Perfect'
          },
          {
            title: '数据指标3',
            type: 'category_charts_3',
            value: 40,
            name: 'Good'
          }
        ]
      },

      // 主要地区水量
      mainAreaObj: {
        titleList: [
          { name: '山东省', val: '326' },
          { name: '山西省', val: '123' }
        ]
      },

      // 日期时间
      dateObj: {},

      categoryCharts1: null,
      categoryCharts2: null,
      categoryCharts3: null,
      mainAreaCharts: null
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.tableTop = 0
      const height = document.querySelector('.scroll_item')?.offsetHeight
      this.tableLineHeight = height
    })

    windowAddSize(this.screenAdatper)

    myChartsCall([
      this.categoryChartsInit,
      this.categoryChartsInit,
      this.categoryChartsInit,
      this.mainAreaChartsInit
    ])

    // 滚动
    this.scrollFn()

    this.dateObj = initDate()
  },
  beforeDestroy() {
    windowRemoveSize(this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      myChartsCall([
        this.categoryChartsInit,
        this.categoryChartsInit,
        this.categoryChartsInit,
        this.mainAreaChartsInit
      ])
      myChartsScree([
        this.categoryCharts1,
        this.categoryCharts2,
        this.categoryCharts3,
        this.mainAreaCharts
      ])
    },
    scrollFn() {
      var count = 0 // 每滚动一次，count加1
      if (this.scrollList.length > this.maxCanSee) {
        // scrollList是列表的数据对象，maxCanSee代表可视范围内的最大完整数据条数
        this.tableTimer = setInterval(() => {
          if (count < this.scrollList.length - this.maxCanSee) {
            // 如果还没滚动到最后一条数据，则列表向上移动以上的高度
            this.tableTop -= this.tableLineHeight // tableLineHeight代表列表中一行的高度
            count++ // 每滚动一次，count加1
          } else {
            // 如果滚动到最后一条，则恢复初始状态
            count = 0
            this.tableTop = 0
          }
        }, 3000)
      }
    },

    categoryChartsInit() {
      const option = {
        series: [
          {
            type: 'gauge',
            itemStyle: {
              color: '#3ceca1'
            },
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: this.$chartsSize(1),
                borderColor: '#ffffff'
              }
            },
            axisLine: {
              lineStyle: {
                width: this.$chartsSize(8),
                color: [[1, 'rgb(228 255 255 / 20%)']]
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 20
            },
            data: [this.categoryObj.list[0]],
            title: {
              fontSize: this.$chartsSize(10),
              color: '#cccccc',
              offsetCenter: ['0%', '55%']
            },
            detail: {
              width: this.$chartsSize(10),
              height: this.$chartsSize(10),
              fontSize: this.$chartsSize(20),
              color: '#ffffff',
              formatter: '{value}%',
              valueAnimation: true,
              offsetCenter: ['0%', '-20%']
            }
          }
        ]
      }

      this.categoryCharts1 = myChartsItem(this.categoryCharts1, '#category_charts_1', option)
      this.categoryCharts2 = myChartsItem(this.categoryCharts2, '#category_charts_2', option)
      this.categoryCharts3 = myChartsItem(this.categoryCharts3, '#category_charts_3', option)
    },

    mainAreaChartsInit() {
      const option = {
        color: ['#4cec70cc', '#1fc2ff', '#9476ef'],
        title: {
          text: '单位:m³/h',
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15),
            height: 50,
            lineHeight: 50
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['总流量', '上行流量', '下行流量'],
          textStyle: {
            color: '#ffffff',
            fontSize: this.$chartsSize(15)
          }
        },
        grid: {
          left: '1%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['12.1', '12.2', '12.3', '12.4', '12.5', '12.6', '12.7'],
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              fontSize: this.$chartsSize(15)
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              fontSize: this.$chartsSize(15)
            }
          }
        ],

        series: [
          {
            name: '总流量',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#b9eac4cc'
                },
                {
                  offset: 1,
                  color: '#4cec70cc'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [600, 132, 201, 800, 190, 130, 1000]
          },
          {
            name: '上行流量',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: this.$chartsSize(0)
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2E93B9'
                },
                {
                  offset: 1,
                  color: '#1fc2ff'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: '下行流量',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: this.$chartsSize(0)
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#d5ccf1'
                },
                {
                  offset: 1,
                  color: '#9476ef'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 700, 181, 234, 210, 290, 150]
          }
        ]
      }
      this.mainAreaCharts = myChartsItem(this.mainAreaCharts, '#main_area_charts', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.child_right_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title_date {
    width: 100%;
    height: 5%;
    padding: vh(10) 0;
    font-size: vw(20);
  }
}
.content {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.0980392156862745);
  section:nth-child(1) {
    height: 25%;
  }
  section:nth-child(2) {
    height: 25%;
  }
  section:nth-child(3) {
    height: 45%;
  }
  section {
    .item_title::before {
      content: '';
      display: inline-block;
      width: vw(3);
      height: vh(10);
      background: #31a7ff;
      margin-right: vw(6);
    }
    .item_charts_scroll {
      width: vh(400);
      height: vh(100);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &_content {
        display: flex;
        width: vw(400);
        height: vh(38);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .item_charts_category {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: space-between;
      &_content {
        width: 30%;
        height: vh(180);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ccc;
        .main_area_charts_title_wrap {
          width: vw(400);
          display: flex;
          justify-content: space-around;
          .main_area_charts_title_content {
            display: flex;
            flex-direction: column;
          }
        }
        div:nth-child(2) {
          font-size: vw(17);
        }
      }
    }

    .item_charts_main_area {
      width: 100%;
      height: 100%;
      &_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main_area_charts_title_wrap {
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: space-around;
        }
        .main_area_charts_title_content {
          p:nth-child(1) {
            font-size: vw(15);
          }
          p:nth-child(2) {
            font-size: vw(30);
            span:nth-child(1) {
              font-weight: 800;
            }
          }
        }
        .main_area_charts_title_content:nth-child(1) {
          color: #66bbf9;
        }
        .main_area_charts_title_content:nth-child(2) {
          color: #87f7c7;
        }
      }
    }
  }
}

// echarts
.category_charts_all {
  width: vw(120);
  height: vh(180);
}
#main_area_charts {
  width: 100%;
  height: 80%;
}

// 水质污染区 滚动样式
.scroll_box {
  height: vh(200);
  overflow: hidden;
  position: relative;
  .scroll_list {
    width: vw(400);
    position: absolute;
    transition: all 0.5s;
  }

  .scroll_item {
    width: vw(400);
    display: flex;
    color: #eee;
    text-align: center;
    line-height: vh(45);
    font-size: vw(15);
    span:nth-child(1) {
      width: vw(20);
    }
    span:nth-child(2) {
      width: vw(50);
      line-height: vh(25);
    }
  }
}

// 日期时间
.date_box {
  display: flex;
  p {
    padding-left: vw(10);
  }
}
</style>
