//npm run dev
import React from "react";

import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Services from "./sections/Services/Services.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BackToTop from "./components/BackToTop/BackToTop.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
