import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeveloperSnapshot from "./components/DeveloperSnapshot";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ProblemSolving from "./components/ProblemSolving";
import LearningJourney from "./components/LearningJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <DeveloperSnapshot />

        <TechStack />

        <Projects />

        <ProblemSolving />

        <LearningJourney />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
