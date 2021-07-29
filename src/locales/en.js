import en_abouta9 from "./abouta9/en_abouta9";
import en_careers from "./careers/en_careers";
import en_contactus from "./contactus/en_contactus";
import en_whatwedo from "./whatwedo/en_whatwedo";
import en_investorresources from "./investorresources/en_investorresources";
import en_companyoverview from "./companyoverview/en_companyoverview"

console.log()

const en_lang = {
    translation: {
        ...en_careers,
        ...en_abouta9,
        ...en_whatwedo,
        ...en_contactus,
        ...en_investorresources,
        ...en_companyoverview,

        // navbar
        "About Us": "About Us",
        "What We Do": "What We Do",
        "Careers": "Careers",
        "Investor Resources": "Investor Resources",
        "Contact Us": "Contact Us",
        "Company Overview": "Company Overview",
        // end navbar

        // footer
        label_working_hours: "Working Hours",
        label_day: "Mon - Sun",
        label_about_us: "About Us",
        label_company_overview: "Company overview",
        label_what_we_do: "What we do?",
        label_a9_mall: "A9 Mall",
        label_delivery_and_logistic: "Delivery & Logistic",
        label_contact_us: "Contact Us",
        address: "#211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh",
        // end footer
    }
};

export default en_lang;