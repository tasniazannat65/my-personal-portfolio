import { Link } from "react-router";
import { projects } from "../../../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectsSection = () => {

  const featuredProjects = projects.slice(0, 3);

  return (
   <section className="py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ===== Header ===== */}
        <div className="text-center mb-16 fade-in-element transform translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4">
            Featured Projects
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            A curated selection of my top projects. For more projects, visit the project page.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* ===== Image Container with Enhanced Styling ===== */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* ===== Modern Hover Overlay ===== */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/95 to-secondary-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Quick Action Buttons */}
                  <div className="flex gap-3 mb-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-300 border border-white/30 hover:scale-110"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-300 border border-white/30 hover:scale-110"
                      aria-label="View Live Project"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="px-8 py-3.5 bg-white text-primary-700 rounded-xl font-display font-bold text-sm transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-secondary-500 hover:text-white shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    View Project Details
                  </Link>
                </div>

                {/* Floating Tech Badge on Image */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold text-primary-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.techStack.length}+ Technologies
                </div>
              </div>

              {/* ===== Card Content with Modern Design ===== */}
              <div className="p-7 relative">
                
                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-bl-full opacity-50"></div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-extrabold uppercase tracking-widest text-primary-700 bg-gradient-to-r from-primary-50 to-secondary-50 px-3 py-1.5 rounded-lg border border-primary-200/50 hover:border-primary-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors relative z-10 leading-tight">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 relative z-10">
                  {project.description}
                </p>

                {/* Bottom Section with Divider */}
                <div className="pt-4 border-t border-gray-200 relative z-10">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-primary-700 font-bold text-sm uppercase tracking-wider group/link hover:text-secondary-600 transition-colors"
                  >
                    <span className="relative">
                      Explore Case Study
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <FaArrowRight className="group-hover/link:translate-x-2 transition-transform text-secondary-500" />
                  </Link>
                </div>

                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== View All Projects CTA ===== */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl shadow-lg hover:bg-primary-700 transition-all"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
