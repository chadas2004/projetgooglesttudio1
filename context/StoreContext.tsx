import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Service, TeamMember, Project, Message, QuoteRequest, Language } from '../types';
import { INITIAL_SERVICES, INITIAL_TEAM, INITIAL_PROJECTS } from '../constants';

interface StoreContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  team: TeamMember[];
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  addProject: (project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
  messages: Message[];
  addMessage: (msg: Omit<Message, 'id' | 'date' | 'read'>) => void;
  quotes: QuoteRequest[];
  addQuote: (quote: Omit<QuoteRequest, 'id' | 'date' | 'status'>) => void;
  isAdminLoggedIn: boolean;
  loginAdmin: () => void;
  logoutAdmin: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Helper to load from storage or use initial value
const loadFromStorage = <T,>(key: string, initialValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  } catch (e) {
    console.error(`Error loading ${key} from storage`, e);
    return initialValue;
  }
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  // UI State (Persist Language and Theme as well)
  const [language, setLanguage] = useState<Language>(() => loadFromStorage('app_language', 'fr'));
  const [darkMode, setDarkMode] = useState(() => loadFromStorage('app_theme_dark', false));
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => loadFromStorage('admin_logged_in', false));

  // Data State (Persist actual data to simulate DB)
  const [services, setServices] = useState<Service[]>(() => loadFromStorage('db_services', INITIAL_SERVICES));
  const [team, setTeam] = useState<TeamMember[]>(() => loadFromStorage('db_team', INITIAL_TEAM));
  const [projects, setProjects] = useState<Project[]>(() => loadFromStorage('db_projects', INITIAL_PROJECTS));
  const [messages, setMessages] = useState<Message[]>(() => loadFromStorage('db_messages', []));
  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => loadFromStorage('db_quotes', []));

  // Effects to save changes to LocalStorage
  useEffect(() => localStorage.setItem('app_language', language), [language]);
  
  useEffect(() => {
    localStorage.setItem('app_theme_dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => localStorage.setItem('admin_logged_in', JSON.stringify(isAdminLoggedIn)), [isAdminLoggedIn]);
  
  // Data Persistence Effects
  useEffect(() => localStorage.setItem('db_services', JSON.stringify(services)), [services]);
  useEffect(() => localStorage.setItem('db_team', JSON.stringify(team)), [team]);
  useEffect(() => localStorage.setItem('db_projects', JSON.stringify(projects)), [projects]);
  useEffect(() => localStorage.setItem('db_messages', JSON.stringify(messages)), [messages]);
  useEffect(() => localStorage.setItem('db_quotes', JSON.stringify(quotes)), [quotes]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Admin Actions
  const loginAdmin = () => setIsAdminLoggedIn(true);
  const logoutAdmin = () => setIsAdminLoggedIn(false);

  // Data Actions
  const addMessage = (msg: Omit<Message, 'id' | 'date' | 'read'>) => {
    const newMessage: Message = {
      ...msg,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      read: false
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const addQuote = (quote: Omit<QuoteRequest, 'id' | 'date' | 'status'>) => {
    const newQuote: QuoteRequest = {
      ...quote,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    setQuotes(prev => [newQuote, ...prev]);
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <StoreContext.Provider value={{
      language, setLanguage,
      darkMode, toggleDarkMode,
      services, setServices,
      team, setTeam,
      projects, setProjects,
      addProject, deleteProject,
      messages, addMessage,
      quotes, addQuote,
      isAdminLoggedIn, loginAdmin, logoutAdmin
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};