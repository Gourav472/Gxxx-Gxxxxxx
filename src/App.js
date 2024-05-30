import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Dextools from './components/Dextools';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Place from './components/Place';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Latest from './components/Latest';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });

  }, [])
  return (
    < div className=' overflow-hidden'>
      <Navbar />
      <Header />
      <Dextools />
      <About />
      <Tokenomics />
      <Utility />
      <Place />
      <Ecosystem />
      <Roadmap />
      <Latest />
      <Dextools />
      <Footer />
    </div>
  );
}

export default App;
