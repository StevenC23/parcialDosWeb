import logo from './logo.svg';
import './App.css';
import EstiloPinterest from './components/EstiloPinterest.jsx';
import HeaderLarge from './components/HeaderLarge.jsx';
import HeaderSmall from './components/HeaderSmall.jsx'

function App() {
  return (
    <div>
      <HeaderLarge/>
      <HeaderSmall/>
      <EstiloPinterest/>
    </div>
  );
}

export default App;
