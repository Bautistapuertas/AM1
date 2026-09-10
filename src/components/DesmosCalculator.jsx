import React, { useEffect, useRef, useState } from 'react';

const DesmosCalculator = () => {
  const containerRef = useRef(null);
  const calculatorInstance = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let script = document.getElementById('desmos-script');
    
    if (!script) {
      script = document.createElement('script');
      script.id = 'desmos-script';
      script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
      script.async = true;
      document.body.appendChild(script);
    }

    const checkDesmos = setInterval(() => {
      if (window.Desmos) {
        clearInterval(checkDesmos);
        setIsLoaded(true);
      }
    }, 100);

    return () => {
      clearInterval(checkDesmos);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && !calculatorInstance.current) {
      try {
        calculatorInstance.current = window.Desmos.GraphingCalculator(containerRef.current, {
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          keypad: true,
        });
        
        calculatorInstance.current.setExpression({ id: 'graph1', latex: 'y=x^2-4' });
      } catch (e) {
        console.error("Desmos initialization error", e);
      }
    }

    return () => {
      if (calculatorInstance.current) {
        calculatorInstance.current.destroy();
        calculatorInstance.current = null;
      }
    };
  }, [isLoaded]);

  return (
    <div className="w-full mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
        Graficadora Interactiva (Desmos)
      </h3>
      <p className="text-gray-600 mb-4">
        Escribe cualquier función (ej: <span className="font-mono bg-gray-100 px-1">y = \sin(x)</span> o <span className="font-mono bg-gray-100 px-1">f(x) = (x^2-4)/x</span>) en el panel izquierdo para ver su gráfica.
      </p>
      
      {!isLoaded && (
        <div className="w-full h-[500px] border border-gray-300 rounded-xl flex items-center justify-center bg-gray-50">
          <p className="text-gray-500 animate-pulse">Cargando graficadora...</p>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className={`w-full h-[500px] border border-gray-300 rounded-xl overflow-hidden shadow-inner ${!isLoaded ? 'hidden' : 'block'}`}
      />
    </div>
  );
};

export default DesmosCalculator;
