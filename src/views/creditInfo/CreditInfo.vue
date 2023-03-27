<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-20 11:12:48
 * @LastEditTime: 2023-03-15 15:57:10
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\creditInfo\CreditInfo.vue
 * @Environment: Win 11
 * @Description: 信用信息管理驾驶舱
-->

<template>
  <div class="box">
    <div class="header">
      <child-header />
    </div>
    <div class="main">
      <div class="box_left">
        <child-left />
      </div>
      <div class="box_center">
        <child-center />
      </div>
      <div class="box_right">
        <child-right />
      </div>
    </div>
  </div>
</template>

<script>
import ChildLeft from './child/ChildLeft.vue'
import ChildRight from './child/ChildRight.vue'
import ChildCenter from './child/ChildCenter.vue'
import ChildHeader from './child/ChildHeader.vue'

export default {
  name: 'CreditInfo',
  components: { ChildLeft, ChildRight, ChildCenter, ChildHeader }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  overflow: hidden;
  background: url('../../assets/img/creditInfo/creditInfo_bg.jpg') 50% 50% / 100% 100% no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 10%;
  }
  .main {
    width: 100%;
    height: 90%;
    display: flex;
    .box_left {
      width: 25%;
      color: #fff;
      display: flex;
      flex-direction: column;
    }
    .box_center {
      width: 50%;
      height: 100%;
    }
    .box_right {
      width: 25%;
      height: 100%;
      color: #fff;
      overflow-y: auto;
    }
  }
}
</style>
