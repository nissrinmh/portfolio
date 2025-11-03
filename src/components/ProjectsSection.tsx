import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import clinic from '../images/cli.jpg';
import think from '../images/think.jpg';
import cinemagique from '../images/cinemagique.png';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'MESSAHATI',
      description: 'Plateforme de Gestion Intelligente des Cliniques',
      longDescription: 'Le projet Messahati a pour objectif principal de numériser et optimiser la gestion médicale et administrative des cliniques via une solution application intuitive et sécurisée. ',
      image: clinic,
      technologies: ['React', 'Laravel', 'Mysql', 'Tailwind CSS','Breeze & Spatie','Axios','Jira'],
      demoUrl: '#',
      githubUrl: 'https://github.com/nissrinmh/Messahati',
      insights: '	Automatiser les processus internes et améliorer la coordination entre les équipes médicales et administratives.'
    },
    {
      id: 2,
      title: 'Think Fast',
      description: "Plateforme d'apprentissage interactive ", 
      longDescription: 'ThinkFast est une plateforme web interactive conçue pour tester et développer les connaissance des utilisateurs  . Elle propose des quiz dynamiques, pour renforcer les compétences .',
      image: think,
      technologies: ['React Js', 'Redux', 'JavaScript', 'CSS', 'Html'],
      demoUrl: 'https://nissrinmh.github.io/ThinkFast_React/',
      githubUrl: 'https://github.com/nissrinmh/ThinkFast_React',
      insights: ['La possibilité de créer des quiz personnalisés pour différents sujets et niveaux de difficulté.','   💡'," la possibilité de faire des choix multiples parmi plusieurs catégories et leurs sous-catégories. "]
    },
    {
      id: 3,
      title: 'Cinemagique',
      description: 'Plateforme de gestion de films et séries', 
      longDescription: ' Cinemagique est une plateforme  innovante conçue pour les passionnés de cinéma et de séries.  ', // Description longue
      image: cinemagique,
      technologies: ['React Js', 'Css', 'Router' ],
      demoUrl: 'https://nissrinmh.github.io/gestion_des_films/',
      githubUrl: 'https://github.com/nissrinmh/gestion_des_films',
      insights: ' La possibilité de rechercher des films et séries par titre, genre, ou année de sortie, ainsi que de filtrer les résultats en fonction de divers critères.  '// ajouter aux favoris
    }
  ];

  return (
    <section
      className={`py-20 bg-gradient-to-r from-sky-200 to-pink-200 dark:from-gray-800/50 dark:to-rose-900/20 ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              La Galerie des Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Chaque projet est une œuvre d'art numérique, alliant innovation technique et esthétique raffinée.
          </p>
        </div>

        {/* Grid des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() =>
                setSelectedProject(selectedProject === project.id ? null : project.id)
              }
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-rose-200/50 dark:border-rose-800/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Détails projet */}
                  {selectedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-rose-200 dark:border-rose-800 animate-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {project.longDescription}
                      </p>
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                        <p className="text-green-800 dark:text-green-300 text-sm font-medium">
                          💡 {project.insights}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
