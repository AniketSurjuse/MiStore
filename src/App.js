import "../src/App.css"
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";


const  a = "Aniket";

function App(){
return(
  <Router>
    <PreNavbar/>
    <Navbar/>
    <h1>This is from App {a}</h1>

  </Router>
);
}
export default App