<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-16 17:00:44
 * @LastEditTime: 2023-03-15 10:44:48
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\hydrogeological\child\ChildCenter.vue
 * @Environment: Win 10
 * @Description:
-->
<template>
  <div class="child_center_box">
    <div v-for="item in list" :key="item.id" class="content">
      <div class="content_left">
        <img :src="item.img" alt="" />
      </div>
      <div class="content_right">
        <p>{{ item.title }}</p>
        <p>{{ item.val }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildCenter',
  data() {
    return {
      list: [
        {
          id: 0,
          title: '数据指标1',
          val: '312,349.98',
          img: require('@/assets/img/hydrogeological/hglcCenter1.svg')
        },
        {
          id: 1,
          title: '数据指标2',
          val: '312,349.98',
          img: require('@/assets/img/hydrogeological/hglcCenter2.svg')
        },
        {
          id: 2,
          title: '数据指标2',
          val: '312,349.98',
          img: require('@/assets/img/hydrogeological/hglcCenter3.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.child_center_box {
  width: vw($designWidth);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .content {
    width: vw(200);
    height: vh(80);
    display: flex;
    background-color: rgb(27 72 125 / 63%);
    align-items: center;
    &_left {
      width: vw(80);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: vw(30);
        height: vh(30);
      }
    }
    &_right {
      width: vw(180);
      height: vh(80);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      p:nth-child(1) {
        font-size: vw(15);
      }
      p:nth-child(2) {
        font-weight: 600;
        font-size: vw(23);
      }
    }
  }
  .content::before {
    content: '';
    width: wh(3);
    height: vh(80);
    background: #31a7ff;
    margin-right: wh(6);
  }
}
</style>
