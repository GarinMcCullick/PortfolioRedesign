import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Nav";
import SkillsPage from "./Components/SkillsPage";
import Footer from "./Components/Footer";
import PortfolioPage from "./Components/PortfolioPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        <PortfolioPage />
        <ContactPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
