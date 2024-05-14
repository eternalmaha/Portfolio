import styles from './App.module.css'; 
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <nav className={styles.App}>
        <Navbar /> 
      </nav>
    </>
  )
}

export default App 
