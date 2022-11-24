import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcom from './Components/Navbarcom';
import { Section1 } from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Accordioncom from './Components/Accordioncom';
import Footer from './Components/Footer';
import NavFooter from './Components/NavFooter';
function App() {
  return (
    <div className="App">
     <Navbarcom/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Accordioncom/>
     <Footer/>
     <NavFooter/>
    </div>
  );
}

export default App;
