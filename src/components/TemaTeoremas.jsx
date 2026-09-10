import React from 'react';

const TemaTeoremas = () => (
  <div className="space-y-6 animate-fade-in pb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Teoremas Principales (Teoría)</h2>
    
    <p className="text-gray-700">
      En todos los finales se toma al menos un teorema para enunciar, demostrar o interpretar geométricamente. Aquí tienes los indispensables.
    </p>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-orange-100 border-l-4 border-l-orange-500">
      <h3 className="text-xl font-bold text-orange-700 mb-2">1. Teorema de Rolle</h3>
      <p className="text-gray-700 mb-2"><strong>Hipótesis:</strong> Sea f una función:</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
        <li>Continua en el intervalo cerrado [a, b]</li>
        <li>Derivable en el intervalo abierto (a, b)</li>
        <li>Tal que <strong>f(a) = f(b)</strong></li>
      </ul>
      <p className="text-gray-700">
        <strong>Tesis:</strong> Existe al menos un punto <em>c ∈ (a, b)</em> tal que <strong>f'(c) = 0</strong>.
      </p>
      <p className="text-sm text-gray-500 mt-2 italic">
        Interpretación: Si subes y vuelves a bajar a la misma altura, en algún punto del medio la pendiente (derivada) fue horizontal (cero).
      </p>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-red-100 border-l-4 border-l-red-500">
      <h3 className="text-xl font-bold text-red-700 mb-2">2. Teorema de Lagrange (Valor Medio)</h3>
      <p className="text-gray-700 mb-2"><strong>Hipótesis:</strong> Sea f continua en [a, b] y derivable en (a, b).</p>
      <p className="text-gray-700 mb-3">
        <strong>Tesis:</strong> Existe al menos un <em>c ∈ (a, b)</em> tal que:<br/>
        <span className="font-mono bg-gray-100 p-1 rounded inline-block mt-2 font-bold text-red-800">
          f'(c) = [f(b) - f(a)] / (b - a)
        </span>
      </p>
      <p className="text-sm text-gray-500 italic">
        Interpretación: Existe un punto donde la recta tangente es paralela a la recta secante que une los puntos (a, f(a)) y (b, f(b)).
      </p>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-blue-100 border-l-4 border-l-blue-500">
      <h3 className="text-xl font-bold text-blue-700 mb-2">3. Teorema Fundamental del Cálculo (y Regla de Barrow)</h3>
      <div className="space-y-4 text-gray-700">
        <div>
          <strong className="text-blue-900">Teorema Fundamental:</strong> Si f es continua en [a, b], entonces la función integral 
          <span className="font-mono mx-1">F(x) = ∫[a,x] f(t)dt</span> es derivable, y su derivada es <span className="font-mono font-bold">F'(x) = f(x)</span>.
        </div>
        <div className="pt-2 border-t border-gray-100">
          <strong className="text-blue-900">Regla de Barrow:</strong> Para calcular una integral definida:<br/>
          <span className="font-mono bg-gray-100 p-1 rounded inline-block mt-2">
            ∫[a,b] f(x)dx = G(b) - G(a)
          </span><br/>
          (Donde G es cualquier primitiva de f, es decir, G'(x) = f(x)).
        </div>
      </div>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-purple-100 border-l-4 border-l-purple-500">
      <h3 className="text-xl font-bold text-purple-700 mb-2">4. Teorema del Valor Medio del Cálculo Integral</h3>
      <p className="text-gray-700 mb-2">
        Si f es continua en [a, b], existe un número c en [a, b] tal que la integral definida de f entre a y b es igual al área de un rectángulo de base (b-a) y altura f(c).
      </p>
      <p className="font-mono bg-gray-100 p-2 rounded inline-block font-bold text-purple-800 mb-2">
        ∫[a,b] f(x)dx = f(c) · (b - a)
      </p>
      <p className="text-sm text-gray-600">
        El valor <strong>f(c)</strong> se conoce como el "valor medio o promedio" de la función en ese intervalo.
      </p>
    </div>
  </div>
);

export default TemaTeoremas;
