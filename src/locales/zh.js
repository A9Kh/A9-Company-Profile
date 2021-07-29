import zh_abouta9 from "./abouta9/zh_abouta9";
import zh_careers from "./careers/zh_careers";
import zh_contactus from "./contactus/zh_contactus";
import zh_whatwedo from "./whatwedo/zh_whatwedo";
import zh_investorresources from "./investorresources/zh_investorresources";
import zh_companyoverview from "./companyoverview/zh_companyoverview"

const zhHans_lang = {
    translation: {
        ...zh_abouta9,
        ...zh_careers,
        ...zh_contactus,
        ...zh_whatwedo,
        ...zh_investorresources,
        ...zh_companyoverview,

        // navbar
        "About Us": "关于我们",
        "What We Do": "我们所做的",
        "Careers": "职业",
        "Investor Resources": "投资者资源",
        "Contact Us": "联系我们",
        "Company Overview": "公司简介",
        // end navbar

        // footer
        label_working_hours: "工作时间",
        label_day: "周一至周日",
        label_about_us: "关于我们",
        label_company_overview: "公司简介",
        label_what_we_do: "我们所做的",
        label_a9_mall: "A9商城",
        label_delivery_and_logistic: "交付 & 物流",
        label_contact_us: "联系我们",
        address: "#211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh",
        // end footer
    }
};

export default zhHans_lang;