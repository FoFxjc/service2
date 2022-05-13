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
    alwaysShow: true,
    name: "Satellite plan",
    meta: {
      title: "運用計画立案",
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
        meta: { title: "カレンダー", icon: "form" },
      },
      // {
      //   path: "tree",
      //   name: "Add Company",
      //   component: () => import("@/views/plan/form1"),
      //   meta: { title: "長期運用計画", icon: "form" },
      // },
      // {
      //   path: "tree1",
      //   name: "Add Company",
      //   component: () => import("@/views/plan/form2"),
      //   meta: { title: "通信パス確認", icon: "form" },
      // },
      // {
      //   path: "tree2",
      //   name: "Add Company",
      //   component: () => import("@/views/plan/form3"),
      //   meta: { title: "運用計画確認", icon: "form" },
      // },
      // {
      //   path: "tree3",
      //   name: "Add Company",
      //   component: () => import("@/views/plan/form4"),
      //   meta: { title: "再立案作成", icon: "form" },
      // },
      // {
      //   path: "tree4",
      //   name: "Add Company",
      //   component: () => import("@/views/plan/form5"),
      //   meta: { title: "ダウンリンク計画", icon: "form" },
      // },
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
        meta: { title: "soaユーザー管理", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Account",
        component: () => import("@/views/form/index"),
        meta: { title: "oaユーザー管理", icon: "form" },
      },
    ],
  },
  {
    path: "/satellitecompany1",
    component: Layout,
    redirect: "/satellitecompany/list",
    alwaysShow: true,
    name: "Satellite Company",
    meta: {
      title: "通信パス管理",
      icon: "fa-briefcase",
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/satelliteCompany/index"),
        meta: { title: "一覧表", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Company",
        component: () => import("@/views/satelliteCompany/form"),
        meta: { title: "新規追加", icon: "form" },
      },
    ],
  },

  {
    path: "/satellite",
    component: Layout,
    redirect: "/satellite/list",
    alwaysShow: true,
    name: "Satellite",
    meta: { title: "衛星管理", icon: "fa-satellite" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/satellite/index"),
        meta: { title: "衛星", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Satellite",
        component: () => import("@/views/satellite/form"),
        meta: { title: "テレメトリ", icon: "form" },
      },
    ],
  },
  
  {
    path: "/satellitecompany",
    component: Layout,
    redirect: "/satellitecompany/list",
    alwaysShow: true,
    name: "Satellite Company",
    meta: {
      title: "地上局管理",
      icon: "fa-briefcase",
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/satelliteCompany/index"),
        meta: { title: "一覧表", icon: "table" },
      },
      {
        path: "tree",
        name: "Add Company",
        component: () => import("@/views/satelliteCompany/form"),
        meta: { title: "新規追加", icon: "form" },
      },
    ],
  },

  {
    path: "/statusdashboard",
    component: Layout,
    redirect: "/statusdashboard",
    alwaysShow: true,
    name: "Satellite Company",
    meta: {
      title: "システム監視",
      icon: "el-icon-s-management",
    },
    children: [
      {
        path: "statusdashboard",
        name: "Status Dashboard",
        component: () => import("@/views/notification/index"),
        meta: { title: "システム監視", icon: "el-icon-s-management" },
      },
    ],
  },

  {
    path: "/statusdashboard2",
    component: Layout,
    redirect: "/statusdashboard",
    alwaysShow: true,
    name: "Satellite Company",
    meta: {
      title: "メンテナンス",
      icon: "el-icon-s-management",
    },
    children: [
      {
        path: "statusdashboard2",
        name: "Status Dashboard2",
        component: () => import("@/views/notification/index"),
        meta: { title: "メンテナンス", icon: "el-icon-s-management" },
      },
    ],
  },

  {
    path: "/statusdashboard3",
    component: Layout,
    redirect: "/statusdashboard",
    alwaysShow: true,
    name: "Satellite Company",
    meta: {
      title: "データ分析",
      icon: "el-icon-s-management",
    },
    children: [
      {
        path: "statusdashboard3",
        name: "Status Dashboard3",
        component: () => import("@/views/satelliteCompany/form"),
        meta: { title: "データ分析", icon: "el-icon-s-management" },
      },
    ],
  },

  // {
  //   path: "/statusdashboard",
  //   component: Layout,
  //   redirect: "/statusdashboard",
  //   children: [
  //     {
  //       path: "statusdashboard",
  //       name: "Status Dashboard",
  //       component: () => import("@/views/notification/index"),
  //       meta: { title: "利用料金の請求", icon: "el-icon-s-management" },
  //     },
  //   ],
  // },
  // {
  //   path: "/statusdashboard",
  //   component: Layout,
  //   redirect: "/statusdashboard",
  //   children: [
  //     {
  //       path: "statusdashboard",
  //       name: "Status Dashboard",
  //       component: () => import("@/views/notification/index"),
  //       meta: { title: "個人情報分析", icon: "el-icon-s-management" },
  //     },
  //   ],
  // },

  // {
  //   path: "/statusdashboard",
  //   component: Layout,
  //   redirect: "/statusdashboard",
  //   children: [
  //     {
  //       path: "statusdashboard",
  //       name: "Status Dashboard",
  //       component: () => import("@/views/notification/index"),
  //       meta: { title: "カスタマーサポート", icon: "el-icon-s-management" },
  //     },
  //   ],
  // },

  // {
  //   path: "/form",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Add Account",
  //       component: () => import("@/views/form/index"),
  //       meta: { title: "Add Account", icon: "form" },
  //     },
  //   ],
  // },

  // {
  //   path: "/nested",
  //   component: Layout,
  //   redirect: "/nested/menu1",
  //   name: "Nested",
  //   meta: {
  //     title: "Nested",
  //     icon: "nested",
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: () => import("@/views/nested/menu1/index"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "Menu1" },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: () => import("@/views/nested/menu1/menu1-1"),
  //           name: "Menu1-1",
  //           meta: { title: "Menu1-1" },
  //         },
  //         {
  //           path: "menu1-2",
  //           component: () => import("@/views/nested/menu1/menu1-2"),
  //           name: "Menu1-2",
  //           meta: { title: "Menu1-2" },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-1"),
  //               name: "Menu1-2-1",
  //               meta: { title: "Menu1-2-1" },
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-2"),
  //               name: "Menu1-2-2",
  //               meta: { title: "Menu1-2-2" },
  //             },
  //           ],
  //         },
  //         {
  //           path: "menu1-3",
  //           component: () => import("@/views/nested/menu1/menu1-3"),
  //           name: "Menu1-3",
  //           meta: { title: "Menu1-3" },
  //         },
  //       ],
  //     },
  //     {
  //       path: "menu2",
  //       component: () => import("@/views/nested/menu2/index"),
  //       name: "Menu2",
  //       meta: { title: "menu2" },
  //     },
  //   ],
  // },

  // {
  //   path: "external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "https://panjiachen.github.io/vue-element-admin-site/#/",
  //       meta: { title: "External Link", icon: "link" },
  //     },
  //   ],
  // },

  // 404 page must be placed at the end !!!
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
