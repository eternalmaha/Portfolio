import styles from './App.module.css'; 
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <>
      <nav className={styles.App}>
        <Navbar /> 
        <Hero /> 
        <About /> 
        <Experience/>
        <Projects /> 
      </nav>
    </>
  )
}

export default App 
