import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Send, FileText, CheckCircle } from 'lucide-react';

const Quote = () => {
  const { language, addQuote, services } = useStore();
  const t = TRANSLATIONS[language].quote;
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    budgetRange: '',
    details: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addQuote(formData);
    setSubmitted(true);
    // Reset after delay or keep message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center max-w-md"
            >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Demande Reçue !</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Nous avons bien reçu votre demande de devis. Notre équipe commerciale vous contactera sous 24h.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90"
                >
                    Nouvelle demande
                </button>
            </motion.div>
        </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary-600 p-8 text-center text-white">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h1 className="text-3xl font-bold">{t.title}</h1>
                <p className="mt-2 text-primary-100">Parlez-nous de votre projet, nous vous aiderons à le réaliser.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet *</label>
                        <input type="text" name="name" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.company}</label>
                        <input type="text" name="company" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                        <input type="email" name="email" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone *</label>
                        <input type="tel" name="phone" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.service_type} *</label>
                        <select name="serviceType" required onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all">
                            <option value="">Sélectionnez un service</option>
                            {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.budget}</label>
                        <select name="budgetRange" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all">
                            <option value="">Sélectionnez une tranche</option>
                            <option value="< 500k FCFA">Moins de 500.000 FCFA</option>
                            <option value="500k-1M FCFA">500.000 - 1.000.000 FCFA</option>
                            <option value="1M-5M FCFA">1.000.000 - 5.000.000 FCFA</option>
                            <option value="> 5M FCFA">Plus de 5.000.000 FCFA</option>
                        </select>
                    </div>
                </div>

                <div>
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.details} *</label>
                     <textarea name="details" required rows={4} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold text-lg hover:bg-primary-600 dark:hover:bg-primary-100 transition-colors flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" /> {t.submit}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;