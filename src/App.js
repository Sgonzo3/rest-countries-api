import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './CountryList';
import logo from './logo.svg';

function App() {
  const[theme, setTheme] = useState('dark');

  const handleTheme = (event) => {
    setTheme(prev => prev === `dark` ? `light` : `dark`);
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App themed">
      <header className="header themed">
        <h1 className="header-title themed">Where in the World?</h1>
        <button className='theme-button themed' onClick={handleTheme}>
          {theme === 'dark' ? "🌄 Light" : "🌙 Dark"} Mode
        </button>
      </header>
      <main>
        <CountryList/>
      </main>
    </div>
  );
}

export default App;
