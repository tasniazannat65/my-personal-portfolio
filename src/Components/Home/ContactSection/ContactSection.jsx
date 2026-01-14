import { useEffect, useRef } from 'react';

export default function ContactSection() {
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "tasniazannat9@gmail.com",
      link: "mailto:tasniazannat9@gmail.com",
      description: "Send me an email anytime",
      gradientFrom: "from-primary-500",
      gradientTo: "to-primary-700",
      bgColor: "bg-primary-50",
      hoverBg: "hover:from-primary-600 hover:to-primary-800"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+880 1645165206",
      link: "tel:+8801645165206",
      description: "Give me a call",
      gradientFrom: "from-secondary-500",
      gradientTo: "to-secondary-700",
      bgColor: "bg-secondary-50",
      hoverBg: "hover:from-secondary-600 hover:to-secondary-800"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      title: "WhatsApp",
      value: "Chat instantly",
      link: "https://wa.me/8801645165206",
      description: "Quick response guaranteed",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-700",
      bgColor: "bg-green-50",
      hoverBg: "hover:from-green-600 hover:to-green-800"
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-4 border-primary-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border-4 border-secondary-300 rounded-lg opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
            Let's Work <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'm currently available for freelance work 
            and collaborations. Choose your preferred way to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700 group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-card border-2 border-transparent hover:border-primary-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradientFrom} ${method.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradientFrom} ${method.gradientTo} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {method.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-primary-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-500 group-hover:text-white/80 transition-colors duration-300 mb-4">
                    {method.description}
                  </p>

                  {/* Value */}
                  <p className="text-base font-semibold text-primary-700 group-hover:text-white transition-colors duration-300 mb-6">
                    {method.value}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-primary-600 group-hover:text-white font-semibold transition-colors duration-300">
                    <span>Contact Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Response Time Banner */}
        <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-primary-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary-900">Quick Response Time</h3>
                  <p className="text-muted-500">I typically respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-primary-50 text-primary-700 font-semibold rounded-xl border border-primary-200">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Available Now
              </div>
            </div>
          </div>
        </div>

        {/* Location & Availability Footer */}
        <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-center shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Based in Chattogram, Bangladesh • Available for remote work worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Schedule a Call
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-primary-700 transition-all duration-300">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="fade-in-element opacity-0 transform translate-y-8 transition-all duration-700 mt-12 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-muted-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Usually replies in hours</span>
            </div>
            <div className="flex items-center gap-2 text-muted-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Available on weekends</span>
            </div>
            <div className="flex items-center gap-2 text-muted-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Worldwide availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}