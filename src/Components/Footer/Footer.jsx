import { useState } from 'react';
import { Link } from 'react-router';

export default function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tasniazannat65',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tasnia-zannat/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/tasniya.zannat.90',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600'
    },
   
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skill' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Responsive Design',
    'Frontend Development',
    'React Applications'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border-2 border-white rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-primary-100 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-700 font-display font-black text-2xl">T</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">Tasnia</h3>
                  <p className="text-xs text-primary-200">Frontend Developer</p>
                </div>
              </div>
              
              <p className="text-primary-100 leading-relaxed mb-6 text-sm">
                Crafting beautiful, responsive web experiences with modern technologies. 
                Passionate about creating intuitive user interfaces.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/40`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-400 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-100 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-400 rounded-full"></span>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-primary-100 text-sm flex items-start gap-2">
                    <svg className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-display font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-400 rounded-full"></span>
                Stay Updated
              </h4>
              <p className="text-primary-100 mb-4 text-sm">
                Subscribe to get the latest updates and projects.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 outline-none focus:border-white/40 focus:bg-white/15 transition-all text-sm"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  Subscribe
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <a href="mailto:tasniazannat9@gmail.com" className="text-primary-100 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  tasniazannat9@gmail.com
                </a>
                <a href="tel:+8801645165206" className="text-primary-100 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +880 1645165206
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-200 text-sm text-center">
              © {new Date().getFullYear()} <span className="text-white font-bold">Tasnia</span>. Built with 💙 and React.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-semibold">Back to Top</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Extra Info Bar */}
        <div className="pb-6 text-center">
          <div className="inline-flex items-center gap-6 text-xs text-primary-200">
            
            <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
            <span>Based in Chattogram, Bangladesh</span>
            <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
            <span>Open to Remote Work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}