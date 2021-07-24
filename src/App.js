import Navbar from "components/Navbar";
import Footer from 'components/Footer';
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
import Home from "views/home";
import ServicesPage from "views/services";
import ClientPage from "views/clients";
import ProjectsPage from "views/projects";
import AboutPage from "views/aboutus";
import ContactPage from "views/contactus";
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
        < Navbar />

        <Fragment>
          <ScrollToTop />

          {scroll && <button className="rounded-full active:bg-gray-300 hover:bg-gray-400 z-10 w-12 h-12 fixed m-4 md:m-8 bottom-0 right-0 text-xl" onClick={handleScroll}>☝️</button>}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/clients" component={ClientPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/aboutus" component={AboutPage} />
            <Route exact path="/contactus" component={ContactPage} />
            <Route path='*' exact={true} component={ErrorPage} />
          </Switch>
        </Fragment>

        <Footer />
      </div >
    </Router>
  );
}

export default App;