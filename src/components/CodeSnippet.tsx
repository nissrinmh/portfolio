import React, { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Simple syntax highlighting pour JavaScript/TypeScript
  const highlightCode = (code: string) => {
    return code
      .replace(/(const|let|var|function|class|import|export|from|interface|type|useEffect|useState|useRef|return)/g, 
        '<span class="text-purple-600 dark:text-purple-400 font-semibold">$1</span>')
      .replace(/('.*?'|".*?")/g, 
        '<span class="text-green-600 dark:text-green-400">$1</span>')
      .replace(/(\/\/.*$)/gm, 
        '<span class="text-gray-500 dark:text-gray-400 italic">$1</span>')
      .replace(/(\d+)/g, 
        '<span class="text-blue-600 dark:text-blue-400">$1</span>')
      .replace(/(true|false|null|undefined)/g, 
        '<span class="text-orange-600 dark:text-orange-400">$1</span>');
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {language}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="p-1.5 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            title={showPreview ? 'Masquer l\'aperçu' : 'Voir l\'aperçu'}
          >
            <Eye size={14} />
          </button>
          <button
            onClick={copyCode}
            className="p-1.5 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            title="Copier le code"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      
      <div className="relative">
        <pre className="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm leading-relaxed">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: highlightCode(code) 
            }}
          />
        </pre>
        
        {copied && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs animate-fadeIn">
            Copié !
          </div>
        )}
      </div>

      {showPreview && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-3">
            <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Aperçu du composant
            </span>
          </div>
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-lg">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projet Exemple</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Démonstration d'une carte de projet avec animation GSAP
              </p>
              <div className="mt-3 flex space-x-2">
                <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
                  GSAP
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;