import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Service from './components/Service';
import About from './components/About';
import Price from './components/Price';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Service/>
      <About/>
      <Price/>
      <Contact/>

    </div>
  );
}

export default App;
