import React from 'react';

const GraphContainer = ({ children, title }) => (
  <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm w-full overflow-hidden">
    <h4 className="font-semibold text-gray-700 mb-4 text-center text-sm md:text-base">{title}</h4>
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto overflow-hidden">
      {/* Grid and Axes */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      {/* X and Y axes */}
      <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="2" />
      
      {children}
    </svg>
  </div>
);

export const GraphContinuous = () => (
  <GraphContainer title="Función Continua">
    <path 
      d="M 20 150 Q 100 150 100 100 T 180 50" 
      fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" 
    />
    <circle cx="100" cy="100" r="4" fill="#2563eb" />
  </GraphContainer>
);

export const GraphHole = () => (
  <GraphContainer title="Discontinuidad Evitable">
    <path 
      d="M 20 150 Q 80 150 95 105" 
      fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" 
    />
    <path 
      d="M 105 95 Q 120 50 180 50" 
      fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" 
    />
    <circle cx="100" cy="100" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
    <circle cx="100" cy="60" r="4" fill="#e11d48" />
  </GraphContainer>
);

export const GraphJump = () => (
  <GraphContainer title="Salto Finito (Inevitable)">
    {/* Left piece */}
    <path 
      d="M 20 150 L 100 150" 
      fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" 
    />
    <circle cx="100" cy="150" r="4" fill="#ea580c" />
    
    {/* Right piece */}
    <path 
      d="M 100 80 L 180 80" 
      fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" 
    />
    <circle cx="100" cy="80" r="4" fill="white" stroke="#ea580c" strokeWidth="2" />
    
    {/* Jump line indicator */}
    <line x1="100" y1="145" x2="100" y2="85" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 4" />
  </GraphContainer>
);

export const GraphAsymptote = () => (
  <GraphContainer title="Asíntota (Inevitable)">
    {/* Vertical Asymptote */}
    <line x1="100" y1="0" x2="100" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5" />
    
    {/* Left curve heading down */}
    <path 
      d="M 20 100 Q 80 100 95 200" 
      fill="none" stroke="#16a34a" strokeWidth="3" 
    />
    {/* Right curve heading up */}
    <path 
      d="M 105 0 Q 120 100 180 100" 
      fill="none" stroke="#16a34a" strokeWidth="3" 
    />
  </GraphContainer>
);

export const ContinuityVisualizer = () => (
  <div className="my-8 w-full overflow-hidden">
    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 border-b pb-2">Clasificación Visual de Continuidad</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <GraphContinuous />
      <GraphHole />
      <GraphJump />
      <GraphAsymptote />
    </div>
  </div>
);
