import React from 'react';

// Structuring the footer navigation paths for scalability
const FOOTER_SECTIONS = [
  {
    title: 'Support',
    links: ['Help Center', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighborhood concern'],
  },
  {
    title: 'Hosting',
    links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Airbnb-friendly apartments'],
  },
  {
    title: 'Airbnb',
    links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards', 'Airbnb.org emergency stays'],
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-16 text-sm text-gray-600">
      {/* Top Section: Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">{section.title}</h3>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:underline hover:text-gray-900 transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section: Copyright & System Metadata */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <span className="text-gray-500">© {currentYear} Alx-Airbnb, Inc.</span>
            <span className="hidden sm:inline text-gray-300">·</span>
            <a href="#privacy" className="hover:underline">Terms</a>
            <span className="text-gray-300">·</span>
            <a href="#privacy" className="hover:underline">Sitemap</a>
            <span className="text-gray-300">·</span>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <span className="text-gray-300">·</span>
            <a href="#privacy" className="hover:underline">Your Privacy Choices</a>
          </div>

          {/* Localization & Socials Context Mock */}
          <div className="flex items-center space-x-6 font-semibold text-gray-800">
            <button className="flex items-center space-x-1.5 hover:underline focus:outline-none">
              <span>🌐</span>
              <span>English (US)</span>
            </button>
            <button className="hover:underline focus:outline-none">
              <span>$</span>
              <span>USD</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;