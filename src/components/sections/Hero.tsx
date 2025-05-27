import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Mail } from 'lucide-react';
import Typed from 'typed.js';

export const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      // const typed = new Typed(typedRef.current, {
      //   strings: ['Code, Cloud, and Creativity'],
      //   typeSpeed: 50,
      //   backSpeed: 50,
      //   startDelay: 1000,
      //   showCursor: true,
      //   cursorChar: '|',
      //   loop: false
      // });

      const typed = new Typed(typedRef.current, {
        strings: ['Code, Cloud, and Creativity'],
        typeSpeed: 60,       // typing speed (ms per character)
        backSpeed: 40,       // deleting speed (ms per character)
        startDelay: 500,     // initial delay before typing starts
        backDelay: 2000,     // wait before deleting
        loop: true,          // make it repeat
        showCursor: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 animate-gradient overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(17, 24, 39, 0.05))'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block mb-6 px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full backdrop-blur-sm">
            <p className="text-sm md:text-base font-medium text-green-500">
              Hello, I'm Mohamed 👋
            </p>
          </div>
        </div>
        
        <h1 className="animate-fade-in opacity-0 mb-6 font-bold leading-tight tracking-tight text-white">
          Building Smart Systems with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500" ref={typedRef}></span>
        </h1>
        
        <p className="animate-fade-in opacity-0 mb-10 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          CS Master's student | Developer | Innovator
        </p>
        
        <div className="animate-fade-in opacity-0 flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#projects" className="btn btn-primary group">
            <span>Explore My Projects</span>
            <Code className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        
          <a href="#contact" className="btn btn-secondary group">
            <span>Get in Touch</span>
            <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};