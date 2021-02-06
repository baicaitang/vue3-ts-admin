<template>
  <a-sub-menu>
    <template #title>
      <span class="anticon">
        <SvgIcon
          :iconName="menu.meta && menu.meta.icon"
          iconClass="aside-icon"
        />
      </span>

      <span>{{ menu.meta && menu.meta.title }}</span>
    </template>
    <template v-if="menu.children.length">
      <template v-for="item in menu.children">
        <template v-if="!item.hidden">
          <!-- 不存在子级的栏目 -->
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <span>{{ item.meta && item.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <!-- 存在子级栏目,组件递归 -->
          <Menu v-else :menu="item" :key="item.path" />
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => ({}), //不能为{},必须返回一个对象
    },
  },
  components: {},
  setup() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.aside-menu {
  i.icon {
    opacity: 0.6;
    margin-right: 5px;
  }

  .ant-menu-submenu-open {
    > div {
      i.icon {
        opacity: 1;
      }
    }
  }
}
</style>