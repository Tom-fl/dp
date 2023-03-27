<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 11:01:58
 * @LastEditTime: 2023-03-17 15:39:39
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\Business.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="box">
    <div class="box_map">
      <child-map />
    </div>
    <div class="box_center">
      <child-center />
    </div>
    <div class="box_header">
      <child-header />
    </div>
    <div class="box_left">
      <child-left />
    </div>
    <div class="box_right">
      <child-right />
    </div>
  </div>
</template>

<script>
import ChildHeader from './child/ChildHeader.vue'
import ChildLeft from './child/ChildLeft.vue'
import ChildRight from './child/ChildRight.vue'
import ChildMap from './child/ChildMap.vue'
import ChildCenter from './child/ChildCenter.vue'

export default {
  name: 'Business',
  components: { ChildHeader, ChildLeft, ChildRight, ChildMap, ChildCenter }
}
</script>
<style lang="scss" scoped>
.box {
  width: vw($designWidth);
  height: vh($designHeight);
  font-size: vh(15);

  &_header {
    position: absolute;
    width: 100%;
    height: 10%;
    top: 0;
  }
  &_center {
    position: absolute;
    width: 20%;
    height: 10%;
    bottom: 2%;
    left: 60%;
  }
  &_left {
    position: absolute;
    width: 20%;
    height: 95%;
    color: #fff;
    top: 10%;
    left: 2%;
  }
  &_right {
    position: absolute;
    width: 20%;
    height: 95%;
    color: #fff;
    top: 10%;
    right: 2%;
  }
}
</style>
