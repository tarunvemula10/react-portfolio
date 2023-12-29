import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
