<template>
  <div id="header">
    <div class="header-collapsed" @click="collapsedBtn">
      <SvgIcon iconName="collapsed" iconClass="header-collapsed-svg"></SvgIcon>
    </div>
    <div class="header-menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <img alt="" src="../../../assets/face.png" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-item">
                <SvgIcon iconName="h_user" iconClass="header-menu-svg" />
                197343353
              </div>
            </a-menu-item>
            <a-menu-item key="1">
              <div class="menu-item">
                <SvgIcon iconName="h_lang" iconClass="header-menu-svg" />
                <span
                  class="lang"
                  v-for="item in lang"
                  :key="item.value"
                  @click="changeLang(item.value)"
                  :class="[lang_current == item.value ? 'current' : '']"
                >
                  {{ item.label }}
                </span>
              </div>
            </a-menu-item>
            <a-menu-item key="2">
              <div class="menu-item">
                <SvgIcon iconName="h_exit" iconClass="header-menu-svg" />
                {{ $t("header_menu.logout") }}
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, getCurrentInstance } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Header",
  components: {},
  setup() {
    const { emit } = getCurrentInstance();

    // 扩展语言
    const { locale } = useI18n({ useScope: "global" });

    const data = reactive({
      lang: [
        { label: "中 ", value: "ch" },
        { label: " 英", value: "en" },
      ],
      lang_current: "ch",
    });

    const changeLang = (lang) => {
      locale.value = lang;
      data.lang_current = lang;
    };

    const collapsedBtn = () => {
      // 给父组件传值
      emit("collapsed", { handleCollapsed: "handleCollapsed" });
    };

    return {
      ...toRefs(data),
      changeLang,
      collapsedBtn,
    };
  },
};
</script>
<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
}
.header-collapsed {
  float: left;
  cursor: pointer;
}
.header-menu {
  float: right;
  margin-top: 15px;
  border-radius: 100px;

  img {
    border-radius: 100px;
    width: 30px;
  }
}
.menu-item {
  padding: 0px 5px;
  font-size: 14px;
  font-family: "黑体";
  color: #333;

  .lang {
    margin-left: 5px;
  }
  .current {
    color: rgb(54, 54, 216);
  }
}
</style>
