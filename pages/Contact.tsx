
import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const { language, addMessage } = useStore();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        content: formData.content
    });
    alert(t.success);
    setFormData({ name: '', email: '', phone: '', subject: '', content: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nos Coordonnées</h3>
               <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Adresse</h4>
                        <p className="text-gray-600 dark:text-gray-400">Cotonou, Bénin</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Téléphone</h4>
                        <p className="text-gray-600 dark:text-gray-400">+229 95 79 23 29</p>
                        <p className="text-gray-600 dark:text-gray-400">+229 91 14 24 78</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400">contact@africa-infotech.com</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Google Map Integration */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl h-80 w-full overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <iframe 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Cotonou%2C%20Benin&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Google Map Cotonou"
                    className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.name}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.email}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.phone}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.subject}</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.message}</label>
                    <textarea name="content" value={formData.content} onChange={handleChange} required rows={5} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> {t.send}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
