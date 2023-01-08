import { createGettext } from "vue3-gettext";
import translations from "../assets/language/translations.json";

/*
1. 安装 `pnpm i vue3-gettext@next` // https://github.com/jshmrtn/vue3-gettext
2. 配置
    2.1. 新建配置文件 gettext.config.json // https://jshmrtn.github.io/vue3-gettext/extraction.html
        文档说用 gettext.config.js 但是执行提取时报(大概是 ES module 和 CommonJS modules 冲突，
        我一个后端还不知道怎么解决，看源码还支持 json loader 就改为了 json)
        需要保证 output 的 path 文件夹存在，不然提取后无法保存
    2.2. 可选，在 package.json 中配置 scripts:
        - vue-gettext-extract 按 gettext.config.json 配置文件提取出 pot/po 文件
        - vue-gettext-compile 按 gettext.config.json 配置文件将 po 文件编译为 json
3. 代码配置 参考本文件传入 createGettext 的 options 得到 gettext 实例，然后在 main.ts 中 use
4. 使用
    vue 中使用 $gettext 标记要翻译的文本，运行时会自动翻译(因为已经在 main.ts 中 use 了 gettext)
5. 提取 `pnpm vue-gettext-extract`
6. 翻译 po 文件
7. 编译 po 为 json `pnpm vue-gettext-compile`
8. 运行
9. 运行时切换语言
    - 参考[官方 demo](https://github.com/jshmrtn/vue3-gettext/blob/master/dev/components/LanguageSelect.vue)
    - 参考 src/components/Footer.vue 先通过 useGettext 拿到 language 实例，然后改变它的 current 属性即可
*/

const gettext = createGettext({
    availableLanguages: {   // 需要手动指定支持的语言
        "en": "English",    // key: name
        "zh": "中文",       // 可能是框架还不知道 `zh` 用 zh(中文) 怎么写出来吧，所以要自己写出`中文`这个名字来
    },
    defaultLanguage: "zh",  // 指定默认的语言
    translations,           // 加载的翻译
    silent: true,           // 不打警告日志 比如 使用的语言不存在 key 不存在翻译 直接显示原文
})


export { gettext };
