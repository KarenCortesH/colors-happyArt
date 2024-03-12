import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OtraPagina = () => {
    const [selectedColors, setSelectedColors] = useState({});

    useEffect(() => {
        const colorsFromLocalStorage = JSON.parse(localStorage.getItem('selectedColors'));
        if (colorsFromLocalStorage) {
            setSelectedColors(colorsFromLocalStorage);
        }
    }, []);

    const handleClear = () => {
        setSelectedColors({});
        localStorage.removeItem('selectedColors');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mt-4">
                <img src="../assets/Logo.jpeg" alt="Logo" className="w-50 h-32 mx-auto mb-4" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Listado de Colores por Mesa:</h1>
            {Object.keys(selectedColors).map(table => (
                <div key={table}>
                    <h2 className="text-2xl font-bold mb-2">{table}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        {Object.keys(selectedColors[table]).map(person => (
                            <div key={person} className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">{person}</h3>
                                <div className="flex flex-wrap">
                                    {selectedColors[table][person].map((color, index) => (
                                        <div key={index} className="px-4 py-4 bg-indigo-300 text-black-900 rounded-full m-1">
                                            {color}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="text-center mt-4 mb-4">
                <Link
                    to="/"
                    onClick={handleClear}
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded"
                    style={{ marginBottom: '1rem' }}
                >
                    Regresar
                </Link>
            </div>
        </div>
    );
};

export default OtraPagina;
