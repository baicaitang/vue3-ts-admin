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
import { defineComponent, reactive } from "vue";
import Captcha from "../../components/Captcha/index.vue";

export default defineComponent({
  name: "Forget",
  components: {
    Captcha,
  },
  setup() {
    const formConfig = reactive({});

    /**
     * promise 对象理解
     */
    const handlePromise = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("handlepromise");
        }, 1000);
        // reject("handlepromise no");
      });
    };

    const promise_01 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("promise1");
        }, 1500);
        // reject("promise1 no");
      });
    };

    const promise_02 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("promise2");
        }, 500);
        // reject("promise2 no");
      });
    };

    // handlePromise()
    //   .then((res) => {
    //     console.log(res);
    //     return promise_01();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     return promise_02();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值
    // Promise.all([promise_01(), promise_02(), handlePromise()])
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态
    Promise.race([promise_01(), promise_02(), handlePromise()])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // promise_01()
    //   .then(
    //     (res) => {
    //       console.log("promise1:" + res);
    //     }
    //     // (err) => {
    //     //   console.log("promise:" + err);
    //     // }
    //   )
    //   .catch((err) => {
    //     console.log("promise1:" + err);
    //   });

    // promise_02()
    //   .then((res) => {
    //     console.log("promise2:" + res);
    //   })
    //   .catch((err) => {
    //     console.log("promise2:" + err);
    //   });

    return { formConfig };
  },
});
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
