<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 11:02:42
 * @LastEditTime: 2023-03-21 11:49:05
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\windPower\child\ChildLeft.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="childleft_box">
    <section class="item">
      <div class="item_header">
        <p class="dot1"></p>
        <p class="dot2"></p>
        <p class="dot3"></p>
        <p class="dot4"></p>
        <p class="title">主要数据指标</p>
      </div>
      <div class="item_content">
        <div v-for="item in dataList" :key="item.id">
          <p>
            <span>{{ item.val }}</span>
            <span>{{ item.after }}</span>
          </p>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </section>
    <section class="item">
      <div class="item_header">实时数据波动</div>
    </section>
    <section class="item">
      <div class="item_header">本周发电量浮动</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ChildLeft',
  data() {
    return {
      dataList: [
        { id: 0, title: '全年目标', val: '2500', after: 'GK' },
        { id: 1, title: '每月完成', val: '205', after: '台' },
        { id: 2, title: '并网容量', val: '975', after: 'GK' },
        { id: 3, title: '风机总数', val: '123', after: 'GK' },
        { id: 4, title: '同期均值', val: '333', after: 'GK' },
        { id: 5, title: '同比变化率', val: '435', after: '%' }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.childleft_box {
  width: 100%;
  height: 100%;
  padding: 0 3% 0 3%;
  background-color: rgba(0, 0, 0, 0.498039215686275);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item {
    width: 100%;
    height: 31%;
    &_header {
      position: relative;
      width: 100%;
      height: 15%;
      .title {
        width: 100%;
        height: 100%;
        background-color: rgba(67, 186, 254, 0.0980392156862745);
      }
    }
    &_content {
    }
  }
}
.dot1 {
  position: absolute;
  left: 0px;
  top: 0;
  width: 8px;
  height: 8px;
  background: inherit;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(67, 186, 254, 1);
  border-right: 0px;
  border-bottom: 0px;
  border-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: none;
  line-height: 36px;
}

.dot2 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 8px;
  height: 8px;
  background: inherit;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(67, 186, 254, 1);
  border-top: 0px;
  border-right: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: none;
  line-height: 36px;
}
.dot3 {
  position: absolute;
  right: 0;
  top: 0px;
  width: 8px;
  height: 8px;
  background: inherit;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(67, 186, 254, 1);
  border-left: 0px;
  border-bottom: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: none;
  line-height: 36px;
}
.dot4 {
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 8px;
  height: 8px;
  background: inherit;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(67, 186, 254, 1);
  border-left: 0px;
  border-top: 0px;
  border-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: none;
  line-height: 36px;
}
</style>
