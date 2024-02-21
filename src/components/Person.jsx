import React from 'react';

const Person = ({ numberOfPeople, setNumberOfPeople }) => {
    const handleNumberOfPeopleChange = (e) => {
        const value = parseInt(e.target.value);
        setNumberOfPeople(value);
    };

    return (
        <div>
            <div className="text-center font-bold text-xl mb-4">Ingresa el número de personas:</div>
            <input
                type="number"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                className="block w-full p-2 mb-4"
            />
        </div>
    );
};

export default Person;
