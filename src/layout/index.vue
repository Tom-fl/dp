<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    ></div>
    <sidebar v-show="sidebarShow" class="sidebar-container" />
    <div
      class="control"
      :style="`opacity:${controlOpacity}`"
      @mouseleave="handleControlMouseover"
      @mouseenter="handleControlmouseenter"
    >
      <div>
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
      </div>
      <div>
        <hamburger
          id="hamburger-container"
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
      </div>
    </div>
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }"></div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState, mapGetters } from 'vuex'

// 全屏组件
import Screenfull from '@/components/Screenfull'
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Screenfull,
    Hamburger
  },
  mixins: [ResizeMixin],
  data() {
    return {
      sidebarShow: false,
      controlOpacity: 1
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      device: (state) => state.app.device,
      showSettings: (state) => state.settings.showSettings,
      needTagsView: (state) => state.settings.tagsView,
      fixedHeader: (state) => state.settings.fixedHeader
    }),
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    handleControlMouseover() {
      this.controlOpacity = 0
    },
    handleControlmouseenter() {
      this.controlOpacity = 1
    },
    toggleSideBar() {
      this.sidebarShow = !this.sidebarShow
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.control {
  position: absolute;
  width: 210px;
  height: 40px;
  z-index: 9999;
  background: #304156;
  display: flex;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
  }
}
</style>
