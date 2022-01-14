import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import MySkills from "./MySkills/MySkills";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "../Footer/Footer";

function Portfolio() {
  return (
    <div>
      <Header />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ContactMe />
      <Footer href="/#header" />
    </div>
  );
}

export default Portfolio;
