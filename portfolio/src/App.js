import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import ProjectsPage from "./Components/ProjectsPage";
import SkillsPage from "./Components/SkillsPage";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {width > breakPoint ? <Nav /> : <></>}
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
