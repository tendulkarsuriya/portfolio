"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, categories } from "@/lib/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              {!project.pic ? (
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {project.title}
                  </span>
                </div>
              ) : (
                <div className="h-48 bg-white dark:bg-gray-800 flex items-center justify-center p-4 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              )}

              {/* Project Details */}
              <div className="p-6">
                <div className="flex flex-row justify-content-center items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className={`h-2 w-2 mb-2  rounded-full ${project.status ? "bg-green-400" : "bg-red-400"} ` } ></div>
                    {/* <div className="flex">
                  {project.status ? (
                    <span className="relative h-3 w-3 rounded-full bg-green-500" />
                  ) : (
                    <span className="  absolute inset-0 rounded-full blur-md bg-red-500/70" />
                  )}
                    </div> */}
                  
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  {!project.private && (
                    <a
                      disabled={project.private}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center px-4 py-2 rounded-lg transition-colors duration-200 border ${
                        !project.private
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600"
                          : "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
