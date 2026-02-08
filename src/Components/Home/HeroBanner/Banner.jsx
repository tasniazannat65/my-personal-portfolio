import { useEffect, useRef } from 'react';
import profileImg from '../../../assets/profile.jpeg'
import { Link } from 'react-router';

export default function Banner() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    // Simple fade and slide animation without GSAP
    const textEl = textRef.current;
    const imageEl = imageRef.current;
    const socialsEl = socialsRef.current;

    if (textEl) {
      textEl.style.opacity = '0';
      textEl.style.transform = 'translateY(30px)';
      setTimeout(() => {
        textEl.style.transition = 'all 0.8s ease-out';
        textEl.style.opacity = '1';
        textEl.style.transform = 'translateY(0)';
      }, 100);
    }

    if (imageEl) {
      imageEl.style.opacity = '0';
      imageEl.style.transform = 'translateX(50px)';
      setTimeout(() => {
        imageEl.style.transition = 'all 0.8s ease-out 0.3s';
        imageEl.style.opacity = '1';
        imageEl.style.transform = 'translateX(0)';
      }, 100);
    }

    if (socialsEl) {
      socialsEl.style.opacity = '0';
      socialsEl.style.transform = 'translateY(20px)';
      setTimeout(() => {
        socialsEl.style.transition = 'all 0.8s ease-out 0.5s';
        socialsEl.style.opacity = '1';
        socialsEl.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tasniazannat65',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tasnia-zannat/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/tasniya.zannat.90',
      icon: (
      <svg
  className="w-6 h-6"
  fill="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
</svg>

      )
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Animated Background Particles/Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Icons */}
        <div className="absolute top-20 left-10 text-primary-300/10 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        
        <div className="absolute top-40 right-20 text-secondary-300/10 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}>
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>

        <div className="absolute bottom-40 left-1/4 text-primary-400/10 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/4 text-secondary-400/10 animate-float" style={{ animationDelay: '1.5s', animationDuration: '9s' }}>
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.5 4.5c-1.95-1.95-5.05-1.95-7 0l-3.5 3.5c-1.95 1.95-1.95 5.05 0 7l1.41-1.41c-1.17-1.17-1.17-3.07 0-4.24l3.5-3.5c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24l-1.41 1.41 1.41 1.41 1.41-1.41c1.95-1.95 1.95-5.05 0-7z"/>
          </svg>
        </div>

        <div className="absolute bottom-20 right-1/3 text-primary-300/10 animate-float" style={{ animationDelay: '0.5s', animationDuration: '7.5s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-40px) rotate(-5deg); }
          75% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          
          {/* Left Content */}
          <div ref={textRef} className="space-y-8 text-center lg:text-left order-2 lg:order-1">
           

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                  Tasnia
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-primary-100">
                Frontend Web Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-primary-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about creating intuitive user interfaces and bringing creative ideas to life through clean code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a
  href="/Tasnia_Zannat_Junior_Frontend_Developer_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-xl hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-secondary-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
>
  View Resume
  <svg
    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-md hover:shadow-lg">
                <Link to={'/projects'}>View Projects</Link>
              </button>
            </div>

            {/* Social Links */}
            <div ref={socialsRef} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-white hover:text-primary-900 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 border border-white/20 hover:border-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                
                {/* Main Image Circle */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl shadow-black/50 bg-gradient-to-br from-primary-700 to-secondary-700 backdrop-blur-sm">
                  <img
                    src={profileImg}
                    alt="Tasnia - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 right-8 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-lg animate-bounce">
                  <span className="text-white font-bold text-sm">⚛️ React</span>
                </div>

                <div className="absolute bottom-8 -left-8 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-white font-bold text-sm">💨 Tailwind</span>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-6 py-4 shadow-xl border-2 border-primary-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900">15+ Projects</p>
                      <p className="text-xs text-muted-500">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}