import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "ダッシュボード", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/plan",
    component: Layout,
    redirect: "/plan/list",
    name: "Satellite plan",
    meta: {
      title: "運用計画管理",
      icon: "fa-briefcase",
    },
    children: [
      // {
      //   path: "table",
      //   name: "Table",
      //   component: () => import("@/views/satelliteCompany/index"),
      //   meta: { title: "一覧表", icon: "table" },
      // },
      {
        path: "calender",
        name: "calender",
        component: () => import("@/views/shootingplan/index"),
        meta: { title: "長期運用計画", icon: "form" },
      },

    ],
  },

  // {
  //   path: "/satellitecompany",
  //   component: Layout,
  //   redirect: "/satellitecompany/list",
  //   name: "Satellite Company",
  //   meta: {
  //     title: "地上局",
  //     icon: "fa-briefcase",
  //   },
  //   children: [
  //     {
  //       path: "table",
  //       name: "Table",
  //       component: () => import("@/views/satelliteCompany/index"),
  //       meta: { title: "一覧表", icon: "table" },
  //     },
  //     {
  //       path: "tree",
  //       name: "Add Company",
  //       component: () => import("@/views/satelliteCompany/form"),
  //       meta: { title: "新規追加", icon: "form" },
  //     },
  //   ],
  // },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    alwaysShow: true,
    name: "Example",
    meta: { title: "ユーザー管理", icon: "el-icon-user" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "ユーザー一覧", icon: "table" },
        children: [
          {
            path: "companydetail",
            name: "companydetail",
            hidden: true,
            component: () => import("@/views/table/companydetail"),
            meta: { title: "詳細" },
          },

        ],
      },
      {
        path: "table1",
        name: "Table",
        component: () => import("@/views/table/companyindex"),
        redirect: "/example/table1/list",
        meta: { title: "企業グループ", icon: "table" },
        children: [
          {
            path: "list",
            name: "list",
            component: () => import("@/views/table/index1"),
            meta: { title: "企業グループ", icon: "table", breadcrumb: false },
          },
          {
            path: "createcompany",
            name: "Createcompany",
            hidden: true,
            component: () => import("@/views/table/createcompany"),
            meta: { title: "新規作成" },
          },
          {
            path: "emailnotification",
            name: "emailnotification",
            hidden: true,
            component: () => import("@/views/table/emailnotification"),
            meta: { title: "メール通知" },
          },
          {
            path: "companydetail",
            name: "companydetail",
            hidden: true,
            component: () => import("@/views/table/companydetail"),
            meta: { title: "詳細" },
          },
          {
            path: "videodetail",
            name: "videodetail",
            hidden: true,
            component: () => import("@/views/table/videodetail"),
            meta: { title: "コンテンツ" },
          },
        ],
      },

      {
        path: "table2",
        name: "Table",
        component: () => import("@/views/table/index2"),
        meta: { title: "通知履歴", icon: "table" },
      },
      {
        path: "table3",
        name: "Table",
        component: () => import("@/views/table/index3"),
        meta: { title: "サービス運営者", icon: "table" },
      },
    ],
  },

  
  {
    path: "/videoresouce",
    component: Layout,
    redirect: "/videoresouce/list",
    alwaysShow: true,
    name: "Video Resource",
    meta: { title: "撮影データ管理", icon: "el-icon-video-camera-solid" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/videoresouce/index"),
        meta: { title: "一覧表", icon: "table" },
      },
      {
        path: "tree",
        name: "Video Detail",
        component: () => import("@/views/videoresouce/detail"),
        meta: { title: "撮影詳細", icon: "form" },
      },
    ],
  },

  {
    path: "/Shootingframe",
    component: Layout,
    redirect: "/Shootingframe/list",
    alwaysShow: true,
    name: "Shootingframe",
    meta: { title: "撮影枠管理", icon: "el-icon-video-camera-solid" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/Shootingframe/index"),
        meta: { title: "撮影枠", icon: "table" },
      },
      {
        path: "tree",
        name: "Video Detail",
        component: () => import("@/views/Shootingframe/detail"),
        meta: { title: "ムーブメント枠", icon: "form" },
      },
    ],
  },

  {
    path: "/satellite",
    component: Layout,
    redirect: "/satellite/list",
    name: "Satellite",
    meta: { title: "システム監視", icon: "fa-satellite" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/satellite/index"),
        meta: { title: "一覧表", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Satellite",
        component: () => import("@/views/satellite/form"),
        meta: { title: "新規追加", icon: "form" },
      },
    ],
  },

  {
    path: "/satellite",
    component: Layout,
    redirect: "/satellite/list",
    name: "Satellite",
    meta: { title: "メンテナンス", icon: "el-icon-s-management" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/satellite/index"),
        meta: { title: "一覧表", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Satellite",
        component: () => import("@/views/satellite/form"),
        meta: { title: "新規追加", icon: "form" },
      },
    ],
  },

  {
    path: "/statusdashboard",
    component: Layout,
    redirect: "/statusdashboard",
    children: [
      {
        path: "statusdashboard",
        name: "Status Dashboard",
        component: () => import("@/views/notification/index"),
        meta: { title: "データ分析", icon: "el-icon-s-management" },
      },
    ],
  },


  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
