<template >
  <div class="content">
    专门展示已有的svg图片以及名称:
    <div class="svgList">
      <div class="svgContent" v-for="(item, index) in svgList" :key="index">
        <SvgIcon :iconName="item"></SvgIcon>
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/Svgicon/index";
export default {
  name: "SvgView",
  data() {
    return {
      svgList: [],
    };
  },
  components: { SvgIcon },
  mounted() {
    this.getSvg();
  },
  methods: {
    getSvg() {
      const req = require.context("@/assets/svg", false, /\.svg$/);
      let svgList = req.keys().map((value) => {
        return value.substring(0, value.length - 4).slice(2);
      });
      this.svgList = svgList;
    },
  },
};
</script>

<style lang="scss" scoped>
.svgList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .svgContent {
    width: 120px;
    padding: 15px;
  }
}
</style>
