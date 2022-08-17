import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import ProjectsPage from "./Components/ProjectsPage";
import SkillsPage from "./Components/SkillsPage";

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
      </header>
    </div>
  );
}

export default App;
