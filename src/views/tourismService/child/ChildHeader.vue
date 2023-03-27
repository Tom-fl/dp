<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-27 18:44:45
 * @LastEditTime: 2023-03-16 09:08:04
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\ChildHeader.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childheader_box">
    <section class="left">
      <div class="left_date">
        <p>
          <span>{{ dateObj.year }}/</span>
          <span>{{ dateObj.month }}/</span>
          <span>{{ dateObj.day }}</span>
          <span>星期{{ dateObj.week }}</span>
        </p>
      </div>
    </section>

    <section class="center">
      <h4 class="center_text">某区域智慧旅游服务平台</h4>
    </section>

    <section class="right">
      <div class="img">
        <img src="../../../assets/img/tourismService/header2.svg" alt="" />
      </div>
      <div class="text">
        <div class="scroll_box">
          <div class="scroll_list item_charts_scroll" :style="{ top: scrollTop + 'px' }">
            <div
              v-for="(item, index) in scrollList"
              :key="index"
              class="scroll_item item_charts_scroll_content"
            >
              <span>{{ item.id }}</span>
              <span>{{ item.river }}</span>
              <span>{{ item.province }}</span>
              <span>{{ item.km }}</span>
            </div>
          </div>
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
      scrollList: [
        {
          id: 1,
          class: '1级123',
          river: '松花江123',
          province: '河北省123',
          km: '200公里123',
          bgColor: '#FFB822'
        },
        {
          id: 2,
          class: '2级123',
          river: '鸭子河123',
          province: '河南省123',
          km: '900公里'
        },
        {
          id: 3,
          class: '3级123',
          river: '鸭子河123',
          province: '河南省213',
          km: '900公里'
        },
        {
          id: 4,
          class: '4级123',
          river: '鸭子河123',
          province: '河南省123',
          km: '900公里123',
          bgColor: '#ADA6DA'
        },
        {
          id: 5,
          class: '5级123',
          river: '鸭子河123',
          province: '河南省123',
          km: '900公里123'
        },
        {
          id: 6,
          class: '6级',
          river: '鸭子河4343112',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 7,
          class: '7级',
          river: '鸭子河4343112',
          province: '河南省',
          km: '900公里',
          bgColor: '#02AEE0'
        },
        {
          id: 8,
          class: '7级',
          river: '鸭子河4343112',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 9,
          class: '7级',
          river: '鸭子河4343112',
          province: '河南省',
          km: '900公里'
        },
        {
          id: 10,
          class: '7级',
          river: '鸭子河4343112',
          province: '河南省',
          km: '900公里'
        }
      ],
      scrollTimer: null,
      scrollTop: 0,
      maxCanSee: 0,
      scrollLineHeight: 30
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.scrollTop = 0
      const height = document.querySelector('.scroll_item')?.offsetHeight
      this.scrollLineHeight = height
    })

    this.dateObj = initDate()
    this.scrollFn()
  },
  methods: {
    scrollFn() {
      let count = 0
      if (this.scrollList.length > this.maxCanSee) {
        this.scrollTimer = setInterval(() => {
          if (count < this.scrollList.length - this.maxCanSee) {
            this.scrollTop -= this.scrollLineHeight
            count++
          } else {
            count = 0
            this.scrollTop = 0
          }
        }, 5000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.childheader_box {
  color: #fff;
  width: 100%;
  height: 100%;
  background: url('../../../assets/img/tourismService/header.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .left {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    &_date {
      width: 100%;
      display: flex;
      font-size: vw(18);
    }
  }

  .center {
    width: 30%;
    display: flex;
    justify-content: center;
    &_text {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: vw(25);
      color: #0bbbe3;
    }
  }

  .right {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .img {
      width: 10%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
        height: 50%;
      }
    }
    .text {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}

.scroll_box {
  height: 65%;
  overflow: hidden;
  position: relative;
  .scroll_list {
    width: 100%;
    position: absolute;
    transition: all 0.5s;
  }

  .scroll_item {
    width: 100%;
    display: flex;
    color: #eee;
    text-align: center;
    line-height: vh(45);
    font-size: vw(20);
  }
}
</style>
