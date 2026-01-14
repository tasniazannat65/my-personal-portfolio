import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // <-- useLocation hook
  const activeSection = location.pathname; // instant active link

 



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update scroll progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-bar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skill' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

 

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-primary-100' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 transition-all duration-300 rounded-r-full shadow-lg shadow-primary-300/50" 
          style={{ width: '0%' }} 
          id="scroll-bar"
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section - Enhanced with Animation */}
            <Link to={'/'} 
            
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Animated Logo Icon */}
              <div className="relative">
                {/* Outer Ring Animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Main Logo Container */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                  {/* Letter T with animation */}
                  <span className="text-white font-display font-black text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    T
                  </span>
                  
                  {/* Decorative Corner Dots */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-secondary-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-1">
                  <h1 className="text-2xl font-display font-bold text-primary-900 leading-none tracking-tight group-hover:text-primary-700 transition-colors duration-300">
                    Tasnia
                  </h1>
                  <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
                </div>
                <p className="text-xs font-semibold text-primary-600 tracking-wider uppercase mt-0.5">
                  Frontend Developer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 bg-muted-100/80 backdrop-blur-sm p-2 rounded-2xl border border-primary-100/50 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                    activeSection === link.path
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md shadow-primary-200' 
                      : 'text-primary-700 hover:text-primary-900 hover:bg-white'
                  }`}
                >
                  {/* Background hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
                  
                  {link.name}
                  
                  {/* Active indicator dot */}
                  {activeSection === link.path && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl hover:from-primary-700 hover:to-secondary-700 shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-primary-50 rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-100 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-primary-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-primary-100 shadow-2xl transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block p-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  activeSection === link.path
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105' 
                    : 'text-primary-700 hover:bg-primary-50 hover:translate-x-2'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {activeSection === link.path && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              to="/contact"
              className="block w-full mt-4 px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20"></div>
    </>
  );
}