import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Person from './Person';

const Colores = () => {
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedPerson, setSelectedPerson] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const navigate = useNavigate();

    const handleColorSelect = (color) => {
        if (!selectedPerson) {
            alert('Por favor selecciona una persona.');
            return;
        }

        const personColors = selectedColors[selectedPerson] || [];

        if (personColors.includes(color)) {
            setSelectedColors({
                ...selectedColors,
                [selectedPerson]: personColors.filter((c) => c !== color),
            });
        } else {
            setSelectedColors({
                ...selectedColors,
                [selectedPerson]: [...personColors, color],
            });
        }
    };

    const saveSelectedColors = () => {
        // localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
        // alert('Colores guardados en el localStorage.');
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
        alert('Colores guardados en el localStorage.');
        navigate('/OtraPagina');

    };

    useEffect(() => {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    }, [selectedColors]);

    const handleNumberOfPeopleChange = (e) => {
        const value = parseInt(e.target.value);
        setNumberOfPeople(value);
    };

    const people = Array.from({ length: numberOfPeople }, (_, index) => `Persona ${index + 1}`);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100">
            <div className="max-w-screen-lg w-full h-full p-4 overflow-auto">
                <div className="text-center mt-4">
                    <img src="../assets/Logo.jpeg" alt="Logo" className="w-50 h-32 mx-auto mb-4" />
                </div>

                <div className="text-center font-bold text-xl mb-4">Ingresa el número de personas:</div>
                <input
                    type="number"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    className="block w-full p-2 mb-4"
                />
                <div className="text-center font-bold text-xl mb-4">Selecciona una persona:</div>
                <select
                    value={selectedPerson}
                    onChange={(e) => setSelectedPerson(e.target.value)}
                    className="block w-full p-2 mb-4"
                >
                    <option value="">Selecciona una persona...</option>
                    {people.map((person, index) => (
                        <option key={index} value={person}>{person}</option>
                    ))}
                </select>
                <div className="text-center font-bold text-xl mb-4">Selecciona uno o más colores</div>
                <br />
                <div className="grid grid-cols-5 gap-4 justify-items-center">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <img
                            key={i}
                            src={`../assets/Color${i + 1}.jpg`}
                            alt={`Color-${i}`}
                            className={`w-32 h-32 cursor-pointer ${selectedColors[selectedPerson] && selectedColors[selectedPerson].includes(`Color${i + 1}`) ? 'border-blue-500' : 'border-gray-300'
                                }`}
                            onClick={() => handleColorSelect(`Color${i + 1}`)}
                        />
                    ))}
                </div>

                <br />
                <br />
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
