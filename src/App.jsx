import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:awaisiftikhardev@gmail.com?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    }
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'React.js', 'Django', 'REST APIs', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Git', 'GitHub']
  };

  const projects = [
    {
      title: "Human-vs-Bot-Detection",
      category: "Machine Learning Demo",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
        </svg>
      ),
      description: "A Streamlit demonstration that classifies behavioural sessions using pointer distance, elapsed time and movement jitter with a scikit-learn model.",
      metrics: "Demo classifier · evaluation script included",
      tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      github: "https://github.com/awaisiftikharr/Human-vs-Bot-Detection"
    },
    {
      title: "SmartFinds E-Commerce",
      category: "Django Web Application",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      description: "A Django e-commerce application with product browsing, cart and checkout demonstrations, a rule-based product chatbot and TF-IDF content-based recommendations.",
      metrics: "Reusable product recommendation service",
      tech: ["Python", "Django", "SQLite", "Scikit-learn"],
      github: "https://github.com/awaisiftikharr/Ecommerce-Website-with-Ai-Chatbot"
    },
    {
      title: "NewsFlux",
      category: "React & Supabase Application",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
        </svg>
      ),
      description: "A multi-page news application with article and category routes, Supabase data access, and TanStack Query data-fetching workflows.",
      metrics: "Article, category and live-update data flows",
      tech: ["React", "TypeScript", "Vite", "Supabase", "TanStack Query"],
      github: "https://github.com/awaisiftikharr/newsflux"
    }

    {
      title: "DevAtlas AI",
      category: "Full-Stack Engineering Workspace",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M8 17h3"/>
        </svg>
      ),
      description: "A full-stack engineering knowledge workspace. Milestone 1 includes a Django REST API, React + TypeScript frontend, JWT registration and login, protected project CRUD, and Docker Compose foundations for PostgreSQL and Redis. Document ingestion, vector retrieval, and grounded RAG remain planned roadmap features.",
      metrics: "Milestone 1 published · AI/RAG roadmap in progress",
      tech: ["Python", "Django REST", "React", "TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/awaisiftikharr/DevAtlas-AI"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-900">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl font-bold tracking-tight text-white">
              Awais<span className="text-emerald-400">.</span>Dev
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-emerald-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-emerald-400 transition-colors">Education</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
            <a 
              href="mailto:awaisiftikhardev@gmail.com?subject=CV%20Request" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition-all duration-200"
            >
              Request CV
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400 hover:text-white">
              {isMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0F172A] px-4 pt-2 pb-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-400 hover:text-white">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-slate-400 hover:text-white">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-slate-400 hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-slate-400 hover:text-white">Experience</button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left py-2 text-slate-400 hover:text-white">Education</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-400 hover:text-white">Contact</button>
            <a 
              href="mailto:awaisiftikhardev@gmail.com?subject=CV%20Request" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center w-full px-4 py-2.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold"
            >
              Request CV
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="pt-8 md:pt-16 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to Junior Software Engineer and Full-Stack Developer Roles
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Building Scalable, Robust <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Hi, I'm <strong className="text-white font-semibold">Awais Iftikhar</strong>. I am a Computer Science graduate from The Islamia University of Bahawalpur. I build web applications and explore backend development, data-driven features, and applied machine learning.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('projects')} className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-emerald-500/10">
              Explore Engineered Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all duration-200">
              Let's Connect
            </button>
          </div>
        </section>

        {/* Technical Skills Core */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Core Competencies</h2>
            <p className="text-slate-400 text-sm mt-1">Technologies used across my coursework and software projects.</p>
          </div>
          
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm font-mono rounded-md bg-slate-800 text-slate-300 border border-slate-700/50">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 11 GitHub Repositories Showcase Grid */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Project Showcase Portfolio</h2>
            <p className="text-slate-400 text-sm mt-1">Selected projects with source code and implementation notes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative flex flex-col justify-between p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-slate-800">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/40">
                      GitHub Repository
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    <span className="truncate">{project.metrics}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs font-medium">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      Repository
                    </a>
                    <span className="text-slate-600">|</span>
                    <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
            <p className="text-slate-400 text-sm mt-1">Practical experience in a remote software development environment.</p>
          </div>
          <div className="p-6 sm:p-8 rounded-xl border border-slate-800 bg-slate-900/20">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Rhombix Technologies</h3>
                <p className="text-sm text-emerald-400 font-medium">Remote Software Development Intern</p>
                <p className="text-sm text-slate-400">Completed a three-month remote internship, gaining practical exposure to software development workflows and technical assignments.</p>
              </div>
              <span className="text-xs font-mono text-slate-400 whitespace-nowrap">July – September 2026</span>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section id="education" className="space-y-8 scroll-mt-20">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Formal Academic History</h2>
            <p className="text-slate-400 text-sm mt-1">Verified institutional degree mapping foundational software metrics.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl border border-slate-800 bg-slate-900/20 flex flex-col sm:flex-row justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10">
                Graduated • July 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium">The Islamia University of Bahawalpur</p>
              <p className="text-xs text-slate-400">Department of Computer Science · CGPA: 3.25 / 4.00</p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                Rigorous focus across architectural logic layout parameters, algorithm validation arrays, data structures analysis, modern engineering stacks, and normalized enterprise database design architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Contact Interface */}
        <section id="contact" className="space-y-8 scroll-mt-20">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Initiate Communication Channels</h2>
            <p className="text-slate-400 text-sm mt-1">Direct verification networks to fast-track hiring review interactions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            
            {/* Coordinates */}
            <div className="md:col-span-2 space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <h3 className="text-base font-bold text-white">Verified Contact Coordinates</h3>
                
                <div className="space-y-3 text-xs">
                  <a href="mailto:awaisiftikhardev@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-700/30 transition-all">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span className="truncate">awaisiftikhardev@gmail.com</span>
                  </a>
                  
                  <a href="tel:+923049727530" className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-700/30 transition-all">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+92 304 9727530</span>
                  </a>

                  <a href="https://www.linkedin.com/in/awaisiftikhardev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-700/30 transition-all">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="truncate">linkedin.com/in/awaisiftikhardev</span>
                  </a>

                  <a href="https://github.com/awaisiftikharr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-700/30 transition-all">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    <span>github.com/awaisiftikharr</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Message Dispatcher Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-medium text-slate-400">Your name</label>
                    <input 
                      type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}
                      className="w-full bg-slate-800/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="e.g., Hiring Team Manager"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-medium text-slate-400">Email address</label>
                    <input 
                      type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                      className="w-full bg-slate-800/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" 
                      placeholder="recruiter@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">Message</label>
                  <textarea 
                    id="message" name="message" rows="4" required value={formData.message} onChange={handleInputChange}
                    className="w-full bg-slate-800/60 border border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none" 
                    placeholder="Provide details regarding role specifications or interview pathways..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>

                {formSubmitted && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>Your email application should open with this message ready to send.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Interface */}
      <footer className="mt-24 border-t border-slate-800/60 bg-slate-900/10 text-slate-500 text-xs py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Awais Iftikhar. Built with React and Vite.
          </div>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">Privacy Infrastructure</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">Terms of Operations</a>
          </div>
        </div>
      </footer>
    </div>
  );
}