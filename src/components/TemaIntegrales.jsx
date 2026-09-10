import React from 'react';

const TemaIntegrales = () => (
  <div className="space-y-6 animate-fade-in pb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Cálculo de Integrales</h2>
    
    <p className="text-gray-700">
      Repaso rápido de los métodos fundamentales de integración que aparecen en el examen, y el análisis de integrales impropias.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-xl shadow-sm border border-emerald-200 border-t-4 border-t-emerald-500">
        <h3 className="text-lg font-bold text-emerald-800 mb-3">1. Sustitución</h3>
        <p className="text-sm text-gray-600 mb-3">
          Se usa cuando ves una función y también ves su derivada (o casi) multiplicando en la misma integral.
        </p>
        <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-800 mb-2">
          ∫ 2x · cos(x²) dx
        </div>
        <p className="text-sm text-gray-700">
          Llamas <strong>u = x²</strong><br/>
          Derivas: <strong>du = 2x dx</strong><br/>
          Te queda: ∫ cos(u) du = sen(u) = sen(x²) + C
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-indigo-200 border-t-4 border-t-indigo-500">
        <h3 className="text-lg font-bold text-indigo-800 mb-3">2. Partes (Regla ALPES)</h3>
        <p className="text-sm text-gray-600 mb-3">
          "Un Día Vi Una Vaca Vestida De Uniforme". Sirve para multiplicaciones de funciones distintas (ej. polinomio por logaritmo).
        </p>
        <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-800 mb-2">
          ∫ u dv = u·v - ∫ v du
        </div>
        <p className="text-sm text-gray-700">
          <strong>Ejemplo Final:</strong> ∫ x ln(x) dx<br/>
          (A)rco (L)ogarítmica (P)olinómica (E)xponencial (S)eno<br/>
          u = ln(x) (primero en ALPES)<br/>
          dv = x dx
        </p>
      </div>
    </div>

    <div className="bg-white p-5 rounded-xl shadow-sm border border-amber-200 border-t-4 border-t-amber-500 mt-6">
      <h3 className="text-lg font-bold text-amber-800 mb-3">3. Fracciones Simples</h3>
      <p className="text-gray-700 mb-3">
        Se usa cuando tienes una división de polinomios y el denominador se puede factorizar.
      </p>
      <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-800">
        Ej: ∫ 1 / (x² - 1) dx = ∫ 1 / [(x-1)(x+1)] dx<br/>
        Se separa en: A/(x-1) + B/(x+1)
      </div>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Integrales Impropias</h2>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-700 mb-4">
        Son aquellas que tienen infinito en los límites de integración (Primera Especie) o donde la función tiene una asíntota vertical dentro del intervalo (Segunda Especie).
      </p>
      <div className="bg-red-50 text-red-900 p-4 rounded-lg font-mono text-sm mb-4 border border-red-100">
        ∫[1, ∞] (1/x²) dx  --&gt; Se resuelve con límite: lim(t-&gt;∞) ∫[1, t] (1/x²) dx
      </div>
      <p className="text-gray-700">
        Si el límite da un número, se dice que <strong>Converge</strong>. Si da infinito, <strong>Diverge</strong>.
      </p>
    </div>
  </div>
);

export default TemaIntegrales;
