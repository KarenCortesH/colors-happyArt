import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Colores from './components/Colores'; // Cambia la importación a 'Colores'



const App = () => {
    return (
        <Router>
            <Colores></Colores>
        </Router>
    );
};

export default App;
