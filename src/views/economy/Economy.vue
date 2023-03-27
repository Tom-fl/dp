<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-24 11:14:14
 * @LastEditTime: 2023-02-24 14:46:33
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\economy\economy.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="box">
    <div class="box_header">
      <child-header />
    </div>
    <div class="box_content">
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
  name: 'Economy',
  components: { ChildLeft, ChildRight, ChildCenter, ChildHeader }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(5, 13, 59, 1);
  display: flex;
  flex-direction: column;
  color: #ffffff;

  &_header {
    width: 100%;
    height: 7%;
  }
  &_content {
    width: 100%;
    height: 90%;
    display: flex;
    .box_left {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .box_center {
      width: 40%;
      height: 100%;
    }
    .box_right {
      width: 25%;
      height: 100%;
    }
  }
}
</style>
