import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import Psicomotricita from './pages/Psicomotricita';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import './styles/App.css';
import ScrollToTop from '../src/components/ScrollToTop'; 

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/psicomotricita" element={<Psicomotricita />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
