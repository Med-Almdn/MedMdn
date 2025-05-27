import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, PlayCircle } from 'lucide-react';
import ReactPlayer from 'react-player';

type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  tools: string[];
  github?: string;
  demo?: string;
  video?: string;
};

export const Projects: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'FaceVision Web App',
      description: 'FaceVision is a scalable facial recognition system for real-time detection and personnel management. It combines advanced recognition technologies with an intuitive UI, ideal for attendance, access control, and identity verification.',
      image: 'https://github.com/Med-Almdn/FaceVision/blob/main/FaceVision.png?raw=true',
      date: 'March 2023',
      tools: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
      github: 'https://github.com/Med-Almdn/FaceVision',
      video: 'https://github.com/Med-Almdn/FaceVision/raw/main/Demo-video.mp4'
    },
    {
      title: 'Smart-Home-WSN',
      description: 'Smart-Home-WSN is a wireless sensor network for smart home automation. It uses ZigBee, Raspberry Pi, and Arduino to monitor motion and environment. The React + Tailwind dashboard displays real-time data with secure AES-128 transmission and NS-3 simulation support.',
      image: 'https://raw.githubusercontent.com/Med-Almdn/Smart-Home-WSN/28fec8ef5f61b46f3fc55218027a90a18cb02484/SmartHome.png',
      date: 'September 2022',
      tools: ['React', 'TailwindCSS', 'Raspberry Pi', 'Python'],
      github: 'https://github.com/Med-Almdn/Smart-Home-WSN',
      demo: 'https://med-almdn.github.io/Smart-Home-WSN/',
    },
    {
      title: 'Pokémon Review REST API',
      description: 'PokemonReview is a backend service that manages Pokémon and user reviews, supporting full CRUD operations. It uses API development, Postman for testing, and Mockito for unit tests, with scalable, maintainable design patterns.',
      image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg',
      date: 'April 2025',
      tools: ['Java', 'Spring Boot', 'JPA', 'Postgresql', 'Postman'],
      github: 'https://github.com/Med-Almdn/PokemonReview',
    },
    {
      title: 'Grocery-List-Categorizer',
      description: 'A Python script that uses an AI model to categorize and alphabetically sort grocery items by type such as Produce, Dairy, Meat, and Beverages. Input is read from a file and processed using LLama 3.2.',
      image: 'https://www.mlwires.com/wp-content/uploads/2024/04/Llama_3_featured_image-fs8.png', 
      date: 'April 2025',
      tools: ['Python', 'LLama 3.2', 'AI Model', 'Text Processing'],
      github: 'https://github.com/Med-Almdn/Grocery-List-Categorizer',
    },
    {
      title: 'Building a Blockchain from Scratch',
      description: 'A simple blockchain built in Python with a Flask API for creating transactions, mining blocks, and viewing the chain. Demonstrates core blockchain concepts like Proof of Work, hashing, and consensus.',
      image: 'https://raw.githubusercontent.com/Med-Almdn/BlockchainApp/refs/heads/main/Blockchain.png', 
      date: 'May 2025',
      tools: ['Python', 'Flask', 'REST API', 'Postman', 'cURL', 'SHA-256'],
      github: 'https://github.com/Med-Almdn/BlockchainApp', 
    },
    {
      title: 'Snake Game with SFML',
      description: 'A classic Snake Game built using C++ and SFML. The player controls a growing snake, eats fruits, and avoids collisions. Demonstrates core game mechanics, basic graphics, and OOP in C++.',
      image: 'https://github.com/Med-Almdn/Serpent-Game/blob/main/image.png?raw=true',
      date: 'August 2023',
      tools: ['C++', 'SFML', 'OOP', 'Game Loop', 'Rendering'],
      github: 'https://github.com/Med-Almdn/Serpent-Game', 
    }


  ];

  return (
    <section id="projects" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my academic and personal projects showcasing my technical abilities and problem-solving approach
        </p>

        <div className="grid gap-8 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/90 border border-gray-700/50 rounded-xl overflow-hidden shadow-md backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 transition-all duration-500 flex flex-col"
            >
              <div
                className="h-52 overflow-hidden relative group cursor-pointer"
                onClick={() => {
                  if (project.video) {
                    setShowVideo(true);
                    setActiveVideo(project.video!);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-black/40 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                  <Calendar size={12} />
                  {project.date}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4 pt-4 border-t border-gray-700 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => {
                        setShowVideo(true);
                        setActiveVideo(project.video!);
                      }}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <PlayCircle size={16} className="mr-2" />
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {showVideo && activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-start pt-16 px-4">
            <div className="relative w-full max-w-3xl rounded-xl bg-gray-900 shadow-xl overflow-hidden">
              <button
                onClick={() => {
                  setShowVideo(false);
                  setActiveVideo(null);
                }}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl z-10"
              >
                &times;
              </button>
              <div className="aspect-video">
                <ReactPlayer
                  url={activeVideo}
                  playing
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};




