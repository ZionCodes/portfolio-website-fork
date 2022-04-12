import React from 'react';
import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
