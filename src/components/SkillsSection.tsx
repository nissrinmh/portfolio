import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Palette, Brain, Zap } from 'lucide-react';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  const [visibleBars, setVisibleBars] = useState<{ [key: string]: boolean }>({});

  const skillCategories = [
    {
      title: 'Front-End',
      icon: <Code className="w-6 h-6" />,
      color: 'from-rose-400 to-pink-400',
      skills: [
        { name: 'React js', level: 80, description: 'Maîtrise Éclatante' },
        { name: 'JavaScript', level: 85, description: 'Expertise Lumineuse' },
        { name: ' CSS', level: 75, description: 'Virtuosité Créative' }
      ]
    },
    {
      title: 'Back-End',
      icon: <Server className="w-6 h-6" />,
      color: 'from-purple-400 to-indigo-400',
      skills: [
        { name: 'Php/Laravel', level: 85, description: 'Expertise Solide' },
        { name: 'Node.js / Express', level: 88, description: 'Architecture Élégante' },
        { name: 'Python ', level: 40, description: ' Notion de base' },
        { name: 'Microservices', level: 75, description: 'Conception Moderne' }
      ]
    },
    {
      title: 'Bases de Données',
      icon: <Database className="w-6 h-6" />,
      color: 'from-teal-400 to-cyan-400',
      skills: [
        { name: 'MongoDB', level: 82, description: 'NoSQL Moderne' },
        { name: 'Mysql', level: 88, description: 'Expertise Relationnelle'  }
      ]
    },
    {
      title: 'Design & UX',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-400',
      skills: [
        { name: 'Figma', level: 50, description: 'Design Créatif' },
      ]
    },
    {
      title: 'DevOps & Outils',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-400',
      skills: [
        { name: 'Docker', level: 65, description: 'Conteneurisation' },
        { name: 'Git / GitHub', level: 82, description: 'Versioning Expert' },
        { name: 'CI/CD', level: 60, description: 'Automatisation' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-indigo-400 to-purple-400',
      skills: [
        { name: 'Créativité', level: 85, description: 'Innovation Constante' },
        { name: 'Communication', level: 88, description: 'Clarté d\'Expression' },
        { name: 'Apprentissage', level: 98, description: 'Curiosité Perpétuelle' },
        { name: 'Collaboration', level: 90, description: 'Esprit d\'Équipe' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryTitle = entry.target.getAttribute('data-category');
            if (categoryTitle) {
              setTimeout(() => {
                setVisibleBars((prev) => ({ ...prev, [categoryTitle]: true }));
              }, 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const categoryElements = document.querySelectorAll('[data-category]');
    categoryElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`py-20 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Le Spectre des Savoirs
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un arc-en-ciel de compétences techniques et créatives, chacune brillant de sa propre lumière.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              data-category={category.title}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 dark:border-rose-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.description}</span>
                        <span className="text-sm font-bold text-rose-600 dark:text-rose-400">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out skill-bar-glow`}
                        style={{ 
                          width: visibleBars[category.title] ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-full border border-rose-200 dark:border-rose-700">
            <Zap className="w-5 h-5 text-rose-500" />
            <span className="font-medium text-rose-700 dark:text-rose-300">
              En constante évolution, toujours prête à apprendre de nouvelles technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;