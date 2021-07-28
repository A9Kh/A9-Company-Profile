// import Navbar from "components/Navbar";
import Navbar2 from "components/Navbar2";
// import Footer from 'components/Footer';
import Footer2 from 'components/Footer2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import ScrollToTop from "components/Scroll2Top";
import AOS from "aos"
import "aos/dist/aos.css";
import { RiArrowUpSLine } from "react-icons/ri"

//Pages
import CompanyPage from "views/companyoverview";
import AboutA9Page from "views/abouta9mall";
import WhatWeDoPage from "views/whatwedo";
import CareersPage from "views/careers";
import InvestorResourcesPage from "views/investorresources";
import ContactUsPage from "views/contactus";
import ErrorPage from "views/404";
import jobdescription from "views/jobdescription";

function App() {
  const [scroll, setscroll] = useState(false);
  const [useKhmerFont, setUseKhmerFont] = useState(false)

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      once: true,
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setscroll(true);
      }
      else {
        setscroll(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <Router>
      <div className={`flex flex-col min-h-screen overflow-hidden ${useKhmerFont ? "font-khmerFont" : ""}`}>
        < Navbar2 khmerFontActivitor={setUseKhmerFont} />

        <Fragment>
          <ScrollToTop />

          {scroll && <button className="rounded-full bg-black bg-opacity-30 active:bg-gray-300 hover:bg-gray-400 z-10 w-12 h-12 fixed m-4 md:m-8 bottom-0 right-0" onClick={handleScroll}>
            <RiArrowUpSLine className="text-5xl text-white w-full text-center" />
          </button>}

          <Switch>
            <Route exact path="/" component={CompanyPage} />
            <Route exact path="/aboutus" component={AboutA9Page} />
            <Route exact path="/whatwedo" component={WhatWeDoPage} />
            <Route exact path="/careers" component={CareersPage} />
            <Route exact path="/investorresources" component={InvestorResourcesPage} />
            <Route exact path="/contactus" component={ContactUsPage} />
            <Route exact path="/job/:id" component={jobdescription} />
            <Route path='*' exact={true} component={ErrorPage} />
          </Switch>
        </Fragment>

        <Footer2 />
      </div >
    </Router>
  );
}

export default App;