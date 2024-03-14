import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar 'Route' también
import Colores from './components/Colores';
import OtraPagina from './components/OtraPagina';
import ParticleBackground from './components/Particle'

const App = () => {
    return (

        <Router>
            <ParticleBackground />
            <Routes>
                <Route path="/" element={<Colores />} /> {/* Utiliza 'element' en lugar de 'component' */}
                <Route path="/OtraPagina" element={<OtraPagina />} /> {/* Utiliza 'element' en lugar de 'component' */}
            </Routes>
        </Router>
    );
};

export default App;
