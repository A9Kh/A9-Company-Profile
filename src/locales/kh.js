import kh_projects from "./projects/kh_projects";
import kh_aboutus from "./aboutus/kh_aboutus";
import kh_contactus from "./contactus/kh_contactus";

const kh_lang = {
    translation: {
        ...kh_projects,
        ...kh_aboutus,
        ...kh_contactus,
        "Welcome to React": "ស្វាគមន៍​មកកាន់ React និង i18next",
        home: "ផ្ទះ",
        services: "សេវាកម្ម",
        clients: "អតិថិជន",
        projects: "គម្រោង",
        aboutus: "អំពី​ពួក​យើង",
        contactus: "ទាក់ទង​មក​ពួក​យើង",
    }
};

export default kh_lang;