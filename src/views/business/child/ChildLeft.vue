<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 11:02:42
 * @LastEditTime: 2023-03-17 15:41:57
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childleft_box">
    <section class="top">
      <div class="top_header">
        <div
          v-for="(item, index) in topList"
          :key="item.id"
          class="header_item"
          :class="currentIndex === index ? 'header_active' : ''"
          @click="handleClickHeader(item.list, index)"
        >
          <p>{{ item.title }}</p>
        </div>
      </div>

      <div class="top_content animate_item">
        <div v-for="item in activeList" :key="item.id">
          <p>
            <img :src="item.icon" alt="" />
            <span>{{ item.name }}</span>
          </p>
          <p>
            <span>{{ item.val }}</span>
            <span>个</span>
          </p>
        </div>
      </div>
    </section>
    <section class="bottom">
      <div class="bottom_header">
        <h5>基础设施</h5>
      </div>
      <div class="bottom_content">
        <div v-for="item in bottomList" :key="item.id" class="bottom_content_item">
          <div><img :src="item.icon" width="25" height="25" alt="" /></div>
          <div>
            <p>{{ item.title }}</p>
            <p>
              <span>{{ item.val }}</span>
              <span>个</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'ChildLeft',
  data() {
    return {
      topList: [
        {
          id: 1,
          title: '餐饮',
          list: [
            {
              id: 1,
              name: '中餐馆',
              val: '321',
              icon: require('@/assets/img/business/left/food1.svg')
            },
            {
              id: 2,
              name: '西餐厅',
              val: '123',
              icon: require('@/assets/img/business/left/food2.svg')
            },
            {
              id: 3,
              name: '咖啡馆',
              val: '345',
              icon: require('@/assets/img/business/left/food3.svg')
            },
            {
              id: 4,
              name: '快餐店',
              val: '444',
              icon: require('@/assets/img/business/left/food4.svg')
            },
            {
              id: 5,
              name: '小吃店',
              val: '11',
              icon: require('@/assets/img/business/left/food5.svg')
            },
            {
              id: 6,
              name: '自助餐',
              val: '33',
              icon: require('@/assets/img/business/left/food6.svg')
            }
          ]
        },
        {
          id: 2,
          title: '购物',
          list: [
            {
              id: 1,
              name: '大型商场',
              val: '321',
              icon: require('@/assets/img/business/left/food7.svg')
            },
            {
              id: 2,
              name: '超市',
              val: '123',
              icon: require('@/assets/img/business/left/food8.svg')
            },
            {
              id: 3,
              name: '便利店',
              val: '345',
              icon: require('@/assets/img/business/left/food9.svg')
            },
            {
              id: 4,
              name: '集市',
              val: '444',
              icon: require('@/assets/img/business/left/food10.svg')
            },
            {
              id: 5,
              name: '家电数码',
              val: '11',
              icon: require('@/assets/img/business/left/food11.svg')
            },
            {
              id: 6,
              name: '家居建材',
              val: '33',
              icon: require('@/assets/img/business/left/food12.svg')
            }
          ]
        },
        {
          id: 3,
          title: '服务',
          list: [
            {
              id: 1,
              name: '银行',
              val: '321',
              icon: require('@/assets/img/business/left/food13.svg')
            },
            {
              id: 2,
              name: '酒店',
              val: '123',
              icon: require('@/assets/img/business/left/food14.svg')
            },
            {
              id: 3,
              name: '医院',
              val: '345',
              icon: require('@/assets/img/business/left/food15.svg')
            },
            {
              id: 4,
              name: '宠物',
              val: '444',
              icon: require('@/assets/img/business/left/food16.svg')
            },
            {
              id: 5,
              name: '加油站',
              val: '11',
              icon: require('@/assets/img/business/left/food17.svg')
            },
            {
              id: 6,
              name: '汽修',
              val: '33',
              icon: require('@/assets/img/business/left/food18.svg')
            }
          ]
        },
        {
          id: 4,
          title: '休闲',
          list: [
            {
              id: 1,
              name: 'KTV',
              val: '321',
              icon: require('@/assets/img/business/left/food19.svg')
            },
            {
              id: 2,
              name: '电影院',
              val: '123',
              icon: require('@/assets/img/business/left/food20.svg')
            },
            {
              id: 3,
              name: '酒吧',
              val: '345',
              icon: require('@/assets/img/business/left/food21.svg')
            },
            {
              id: 4,
              name: '会所',
              val: '444',
              icon: require('@/assets/img/business/left/food22.svg')
            },
            {
              id: 5,
              name: '美容',
              val: '11',
              icon: require('@/assets/img/business/left/food23.svg')
            },
            {
              id: 6,
              name: '健身',
              val: '33',
              icon: require('@/assets/img/business/left/food24.svg')
            }
          ]
        }
      ],
      activeList: [],
      currentIndex: 0,

      bottomList: [
        {
          id: 0,
          title: '公交站点',
          val: '123',
          icon: require('@/assets/img/business/left/food25.svg')
        },
        {
          id: 1,
          title: '地铁站点',
          val: '45',
          icon: require('@/assets/img/business/left/food26.svg')
        },
        {
          id: 2,
          title: '停车场',
          val: '45',
          icon: require('@/assets/img/business/left/food27.svg')
        },
        {
          id: 3,
          title: '充电桩',
          val: '34',
          icon: require('@/assets/img/business/left/food28.svg')
        },
        {
          id: 4,
          title: '休闲公园',
          val: '23',
          icon: require('@/assets/img/business/left/food29.svg')
        },
        {
          id: 5,
          title: '公共厕所',
          val: '222',
          icon: require('@/assets/img/business/left/food30.svg')
        }
      ]
    }
  },
  mounted() {
    this.activeList = this.topList[0]?.list
  },
  methods: {
    handleClickHeader(val, index) {
      this.currentIndex = index

      this.activeList = val
      this.animateCSS('.animate_item', 'flipInY')
    },

    animateCSS(element, animation, prefix = 'animate__') {
      new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`
        const node = document.querySelector(element)

        node.classList.add(`${prefix}animated`, animationName)

        function handleAnimationEnd(event) {
          event.stopPropagation()
          node.classList.remove(`${prefix}animated`, animationName)
          resolve('Animation ended')
        }

        node.addEventListener('animationend', handleAnimationEnd, {
          once: true
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.childleft_box {
  width: 100%;
  height: 100%;
  padding: 0 3% 0 3%;
  background-color: rgba(0, 0, 0, 0.498039215686275);
  .top {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    &_header {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .header_item {
        cursor: pointer;
        width: vw(80);
        height: vh(40);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: vw(15);
      }
    }
    &_content {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
      div {
        width: 100%;
        height: 14%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(110 110 110 / 50%);
        border-radius: 1%;
        p:nth-child(1) {
          width: vw(200);
          padding-left: vw(20);
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 15%;
            height: 15%;
          }
          span {
            width: vw(150);
            text-align: start;
            padding-left: vw(20);
            font-size: vw(15);
          }
        }
        p:nth-child(2) {
          padding-right: vw(20);
          span:nth-child(1) {
            font-size: vw(25);
            color: #66bbf9;
          }
        }
      }
      div:hover {
        background-color: rgb(152, 220, 243, 0.5);
      }
      div:hover:before {
        content: '';
        position: absolute;
        width: vw(3);
        height: vh(50);
        background: #31a7ff;
        margin-right: vh(50);
      }
    }
  }

  .bottom {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    &_header {
      width: 100%;
      height: vh(50);
      padding-left: vh(20);
      display: flex;
      align-items: center;
      h5::before {
        content: '';
        display: inline-block;
        width: vw(3);
        height: vh(15);
        background: #31a7ff;
        margin-right: vh(6);
      }
    }
    &_content {
      width: 100%;
      height: vh(500);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &_item {
        width: 45%;
        height: vh(100);
        display: flex;
        justify-content: space-around;
        align-items: center;
        div:nth-child(1) {
          width: vw(60);
          height: vh(60);
          background: inherit;
          background-color: rgba(102, 187, 249, 0.247058823529412);
          border: none;
          border-radius: vh(60);

          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: vw(30);
            height: vh(30);
          }
        }
        div:nth-child(2) {
          width: vw(100);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p {
            font-size: vw(15);
            span:nth-child(1) {
              font-size: vw(20);
              color: #31a7ff;
            }
          }
        }
      }
    }
  }
}

.header_active {
  color: #66bbf9;

  box-sizing: border-box;
  border-width: vw(1);
  border-style: solid;
  border-color: rgba(102, 187, 249, 1);
  border-radius: vw(3);
}
</style>
