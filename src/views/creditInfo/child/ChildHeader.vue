<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-20 13:40:22
 * @LastEditTime: 2023-03-15 11:15:37
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\creditInfo\child\ChildHeader.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childheader_box">
    <h2 class="title">信用信息管理驾驶舱</h2>
  </div>
</template>

<script>
export default {
  name: 'ChildHeader'
}
</script>

<style lang="scss" scoped>
.childheader_box {
  width: 100%;
  height: 100%;
  background: url('../../../assets/img/creditInfo/creditInfo_header_bg.png') no-repeat;
  background-size: 100% 130%;
  display: flex;
  justify-content: center;
  .title {
    color: #32d6f9;
  }
}
</style>
