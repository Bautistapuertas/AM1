import React from 'react';

const TemaEstudioFunciones = () => (
  <div className="space-y-6 animate-fade-in pb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Estudio Completo de Funciones</h2>
    
    <p className="text-gray-700">
      Este es el ejercicio más largo y completo del final. Te darán una función (generalmente racional, logarítmica o exponencial) y te pedirán analizarla paso a paso para luego graficarla.
    </p>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-teal-700 mb-4">1. Dominio y Asíntotas</h3>
      <ul className="list-disc pl-5 md:pl-6 space-y-3 text-gray-700">
        <li><strong>Dominio:</strong> Buscar qué valores de x hacen que el denominador sea 0 (o logaritmos ≤ 0, o raíces de índice par &lt; 0).</li>
        <li><strong>Asíntota Vertical (A.V.):</strong> Calcular el límite cuando x tiende a los puntos excluidos del dominio. Si el límite da ±∞, hay A.V. en ese punto.</li>
        <li><strong>Asíntota Horizontal (A.H.):</strong> Calcular el límite cuando x tiende a ±∞. Si da un número "L", hay A.H. en y = L.</li>
      </ul>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-teal-700 mb-4">2. Derivada Primera: Crecimiento y Extremos</h3>
      <div className="space-y-3 text-gray-700">
        <p>Calcula f'(x) y busca los <strong>Puntos Críticos</strong> (donde f'(x) = 0 o f'(x) no existe).</p>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <p className="font-semibold text-teal-900">Criterio de la Derivada Primera:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-teal-800">
            <li>Si f'(x) &gt; 0, la función <strong>crece</strong>.</li>
            <li>Si f'(x) &lt; 0, la función <strong>decrece</strong>.</li>
            <li>Si f'(x) pasa de + a - en un punto crítico, hay un <strong>Máximo Relativo</strong>.</li>
            <li>Si f'(x) pasa de - a + en un punto crítico, hay un <strong>Mínimo Relativo</strong>.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-teal-700 mb-4">3. Derivada Segunda: Concavidad e Inflexión</h3>
      <div className="space-y-3 text-gray-700">
        <p>Calcula f''(x) y busca sus raíces (donde f''(x) = 0).</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Si f''(x) &gt; 0, la concavidad es <strong>Positiva</strong> (forma de "U").</li>
          <li>Si f''(x) &lt; 0, la concavidad es <strong>Negativa</strong> (forma de herradura).</li>
          <li>Si f''(x) cambia de signo en un punto, hay un <strong>Punto de Inflexión</strong>.</li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-800 text-white p-4 md:p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-3 text-teal-300">Ejemplo Clásico (Modelo 1)</h3>
      <p className="font-mono text-sm md:text-base mb-4 bg-gray-900 p-3 rounded">f(x) = (x² - 4) / x</p>
      <ul className="space-y-2 text-sm md:text-base text-gray-300">
        <li>• Dominio: ℝ - {'{0}'}</li>
        <li>• A.V. en x = 0</li>
        <li>• A.H. no tiene (tiene asíntota oblicua y = x)</li>
        <li>• f'(x) = (x² + 4) / x² &gt; 0 siempre. Función siempre creciente.</li>
        <li>• No hay extremos relativos.</li>
        <li>• f''(x) = -8 / x³. Positiva en x &lt; 0, Negativa en x &gt; 0.</li>
      </ul>
    </div>
  </div>
);

export default TemaEstudioFunciones;
