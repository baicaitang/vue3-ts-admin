import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  // 登录
  {
    path: "/",
    name: "Login",
    hidden: true,//隐藏
    meta: {
      title: '登录'
    },
    component: () =>
      import("../views/account/Login.vue")
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    hidden: true,//隐藏
    meta: {
      title: '注册'
    },
    component: () => import("../views/account/Register.vue"),
  },
  // 忘记密码
  {
    path: "/forget",
    name: "Forget",
    hidden: true,//隐藏
    meta: {
      title: '忘记密码'
    },
    component: () => import("../views/account/Forget.vue"),
  },
  // 后台管理-首页
  {
    path: "/index",
    name: "Index",
    meta: {
      title: '首页',
      // icon: 'icon-aside-home'
      icon: 'home'
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: '首页管理',
        },
        component: () => import("../views/home/Index.vue"),
      }
    ]
  },
  // 后台管理-管理总台
  {
    path: "/adminIndex",
    name: "AdminIndex",
    meta: {
      title: '管理总台',
      icon: 'console'
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      // 角色管理
      {
        path: "/role",
        name: "Role",
        meta: {
          title: '角色管理',
        },
        component: () => import("../views/admin/role.vue"),
      },

      {
        path: "/role",
        name: "Role",
        hidden: true,
        meta: {
          title: '角色哈哈管理',
        },
        component: () => import("../views/admin/role.vue"),
      },
      // 用户管理
      {
        path: "/user",
        name: "User",
        meta: {
          title: '用户管理',
        },
        component: () => import("../views/admin/user.vue"),
      },

    ]
  },
  {
    path: "/news",
    name: "News",
    meta: {
      title: '信息管理',
      icon: 'info'
    },
    component: () => import("../views/layout/Index.vue"),
    children: []
  },
  {
    path: "/member",
    name: "Member",
    meta: {
      title: '会员管理',
      icon: 'member'
    },
    component: () => import("../views/layout/Index.vue"),
    children: []
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: '产品管理',
      icon: 'product'
    },
    component: () => import("../views/layout/Index.vue"),
    children: []
  },
  // svg view
  {
    path: "/svgview",
    name: "SvgView",
    hidden: true,
    component: () => import("../views/SvgView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
