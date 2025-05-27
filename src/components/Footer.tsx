import React from 'react';
import { Github as GitHub, Linkedin, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-green-500">
              Med<span className="text-blue-500">Mdn</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building Smart Systems with Code, Cloud, and Creativity
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Med-Almdn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-almoudane-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/Med-Almdn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LeetCode"
              >
                <Code size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Mohamed Almoudane — Built with ❤️ using React and Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};