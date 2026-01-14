import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

export default function Skill() {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const skillsContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Re-animate skills when tab changes
    if (skillsContentRef.current) {
      const elements = skillsContentRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
      });
      
      setTimeout(() => {
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }, 50);
    }
  }, [activeTab]);

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      description: 'Building beautiful, responsive, and interactive user interfaces',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐', projects: 15 },
        { name: 'CSS3', level: 92, icon: '🎨', projects: 15 },
        { name: 'JavaScript (ES6+)', level: 88, icon: '⚡', projects: 12 },
        { name: 'React.js', level: 85, icon: '⚛️', projects: 10 },
        { name: 'Tailwind CSS', level: 90, icon: '💨', projects: 15 },
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Server-side development and database management',
      skills: [
        { name: 'Node.js', level: 78,  icon: '🟢', projects: 6 },
        { name: 'Express.js', level: 75,  icon: '🚂', projects: 6 },
        { name: 'MongoDB', level: 72,  icon: '🍃', projects: 4 },
        { name: 'Firebase', level: 70, icon: '🔥', projects: 6 },
      ]
    },
    tools: {
      title: 'Tools & Workflow',
      description: 'Development tools and version control',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: '🔧', projects: 30 },
        { name: 'VS Code', level: 95, icon: '💻', projects: 30 },
        { name: 'Figma', level: 82,  icon: '🎯', projects: 10 },
        { name: 'npm/yarn', level: 85,  icon: '📚', projects: 12 },
      ]
    },
    design: {
      title: 'UI/UX & Design',
      description: 'Creating user-centered designs and experiences',
      skills: [
        { name: 'Responsive Design', level: 92,  icon: '📱', projects: 20 },
        { name: 'UI/UX Principles', level: 85,  icon: '✨', projects: 12 },
        { name: 'Animation', level: 75,  icon: '🎬', projects: 6 },
        { name: 'Accessibility', level: 78,  icon: '♿', projects: 10 },
      ]
    }
  };

  const tabs = [
    { id: 'all', label: 'All Skills', icon: '🎯' },
    { id: 'frontend', label: 'Frontend', icon: '💻' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🔧' },
    { id: 'design', label: 'Design', icon: '🎨' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return Object.values(skillsData);
    }
    return [skillsData[activeTab]];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted-100 to-primary-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
              Technical Expertise
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-900 mb-6">
              My <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, tools, and technologies I've mastered 
              through dedicated learning and hands-on project experience
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Technologies', value: '18+', icon: '💻', color: 'from-primary-500 to-primary-700' },
              { label: 'Projects Built', value: '15+', icon: '🚀', color: 'from-secondary-500 to-secondary-700' },
              { label: 'Learning Hours', value: '1000+', icon: '⏱️', color: 'from-primary-400 to-primary-600' },
              { label: 'Skill Level', value: 'Advanced', icon: '⭐', color: 'from-secondary-400 to-secondary-600' },
            ].map((stat) => (
              <div key={stat.label} className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
                <div className="bg-white rounded-2xl p-6 shadow-card border border-primary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-display font-bold text-primary-900">{stat.value}</p>
                  <p className="text-sm text-muted-500 font-medium mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section ref={sectionRef} className="relative py-6 bg-white border-y border-muted-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                    : 'bg-muted-100 text-primary-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section ref={skillsContentRef} className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {getFilteredSkills().map((category) => (
              <div key={category.title} className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-primary-700">{category.description}</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mt-4 rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group bg-white rounded-2xl p-6 shadow-card border-2 border-transparent hover:border-primary-300 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-bold text-primary-900">
                              {skill.name}
                            </h3>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 font-bold text-sm rounded-lg">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="h-3 bg-muted-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Projects Count */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-500">Projects completed</span>
                        <span className="font-semibold text-primary-700 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                          {skill.projects} projects
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-secondary-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Continuous Learning & Growth
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Technology evolves rapidly, and so do I. I'm committed to staying current with the latest 
            web development trends, best practices, and emerging technologies. Every project is an 
            opportunity to learn something new and refine my craft.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              <Link to={'/projects'}>View My Projects</Link>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-primary-700 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}