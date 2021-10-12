import logo from './logo.svg';
import './App.css';
import EstiloPinterest from './components/EstiloPinterest.jsx';
import HeaderLarge from './components/HeaderLarge.jsx';
import HeaderSmall from './components/HeaderSmall.jsx'
import MenuFooter from './components/MenuFooter';

function App() {
  return (
    <div>
      <HeaderLarge/>
      <HeaderSmall/>
      <MenuFooter/>
      <EstiloPinterest/>
    </div>
  );
}

export default App;
