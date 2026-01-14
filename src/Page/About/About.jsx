import React, { useEffect, useRef } from 'react';

const About = () => {
      const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    const imageEl = imageRef.current;

    if (contentEl) {
      contentEl.style.opacity = '0';
      contentEl.style.transform = 'translateX(-30px)';
      setTimeout(() => {
        contentEl.style.transition = 'all 0.8s ease-out';
        contentEl.style.opacity = '1';
        contentEl.style.transform = 'translateX(0)';
      }, 100);
    }

    if (imageEl) {
      imageEl.style.opacity = '0';
      imageEl.style.transform = 'translateX(30px)';
      setTimeout(() => {
        imageEl.style.transition = 'all 0.8s ease-out 0.2s';
        imageEl.style.opacity = '1';
        imageEl.style.transform = 'translateX(0)';
      }, 100);
    }
  }, []);
    return (
       <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-muted-100 to-primary-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-15"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-6">
            {/* Programming Journey */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-primary-900 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                My Journey
              </h3>
              <p className="text-lg text-primary-800 leading-relaxed">
                My coding journey began with curiosity and a passion for creating things that live on the internet. 
                What started as tinkering with HTML and CSS quickly evolved into a deep dive into the world of web development. 
                I've immersed myself in <span className="font-semibold text-primary-700">JavaScript, React, and modern frontend frameworks</span>, 
                constantly learning and building projects to sharpen my skills.
              </p>
            </div>

            {/* What I Love */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-primary-900 flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                What I Love
              </h3>
              <p className="text-lg text-primary-800 leading-relaxed">
                I'm passionate about <span className="font-semibold text-primary-700">crafting beautiful, responsive user interfaces</span> that 
                provide seamless experiences across all devices. I love the challenge of turning complex problems into simple, 
                intuitive designs. Whether it's building interactive websites, creating smooth animations, or optimizing performance, 
                I find joy in every aspect of frontend development.
              </p>
            </div>

            {/* Beyond Code */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-primary-900 flex items-center">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                Beyond Code
              </h3>
              <p className="text-lg text-primary-800 leading-relaxed">
                When I'm not coding, you'll find me exploring creative outlets like <span className="font-semibold text-primary-700">digital art and design</span>, 
                or unwinding with a good book. I also enjoy staying active through sports and spending time in nature. 
                These hobbies fuel my creativity and help me approach problems with a fresh perspective.
              </p>
            </div>

            {/* Personality Traits */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solver', 'Creative Thinker', 'Quick Learner', 'Team Player', 'Detail-Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-white text-primary-700 font-medium rounded-lg border-2 border-primary-200 shadow-sm hover:shadow-md hover:border-primary-400 transition-all duration-200"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-3xl transform rotate-6 opacity-20"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-card border border-primary-100 p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Skills Grid */}
                <div className="space-y-6">
                  <h4 className="text-xl font-display font-bold text-primary-900 mb-6">Tech Stack</h4>
                  
                  {/* Skill Items */}
                  <div className="space-y-4">
                    {[
                      { name: 'React & JavaScript', level: 90, color: 'from-primary-500 to-primary-700' },
                      { name: 'HTML & CSS', level: 95, color: 'from-secondary-500 to-secondary-700' },
                      { name: 'Tailwind CSS', level: 88, color: 'from-primary-400 to-primary-600' },
                      { name: 'UI/UX Design', level: 80, color: 'from-secondary-400 to-secondary-600' },
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-primary-800">{skill.name}</span>
                          <span className="text-xs font-medium text-primary-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-muted-200">
                    <div className="text-center">
                      <p className="text-3xl font-display font-bold text-primary-700">15+</p>
                      <p className="text-sm text-muted-500">Projects Built</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-display font-bold text-secondary-600">100%</p>
                      <p className="text-sm text-muted-500">Dedicated</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Fact Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 shadow-card text-center">
            <p className="text-white text-lg font-medium">
              💡 <span className="font-bold">Fun Fact:</span> I believe the best code is not just functional, 
              but beautiful and maintainable. Every project is an opportunity to learn something new!
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;