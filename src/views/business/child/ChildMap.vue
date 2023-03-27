<!-- eslint-disable no-undef -->
<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-03-06 11:13:32
 * @LastEditTime: 2023-03-21 10:43:58
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\views\business\child\ChildMap.vue
 * @Environment: Win 11
 * @Description:
-->
<template>
  <div class="box">
    <div class="amap_wrapper">
      <el-amap
        ref="amap"
        :zoom="zoom"
        :center="center"
        :view-mode="viewMode"
        map-style="amap://styles/darkblue"
        :pitch="55"
      >
        <el-amap-marker
          v-for="item in markersList"
          ref="marker"
          :key="item.id"
          :position="item.position"
          :icon="item.icon"
          :events="item.events"
        />
        <el-amap-info-window
          v-if="windowItem"
          :position="windowItem.position"
          :visible="windowItem.visible"
          :content="windowItem.content"
          :offset="windowItem.offset"
          :close-when-click-map="true"
          :is-custom="true"
        >
          <div id="info_window">
            <p>{{ windowAddress }}</p>
          </div>
        </el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildMap',
  data() {
    return {
      zoom: 15,
      center: [114.06455, 22.54846],
      viewMode: '3D', // 开启3D视图,默认为关闭
      commonData: [
        {
          id: 1,
          level: 'A',
          position: [114.06455, 22.54146]
        },
        {
          id: 2,
          level: 'A',
          position: [114.01411, 22.54243]
        },
        {
          id: 3,
          level: 'B',
          position: [114.02425, 22.54341]
        },
        {
          id: 4,
          level: 'B',
          position: [114.03435, 22.54442]
        },
        {
          id: 5,
          level: 'C',
          position: [114.04445, 22.54543]
        },
        {
          id: 6,
          level: 'C',
          position: [114.05455, 22.54644]
        }
      ],

      markersList: [],
      windowsList: [],
      windowItem: null,
      windowAddress: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 1000)
  },
  methods: {
    init() {
      const that = this
      const markersList = []
      const windowsList = []

      this.commonData.map((item, index) => {
        switch (item.level) {
          case 'A':
            item.icon = 'map1'
            break
          case 'B':
            item.icon = 'map2'
            break
          case 'C':
            item.icon = 'map3'
            break
        }
        markersList.push({
          position: item.position,
          events: {
            mouseover() {
              that.windowsList.forEach((i) => {
                i.visible = false // 关闭窗体
              })
              that.windowItem = that.windowsList[index]
              that.$nextTick(() => {
                that.windowItem.visible = true
              })
              // eslint-disable-next-line new-cap
              new AMap.plugin('AMap.Geocoder', () => {
                const geocoder = new AMap.Geocoder({
                  city: '全国'
                })
                geocoder.getAddress(item.position, (status, result) => {
                  if (status === 'complete' && result.info === 'OK') {
                    that.$nextTick(() => {
                      that.windowAddress = result.regeocode.formattedAddress
                    })
                  }
                })
              })
            },
            mouseout(e) {
              that.$nextTick(() => {
                that.windowItem.visible = false
              })
            }
          },
          level: item.level,
          icon: new AMap.Icon({
            size: new AMap.Size(this.$chartsSize(100), this.$chartsSize(100)),
            image: require(`@/assets/img/business/${item.icon}.svg`),
            imageSize: new AMap.Size(this.$chartsSize(100), this.$chartsSize(100))
          })
        })

        windowsList.push({
          position: item.position,
          isCustom: true,
          offset: [10, -20], // 窗体偏移
          showShadow: false,
          visible: false, // 初始是否显示
          id: item.id
        })
      })

      // 加点
      this.markersList = markersList
      // 窗体
      this.windowsList = windowsList
    }
  }
}
</script>

<style scoped lang="scss">
.amap_wrapper {
  width: 100%;
  height: 100%;
}
// ::v-deep .amap-layer {
//   width: auto !important;
//   height: auto !important;
// }

/* 隐藏高德logo  */
::v-deep .amap-logo {
  display: none !important;
}
/* 隐藏高德版权  */
::v-deep .amap-copyright {
  display: none !important;
}

#info_window {
  width: vw(200);
  height: vh(100);
  font-size: vw(10);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
#info_window ::before {
  position: absolute;
  left: 50%;
  bottom: -8%;
  width: 0px;
  height: 0px;
  content: '';
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 10px solid black;
  border-right: 10px solid transparent;
}

#info_window ::after {
  position: absolute;
  left: 50%;
  bottom: -8%;
  width: 0px;
  height: 0px;
  content: '';
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 10px solid white;
  border-right: 10px solid transparent;
}
</style>
