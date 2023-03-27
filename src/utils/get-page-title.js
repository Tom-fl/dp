/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2023-02-15 14:19:45
 * @LastEditTime: 2023-02-22 19:11:52
 * @Email: Tom
 * @FilePath: \vue-element-admin-i18n\src\utils\get-page-title.js
 * @Environment: Win 11
 * @Description:
 */
import defaultSettings from "@/settings";
import i18n from "@/lang";

const title = defaultSettings.title;

export default function getPageTitle(key) {
  const hasKey = i18n.te(`route.${key}`);
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`);
    return `${pageName} ${title}`;
  }
  return `${title}`;
}
