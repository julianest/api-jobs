import JobCard from '../components/JobCard.js';
import {Contenedor, Ficha} from "../styledComponent.js";
// import '../styles/App.css';
import "../styles/index.css";
import bgdesktop from "../img/bgdesktop.svg";
import Navbar from '../components/Navbar.js';


function App() {
  return (
    <div className="fondo2">
        <img src={bgdesktop} className="imgFondo2"/>
        <Contenedor>
          {/* <Navbar/> */}
          <JobCard/>
        </Contenedor>
      
      
    </div>
  );
}

export default App;
