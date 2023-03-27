<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-17 15:06:46
 * @LastEditTime: 2023-03-17 15:28:59
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\child\ChildCenter.vue
 * @Environment: Win 11
 * @Description:
-->

<template>
  <div class="childcenter_box">
    <section v-for="item in iconList" :key="item.id" class="item">
      <img :src="item.icon" alt="" />
      <div>{{ item.title }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ChildCenter',
  data() {
    return {
      iconList: [
        { id: 0, title: '核心商圈', icon: require('@/assets/img/business/center/center1.svg') },
        { id: 1, title: '主力商圈', icon: require('@/assets/img/business/center/center2.svg') },
        { id: 2, title: '辐射商圈', icon: require('@/assets/img/business/center/center3.svg') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.childcenter_box {
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.498039215686275);
  font-size: vw(13);
  display: flex;
  .item {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: end;
    div {
      width: 70%;
      height: 100%;
      padding-left: 5%;
      display: flex;
      align-items: end;
    }
    img {
      width: vw(25);
      height: vh(25);
    }
  }
}
</style>
