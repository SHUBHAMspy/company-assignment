import { useRef } from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/footer/Footer';
import Goal from './components/goal/Goal';
import Hero from './components/hero/Hero';
import Accomodation from './sections/accomodationSection/Accomodation';
import Agri from './sections/agriSection/Agri';
import Fmcg from './sections/fmcgSection/Fmcg';
import OnlineMart from './sections/onlineMartSection/OnlineMart';
import Packaging from './sections/pacakgingSection/Packaging';
import Technology from './sections/technologySection/Technology';

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'})
  }
  return (
    <>
      <Header/>
      <Hero handleClick={handleClick}/>
      <Goal ref={ref}/>
      <Technology/>
      <Accomodation/>
      <Packaging/>
      <Fmcg/>
      <Agri/>
      <OnlineMart/>
      <Footer/>
    </>
  );
}

export default App;
