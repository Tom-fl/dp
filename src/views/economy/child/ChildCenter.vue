<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-24 11:16:26
 * @LastEditTime: 2023-03-10 18:08:17
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\economy\child\ChildCenter.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childcenter_box"></div>
</template>

<script>
export default {
  name: 'ChildCenter'
}
</script>

<style lang="scss" scoped>
.childcenter_box {
  width: 100%;
  height: 100%;
  border-image-source: url('../../../assets/img/economy/center.png');
  border-image-slice: 0 18 10 0 fill;
  border-top: 10px solid;
  border-right: 10px solid;
  border-bottom: 10px solid;
  border-left: 10px solid;
}
</style>
