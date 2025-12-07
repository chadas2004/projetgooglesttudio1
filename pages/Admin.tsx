
import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { TeamMember, Service, Project } from '../types';
import { LayoutDashboard, Users, Briefcase, MessageSquare, FileText, Lock, Plus, Trash2, Edit2, Image as ImageIcon } from 'lucide-react';

const Admin = () => {
  const { 
    isAdminLoggedIn, loginAdmin, logoutAdmin,
    services, setServices,
    team, setTeam,
    projects, setProjects, addProject, deleteProject,
    messages, quotes
  } = useStore();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [error, setError] = useState('');

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'infotech2025' && password === 'infotech2025') {
      loginAdmin();
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };

  // --- Forms State for adding items ---
  const [newTeamMember, setNewTeamMember] = useState<Partial<TeamMember>>({ name: '', role: '', bio: '', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' });
  
  // Project State with Tech and Client
  const [newProject, setNewProject] = useState<Partial<Project>>({ title: '', category: 'Web', description: '', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', date: new Date().toISOString().split('T')[0], client: '' });
  const [techInput, setTechInput] = useState(''); // String input for technologies
  
  const handleAddTeamMember = () => {
    if (newTeamMember.name && newTeamMember.role) {
      setTeam([...team, { ...newTeamMember, id: Date.now().toString() } as TeamMember]);
      setNewTeamMember({ name: '', role: '', bio: '', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' });
    }
  };

  const handleDeleteTeam = (id: string) => {
      setTeam(team.filter(t => t.id !== id));
  }

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
        // Convert comma separated string to array
        const technologies = techInput.split(',').map(t => t.trim()).filter(t => t !== '');
        
        addProject({
            ...newProject,
            technologies: technologies
        } as Omit<Project, 'id'>);

        // Reset form
        setNewProject({ title: '', category: 'Web', description: '', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', date: new Date().toISOString().split('T')[0], client: '' });
        setTechInput('');
    }
  };

  // --- Render Login ---
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6 text-primary-600">
            <Lock size={48} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Admin Access</h2>
          {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button type="submit" className="w-full bg-primary-600 text-white p-3 rounded font-bold hover:bg-primary-700">
              Connexion
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Render Dashboard ---
  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Messages</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{messages.length}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Devis</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{quotes.length}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Services</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{services.length}</p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Réalisations</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{projects.length}</p>
            </div>
          </div>
        );
      
      case 'messages':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
             <table className="w-full text-left">
               <thead className="bg-gray-50 dark:bg-gray-700">
                 <tr>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Date</th>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">De</th>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Sujet</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                 {messages.length === 0 ? <tr><td colSpan={3} className="p-4 text-center text-gray-500">Aucun message</td></tr> :
                  messages.map(msg => (
                    <tr key={msg.id}>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{new Date(msg.date).toLocaleDateString()}</td>
                      <td className="p-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{msg.name}</div>
                        <div className="text-xs text-gray-500">{msg.email}</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{msg.subject}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
          </div>
        );

      case 'quotes':
        return (
           <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
             <table className="w-full text-left">
               <thead className="bg-gray-50 dark:bg-gray-700">
                 <tr>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Date</th>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Client</th>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Service</th>
                   <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-200">Budget</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                 {quotes.length === 0 ? <tr><td colSpan={4} className="p-4 text-center text-gray-500">Aucune demande de devis</td></tr> :
                  quotes.map(q => (
                    <tr key={q.id}>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{new Date(q.date).toLocaleDateString()}</td>
                      <td className="p-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{q.name}</div>
                        <div className="text-xs text-gray-500">{q.company}</div>
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{q.serviceType}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{q.budgetRange}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            {/* Add New Project */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Ajouter une réalisation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Titre" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} />
                    
                    <select className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})}>
                        <option value="Web Development">Développement Web</option>
                        <option value="Mobile App">Application Mobile</option>
                        <option value="Security">Cybersécurité</option>
                        <option value="Design">Design</option>
                        <option value="IoT">Internet des Objets (IoT)</option>
                        <option value="Software">Logiciel</option>
                    </select>
                    
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Client (Ex: Gouvernement, Société X)" value={newProject.client} onChange={e => setNewProject({...newProject, client: e.target.value})} />
                    
                    <input type="date" className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={newProject.date} onChange={e => setNewProject({...newProject, date: e.target.value})} />
                    
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white md:col-span-2" placeholder="Technologies (séparées par des virgules, ex: React, Node, AWS)" value={techInput} onChange={e => setTechInput(e.target.value)} />
                    
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white md:col-span-2" placeholder="URL Image" value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} />
                    
                    <textarea className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white md:col-span-2" placeholder="Description du projet..." rows={3} value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
                </div>
                <button onClick={handleAddProject} className="mt-4 bg-primary-600 text-white px-4 py-2 rounded flex items-center hover:bg-primary-700"><Plus size={16} className="mr-2"/> Publier</button>
            </div>

            {/* List Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group">
                        <div className="h-40 overflow-hidden relative">
                             <img src={project.imageUrl} className="w-full h-full object-cover" />
                             <button onClick={() => deleteProject(project.id)} className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16}/></button>
                        </div>
                        <div className="p-4">
                            <p className="font-bold text-gray-900 dark:text-white truncate">{project.title}</p>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-primary-500 font-medium">{project.category}</span>
                                {project.client && <span className="text-xs text-gray-400">{project.client}</span>}
                            </div>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{project.description}</p>
                            
                            {project.technologies && project.technologies.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-1.5 py-0.5 rounded">{t}</span>
                                    ))}
                                    {project.technologies.length > 3 && <span className="text-[10px] text-gray-400">+{project.technologies.length - 3}</span>}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            {/* Add New */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Ajouter un membre</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Nom" value={newTeamMember.name} onChange={e => setNewTeamMember({...newTeamMember, name: e.target.value})} />
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Rôle" value={newTeamMember.role} onChange={e => setNewTeamMember({...newTeamMember, role: e.target.value})} />
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="URL Image" value={newTeamMember.imageUrl} onChange={e => setNewTeamMember({...newTeamMember, imageUrl: e.target.value})} />
                    <input className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white md:col-span-2" placeholder="Bio" value={newTeamMember.bio} onChange={e => setNewTeamMember({...newTeamMember, bio: e.target.value})} />
                </div>
                <button onClick={handleAddTeamMember} className="mt-4 bg-green-600 text-white px-4 py-2 rounded flex items-center hover:bg-green-700"><Plus size={16} className="mr-2"/> Ajouter</button>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map(member => (
                    <div key={member.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img src={member.imageUrl} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDeleteTeam(member.id)} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded"><Trash2 size={18}/></button>
                    </div>
                ))}
            </div>
          </div>
        );

      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:block">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
           <span className="font-bold text-xl text-primary-600">Admin Panel</span>
        </div>
        <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Vue d\'ensemble', icon: LayoutDashboard },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'quotes', label: 'Devis', icon: FileText },
              { id: 'projects', label: 'Réalisations', icon: Briefcase },
              { id: 'team', label: 'Gestion Équipe', icon: Users },
            ].map(item => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                </button>
            ))}
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
            <button onClick={logoutAdmin} className="w-full px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Déconnexion</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
         <div className="md:hidden mb-6 flex justify-between items-center">
             <h1 className="text-2xl font-bold dark:text-white">Admin</h1>
             <button onClick={logoutAdmin} className="text-red-500 text-sm">Déconnexion</button>
         </div>
         {renderContent()}
      </main>
    </div>
  );
};

export default Admin;
