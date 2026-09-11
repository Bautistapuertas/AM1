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
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      {/* X and Y axes */}
      <line x1="0" y1="160" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="40" y1="0" x2="40" y2="200" stroke="#cbd5e1" strokeWidth="2" />
      
      {children}
    </svg>
  </div>
);

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

export const GraphRolle = () => (
  <GraphContainer title="Teorema de Rolle">
    {/* Curve starting and ending at same height */}
    <path d="M 60 100 Q 120 20 180 100" fill="none" stroke="#8b5cf6" strokeWidth="3" />
    {/* Points a and b */}
    <circle cx="60" cy="100" r="4" fill="#8b5cf6" />
    <circle cx="180" cy="100" r="4" fill="#8b5cf6" />
    {/* Secant line */}
    <line x1="40" y1="100" x2="200" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
    {/* Point c */}
    <circle cx="120" cy="60" r="4" fill="#ef4444" />
    {/* Tangent line at c */}
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
    
    {/* Secant line */}
    <line x1="45" y1="150" x2="195" y2="50" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Tangent parallel to secant */}
    <circle cx="110" cy="85" r="4" fill="#ef4444" />
    <line x1="80" y1="105" x2="140" y2="65" stroke="#ef4444" strokeWidth="2" />
    
    <text x="60" y="155" fontSize="12" fill="#6b7280" textAnchor="middle">a</text>
    <text x="180" y="50" fontSize="12" fill="#6b7280" textAnchor="middle">b</text>
    <text x="135" y="105" fontSize="10" fill="#ef4444" textAnchor="start">Tangente || Secante</text>
  </GraphContainer>
);

export const GraphIntegralArea = () => (
  <GraphContainer title="Área Bajo la Curva">
    {/* Area polygon */}
    <path d="M 80 160 L 80 70 Q 120 40 160 90 L 160 160 Z" fill="#bfdbfe" opacity="0.6" />
    {/* Curve */}
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
    {/* 3D effect: Ellipses to represent disks */}
    <ellipse cx="120" cy="100" rx="15" ry="40" fill="#bfdbfe" opacity="0.8" stroke="#3b82f6" strokeWidth="1" />
    <ellipse cx="160" cy="100" rx="20" ry="50" fill="#bfdbfe" opacity="0.5" stroke="#3b82f6" strokeWidth="1" />
    <ellipse cx="80" cy="100" rx="10" ry="30" fill="#bfdbfe" opacity="0.9" stroke="#3b82f6" strokeWidth="1" />
    
    {/* X axis as axis of revolution */}
    <line x1="40" y1="100" x2="200" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
    
    {/* Outer boundary curve */}
    <path d="M 60 75 Q 120 50 180 40" fill="none" stroke="#1d4ed8" strokeWidth="2" />
    <path d="M 60 125 Q 120 150 180 160" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 3" />
    
    <text x="120" y="180" fontSize="10" fill="#ef4444" textAnchor="middle">Eje de Rotación</text>
  </GraphContainer>
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
