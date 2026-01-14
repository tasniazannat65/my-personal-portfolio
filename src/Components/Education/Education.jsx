import { useEffect, useRef } from 'react';

export default function Education() {
  const sectionRef = useRef(null);

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
              }, index * 150);
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

  const coreSubjects = [
    { name: "Data Structures", icon: "🔗" },
    { name: "Web Development", icon: "🌐" },
    { name: "Database Management", icon: "💾" },
    { name: "Software Engineering", icon: "⚙️" },
    { name: "Computer Networks", icon: "🔌" },
    { name: "Operating Systems", icon: "🖥️" }
  ];

  const achievements = [
    { label: "CGPA", value: "3.93/4.0" },
    { label: "Projects", value: "15+" },
    { label: "Duration", value: "4 Years" }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20  overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Icons */}
      <div className="absolute top-40 right-20 text-6xl opacity-5 animate-bounce" style={{ animationDuration: '3s' }}>
        📚
      </div>
      <div className="absolute bottom-40 left-20 text-6xl opacity-5 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        🎓
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-4">
            Educational <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-transparent"></div>

          {/* Education Card */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Institution Info */}
              <div className="lg:text-right space-y-6">
                <div className="inline-block lg:float-right bg-white rounded-2xl p-8 shadow-card border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Institution Logo/Icon */}
                  <div className="flex lg:flex-row-reverse items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className="text-left lg:text-right">
                      <h3 className="text-2xl font-display font-bold text-primary-900">
                        Daffodil Institute of IT
                      </h3>
                      <p className="text-primary-600 font-medium">Chattogram, Bangladesh</p>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-xl font-semibold shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2021 – 2025
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {achievements.map((achievement) => (
                      <div key={achievement.label} className="text-center p-3 bg-primary-50 rounded-xl border border-primary-100">
                        <p className="text-xl font-display font-bold text-primary-700">{achievement.value}</p>
                        <p className="text-xs text-primary-600 font-medium mt-1">{achievement.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>

              {/* Right Side - Degree Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-card border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Degree Title */}
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 font-bold rounded-lg text-sm mb-3">
                      DIPLOMA PROGRAM
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary-900 mb-2">
                      Computer Engineering
                    </h3>
                    <p className="text-lg text-primary-700 leading-relaxed">
                      Specialized in modern computing architectures, software development lifecycles, 
                      and building robust applications. Focused on bridging hardware logic with 
                      high-level software solutions.
                    </p>
                  </div>

                  {/* Core Subjects */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary-600 rounded"></span>
                      Core Subjects
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {coreSubjects.map((subject, index) => (
                        <div
                          key={index}
                          className="group flex items-center gap-2 px-3 py-2 bg-muted-100 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-500 text-primary-800 hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span className="text-lg group-hover:scale-110 transition-transform">{subject.icon}</span>
                          <span className="text-sm font-semibold">{subject.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Gained */}
          <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700 mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Skills & Knowledge Gained
              </h3>
              <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6">
                Through rigorous coursework and hands-on projects, I've developed expertise in 
                problem-solving, algorithm design, and creating scalable software solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Project Management', 'Technical Writing'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 hover:bg-white hover:text-primary-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}