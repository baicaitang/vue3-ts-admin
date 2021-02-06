import { createI18n } from 'vue-i18n';

const i18n = new createI18n({
    locale: 'ch',//默认语言
    messages: {
        ch: require("./ch.js"),
        en: require("./en.js"),
    }
});

export default i18n;