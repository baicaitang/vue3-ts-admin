<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>原密码</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>修改密码</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <Captcha />
        </a-form-item>

        <a-form-item class="submit">
          <a-button block type="primary" html-type="submit"> 修改 </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center">
        <router-link tag="a" to="/" class="color-white f-s-12"
          >登录</router-link
        >
        |
        <router-link tag="a" to="/register" class="color-white f-s-12"
          >注册</router-link
        >
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive } from "vue";
import Captcha from "../../components/Captcha/index.vue";

export default defineComponent({
  name: "Forget",
  components: {
    Captcha,
  },
  setup(props) {
    const formConfig = reactive({});

    return { formConfig };
  },
});
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
