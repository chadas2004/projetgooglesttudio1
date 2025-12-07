import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const numbers = [
    { label: "Support Technique", number: "22995792329" },
    { label: "Service Commercial", number: "22991142478" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 mb-4 w-72 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-gray-800 dark:text-white">Discutez avec nous</h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {numbers.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${item.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+{item.number}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;