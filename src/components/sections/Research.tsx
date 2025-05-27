import React, { useState } from 'react'; 
import { BookOpen, ExternalLink } from 'lucide-react';

export const Research: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    
    <section id="research" className="section bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Research & Publications</h2>
        <p className="section-subtitle">
          Academic contributions and ongoing research in computer science and technology
        </p>
        
        <div className="bg-gray-800 rounded-xl p-8 mt-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="bg-gray-750 p-4 rounded-lg flex items-center justify-center h-full">
                <BookOpen size={80} className="text-green-500 opacity-50" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                A Comprehensive Study on Virtualization in Cloud Computing
              </h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 text-gray-300">Abstract</h4>
                <div className="text-gray-400">
                  <p className={`sm:block ${expanded ? '' : 'line-clamp-5 sm:line-clamp-none'}`}>
                    This research paper explores the advancements and challenges in virtualization 
                    technologies within cloud computing environments. It analyzes different 
                    virtualization approaches, their performance implications, security considerations, 
                    and future trends. The study includes comparative analysis of container-based and 
                    hypervisor-based virtualization, with practical performance metrics and implementation 
                    guidelines for optimal resource utilization.
                  </p>
                  
                  {/* Read More/Less only on mobile */}
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 text-green-400 text-sm underline sm:hidden"
                  >
                    {expanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  Cloud Computing
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  Virtualization
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  Containers
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  Performance Analysis
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  Security
                </span>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.researchgate.net/publication/391768446_A_Comprehensive_Study_on_Virtualization_Techniques_and_Their_Role_in_Cloud_Computing" 
                  target="_blank"
                  className="btn btn-secondary flex items-center space-x-2 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>View Online</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Current Research Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="card card-hover">
              <h4 className="text-lg font-medium mb-3 text-blue-500">
                Unit Testing in Java with JUnit & Mockito
              </h4>
              <p className="text-gray-400">
                Conducted a case study on unit testing a Java-based User Management System. 
                Evaluated test coverage, mocking strategies, and CI integration using GitHub Actions and Jenkins.
                <a href="https://www.researchgate.net/publication/391767611_Unit_Testing_in_Java_Using_JUnit_and_Mockito_A_Case_Study" target="_blank" className="text-green-400 underline ml-1">Read Study</a>
              </p>
            </div>

            <div className="card card-hover">
              <h4 className="text-lg font-medium mb-3  text-green-500">
                Optimizing LLM Deployment on Raspberry Pi
              </h4>
              <p className="text-gray-400">
                Exploring quantized large language models like TinyLlama on Raspberry Pi 5. 
                Focused on balancing accuracy and performance using 8-bit quantization and 
                ONNX Runtime for real-time, low-power AI inference at the edge.
              </p>
            </div>

            
            
          </div>
        </div>

      </div>
    </section>
  );
};