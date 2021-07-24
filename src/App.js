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

//Pages
import AboutUsPage from "views/aboutus";
import WhatWeDoPage from "views/whatwedo";
import CareersPage from "views/careers";
import InvestorResourcesPage from "views/investorresources";
import ContactUsPage from "views/contactus";
import ErrorPage from "views/404";

function App() {
  const [scroll, setscroll] = useState(false)

  useEffect(() => {
    AOS.init({
      delay: 0,
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
      <div className="flex flex-col min-h-screen overflow-hidden">
        < Navbar2 />

        <Fragment>
          <ScrollToTop />

          {scroll && <button className="rounded-full active:bg-gray-300 hover:bg-gray-400 z-10 w-12 h-12 fixed m-4 md:m-8 bottom-0 right-0 text-xl" onClick={handleScroll}>☝️</button>}

          <Switch>
            <Route exact path="/" component={AboutUsPage} />
            <Route exact path="/whatwedo" component={WhatWeDoPage} />
            <Route exact path="/careers" component={CareersPage} />
            <Route exact path="/investorresources" component={InvestorResourcesPage} />
            <Route exact path="/contactus" component={ContactUsPage} />
            <Route path='*' exact={true} component={ErrorPage} />
          </Switch>
        </Fragment>

        <Footer2 />
      </div >
    </Router>
  );
}

export default App;