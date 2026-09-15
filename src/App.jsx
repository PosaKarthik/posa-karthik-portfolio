import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeveloperSnapshot from "./components/DeveloperSnapshot";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ProblemSolving from "./components/ProblemSolving";
import LearningJourney from "./components/LearningJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProblemDetails from "./pages/ProblemDetails";

function Home() {
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

function App() {
  return (
    <BrowserRouter basename="/posa-karthik-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/problems/:id" element={<ProblemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
