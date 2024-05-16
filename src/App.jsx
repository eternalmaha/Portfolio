import styles from './App.module.css'; 
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <>
      <nav className={styles.App}>
        <Navbar /> 
        <Hero /> 
      </nav>
    </>
  )
}

export default App 
