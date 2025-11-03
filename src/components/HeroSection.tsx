// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Sparkles } from 'lucide-react';
// import ColorPalette from './ColorPalette';

// interface HeroSectionProps {
//   className?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showColorPalette, setShowColorPalette] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToNext = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className || ''}`}>
//       <div className="floating-elements"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="mb-8">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//                MAHAN  Nissrin
//               </span>
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4">
//              Développeuse Full Stack 
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//               Développeuse Full Stack passionnée par la création d'interfaces élégantes et d'expériences utilisateur 
//               exceptionnelles. Je transforme les idées en réalités numériques lumineuses.
//             </p>
//           </div>

//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button 
//               onClick={scrollToNext}
//               className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium hover:from-rose-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-effect"
//             >
//               <span className="flex items-center gap-2">
//                 <Sparkles size={20} />
//                 Découvrir l'Harmonie
//               </span>
//             </button>
            
//             <button 
//               onClick={() => setShowColorPalette(!showColorPalette)}
//               className="px-8 py-4 border-2 border-rose-400 text-rose-600 dark:text-rose-400 rounded-full font-medium hover:bg-rose-50 dark:hover:bg-rose-900/20 transform hover:scale-105 transition-all duration-300"
//             >
//               Palette Interactive
//             </button>
//           </div> */}

//           {/* {showColorPalette && (
//             <div className="mb-12">
//               <ColorPalette />
//             </div>
//           )} */}

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
//               <div className="text-3xl font-bold text-rose-500 mb-2"> Bac +2</div>
//               <div className="text-gray-600 dark:text-gray-400">Diplômée en développement digital </div>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
//               <div className="text-3xl font-bold text-rose-500 mb-2">Projets +3 </div>
//               <div className="text-gray-600 dark:text-gray-400">Débutante motivée</div>
//             </div>
//             <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
//               <div className="text-3xl font-bold text-rose-500 mb-2">100%</div>
//               <div className="text-gray-600 dark:text-gray-400">Passion créative</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import myphoto from '../images/moi.jpg';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className || ''}`}>
      <div className="floating-elements"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
  
  {/* Texte + Photo */}
  <div className="flex flex-col md:flex-row items-center justify-between w-full">
    
    {/* Texte */}
    <div className={`text-center md:text-left md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          MAHAN Nissrin
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4">
        Développeuse Full Stack
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-8">
        Développeuse Full Stack passionnée par la création d'interfaces élégantes et d'expériences utilisateur exceptionnelles. Je transforme les idées en réalités numériques lumineuses.
      </p>
    </div>

    {/* Photo */}
    <div className={`md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-rose-400 dark:border-rose-600 shadow-xl transform hover:scale-105 transition-transform duration-500">
        <img 
          src={myphoto}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>

  {/* Cartes Bac / Projets / Passion */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-4xl mx-auto">
    <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
      <div className="text-3xl font-bold text-rose-500 mb-2">Bac +2</div>
      <div className="text-gray-600 dark:text-gray-400">Diplômée en développement digital</div>
    </div>
    <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
      <div className="text-3xl font-bold text-rose-500 mb-2">Projets +3</div>
      <div className="text-gray-600 dark:text-gray-400">Débutante motivée</div>
    </div>
    <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
      <div className="text-3xl font-bold text-rose-500 mb-2">100%</div>
      <div className="text-gray-600 dark:text-gray-400">Passion créative</div>
    </div>
  </div>

      </div>
    </section>
  );
};

export default HeroSection;
