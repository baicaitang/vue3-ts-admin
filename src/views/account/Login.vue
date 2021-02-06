<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <div id="my-captcha" class="nc-container my-captcha"></div>
        </a-form-item>

        <a-form-item class="submit">
          <a-button block type="primary" html-type="submit"> 登录 </a-button>
        </a-form-item>
      </a-form>
      <a-button block type="primary" @click="submit"> test-axios </a-button>

      <div class="text-center">
        <router-link tag="a" to="/forget" class="color-white f-s-12"
          >忘记密码</router-link
        >
        |
        <router-link tag="a" to="/register" class="color-white f-s-12"
          >注册</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, getCurrentInstance } from "vue";
import { GetCode } from "@/api/account";

import "./captcha.js";
export default {
  name: "Login",
  setup() {
    // ctx 在开发环境可用，生产环境不可用 ,proxyS
    // const { proxy } = getCurrentInstance();
    // console.log(proxy);

    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    });

    onMounted(() => {
      var nc_token = [
        "FFFF0N00000000009C36",
        new Date().getTime(),
        Math.random(),
      ].join(":");
      var NC_Opt = {
        renderTo: "#my-captcha",
        appkey: "FFFF0N00000000009C36",
        scene: "nc_login",
        token: nc_token,
        customWidth: 300,
        trans: { key1: "code0" },
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {
          // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
          // 'get_captcha': '//b.com/get_captcha/ver3',
          // 'get_captcha': '//pin3.aliyun.com/get_captcha/ver3'
          // 'get_img': '//c.com/get_img',
          // 'checkcode': '//d.com/captcha/checkcode.jsonp',
          // 'umid_Url': '//e.com/security/umscript/3.2.1/um.js',
          // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
          // 'umid_serUrl': 'https://g.com/service/um.json'
        },
        callback: function (data) {
          window.console && console.log(nc_token);
          window.console && console.log(data.csessionid);
          window.console && console.log(data.sig);
        },
      };
      var nc = new noCaptcha(NC_Opt);
      nc.upLang("cn", {
        _startTEXT: "请按住滑块，拖动到最右边",
        _yesTEXT: "验证通过",
        _error300:
          '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
        _errorNetwork:
          '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>',
      });
    });

    const submit = () => {
      // proxy.$axios.post("/login");

      GetCode({ id: 123 }).then((res) => {});
    };

    return { formConfig, submit };
  },
};
</script>


<style lang="scss" scoped>
@import "./index";
</style>
