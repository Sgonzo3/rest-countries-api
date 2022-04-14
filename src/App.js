import './App.css';
import CountryList from './CountryList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Where in the World?</h1>
        <button className='theme-button'>Dark Mode</button>
      </header>
      <main>
        <CountryList/>
      </main>
    </div>
  );
}

export default App;
