/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-15 14:19:45
 * @LastEditTime: 2023-02-22 17:39:04
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\store\modules\settings.js
 * @Environment: Win 11
 * @Description:
 */
import variables from "@/styles/element-variables.scss";
import defaultSettings from "@/settings";

const {
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo,
  supportPinyinSearch,
} = defaultSettings;

const state = {
  theme: variables.theme,
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo,
  supportPinyinSearch,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
