import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/photo.jpg";
// import { skillCategories } from "@/lib/skills";
import { skillCategories } from '../../lib/skills';

export default function About() {

const skillSets = []

console.log("skill}",skillCategories);

skillCategories.forEach((category) => {
  category.skills.forEach((skill) => {
    console.log("dsd++",skill?.name);
    
    skillSets.push(skill.name);
  });
})


// console.log("skillsets",skillsets);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" aria-hidden />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white shadow-xl rounded-2xl"
              aria-hidden={false}
            >
              <Image
                src={photo}
                alt="Tendulkar Suriya — Software Engineer"
                className="object-cover"
                priority
                sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 20rem"
                fill={false}
                width={320}
                height={320}
              />
            </div>
            <div className="flex items-center justify-center gap-12">
              <Link href="/resume.pdf" legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  download
                  aria-label="Download resume"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                  Resume
                </a>
              </Link>

              <a
                href="mailto:tendukarsuriya@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Contact via email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Hi, I&apos;m Tendulkar — a passionate Software Engineer
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a Software Engineer based in Ariyalur, Tamilnadu, India. I
              specialize in building modern web applications and am passionate
              about creating exceptional digital experiences.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With expertise in React, Next.js, and Node.js, I&apos;ve worked on
              projects ranging from e-commerce platforms to SaaS applications. I
              focus on reliable architecture, performance, and developer
              ergonomics.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of work I read technical blogs, contribute to open-source,
              and explore new technologies. I&apos;m open to collaborations and new
              opportunities.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Ariyalur, Tamilnadu
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  1 Years 3 Months
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <a
                  href="mailto:tendukarsuriya@gmail.com"
                  className="font-semibold text-gray-900 dark:text-white hover:underline inline-flex items-center gap-2"
                  aria-label="Email Tendulkar Suriya"
                >
                  tendukarsuriya@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Availability
                </p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  Open to Work
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skillSets.map((tech) => (
                  <span
                    key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    aria-hidden
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4 flex gap-4" aria-label="Social links">
              <a
                href="https://github.com/tendulkarsuriya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.7 2 12.36c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.23.68-.5v-1.8c-2.78.63-3.37-1.4-3.37-1.4-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .08 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.14 0-1.14.38-2.07 1.02-2.8-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.07a9.2 9.2 0 012.5-.35c.85 0 1.7.12 2.5.35 1.9-1.35 2.74-1.07 2.74-1.07.55 1.43.2 2.49.1 2.75.64.73 1.02 1.66 1.02 2.8 0 4-2.34 4.88-4.57 5.14.36.33.69.97.69 1.97v2.92c0 .27.18.6.68.5A10.41 10.41 0 0022 12.36C22 6.7 17.52 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/tendulkarsuriya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14M8 17v-7H5v7h3m-1.5-8.2A1.8 1.8 0 1 0 4.7 7a1.79 1.79 0 0 0 1.8 1.8m12.5 8.2v-4c0-2.1-1.1-3-2.5-3A2.3 2.3 0 0 0 15 11v-1H12v7h3v-4s0-2 1.8-2 1.2 2 1.2 2v4Z" />
                </svg>
              </a>
              <a
                href="https://x.com/tendulkarsuriya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H21l-6.6 7.5L22 22h-7.3l-4.8-6.3L4.4 22H2l7-7.8L2 2h7.4l4.3 5.7L18.9 2zm-2.6 18h2.3L8.8 4H6.4l9.9 16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
