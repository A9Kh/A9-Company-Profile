import zh_aboutus from "./aboutus/zh_aboutus";
import zh_contactus from "./contactus/zh_contactus";

const zhHans_lang = {
    translation: {
        ...zh_aboutus,
        ...zh_contactus,
        "Welcome to React": "欢迎使用 React 和 react-i18next",
        home: "家",
        services: "服务",
        clients: "客户",
        projects: "项目",
        aboutus: "关于我们",
        contactus: "联系我们",
    }
};

export default zhHans_lang;