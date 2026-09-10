import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, PenTool, Calculator, ChevronRight, Menu, X, FunctionSquare, LineChart, Move3d, Search, PlayCircle, HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import { temas } from './data/db';
import { ContinuityVisualizer } from './components/MathGraphs';
import DesmosCalculator from './components/DesmosCalculator';

const iconsMap = {
  FunctionSquare,
  LineChart,
  BookOpen,
  Calculator,
  Move3d
};

const QuizComponent = ({ preguntas }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const startQuiz = () => {
    if (!preguntas || preguntas.length === 0) return;
    const shuffled = [...preguntas].sort(() => 0.5 - Math.random());
    setRandomQuestions(shuffled.slice(0, 5));
    setCurrentQ(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  useEffect(() => {
    startQuiz();
  }, [preguntas]);

  if (!randomQuestions || randomQuestions.length === 0) return <p className="text-gray-500">No hay preguntas para este tema.</p>;

  if (quizFinished) {
    return (
      <div className="text-center p-6 md:p-8 bg-blue-50 rounded-xl border border-blue-200 w-full overflow-hidden">
        <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-4">¡Prueba Finalizada!</h3>
        <p className="text-base md:text-lg text-blue-800 mb-6">Tu puntuación: {score} / {randomQuestions.length}</p>
        <button 
          onClick={startQuiz}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 w-full sm:w-auto shadow-md"
        >
          Generar Nuevas Preguntas
        </button>
      </div>
    );
  }

  const handleOptionClick = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === randomQuestions[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ + 1 < randomQuestions.length) {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const q = randomQuestions[currentQ];

  const renderMathTextInline = (text) => {
    const parts = text.split(/(\$.*?\$)/g);
    return parts.map((part, j) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={j} math={part.replace(/\$/g, '')} errorColor="#cc0000" />;
      }
      return <span key={j}>{part}</span>;
    });
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl border border-gray-200 shadow-sm w-full overflow-hidden">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
        <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">Pregunta {currentQ + 1} / {randomQuestions.length}</span>
        <span className="text-xs md:text-sm font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">Puntaje: {score}</span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 leading-snug">{renderMathTextInline(q.q)}</h3>
      
      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let stateClass = "border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer";
          let Icon = null;
          
          if (isAnswered) {
            if (idx === q.correct) {
              stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm";
              Icon = <CheckCircle className="text-emerald-500 flex-shrink-0 ml-3" size={20} />;
            } else if (idx === selectedOption) {
              stateClass = "border-red-500 bg-red-50 text-red-900 shadow-sm";
              Icon = <XCircle className="text-red-500 flex-shrink-0 ml-3" size={20} />;
            } else {
              stateClass = "border-gray-200 opacity-50 cursor-not-allowed";
            }
          }

          return (
            <div 
              key={idx}
              onClick={() => handleOptionClick(idx)}
              className={`flex justify-between items-center p-3 md:p-4 border-2 rounded-xl transition-all ${stateClass}`}
            >
              <span className="font-medium text-sm md:text-base">{renderMathTextInline(opt)}</span>
              {Icon}
            </div>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-8 flex justify-end">
          <button 
            onClick={nextQuestion}
            className="w-full sm:w-auto bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 flex items-center justify-center shadow-md transition-transform active:scale-95"
          >
            {currentQ + 1 === randomQuestions.length ? 'Ver Resultados' : 'Siguiente Pregunta'} <ChevronRight className="ml-2" size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

const ExerciseCard = ({ ej, idx, renderMathText }) => {
  const [showSol, setShowSol] = useState(false);
  const isExample = ej.isExample;
  
  // Show solution by default if it's an example, otherwise hide it
  useEffect(() => {
    if (isExample) setShowSol(true);
  }, [isExample]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm w-full">
      <div className={`${isExample ? 'bg-gradient-to-r from-blue-50 to-white' : 'bg-gradient-to-r from-emerald-50 to-white'} px-4 md:px-5 py-3 border-b border-gray-200 flex items-center`}>
        <span className={`${isExample ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'} text-[10px] md:text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mr-3 flex-shrink-0`}>
          {isExample ? 'Ejemplo' : `Ejercicio ${idx}`}
        </span>
        {ej.dificultad && (
          <span className="text-gray-500 text-xs font-semibold mr-3 bg-gray-100 px-2 py-1 rounded uppercase tracking-wider">{ej.dificultad}</span>
        )}
      </div>
      <div className="p-4 md:p-5 w-full">
        <div className="bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-100 mb-4 text-gray-800 w-full overflow-x-auto text-sm md:text-base custom-scrollbar">
          {renderMathText(ej.enunciado)}
        </div>
        
        {!isExample && (
          <button 
            onClick={() => setShowSol(!showSol)}
            className="mb-4 text-sm font-bold text-emerald-600 hover:text-emerald-800 underline transition-colors"
          >
            {showSol ? 'Ocultar Resolución' : 'Ver Resolución Paso a Paso'}
          </button>
        )}
        
        {showSol && (
          <div className="w-full animate-fade-in border-t border-gray-100 pt-4 mt-2">
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">Resolución Paso a Paso</p>
            <div className="text-gray-700 w-full overflow-x-auto custom-scrollbar">
              {renderMathText(ej.solucion)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [activeTabId, setActiveTabId] = useState('limites');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('teoria'); 

  const activeTema = temas.find(t => t.id === activeTabId) || temas[0];

  const filteredTemas = useMemo(() => {
    if (!searchTerm) return temas;
    const term = searchTerm.toLowerCase();
    return temas.filter(t => 
      t.title.toLowerCase().includes(term) || 
      t.teoria.toLowerCase().includes(term) ||
      t.id.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const SidebarItem = ({ tema }) => {
    const Icon = iconsMap[tema.icon] || BookOpen;
    const isActive = activeTabId === tema.id;
    return (
      <button
        onClick={() => {
          setActiveTabId(tema.id);
          setIsMobileMenuOpen(false);
          setSearchTerm('');
        }}
        className={`w-full flex items-center space-x-3 px-3 py-3 md:px-4 rounded-lg transition-colors ${
          isActive 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
        }`}
      >
        <Icon size={20} className="flex-shrink-0" />
        <span className="font-medium text-left flex-1 text-sm md:text-base">{tema.title}</span>
        {isActive && <ChevronRight size={16} className="flex-shrink-0" />}
      </button>
    );
  };

  const renderMathText = (text) => {
    const actualLines = text.split('\n');
    
    return actualLines.map((line, i) => {
      if (line.trim() === '') return <div key={i} className="h-2" />;
      
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg md:text-xl font-bold text-blue-900 mt-6 mb-3 leading-tight">{line.replace('### ', '')}</h3>;
      if (line.startsWith('#### ')) return <h4 key={i} className="text-md md:text-lg font-bold text-blue-800 mt-5 mb-2 leading-tight">{line.replace('#### ', '')}</h4>;
      
      let isUnorderedList = line.startsWith('- ');
      let isOrderedList = /^[1-9]\. /.test(line);
      
      let contentString = line;
      if (isUnorderedList) contentString = line.substring(2);
      else if (isOrderedList) contentString = line.replace(/^[1-9]\. /, '');
      
      // Parse block and inline math, preserving text
      const parts = contentString.split(/(\$\$.*?\$\$|\$.*?\$)/g);
      
      const parsedElements = parts.map((part, j) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const mathContent = part.replace(/\$\$/g, '');
          return (
            <div key={j} className="my-4 overflow-x-auto w-full max-w-full py-2 custom-scrollbar flex justify-center">
              <BlockMath math={mathContent} errorColor="#cc0000" />
            </div>
          );
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={j} math={part.replace(/\$/g, '')} errorColor="#cc0000" />;
        }
        if (part.includes('**')) {
           const subParts = part.split('**');
           return <span key={j}>{subParts.map((sp, k) => k % 2 === 1 ? <strong key={k} className="text-gray-900">{sp}</strong> : sp)}</span>;
        }
        return <span key={j}>{part}</span>;
      });

      if (isUnorderedList) {
        return <li key={i} className="ml-4 md:ml-6 list-disc text-gray-700 mb-2 break-words text-sm md:text-base">{parsedElements}</li>;
      }
      if (isOrderedList) {
        return <li key={i} className="ml-4 md:ml-6 list-decimal text-gray-700 mb-2 break-words text-sm md:text-base">{parsedElements}</li>;
      }

      return <p key={i} className="mb-2 text-gray-700 leading-relaxed break-words text-sm md:text-base">{parsedElements}</p>;
    });
  };

  return (
    <div className="flex h-[100dvh] w-[100vw] overflow-hidden bg-gray-50 font-sans fixed inset-0">
      <div className="lg:hidden absolute top-0 left-0 right-0 h-16 bg-gray-900 flex items-center justify-between px-4 z-40 shadow-lg w-full">
        <div className="flex items-center space-x-2">
          <img src="/favicon.svg?v=2" alt="Logo Escuadra" className="w-6 h-6" />
          <span className="text-white font-bold tracking-wide text-lg">Análisis 1</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white touch-manipulation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`
        fixed inset-y-0 left-0 z-50 w-[80%] max-w-[320px] bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-2xl
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        pt-16 lg:pt-0 flex flex-col h-full border-r border-gray-800
      `}>
        <div className="p-4 md:p-6 pb-4 bg-gray-900 z-10">
          <div className="hidden lg:flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg border border-blue-400 flex-shrink-0">
              <img src="/favicon.svg?v=2" alt="Logo Escuadra" className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-xl font-extrabold tracking-tight text-white truncate">Análisis Mat. 1</h1>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-0.5 truncate">Simulador de Finales</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar tema..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 md:px-4 pb-6 space-y-1 custom-scrollbar">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-2 mt-2">Unidades Temáticas</p>
          {filteredTemas.length > 0 ? (
            filteredTemas.map(tema => <SidebarItem key={tema.id} tema={tema} />)
          ) : (
            <div className="text-center py-8 px-4 bg-gray-800 rounded-lg mx-2 border border-gray-700">
              <p className="text-gray-400 text-sm">No se encontraron resultados.</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 h-full overflow-y-auto overflow-x-hidden bg-gray-100 pt-16 lg:pt-0 w-full relative">
        <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-20">
          
          <div className="mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight break-words">{activeTema.title}</h2>
          </div>

          <div className="flex bg-gray-200/80 p-1.5 rounded-xl mb-6 overflow-x-auto custom-scrollbar shadow-inner w-full">
            <button 
              onClick={() => setActiveSubTab('teoria')}
              className={`flex-1 min-w-[100px] flex flex-col sm:flex-row items-center justify-center sm:space-x-2 py-2 px-2 sm:px-4 rounded-lg font-semibold transition-all ${activeSubTab === 'teoria' ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
              <BookOpen size={18} className="mb-1 sm:mb-0" /> <span className="text-xs sm:text-sm md:text-base">Teoría</span>
            </button>
            <button 
              onClick={() => setActiveSubTab('practica')}
              className={`flex-1 min-w-[100px] flex flex-col sm:flex-row items-center justify-center sm:space-x-2 py-2 px-2 sm:px-4 rounded-lg font-semibold transition-all ${activeSubTab === 'practica' ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-black/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
              <PlayCircle size={18} className="mb-1 sm:mb-0" /> <span className="text-xs sm:text-sm md:text-base">Práctica</span>
            </button>
            <button 
              onClick={() => setActiveSubTab('preguntas')}
              className={`flex-1 min-w-[100px] flex flex-col sm:flex-row items-center justify-center sm:space-x-2 py-2 px-2 sm:px-4 rounded-lg font-semibold transition-all ${activeSubTab === 'preguntas' ? 'bg-white text-purple-700 shadow-sm ring-1 ring-black/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
            >
              <HelpCircle size={18} className="mb-1 sm:mb-0" /> <span className="text-xs sm:text-sm md:text-base">Quiz</span>
            </button>
          </div>

          <div className="animate-fade-in bg-white rounded-2xl shadow-sm border border-gray-200/80 p-4 sm:p-6 md:p-8 w-full overflow-hidden">
            
            {activeSubTab === 'teoria' && (
              <div className="w-full">
                {activeTabId === 'continuidad' && <ContinuityVisualizer />}
                <div className="w-full break-words">
                  {renderMathText(activeTema.teoria)}
                </div>
                {(activeTabId === 'estudio' || activeTabId === 'area-volumen' || activeTabId === 'derivadas') && (
                  <DesmosCalculator />
                )}
              </div>
            )}

            {activeSubTab === 'practica' && (
              <div className="space-y-6 md:space-y-8 w-full">
                {activeTema.practica.map((ej, idx) => (
                  <ExerciseCard key={idx} ej={ej} idx={idx} renderMathText={renderMathText} />
                ))}
              </div>
            )}

            {activeSubTab === 'preguntas' && (
              <div className="w-full">
                <QuizComponent preguntas={activeTema.preguntas} />
              </div>
            )}

          </div>

        </main>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
