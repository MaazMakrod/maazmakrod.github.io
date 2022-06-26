import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import Entry from './components/Entry';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  useEffect(() => { AOS.init() });

  return (
    <div>
      <NavBar />
      <Entry />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
