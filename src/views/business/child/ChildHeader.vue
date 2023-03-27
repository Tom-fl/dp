<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 14:47:30
 * @LastEditTime: 2023-03-17 15:39:23
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\child\ChildHeader.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childheader_box">
    <section class="left">
      <div>
        <img :src="leftIcon" width="30" height="30" alt="" />
      </div>
      <div>
        <h2>商圈生态展示可视化</h2>
        <p>Visualization of business district ecological display</p>
      </div>
    </section>
    <section class="center">
      <div v-for="item in list" :key="item.id" class="item">
        <div>
          <img :src="item.icon" alt="" />
        </div>
        <div>
          <p>
            <span class="num">{{ item.total }}</span>
            <span>{{ item.unit }}</span>
          </p>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </section>

    <section class="right">
      <div class="right_date">
        <div class="right_date_img">
          <img src="@/assets/img/parking/header2.svg" alt="" />
        </div>
        <div class="right_date_text">
          <p>
            <span>{{ dateObj.year }}/</span>
            <span>{{ dateObj.month }}/</span>
            <span>{{ dateObj.day }}</span>
            <span>星期{{ dateObj.week }}</span>
          </p>
          <p>
            <span>{{ dateObj.hour }}:</span>
            <span>{{ dateObj.minute }}:</span>
            <span>{{ dateObj.second }}</span>
          </p>
        </div>
      </div>

      <div class="right_weather">
        <div class="right_weather_img">
          <img src="@/assets/img/parking/header3.svg" alt="" />
        </div>
        <div class="right_weather_text">
          <p>夜间晴天</p>
          <p>20~28℃</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import initDate from '@/utils/date.js'

export default {
  name: 'ChildHeader',
  data() {
    return {
      dateObj: {},
      list: [
        {
          id: 0,
          total: '123',
          unit: '个',
          title: '住宅小区总数',
          icon: require('@/assets/img/business/header/header3.svg')
        },
        {
          id: 1,
          total: '565',
          unit: '个',
          title: '商圈内总人口数',
          icon: require('@/assets/img/business/header/header4.svg')
        },
        {
          id: 2,
          total: '33',
          unit: '万元/平米',
          title: '平均房价',
          icon: require('@/assets/img/business/header/header5.svg')
        },
        {
          id: 3,
          total: '555',
          unit: '万元/平方公里',
          title: '人口密度',
          icon: require('@/assets/img/business/header/header6.svg')
        }
      ],
      leftIcon: require('@/assets/img/business/header/header2.svg'),
      rightData: {
        icon1: require('@/assets/img/business/header/header7.svg'),
        icon2: require('@/assets/img/business/header/header8.svg')
      }
    }
  },
  mounted() {
    this.dateObj = initDate()
  }
}
</script>

<style lang="scss" scoped>
.childheader_box {
  width: 100%;
  height: 100%;
  background: url('../../../assets/img/business/header/header1.svg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  padding-top: vh(0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 25%;
    height: vh(80);
    display: flex;
    align-items: center;
    justify-content: space-around;

    div:nth-child(1) {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 60%;
        height: 60%;
      }
    }
    div:nth-child(2) {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h5 {
        font-size: vw(20);
      }
    }
    p {
      color: rgba(255, 255, 255, 0.298039215686275);
    }
  }
  .center {
    width: 45%;
    height: vh(80);
    display: flex;
    justify-content: space-evenly;
    .item {
      width: 23%;
      height: vh(80);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .num {
        color: #66bbf9;
        font-weight: 800;
      }
      div:nth-child(1) {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-child(2) {
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
  }
  .right {
    width: 25%;
    display: flex;
    justify-content: space-between;
    &_date,
    &_weather {
      width: 45%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      &_img {
        width: 20%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &_text {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        p:nth-child(1) {
          color: #fff;
        }
        p:nth-child(2) {
          color: #00ccff;
          font-size: vw(25);
          span {
            font-size: vw(25);
          }
        }
      }
    }
  }
}
</style>
