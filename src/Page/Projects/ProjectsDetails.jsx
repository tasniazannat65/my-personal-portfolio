import { useParams, Link } from "react-router";
import { projects } from "../../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRocket, FaTools, FaLightbulb, FaStar, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProjectsDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
 
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted-100 animate-fadeIn">
        <h2 className="text-3xl font-display font-bold text-primary-900">Project Not Found</h2>
        <Link to="/" className="mt-4 text-primary-600 hover:text-secondary-600 flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
   <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="fixed bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Back Navigation */}
        <div className={`mb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <a 
            href="/" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </a>
        </div>

        {/* Hero Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-full text-sm shadow-lg">
              <FaStar className="text-yellow-300 animate-pulse" />
              Featured Project
            </span>
            <span className="px-4 py-2 bg-white text-slate-700 font-semibold rounded-full text-sm border border-gray-200 shadow">
              Case Study
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-secondary-400 bg-clip-text text-transparent">
              {project.name}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Transforming the digital commerce experience through innovative technology and user-centric design
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Featured Image */}
          <div className={`lg:col-span-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-lg rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Quick Info & CTAs */}
          <div className={`lg:col-span-4 space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                  View Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <FaGithub className="group-hover:rotate-12 transition-transform" />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-xl border border-blue-200">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                <FaTools className="text-blue-600" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 cursor-default hover:scale-110"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Plans Card */}
            <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaLightbulb className="text-yellow-300 text-2xl animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3">Future Vision</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Tabs */}
          <div className="flex flex-wrap md:flex-row gap-4 mb-8 overflow-x-auto pb-2">
            {['overview', 'challenge', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {tab === 'overview' && '📋 Overview'}
                {tab === 'challenge' && '🎯 Challenge'}
                {tab === 'features' && '⭐ Features'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            
            {activeTab === 'overview' && (
              <div className="p-8 lg:p-12 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-12 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-slate-900">Project Overview</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            )}

            {activeTab === 'challenge' && (
              <div className="p-8 lg:p-12 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <FaRocket className="text-4xl text-orange-500 animate-bounce" />
                  <h2 className="text-3xl font-bold text-slate-900">The Challenge</h2>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-2xl">
                  <p className="text-slate-700 text-lg leading-relaxed italic">
                    "{project.challenges}"
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="p-8 lg:p-12 animate-fadeIn">
                <div className="flex items-center gap-3 mb-8">
                  <FaCheckCircle className="text-4xl text-green-500" />
                  <h2 className="text-3xl font-bold text-slate-900">Key Features</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                      }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        ✓
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Interested in this project?</h3>
              <p className="text-slate-600">Let's discuss how we can work together</p>
            </div>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch 💬
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectsDetails;