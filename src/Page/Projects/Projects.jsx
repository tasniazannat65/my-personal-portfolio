import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis-1');
    }

    // Show current page and neighbors
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis-2');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
   <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ===== Page Header ===== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2  px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm mb-4   border border-blue-200">
            Portfolio Collection
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-4">
            All <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my complete portfolio showcasing diverse projects built with cutting-edge technologies
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-500   rounded-full"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
          </div>

          {/* Projects Count */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              {projects.length}
            </span>
            <span className="text-slate-600 font-medium">Total Projects</span>
          </div>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {currentProjects.map((project) => (
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

        {/* ===== Modern Pagination ===== */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6">
            
            {/* Page Info */}
            <div className="text-center">
              <p className="text-slate-600 font-medium">
                Showing <span className="font-bold text-slate-900">{indexOfFirstProject + 1}</span> to{" "}
                <span className="font-bold text-slate-900">{Math.min(indexOfLastProject, projects.length)}</span> of{" "}
                <span className="font-bold text-slate-900">{projects.length}</span> projects
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border-2 border-gray-200 hover:border-primary-500 hover:bg-blue-50 hover:text-primary-600 shadow-md hover:shadow-lg"
                }`}
              >
                <FaChevronLeft className={`transition-transform ${currentPage !== 1 ? 'group-hover:-translate-x-1' : ''}`} size={14} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {getPageNumbers().map((page) => (
                  typeof page === 'string' ? (
                    <span key={page} className="px-3 text-slate-400 font-bold">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[48px] h-12 rounded-xl font-bold transition-all duration-300 ${
                        currentPage === page
                          ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-blue-300/50 scale-110"
                          : "bg-white text-slate-700 border-2 border-gray-200 hover:border-primary-500 hover:bg-blue-50 hover:text-primary-600 hover:scale-105 shadow-md"
                      }`}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <FaChevronRight
                 className={`transition-transform ${currentPage !== totalPages ? 'group-hover:translate-x-1' : ''}`} size={14} />
              </button>
            </div>

            {/* Quick Jump (for many pages) */}
            {totalPages > 5 && (
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-md border border-gray-200">
                <label htmlFor="pageJump" className="text-sm font-medium text-slate-600">
                  Jump to page:
                </label>
                <select
                  id="pageJump"
                  value={currentPage}
                  onChange={(e) => handlePageChange(Number(e.target.value))}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg font-bold text-blue-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default Project;
