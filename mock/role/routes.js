// Just a mock data

const constantRoutes = [
  {
    path: "/login",
    component: "views/login/index",
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: "views/login/auth-redirect",
    hidden: true,
  },
  {
    path: "/404",
    component: "views/error-page/404",
    hidden: true,
  },
  {
    path: "/401",
    component: "views/error-page/401",
    hidden: true,
  },
  {
    path: "",
    component: "layout/Layout",
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: "views/dashboard/index",
        name: "Dashboard",
        meta: { title: "dashboard", icon: "dashboard", affix: true },
      },
    ],
  },
];

const asyncRoutes = [
  {
    path: "/charts",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "Charts",
    meta: {
      title: "charts",
      icon: "chart",
    },
    children: [
      {
        path: "keyboard",
        component: "views/charts/keyboard",
        name: "KeyboardChart",
        meta: { title: "keyboardChart", noCache: true },
      },
      {
        path: "line",
        component: "views/charts/line",
        name: "LineChart",
        meta: { title: "lineChart", noCache: true },
      },
      {
        path: "mixchart",
        component: "views/charts/mixChart",
        name: "MixChart",
        meta: { title: "mixChart", noCache: true },
      },
    ],
  },

  { path: "*", redirect: "/404", hidden: true },
];

module.exports = {
  constantRoutes,
  asyncRoutes,
};
