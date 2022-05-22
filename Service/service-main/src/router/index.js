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
    // alwaysShow: true,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "サービスダッシュボード", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/plan",
    component: Layout,
    redirect: "/plan/list",
    alwaysShow: true,
    name: "Satellite plan",
    meta: {
      title: "運用計画立案",
      icon: "fa-briefcase",
    },
    children: [
      {
        path: "calender",
        name: "calender",
        component: () => import("@/views/shootingplan/index"),
        meta: { title: "カレンダー", icon: "form" },
      },
    ],
  },

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
        component: () => import("@/views/videoresouce/index2"),
        meta: { title: "データ取得管理", icon: "table" },
      },
      // {
      //   path: "tree",
      //   name: "Video Detail",
      //   component: () => import("@/views/videoresouce/detail"),
      //   meta: { title: "撮影データ", icon: "form" },
      // },
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
      // {
      //   path: "table",
      //   name: "Table",
      //   component: () => import("@/views/Shootingframe/index"),
      //   meta: { title: "撮影枠", icon: "table" },
      // },
      {
        path: "table2",
        name: "Table2",
        component: () => import("@/views/Shootingframe/index2"),
        meta: { title: "撮影枠", icon: "table" },
      },
      // {
      //   path: "tree",
      //   name: "Video Detail",
      //   component: () => import("@/views/Shootingframe/detail"),
      //   meta: { title: "ムーブメント枠", icon: "form" },
      // },
      {
        path: "tree2",
        name: "Video Detail2",
        component: () => import("@/views/Shootingframe/index3"),
        meta: { title: "ムーブメント枠", icon: "form" },
      },
      {
        path: "detail",
        name: "Detail",
        component: () => import("@/views/Shootingframe/detail2"),
        meta: { title: "撮影枠詳細", icon: "form" },
      },
      {
        path: "detail2",
        name: "Detail2",
        component: () => import("@/views/Shootingframe/detail3"),
        meta: { title: "撮影枠分割枠詳細", icon: "form" },
      },
      {
        path: "detail3",
        name: "Detail3",
        component: () => import("@/views/Shootingframe/detail4"),
        meta: { title: "ムーブメント枠詳細", icon: "form" },
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
        path: "alivemonitoring",
        name: "alivemonitoring",
        component: () => import("@/views/notification/alivemonitoring"),
        meta: { title: "死活監視", icon: "el-icon-s-management" },
      },
      {
        path: "statusdashboard",
        name: "Status Dashboard",
        component: () => import("@/views/notification/actionlog"),
        meta: { title: "操作ログ管理", icon: "el-icon-s-management" },
      },
    ],
  },

  {
    path: "/tree",
    component: Layout,
    redirect: "/tree/list",
    alwaysShow: true,
    name: "Tree",
    meta: { title: "Tree", icon: "el-icon-video-camera-solid" },
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/tree/index"),
        meta: { title: "tree", icon: "tree" },
      },
      // {
      //   path: "tree",
      //   name: "Video Detail",
      //   component: () => import("@/views/videoresouce/detail"),
      //   meta: { title: "撮影データ", icon: "form" },
      // },
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
