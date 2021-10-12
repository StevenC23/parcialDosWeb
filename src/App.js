import logo from './logo.svg';
import './App.css';
import EstiloPinterest from './components/EstiloPinterest.jsx';
import HeaderLarge from './components/HeaderLarge.jsx';
import HeaderSmall from './components/HeaderSmall.jsx'
import MenuFooter from './components/MenuFooter';
import UseMediaQuery from './components/UseMediaQuery';

function App() {
  const isDesktop = UseMediaQuery('(min-width: 425px)');

  return (
    <div>
      <HeaderLarge isDesktop={isDesktop} />
      <HeaderSmall isDesktop={isDesktop} />
      <MenuFooter isDesktop={isDesktop} />
      <EstiloPinterest />
    </div>
  );
}

export default App;
