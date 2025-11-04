import React from 'react';
import { Calendar, Heart, Lightbulb, Target ,ScrollText, GraduationCap,Award } from 'lucide-react';


interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const timeline = [
    {
      year: '2025',
      title: 'Technicienne en développement digital',
      description: " L'Institut Spécialisé dans les Métiers de l'Offshoring et les Nouvelles Technologies de l'Information et de la Communication (ISMONTIC) de Tanger",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: '2022',
      title: 'Licence en Génie des procédés',
      description: ['Faculté des sciences et techniques, Tanger',<br></br>,' Mention: Assez Bien'], 
      icon: <ScrollText className="w-5 h-5" />
    },
    {
      year: '2019',
      title: 'Baccalauréat en Science Physique',
      description: ['Lycée abdlkrim al khatabi ,Tanger ',<br></br>,'Mention:Trés Bien'],
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section className={`py-20 relative ${className || ''}  `}  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Le Fil d'Ariane Créatif
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            De la physique au numérique, un parcours guidé par la curiosité et la création.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionnée par le développement digital, je crée des solutions qui allient efficacité, clarté et impact.
                Du frontend au backend , chaque ligne de code est pensée pour offrir une expérience fluide, robuste et évolutive.
                Ma philosophie ? Le code doit être propre, l’architecture solide, et chaque projet doit répondre avec justesse aux besoins réels des utilisateurs.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Ma philosophie ? Le code doit être élégant, l'interface intuitive, et l'expérience 
                utilisateur mémorable. Je m'efforce de créer des solutions qui ne se contentent pas 
                de fonctionner, mais qui brillent.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['React', 'JavaScript', 'Node.js', 'Python', 'MySQL', 'MongoDB','Laravel','Php','Express js','HTML','CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium border border-rose-200 dark:border-rose-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-pink-400"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white relative z-10">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-rose-500" />
                      <span className="text-sm font-semibold text-rose-600 dark:text-rose-400">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;