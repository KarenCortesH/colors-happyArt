import React, { useState, useEffect } from 'react';
import Person from './Person';

const Colores = () => {
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedPerson, setSelectedPerson] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(0);

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

    useEffect(() => {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    }, [selectedColors]);

    const handleNumberOfPeopleChange = (e) => {
        const value = parseInt(e.target.value);
        setNumberOfPeople(value);
    };

    const people = Array.from({ length: numberOfPeople }, (_, index) => `Persona ${index + 1}`);

    return (
        <div>
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
            <div className="grid grid-cols-5 gap-4 justify-items-center">
                {Array.from({ length: 10 }).map((_, i) => (
                    <img
                        key={i}
                        src={`../assets/Color${i + 1}.jpg`}
                        alt={`color-${i}`}
                        className={`w-32 h-32 cursor-pointer ${selectedColors[selectedPerson] && selectedColors[selectedPerson].includes(`color${i + 1}`) ? 'border-blue-500' : 'border-gray-300'
                            }`}
                        onClick={() => handleColorSelect(`color${i + 1}`)}
                    />
                ))}
            </div>
            <div className="mt-4">
                <div className="font-medium">Colores seleccionados para {selectedPerson}:</div>
                <div className="flex flex-wrap">
                    {selectedColors[selectedPerson] &&
                        selectedColors[selectedPerson].map((color, index) => (
                            <div key={index} className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full m-1">
                                {color}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Colores;
