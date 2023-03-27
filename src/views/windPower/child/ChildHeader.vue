<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 14:47:30
 * @LastEditTime: 2023-03-17 16:41:25
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\windPower\child\ChildHeader.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childheader_box">
    <section class="left">
      <h2>风电数据总览可视化系统</h2>
    </section>

    <section class="right">
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
  color: #fff;
  display: flex;
  justify-content: space-evenly;

  .left {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right {
    width: 45%;
    height: 100%;
    display: flex;
    .date_box {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      p {
        font-size: vw(18);
        padding-left: vw(10);
      }
    }
  }
}
</style>
