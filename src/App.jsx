import './App.css'
import Navbar from './components/Navbar'
import CountryCard from './components/CountryCard'
import { useSelector } from 'react-redux';




function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <main className={darkMode ? 'dark-mode' : 'light'}>
      <Navbar />
      <img className='search-icon' src="./search.png" alt="search" />
      <CountryCard />
    </main>
  )
}

export default App
