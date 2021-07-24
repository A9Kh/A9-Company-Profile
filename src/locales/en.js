import en_aboutus from "./aboutus/en_aboutus";
import en_careers from "./careers/en_careers";
import en_contactus from "./contactus/en_contactus";
import en_whatwedo from "./whatwedo/en_whatwedo";
import en_investorresources from "./investorresources/en_investorresources";

console.log()

const en_lang = {
    translation: {
        ...en_careers,
        ...en_aboutus,
        ...en_whatwedo,
        ...en_contactus,
        ...en_investorresources,
        // //Navigation
        // home: "Home",
        // services: "Services",
        // clients: "Clients",
        // projects: "Projects",
        // aboutus: "About Us",
        // contactus: "Contact Us",
        // //End Navigation
        // //Footer
        // findus: "Find us at",
        // company: "Company",
        // specialize_in: "We specialize in",
        // inquiry: "Work Inquiries",
        // //End Footer
        // explore_more: "Explore More",
        // error_message: "The page you are looking for does not exist",
        // back_home: "Go back Home",
    }
};

export default en_lang;