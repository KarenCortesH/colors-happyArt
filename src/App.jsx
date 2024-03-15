import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar 'Route' también
import Colores from './components/Colores';
import ListColors from './components/ListColors';
import ParticleBackground from './components/Particle'

const App = () => {
    return (

        <Router>
            <ParticleBackground />
            <Routes>
                <Route path="/" element={<Colores />} /> {/* Utiliza 'element' en lugar de 'component' */}
                <Route path="/ListColors" element={<ListColors />} /> {/* Utiliza 'element' en lugar de 'component' */}
            </Routes>
        </Router>
    );
};

export default App;
