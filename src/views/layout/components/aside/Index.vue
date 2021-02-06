<template>
  <div>
    <div class="logo">
      <div
        class="img"
        v-if="collapsed"
        style="background-color: rgb(233, 233, 135)"
      ></div>
      <div class="img" v-else style="background-color: rgb(31, 31, 94)"></div>
    </div>
    <a-menu
      class="aside-menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      @click="selectMenu"
      @openChange="openMenu"
    >
      <template v-for="item in routers">
        <template v-if="!item.hidden">
          <!-- 一级，不存在children -->

          <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
            <router-link :to="item.children[0].path">
              <span class="anticon">
                <SvgIcon
                  :iconName="item.meta && item.meta.icon"
                  iconClass="aside-icon"
                />
                <!-- <i
                class="icon icon-size-21 mb--5"
                :class="item.meta && item.meta.icon"
              ></i> -->
              </span>

              <span>{{
                item.children[0].meta && item.children[0].meta.title
              }}</span>
            </router-link>
          </a-menu-item>
          <!-- 二级，存在子级 -->
          <Menu v-else :menu="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
// 组件
import Menu from "./Menu";
// 局部组件
// import SvgIcon from "@/components/Svgicon/index.vue";

export default {
  name: "Aside",
  components: { Menu },
  props: { collapsed: { type: String, default: false } },
  setup() {
    // 路由
    const { options } = useRouter();
    const routers = options.routes; //不需要响应的数据
    console.log();

    // 响应的数据
    const data = reactive({
      selectedKeys: localStorage.getItem("selectedKeys")
        ? [localStorage.getItem("selectedKeys")]
        : [],
      openKeys: localStorage.getItem("openKeys")
        ? JSON.parse(localStorage.getItem("openKeys"))
        : [],
      // logo: require("@/assets/images/"),
    });

    // 点击 MenuItem 调用此函数
    const selectMenu = ({ item, key, keyPath }) => {
      data.selectedKeys = [key];
      // 本地缓存
      localStorage.setItem("selectedKeys", key);
    };

    // SubMenu 展开/关闭的回调
    const openMenu = (openkeys) => {
      data.openKeys = openkeys;

      // 本地缓存
      localStorage.setItem("openKeys", JSON.stringify(openkeys));
    };

    // 检测是否只有一个子路由
    const hasOnlyChildren = (data) => {
      // console.log(data.children);
      // 不存在子级
      if (!data.children) {
        return false;
      }
      // 过滤隐藏的路由
      const routers = data.children.filter((item) =>
        item.hidden ? false : true
      );

      // 判断最终结果
      if (routers.length === 1) {
        return true;
      }

      return false;
    };

    return {
      ...toRefs(data),
      routers,
      selectMenu,
      openMenu,
      hasOnlyChildren,
    };
  },
};
</script>
<style lang="scss" scoped>
.logo {
  padding: 24px 0 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  .img {
    display: inline-block;
    height: 50px;
    width: 80%;
    background-color: rgb(20, 38, 54);
  }
}
.aside-menu {
  i.icon {
    opacity: 0.6;
    margin-right: 5px;
  }
  .ant-menu-item-selected {
    i.icon {
      opacity: 1;
    }
  }
}
</style>
