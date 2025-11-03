import React, { useState } from 'react';
import { 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  Mail, 
  Sun, 
  Moon, 
  Palette,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { 
      id: 'hero', 
      label: 'Accueil', 
      title: 'Le Tableau Blanc Lumineux',
      icon: <Home size={20} />,
      color: 'from-rose-400 to-pink-400',
      description: 'Découvrez l\'harmonie'
    },
    { 
      id: 'about', 
      label: 'À Propos', 
      title: 'Le Fil d\'Ariane Créatif',
      icon: <User size={20} />,
      color: 'from-purple-400 to-indigo-400',
      description: 'Mon parcours créatif'
    },
    { 
      id: 'projects', 
      label: 'Projets', 
      title: 'La Galerie des Réalisations',
      icon: <FolderOpen size={20} />,
      color: 'from-teal-400 to-cyan-400',
      description: 'Mes créations numériques'
    },
    { 
      id: 'skills', 
      label: 'Compétences', 
      title: 'Le Spectre des Savoirs',
      icon: <Code size={20} />,
      color: 'from-yellow-400 to-orange-400',
      description: 'Mes expertises techniques'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      title: 'La Connexion Lumineuse',
      icon: <Mail size={20} />,
      color: 'from-pink-400 to-rose-400',
      description: 'Établissons une connexion'
    }
  ];

  return (
    <>
      {/* Overlay pour mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Side Navigation */}
      <nav className={`
        fixed left-0 top-0 h-full z-50 transition-all duration-500 ease-out
        ${isExpanded ? 'w-80' : 'w-20'}
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
        border-r border-rose-200/50 dark:border-rose-800/50
        shadow-2xl shadow-rose-500/10
      `}>
        {/* Header */}
        <div className="p-6 border-b border-rose-200/30 dark:border-rose-800/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between group"
          >
            <div className={`
              flex items-center space-x-3 transition-all duration-300
              ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}
            `}>
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            <div className={`
              p-2 rounded-lg transition-all duration-300 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30
              ${!isExpanded ? 'mx-auto' : ''}
            `}>
              <ChevronRight 
                size={20} 
                className={`
                  text-rose-500 transition-transform duration-300
                  ${isExpanded ? 'rotate-180' : 'rotate-0'}
                `}
              />
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-6 space-y-2 px-3">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                w-full group relative overflow-hidden rounded-2xl transition-all duration-500
                ${activeSection === item.id 
                  ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg transform scale-105' 
                  : 'hover:bg-rose-50 dark:hover:bg-rose-900/20 text-gray-700 dark:text-gray-300'
                }
              `}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isExpanded ? 'slideInLeft 0.5s ease-out forwards' : 'none'
              }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className={`
                relative flex items-center p-4 transition-all duration-300
                ${!isExpanded ? 'justify-center' : 'justify-start space-x-4'}
              `}>
                <div className={`
                  flex-shrink-0 transition-all duration-300
                  ${activeSection === item.id ? 'text-white' : 'text-rose-500'}
                `}>
                  {item.icon}
                </div>
                
                <div className={`
                  flex-1 text-left transition-all duration-300 overflow-hidden
                  ${isExpanded ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'}
                `}>
                  <div className="font-semibold text-sm mb-1">
                    {item.label}
                  </div>
                  <div className={`
                    text-xs transition-all duration-300
                    ${activeSection === item.id 
                      ? 'text-white/80' 
                      : 'text-gray-500 dark:text-gray-400'
                    }
                  `}>
                    {item.description}
                  </div>
                </div>

                {/* Indicateur actif */}
                {activeSection === item.id && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full animate-pulse"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer Controls */}
        <div className="p-4 border-t border-rose-200/30 dark:border-rose-800/30 space-y-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              w-full flex items-center p-3 rounded-xl transition-all duration-300
              hover:bg-rose-100 dark:hover:bg-rose-900/30 group
              ${!isExpanded ? 'justify-center' : 'justify-start space-x-3'}
            `}
          >
            <div className="text-rose-500 group-hover:scale-110 transition-transform duration-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </div>
            <span className={`
              text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300
              ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}
            `}>
              {isDark ? 'Mode Clair' : 'Mode Sombre'}
            </span>
          </button>

          {/* Color Palette Indicator */}
          <div className={`
            flex items-center p-3 rounded-xl transition-all duration-300
            ${!isExpanded ? 'justify-center' : 'justify-start space-x-3'}
          `}>
            <Palette size={20} className="text-rose-400" />
            <div className={`
              flex space-x-1 transition-all duration-300
              ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}
            `}>
              <div className="w-3 h-3 rounded-full bg-rose-300"></div>
              <div className="w-3 h-3 rounded-full bg-pink-300"></div>
              <div className="w-3 h-3 rounded-full bg-purple-300"></div>
              <div className="w-3 h-3 rounded-full bg-teal-300"></div>
            </div>
          </div>
        </div>

        {/* Effet de lueur */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 opacity-50"></div>
        </div>
      </nav>

      {/* Spacer pour le contenu principal */}
      <div className={`transition-all duration-500 ${isExpanded ? 'w-80' : 'w-20'}`}></div>
    </>
  );
};

export default SideNavigation;