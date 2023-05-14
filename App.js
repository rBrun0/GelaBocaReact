import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Contato from './components/Pages/Contato'
import Principal from './components/Pages/principal';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <Router>
            <Routes>
                <Route path="/" element={<Principal/>}></Route>
                <Route path="/Contato" element={<Contato/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}



export default App;
