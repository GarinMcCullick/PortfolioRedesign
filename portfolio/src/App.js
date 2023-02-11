import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import ProjectsPage from "./Components/ProjectsPage";
import SkillsPage from "./Components/SkillsPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
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
