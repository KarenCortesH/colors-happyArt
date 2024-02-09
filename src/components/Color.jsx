import React from 'react'
import { useState } from 'react';


const Color = () => {
    // Definimos un estado para almacenar los colores seleccionados
    const [selectedColors, setSelectedColors] = useState([]);
    // Función para manejar el evento de selección de color
    const handleColorSelect = (color) => {
        if (selectedColors.includes(color)) {
            // Si el color ya está seleccionado, lo eliminamos de la lista
            setSelectedColors(selectedColors.filter((c) => c !== color));
        } else {
            // Si el color no está seleccionado, lo agregamos a la lista
            setSelectedColors([...selectedColors, color]);
        }
    };
    return (
        <div className="max-w-screen-md mx-auto">
            <div className="text-center font-bold text-xl mb-4">Selecciona uno o más colores</div>
            <div className="grid grid-cols-5 gap-4 justify-items-center">



                {/* Renderizamos las 10 imágenes de colores */}
                
                {Array.from({ length: 10 }).map((_, i) => (
                    <img
                        key={i}
                        src={`../assets/Color${i + 1}.jpg`}
                        alt={`color-${i}`}
                        className={`w-32 h-32 cursor-pointer ${selectedColors.includes(`color${i + 1}`) ? 'border-blue-500' : 'border-gray-300'
                            }`}
                        onClick={() => handleColorSelect(`color${i + 1}`)}
                    />
                ))}
            </div>
            <div className="mt-4">
                {/* Mostramos los colores seleccionados */}
                <div className="font-medium">Colores seleccionados:</div>
                <div className="flex flex-wrap">
                    {selectedColors.map((color) => (
                        <div key={color} className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full m-1">
                            {color}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Color
