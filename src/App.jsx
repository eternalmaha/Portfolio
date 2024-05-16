import styles from './App.module.css'; 
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <nav className={styles.App}>
        <Navbar /> 
        <Hero /> 
        <About /> 
      </nav>
    </>
  )
}

export default App 
