import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tendulkarsuriya", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/tendulkarsuriya", icon: "linkedin" },
    { name: "X (Twitter)", href: "https://twitter.com/tendulkarsuriya", icon: "twitter" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tendulkar Suriya. All rights reserved.
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-4 text-center text-gray-500 dark:text-gray-500 text-xs">
          Built with Next.js and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
