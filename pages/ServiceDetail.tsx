import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { DynamicIcon } from '../components/Icons';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { services } = useStore();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20 transition-colors">
      <div className="relative h-[400px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{service.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-primary-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux services
            </Link>
            
            <div className="flex items-center space-x-4 mb-8">
                 <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl">
                    <DynamicIcon name={service.iconName} size={40} />
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Description Complète</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p>{service.fullDescription}</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Avantages Clés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Expertise technique avancée', 'Suivi personnalisé', 'Technologies de pointe', 'Support réactif'].map((adv, i) => (
                        <div key={i} className="flex items-center">
                            <CheckCircle className="text-green-500 w-5 h-5 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{adv}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex justify-end">
                <Link to="/quote" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg shadow-lg hover:bg-primary-700 transition-all hover:-translate-y-1">
                    Demander un devis pour ce service
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;