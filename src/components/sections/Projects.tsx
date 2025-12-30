import React, { useMemo, useState } from 'react';
import { ExternalLink, Github, Calendar, PlayCircle, Star } from 'lucide-react';
import ReactPlayer from 'react-player';

// ---------------- Types ----------------
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tools: string[];
  category: ('Web' | 'AI' | 'Backend' | 'Systems' | 'Games')[];
  featured?: boolean;
  github?: string;
  demo?: string;
  video?: string;
};

// ---------------- Data ----------------
const PROJECTS: Project[] = [
  {
    id: 'facevision',
    title: 'FaceVision Web App',
    description:
      'Scalable facial recognition system for real-time detection and personnel management with an intuitive UI for attendance, access control, and identity verification.',
    image: 'https://github.com/Med-Almdn/FaceVision/blob/main/FaceVision.png?raw=true',
    date: 'March 2023',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
    category: ['AI'],
    featured: true,
    github: 'https://github.com/Med-Almdn/FaceVision',
    video: 'https://github.com/Med-Almdn/FaceVision/raw/main/Demo-video.mp4',
  },
  {
    id: 'smart-home-wsn',
    title: 'Smart-Home-WSN',
    description:
      'Wireless sensor network for smart homes using ZigBee, Raspberry Pi, and Arduino. Includes a React + Tailwind dashboard, AES-128 security, and NS-3 simulation.',
    image:
      'https://raw.githubusercontent.com/Med-Almdn/Smart-Home-WSN/28fec8ef5f61b46f3fc55218027a90a18cb02484/SmartHome.png',
    date: 'September 2022',
    tools: ['React', 'TailwindCSS', 'Raspberry Pi', 'Python'],
    category: ['Systems', 'Web'],
    github: 'https://github.com/Med-Almdn/Smart-Home-WSN',
    demo: 'https://med-almdn.github.io/Smart-Home-WSN/',
  },
  {
    id: 'pokemon-review',
    title: 'Pokémon Review REST API',
    description:
      'Backend service for managing Pokémon and user reviews with full CRUD operations, unit testing, and clean architecture.',
    image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg',
    date: 'April 2025',
    tools: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'Postman'],
    category: ['Backend'],
    github: 'https://github.com/Med-Almdn/PokemonReview',
  },
  {
    id: 'grocery-ai',
    title: 'Grocery List Categorizer (LLM)',
    description:
      'AI-powered Python tool that categorizes and alphabetically sorts grocery items using LLaMA 3.2.',
    image: 'https://www.mlwires.com/wp-content/uploads/2024/04/Llama_3_featured_image-fs8.png',
    date: 'April 2025',
    tools: ['Python', 'LLaMA 3.2', 'NLP'],
    category: ['AI'],
    github: 'https://github.com/Med-Almdn/Grocery-List-Categorizer',
  },
  {
    id: 'blockchain',
    title: 'Blockchain From Scratch',
    description:
      'Educational blockchain implementation with Proof of Work, hashing, and a Flask REST API for transactions and mining.',
    image: 'https://raw.githubusercontent.com/Med-Almdn/BlockchainApp/refs/heads/main/Blockchain.png',
    date: 'May 2025',
    tools: ['Python', 'Flask', 'REST API', 'SHA-256'],
    category: ['Backend'],
    github: 'https://github.com/Med-Almdn/BlockchainApp',
  },
  {
    id: 'snake-sfml',
    title: 'Snake Game (SFML)',
    description:
      'Classic Snake game built with C++ and SFML demonstrating OOP, game loop design, and rendering.',
    image: 'https://github.com/Med-Almdn/Serpent-Game/blob/main/image.png?raw=true',
    date: 'August 2023',
    tools: ['C++', 'SFML', 'OOP'],
    category: ['Games'],
    github: 'https://github.com/Med-Almdn/Serpent-Game',
  },
  {
    id: 'soursz-music',
    title: 'Soursz Music Platform',
    description:
      'A modern music promotion platform showcasing artists, releases, and pricing plans with a clean UI, smooth navigation, and responsive design.',
    image: '/images/soursz-music.png',
    date: 'June 2025',
    tools: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
    category: ['Web', 'Backend'],
    featured: true,
    demo: 'https://med-almdn.github.io/soursz-music/',
    github: 'https://github.com/Med-Almdn/soursz-music',
  },
];





// ---------------- Component ----------------
export const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState<'All' | Project['category'][number]>('All');
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const projects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A curated selection of academic and personal projects highlighting real-world problem solving
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {['All', 'Web', 'AI', 'Backend', 'Systems', 'Games'].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as Project['category'][number] | 'All')}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                filter === c
                  ? 'bg-green-500/20 border-green-400 text-green-300'
                  : 'border-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-800/90 border border-gray-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-green-500/10 transition-all flex flex-col"
            >
              {project.featured && (
                <span className="absolute top-3 left-3 z-10 flex items-center gap-1 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                  <Star size={12} /> Featured
                </span>
              )}

              <div className="relative h-52 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ${activeVideo === project.video ? 'opacity-0' : 'group-hover:scale-105'}`}
                />

                {project.video && activeVideo === project.video && (
                  <div className="absolute inset-0">
                    <ReactPlayer url={activeVideo} playing={playVideo} controls width="100%" height="100%" />
                    <button
                      onClick={() => { setActiveVideo(null); setPlayVideo(false); }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl z-20"
                    >
                      &times;
                    </button>
                  </div>
                )}

                <div className="absolute top-2 right-2 bg-black/40 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                  <Calendar size={12} /> {project.date}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4 pt-4 border-t border-gray-700 text-sm">
                  {project.github && (
                    <a href={project.github} target="_blank" className="flex items-center text-gray-400 hover:text-white">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => { setActiveVideo(project.video!); setPlayVideo(true); }}
                      className="flex items-center text-gray-400 hover:text-white"
                    >
                      <PlayCircle size={16} className="mr-2" /> Video
                    </button>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="flex items-center text-gray-400 hover:text-white">
                      <ExternalLink size={16} className="mr-2" /> Demo
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
};
