import en_aboutus from "./aboutus/en_aboutus";
import en_clients from "./clients/en_clients";
import en_contactus from "./contactus/en_contactus";
import en_home from "./home/en_home";
import en_projects from "./projects/en_projects";
import en_services from "./services/en_services";

console.log()

const en_lang = {
    translation: {
        ...en_home,
        ...en_clients,
        ...en_aboutus,
        ...en_projects,
        ...en_contactus,
        ...en_services,
        //Navigation
        home: "Home",
        services: "Services",
        clients: "Clients",
        projects: "Projects",
        aboutus: "About Us",
        contactus: "Contact Us",
        //End Navigation
        //Footer
        findus: "Find us at",
        company: "Company",
        specialize_in: "We specialize in",
        inquiry: "Work Inquiries",
        //End Footer
        explore_more: "Explore More",
        error_message: "The page you are looking for does not exist",
        back_home: "Go back Home",
    }
};

export default en_lang;