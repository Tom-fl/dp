<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-24 11:15:11
 * @LastEditTime: 2023-03-15 17:08:59
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\economy\child\ChildHeader.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childheader_box">
    <section class="left">
      <h2 class="left_text">全球经济贸易分析大屏</h2>
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
      dateObj: {}
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
  display: flex;
  justify-content: space-around;
  .left {
    width: 45%;
    display: flex;
    &_text {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
  .right {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    &_date {
      width: 30%;
      height: 100%;
      display: flex;
      &_img {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 5%;
        img {
          width: 40%;
          height: 40%;
        }
      }
      &_text {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          width: 100%;
          height: 30%;
        }
        p:nth-child(1) {
          font-size: vw(15);
          color: #fff;
        }
        p:nth-child(2) {
          font-size: vw(25);
          color: #00ccff;
        }
      }
    }
    &_weather {
      width: 30%;
      display: flex;
      &_img {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 5%;
        img {
          width: 40%;
          height: 40%;
        }
      }
      &_text {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          width: 100%;
          height: 30%;
        }
        p:nth-child(1) {
          font-size: vw(15);
          color: #fff;
        }
        p:nth-child(2) {
          font-size: vw(25);
          color: #00ccff;
        }
      }
    }
  }
}
</style>
