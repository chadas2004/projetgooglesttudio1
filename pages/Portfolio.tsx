
import React from 'react';
import { useStore } from '../context/StoreContext';
import { motion } from 'framer-motion';
import { Calendar, Tag, Layers, User } from 'lucide-react';

const Portfolio = () => {
  const { projects } = useStore();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos Réalisations</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Des projets innovants qui témoignent de notre expertise et de notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {project.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    {project.client && (
                        <div className="flex items-center text-xs text-primary-600 dark:text-primary-400 font-medium mb-2">
                            <User size={12} className="mr-1" />
                            Client: {project.client}
                        </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto">
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium flex items-center">
                                   {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center text-gray-500 dark:text-gray-500 text-xs pt-4 border-t border-gray-100 dark:border-gray-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(project.date).toLocaleDateString()}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
