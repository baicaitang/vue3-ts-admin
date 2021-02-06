<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :rules="rules_form"
        :model="account_form"
        @finish="handleFinish"
      >
        <a-form-item name="username">
          <label>用户名</label>
          <a-input
            type="text"
            autocomplete="off"
            v-model:value="account_form.username"
          />
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input
            type="password"
            autocomplete="off"
            v-model:value="account_form.password"
          />
        </a-form-item>
        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input
            type="password"
            autocomplete="off"
            v-model:value="account_form.passwords"
          />
        </a-form-item>
        <a-form-item name="code">
          <label>验证码</label>
          <a-row type="flex" :gutter="15">
            <a-col :span="14">
              <a-input
                type="text"
                autocomplete="off"
                maxLength="6"
                v-model:value="account_form.code"
              />
            </a-col>
            <a-col :span="10">
              <a-button
                block
                type="primary"
                class="get-Verification-Code"
                :loading="button_loading"
                :disabled="button_disabled"
                @click="getCode"
                >{{ button_text }}</a-button
              >
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <Captcha />
        </a-form-item>

        <a-form-item class="submit">
          <a-button block type="primary" html-type="submit"> 注册 </a-button>
        </a-form-item>
      </a-form>

      <div class="text-center">
        <router-link tag="a" to="/forget" class="color-white f-s-12"
          >忘记密码</router-link
        >
        |
        <router-link tag="a" to="/" class="color-white f-s-12"
          >登录</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
// import * as verif from '@/utils/verification';     verif.checkPhone(value)
import { defineComponent, reactive, toRefs } from "vue";
import Captcha from "@/components/Captcha/index.vue";
import {
  checkPhone as phone,
  checkPassword as password,
  checkCode as code,
} from "@/utils/verification";
import { message } from "ant-design-vue";

export default defineComponent({
  name: "Register",
  components: {
    Captcha,
  },
  setup() {
    /*校验用户名*/
    let checkUserName = async (rule, value, callback) => {
      // console.log(value);

      if (!value) {
        // 校验为空时
        return Promise.reject("请输入用户名");
      } else if (!phone(value)) {
        //手机号错误
        return Promise.reject("请输入11位数字的手机号");
      } else {
        return Promise.resolve();
      }
    };
    /*校验密码*/
    let checkPassword = async (rule, value, callback) => {
      const pws = formConfig.account_form.passwords;
      if (!value) {
        // 校验为空时
        return Promise.reject("请输入密码");
      } else if (!password(value)) {
        //手机号错误
        return Promise.reject("请输入6-20位数字和英文");
      } else if (pws && value && pws !== value) {
        // 两次密码不一致

        return Promise.reject("两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };
    /*校验确认密码*/
    let checkPasswords = async (rule, value, callback) => {
      const pw = formConfig.account_form.password;
      if (!value) {
        // 校验为空时
        return Promise.reject("请输入确认密码");
      } else if (!password(value)) {
        //手机号错误
        return Promise.reject("请输入6-20位数字+英文");
      } else if (pw && value && pw !== value) {
        // 两次密码不一致
        return Promise.reject("两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };
    /*校验确认密码*/
    let checkCode = async (rule, value, callback) => {
      if (!value) {
        // 校验为空时
        return Promise.reject("请输入验证码");
      } else if (!code(value)) {
        //手机号错误
        return Promise.reject("请输入6位数字+英文");
      } else {
        return Promise.resolve();
      }
    };

    const formConfig = reactive({
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rules_form: {
        // 自定义验证
        username: [{ validator: checkUserName, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwords: [{ validator: checkPasswords, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
      },
    });
    const dataItem = reactive({
      button_text: "获取验证码",
      button_loading: false,
      button_disabled: false,
      sec: 3,
      timer: null, //定时器
    });

    const form = toRefs(formConfig);
    const data = toRefs(dataItem);

    // 提交表单
    const handleFinish = (value) => {
      console.log(value);
    };

    // 获取验证码
    const getCode = () => {
      // 用户名不存在情况
      if (!formConfig.account_form.username) {
        message.info("用户名不存在");
        return false;
      }

      // 先清除定时器
      dataItem.timer && clearInterval(dataItem.timer);

      dataItem.timer = setInterval(() => {
        const s = dataItem.sec--;
        dataItem.button_text = `${s}秒`;

        if (s <= 0) {
          clearInterval(dataItem.timer);
          dataItem.button_text = "重新获取";
        }
      }, 1000);
    };

    return { ...form, ...data, handleFinish, getCode };
  },
});
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
