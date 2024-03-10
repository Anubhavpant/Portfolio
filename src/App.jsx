import styles from './App.module.css';
import Navbar from './components/navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'; 
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <MainSection/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
