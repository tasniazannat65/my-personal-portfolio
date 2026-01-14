import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const SkillSection = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'React', level: 88, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 92, icon: '💨' },
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-700',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      skills: [
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'Express', level: 70, icon: '🚂' },
        { name: 'MongoDB', level: 72, icon: '🍃' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-primary-400 to-secondary-500',
      bgColor: 'bg-gradient-to-br from-primary-50 to-secondary-50',
      borderColor: 'border-primary-200',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: '🔧' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 80, icon: '🎯' },
        { name: 'Responsive Design', level: 90, icon: '📱' },
      ]
    }
  ];
    return (
        <section ref={sectionRef} className="relative py-16 lg:py-20  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-15"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            What I Do Best
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-4">
            My  <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <div className="group h-full bg-white rounded-2xl shadow-card border-2 border-transparent hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Card Header */}
                <div className={`${category.bgColor} p-6 border-b-2 ${category.borderColor}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary-900">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-sm font-semibold text-primary-800">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-muted-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-card border border-primary-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-500 font-medium">Always Learning</p>
                  <p className="text-2xl font-display font-bold text-primary-900">Growing Every Day</p>
                </div>
              </div>
              <button className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center">
                <Link to={'/projects'}>View My Projects</Link>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SkillSection;