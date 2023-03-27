<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-27 18:48:07
 * @LastEditTime: 2023-03-13 13:34:02
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\tourismService\child\ChildCenter.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childcenter_box">
    <div class="top">
      <child-center-top />
    </div>
    <div class="bottom">
      <child-center-bottom />
    </div>
  </div>
</template>

<script>
import ChildCenterTop from './childCenter/ChildCenterTop.vue'
import ChildCenterBottom from './childCenter/ChildCenterBottom.vue'
export default {
  name: 'ChildCenter',
  components: {
    ChildCenterTop,
    ChildCenterBottom
  }
}
</script>

<style lang="scss" scoped>
.childcenter_box {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 65%;
  }
  .bottom {
    width: 100%;
    height: 35%;
  }
}
</style>
