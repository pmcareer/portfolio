import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Skills from "./container/Skills/SkillsIndex";

function App() {
  return (
    <div className="content-fluid">
      <Router>
        <Navbar></Navbar>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Skills />} />
        </Routes>        
      </Router>      
    </div>
  );
}

export default App;
