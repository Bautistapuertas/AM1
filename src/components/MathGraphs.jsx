import React from 'react';

const GraphContainer = ({ children, title }) => (
  <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm w-full overflow-hidden">
    <h4 className="font-semibold text-gray-700 mb-4 text-center text-sm md:text-base">{title}</h4>
    <svg viewBox="0 0 200 200" className="w-full max-w-[250px] h-auto overflow-hidden">
      {/* Grid and Axes */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      {/* X and Y axes */}
      <line x1="0" y1="160" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="40" y1="0" x2="40" y2="200" stroke="#cbd5e1" strokeWidth="2" />
      
      {children}
    </svg>
  </div>
);

// --- LIMITES ---
export const GraphLimit = () => (
  <GraphContainer title="Concepto de Límite">
    <path d="M 40 140 Q 120 140 120 80 T 200 20" fill="none" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="80" r="4" fill="white" stroke="#9ca3af" strokeWidth="2" />
    
    {/* X arrows approaching c */}
    <line x1="80" y1="160" x2="110" y2="160" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
    <line x1="160" y1="160" x2="130" y2="160" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="120" y="175" fontSize="12" fill="#ef4444" textAnchor="middle">c</text>

    {/* Y arrows approaching L */}
    <line x1="40" y1="120" x2="40" y2="90" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <line x1="40" y1="40" x2="40" y2="70" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow-blue)" />
    <text x="25" y="85" fontSize="12" fill="#3b82f6" textAnchor="middle">L</text>
    
    {/* Dotted lines */}
    <line x1="120" y1="160" x2="120" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="40" y1="80" x2="120" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
  </GraphContainer>
);

// --- DERIVADAS ---
export const GraphDerivativeDef = () => (
  <GraphContainer title="Derivada por Definición">
    <path d="M 40 140 Q 100 140 180 40" fill="none" stroke="#8b5cf6" strokeWidth="3" />
    
    {/* Point x */}
    <circle cx="100" cy="115" r="4" fill="#8b5cf6" />
    <text x="100" y="175" fontSize="10" fill="#6b7280" textAnchor="middle">x</text>
    <line x1="100" y1="160" x2="100" y2="115" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2 2" />
    
    {/* Point x+h */}
    <circle cx="160" cy="65" r="4" fill="#8b5cf6" />
    <text x="160" y="175" fontSize="10" fill="#6b7280" textAnchor="middle">x+h</text>
    <line x1="160" y1="160" x2="160" y2="65" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2 2" />
    
    {/* Secant line */}
    <line x1="70" y1="140" x2="190" y2="40" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Tangent line at x */}
    <line x1="60" y1="125" x2="150" y2="102" stroke="#ef4444" strokeWidth="2" />
    
    <text x="145" y="125" fontSize="10" fill="#ef4444" textAnchor="middle">Tangente</text>
    <text x="180" y="35" fontSize="10" fill="#6b7280" textAnchor="middle">Secante</text>
  </GraphContainer>
);

// --- ESTUDIO DE FUNCIONES ---
export const GraphFunctionStudy = () => (
  <GraphContainer title="Extremos y Concavidad">
    {/* Polynomial curve */}
    <path d="M 40 140 C 60 20, 100 20, 120 80 C 140 140, 180 140, 200 40" fill="none" stroke="#2563eb" strokeWidth="3" />
    
    {/* Local Max */}
    <circle cx="82" cy="53" r="4" fill="#ef4444" />
    <line x1="60" y1="53" x2="104" y2="53" stroke="#ef4444" strokeWidth="2" />
    <text x="82" y="45" fontSize="10" fill="#ef4444" textAnchor="middle">Máx (f'=0)</text>

    {/* Inflection point */}
    <circle cx="120" cy="80" r="4" fill="#16a34a" />
    <text x="120" y="70" fontSize="10" fill="#16a34a" textAnchor="middle">Inflexión</text>

    {/* Local Min */}
    <circle cx="158" cy="107" r="4" fill="#ef4444" />
    <line x1="136" y1="107" x2="180" y2="107" stroke="#ef4444" strokeWidth="2" />
    <text x="158" y="122" fontSize="10" fill="#ef4444" textAnchor="middle">Mín (f'=0)</text>
  </GraphContainer>
);

// --- CONTINUIDAD ---
export const GraphContinuous = () => (
  <GraphContainer title="Función Continua">
    <path d="M 40 120 Q 120 120 120 70 T 200 20" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="70" r="4" fill="#2563eb" />
  </GraphContainer>
);

export const GraphHole = () => (
  <GraphContainer title="Discontinuidad Evitable">
    <path d="M 40 120 Q 100 120 115 75" fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
    <path d="M 125 65 Q 140 20 200 20" fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="70" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
    <circle cx="120" cy="30" r="4" fill="#e11d48" />
  </GraphContainer>
);

export const GraphJump = () => (
  <GraphContainer title="Salto Finito (Inevitable)">
    <path d="M 40 120 L 120 120" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="120" r="4" fill="#ea580c" />
    <path d="M 120 50 L 200 50" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
    <circle cx="120" cy="50" r="4" fill="white" stroke="#ea580c" strokeWidth="2" />
    <line x1="120" y1="115" x2="120" y2="55" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 4" />
  </GraphContainer>
);

export const GraphAsymptote = () => (
  <GraphContainer title="Asíntota (Inevitable)">
    <line x1="120" y1="0" x2="120" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
    <path d="M 40 100 Q 100 100 115 200" fill="none" stroke="#16a34a" strokeWidth="3" />
    <path d="M 125 0 Q 140 100 200 100" fill="none" stroke="#16a34a" strokeWidth="3" />
  </GraphContainer>
);

// --- TEOREMAS ---
export const GraphRolle = () => (
  <GraphContainer title="Teorema de Rolle">
    <path d="M 60 100 Q 120 20 180 100" fill="none" stroke="#8b5cf6" strokeWidth="3" />
    <circle cx="60" cy="100" r="4" fill="#8b5cf6" />
    <circle cx="180" cy="100" r="4" fill="#8b5cf6" />
    <line x1="40" y1="100" x2="200" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="120" cy="60" r="4" fill="#ef4444" />
    <line x1="80" y1="60" x2="160" y2="60" stroke="#ef4444" strokeWidth="2" />
    <text x="60" y="115" fontSize="12" fill="#6b7280" textAnchor="middle">a</text>
    <text x="180" y="115" fontSize="12" fill="#6b7280" textAnchor="middle">b</text>
    <text x="120" y="50" fontSize="12" fill="#ef4444" textAnchor="middle">f'(c) = 0</text>
  </GraphContainer>
);

export const GraphLagrange = () => (
  <GraphContainer title="Teorema de Lagrange">
    <path d="M 60 140 Q 100 40 180 60" fill="none" stroke="#8b5cf6" strokeWidth="3" />
    <circle cx="60" cy="140" r="4" fill="#8b5cf6" />
    <circle cx="180" cy="60" r="4" fill="#8b5cf6" />
    <line x1="45" y1="150" x2="195" y2="50" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="110" cy="85" r="4" fill="#ef4444" />
    <line x1="80" y1="105" x2="140" y2="65" stroke="#ef4444" strokeWidth="2" />
    <text x="60" y="155" fontSize="12" fill="#6b7280" textAnchor="middle">a</text>
    <text x="180" y="50" fontSize="12" fill="#6b7280" textAnchor="middle">b</text>
    <text x="135" y="105" fontSize="10" fill="#ef4444" textAnchor="start">Tangente || Secante</text>
  </GraphContainer>
);

// --- INTEGRALES ---
export const GraphIntegralArea = () => (
  <GraphContainer title="Área Bajo la Curva">
    <path d="M 80 160 L 80 70 Q 120 40 160 90 L 160 160 Z" fill="#bfdbfe" opacity="0.6" />
    <path d="M 40 100 Q 120 0 200 130" fill="none" stroke="#3b82f6" strokeWidth="3" />
    <line x1="80" y1="160" x2="80" y2="70" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="160" y1="160" x2="160" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
    <text x="80" y="175" fontSize="12" fill="#6b7280" textAnchor="middle">a</text>
    <text x="160" y="175" fontSize="12" fill="#6b7280" textAnchor="middle">b</text>
    <text x="120" y="120" fontSize="14" fill="#1e3a8a" textAnchor="middle" fontWeight="bold">Área</text>
  </GraphContainer>
);

export const GraphIntegralVolume = () => (
  <GraphContainer title="Volumen de Revolución (Discos)">
    <ellipse cx="120" cy="100" rx="15" ry="40" fill="#bfdbfe" opacity="0.8" stroke="#3b82f6" strokeWidth="1" />
    <ellipse cx="160" cy="100" rx="20" ry="50" fill="#bfdbfe" opacity="0.5" stroke="#3b82f6" strokeWidth="1" />
    <ellipse cx="80" cy="100" rx="10" ry="30" fill="#bfdbfe" opacity="0.9" stroke="#3b82f6" strokeWidth="1" />
    <line x1="40" y1="100" x2="200" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
    <path d="M 60 75 Q 120 50 180 40" fill="none" stroke="#1d4ed8" strokeWidth="2" />
    <path d="M 60 125 Q 120 150 180 160" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 3" />
    <text x="120" y="180" fontSize="10" fill="#ef4444" textAnchor="middle">Eje de Rotación</text>
  </GraphContainer>
);


// --- GROUP EXPORTS ---
export const LimitsVisualizer = () => (
  <div className="my-8 w-full overflow-hidden flex justify-center">
    <div className="w-full max-w-sm">
      <GraphLimit />
    </div>
  </div>
);

export const DerivativesVisualizer = () => (
  <div className="my-8 w-full overflow-hidden flex justify-center">
    <div className="w-full max-w-sm">
      <GraphDerivativeDef />
    </div>
  </div>
);

export const FunctionStudyVisualizer = () => (
  <div className="my-8 w-full overflow-hidden flex justify-center">
    <div className="w-full max-w-sm">
      <GraphFunctionStudy />
    </div>
  </div>
);

export const ContinuityVisualizer = () => (
  <div className="my-8 w-full overflow-hidden">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <GraphContinuous />
      <GraphHole />
      <GraphJump />
      <GraphAsymptote />
    </div>
  </div>
);

export const TheoremsVisualizer = () => (
  <div className="my-8 w-full overflow-hidden">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <GraphRolle />
      <GraphLagrange />
    </div>
  </div>
);

export const IntegralsVisualizer = () => (
  <div className="my-8 w-full overflow-hidden">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <GraphIntegralArea />
      <GraphIntegralVolume />
    </div>
  </div>
);
