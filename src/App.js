import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';

function App() {
  const firstName="Lena";
  return (
    <div className="App">
      <Name />
      <Price />
      <Description />
      <Image />
      {firstName ? `hello ${firstName}` : `Hello there`}
    </div>
    
  );
}

alert("Profitez, c'est les soldes !");

export default App;
