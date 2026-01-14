import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import profileImg from '../../../assets/profile.jpeg'

const AboutMe = () => {
     const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = 'translateY(40px)';
      sectionRef.current.style.transition = 'all 0.8s ease-out';
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
    return (
           <section className="relative py-16 lg:py-20  overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-900 mb-4">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            A passionate frontend developer crafting digital experiences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Visual */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[450px]">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl transform rotate-6 opacity-10"></div>
                
                {/* Image Card */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl overflow-hidden shadow-card border border-primary-100">
                  <img
                    src={profileImg}
                    alt="About Tasnia"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-primary-100 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-900">Creative</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-secondary-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-900">Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-display font-bold text-primary-900">
              Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Tasnia</span>
            </h3>
            
            <p className="text-lg text-primary-800 leading-relaxed">
              I'm a <span className="font-semibold text-primary-700">frontend web developer</span> passionate about building 
              beautiful, functional, and user-friendly websites. My journey into web development started with curiosity 
              and has grown into a dedication to create seamless digital experiences.
            </p>

            <p className="text-lg text-primary-800 leading-relaxed">
              I specialize in <span className="font-semibold text-primary-700">React, JavaScript, and modern CSS frameworks</span> like 
              Tailwind CSS. Every project I build is an opportunity to learn, innovate, and push the boundaries of what's 
              possible on the web.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-3xl font-display font-bold text-primary-700">15+</p>
                <p className="text-sm text-primary-600 font-medium">Projects</p>
              </div>
              <div className="text-center p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                <p className="text-3xl font-display font-bold text-secondary-600">5+</p>
                <p className="text-sm text-secondary-700 font-medium">Skills</p>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-3xl font-display font-bold text-primary-700">100%</p>
                <p className="text-sm text-primary-600 font-medium">Passion</p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'UI/UX'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-primary-700 font-medium text-sm rounded-lg border border-primary-200 shadow-sm hover:shadow-md hover:border-primary-400 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center">
                <Link to={'/about'}>Learn More About Me</Link>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-6 shadow-sm border border-primary-200">
            <p className="text-primary-800 text-lg font-medium max-w-3xl">
              💻 I believe in writing <span className="font-bold text-primary-700">clean, maintainable code</span> and 
              creating experiences that users love. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutMe;