import './App.css';
import Header from './components/common/header/Header';
import Goal from './components/goal/Goal';
import Hero from './components/hero/Hero';
import Accomodation from './sections/accomodationSection/Accomodation';
import Agri from './sections/agriSection/Agri';
import Fmcg from './sections/fmcgSection/Fmcg';
import OnlineMart from './sections/onlineMartSection/OnlineMart';
import Packaging from './sections/pacakgingSection/Packaging';
import Technology from './sections/technologySection/Technology';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Goal/>
      <Technology/>
      <Accomodation/>
      <Packaging/>
      <Fmcg/>
      <Agri/>
      <OnlineMart/>
    </div>
  );
}

export default App;
