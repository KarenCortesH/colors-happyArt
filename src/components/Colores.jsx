import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Person from './Person';

const Colores = () => {
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedPerson, setSelectedPerson] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [selectedTable, setSelectedTable] = useState('');
    const navigate = useNavigate();

    const handleColorSelect = (color) => {
        if (!selectedPerson || !selectedTable) {
            alert('Por favor selecciona una persona y una mesa.');
            return;
        }

        const personColors = selectedColors[selectedTable] || {};

        if (personColors[selectedPerson]?.includes(color)) {
            const updatedPersonColors = { ...personColors };
            updatedPersonColors[selectedPerson] = updatedPersonColors[selectedPerson].filter((c) => c !== color);
            setSelectedColors({
                ...selectedColors,
                [selectedTable]: updatedPersonColors,
            });
        } else {
            const updatedPersonColors = { ...personColors };
            updatedPersonColors[selectedPerson] = [...(updatedPersonColors[selectedPerson] || []), color];
            setSelectedColors({
                ...selectedColors,
                [selectedTable]: updatedPersonColors,
            });
        }
    };

    const saveSelectedColors = () => {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
        alert('Colores Guardados');
        navigate('/ListColors');
    };

    useEffect(() => {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    }, [selectedColors]);

    const handleNumberOfPeopleChange = (e) => {
        const value = parseInt(e.target.value);
        setNumberOfPeople(value);
    };

    const handleTableChange = (e) => {
        setSelectedTable(e.target.value);
    };

    const people = Array.from({ length: numberOfPeople }, (_, index) => `Persona ${index + 1}`);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100">
            <div className="max-w-screen-lg w-full h-full p-4 overflow-auto">
                <div className="text-center mt-4">
                    <img src="../assets/Logo.jpeg" alt="Logo" className="w-50 h-32 mx-auto mb-4" />
                </div>

                <div className="flex flex-wrap justify-between mb-4">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <select
                            value={selectedTable}
                            onChange={handleTableChange}
                            className="block italic w-full p-2"
                        >
                            <option value="">Selecciona una mesa</option>
                            <option value="Mesa 1">Mesa 1</option>
                            <option value="Mesa 2">Mesa 2</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <input
                            type="number"
                            value={numberOfPeople}
                            onChange={handleNumberOfPeopleChange}
                            className="block italic w-full p-2"
                            placeholder="Ingresa el numero de personas"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <select
                            value={selectedPerson}
                            onChange={(e) => setSelectedPerson(e.target.value)}
                            className="block italic w-full p-2"
                        >
                            <option value="">Selecciona una persona</option>
                            {people.map((person, index) => (
                                <option key={index} value={person}>{person}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-center font-bold text-lg mb-4">Elige los colores que necesitas</div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
                    {Array.from({ length: 32 }).map((_, i) => (
                        <img
                            key={i}
                            src={`../assets/Color${i + 1}.jpg`}
                            alt={`Color-${i}`}
                            className={`w-24 md:w-32 h-24 md:h-32 cursor-pointer ${selectedColors[selectedTable] && selectedColors[selectedTable][selectedPerson] && selectedColors[selectedTable][selectedPerson].includes(`Color${i + 1}`) ? 'border-blue-500' : 'border-gray-300'
                                }`}
                            onClick={() => handleColorSelect(`Color${i + 1}`)}
                        />
                    ))}
                </div>
                <div className="text-center mt-4">
                    <button onClick={saveSelectedColors} type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded">
                        Guardar Colores
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Colores;
