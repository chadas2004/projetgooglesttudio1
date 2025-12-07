import React from 'react';
import { useStore } from '../context/StoreContext';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const { team } = useStore();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-20 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Notre Équipe</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Rencontrez les talents qui façonnent l'avenir numérique de nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
                 <motion.img 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0"
                 />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 px-4">{member.bio}</p>
              
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"><Linkedin size={16}/></button>
                 <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"><Twitter size={16}/></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;