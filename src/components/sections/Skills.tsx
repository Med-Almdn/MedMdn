// import React, { useState } from 'react';
// import { Code, Server, Cpu, Users, Cloud, Wrench } from 'lucide-react';

// export const Skills: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('languages');
  
//   const tabs = [
//     { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
//     { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
//     { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
//     { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
//     { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
//     { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
//   ];
  
//   const skills = {
//     languages: [
//       'Java',
//       'Python',
//       'JavaScript / TypeScript',
//       'C / C++',
//       'HTML & CSS',
//       'SQL',
//       'PHP',
//       'Bash / Shell',
//       'JSON / YAML'
//     ],
//     frameworks: [
//       'Vue.js',
//       'React',
//       'Spring Boot',
//       'Flask',
//       'Tailwind CSS',
//       'Bootstrap',
//       'Express.js',
//       'TensorFlow / PyTorch',
//       'Pandas / NumPy'
//     ],
//     tools: [
//       'Git & GitHub',
//       'Vite',
//       'Postman',
//       'Docker',
//       'VS Code',
//       'Figma',
//       'Jupyter Notebook',
//       'Visual Paradigm',
//       'Arduino IDE',
//       'PlatformIO',
//       'NS-3 / Packet Tracer'
//     ],
//     cloud: [
//       'Firebase',
//       'AWS S3',
//       'GitHub',
//       'Nginx',
//       'CI/CD pipelines',
//       'Heroku',
//       'MQTT / Mosquitto Broker',
//       'Grafana / InfluxDB'
//     ],
//     hardware: [
//       'Raspberry Pi',
//       'ESP32 / ESP8266',
//       'Arduino Pro Mini',
//       'XBee (ZigBee modules)',
//       'Breadboard & Modules',
//       'DHT22, PIR, LDR Sensors',
//       'Camera Modules (ESP32-CAM)'
//     ],
//     soft: [
//       'Cross-cultural Communication',
//       'Team Collaboration & Leadership',
//       'Research & Academic Writing',
//       'Technical Documentation',
//       'Creative Problem-solving',
//       'Adaptability & Fast Learning',
//       'Public Speaking',
//       'Time Management',
//       'Multilingual: English, French, Arabic, Chinese'
//     ]
//   };

//   return (
//     <section id="skills" className="section bg-gray-900 h-screen">
//       <div className="container-custom">
//         <h2 className="my-6 section-title">My Skills</h2>
//         <p className="my-8 section-subtitle">
//           A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience
//         </p>
        
//         <div className="mt-12">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
//                     : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-sm font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {skills[activeTab as keyof typeof skills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-4 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50"
//               >
//                 <p className="text-gray-300 font-medium">{skill}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };







// import React, { useState } from 'react';
// import {
//   Code,
//   Server,
//   Wrench,
//   Cloud,
//   Cpu,
//   Users,
// } from 'lucide-react';

// export const Skills: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('languages');

//   const tabs = [
//     { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
//     { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
//     { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
//     { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
//     { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
//     { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
//   ];

//   const skills = {
//     languages: [
//       'Java',
//       'Python',
//       'JavaScript',
//       'TypeScript',
//       'C',
//       'C++',
//       'HTML',
//       'CSS',
//       'SQL',
//       'PHP',
//       'Bash',
//     ],
//     frameworks: [
//       'Vue.js',
//       'React',
//       'Spring Boot',
//       'Flask',
//       'Tailwind CSS',
//       'Bootstrap',
//       'Express.js',
//       'TensorFlow',
//       'PyTorch',
//       'Pandas',
//       'NumPy',
//     ],
//     tools: [
//       'Git',
//       'GitHub',
//       'Vite',
//       'Postman',
//       'Docker',
//       'VS Code',
//       'Figma',
//       'Jupyter',
//       'Lucidchart',
//       'Arduino IDE',
//       'NS-3',
//       'PlatformIO',
//     ],
//     cloud: [
//       'Firebase',
//       'AWS',
//       'GitHub Pages',
//       'Nginx',
//       'CI/CD',
//       'Heroku',
//       'MQTT',
//       'Grafana',
//       'InfluxDB',
//     ],
//     hardware: [
//       'Raspberry Pi',
//       'ESP32',
//       'ESP8266',
//       'Arduino Pro Mini',
//       'XBee',
//       'DHT22 Sensor',
//       'PIR Sensor',
//       'LDR Sensor',
//       'ESP32-CAM',
//     ],
//     soft: [
//       'Cross-cultural Communication',
//       'Team Collaboration',
//       'Research Writing',
//       'Technical Documentation',
//       'Problem Solving',
//       'Adaptability',
//       'Public Speaking',
//       'Time Management',
//       'Multilingual: English, French, Arabic, Chinese',
//     ],
//   };

//   const deviconMap: Record<string, string> = {
//     Java: 'devicon-java-plain',
//     Python: 'devicon-python-plain',
//     JavaScript: 'devicon-javascript-plain',
//     TypeScript: 'devicon-typescript-plain',
//     HTML: 'devicon-html5-plain',
//     CSS: 'devicon-css3-plain',
//     SQL: 'devicon-mysql-plain',
//     PHP: 'devicon-php-plain',
//     Bash: 'devicon-bash-plain',
//     React: 'devicon-react-original',
//     'Vue.js': 'devicon-vuejs-plain',
//     Docker: 'devicon-docker-plain',
//     Firebase: 'devicon-firebase-plain',
//     AWS: 'devicon-amazonwebservices-original',
//     Git: 'devicon-git-plain',
//     GitHub: 'devicon-github-original',
//     Figma: 'devicon-figma-plain',
//     'VS Code': 'devicon-vscode-plain',
//     Jupyter: 'devicon-jupyter-plain',
//     Bootstrap: 'devicon-bootstrap-plain',
//     'Tailwind CSS': 'devicon-tailwindcss-plain',
//     C: 'devicon-c-plain',
//     'C++': 'devicon-cplusplus-plain',
//   };

//   const customIconMap: Record<string, JSX.Element> = {
//     Flask: <FlaskIcon />,
//     TensorFlow: <BrainIcon />,
//     PyTorch: <BrainIcon />,
//     'DHT22 Sensor': <SettingsIcon />,
//     'PIR Sensor': <SettingsIcon />,
//     'LDR Sensor': <SettingsIcon />,
//     'ESP32-CAM': <CameraIcon />,
//     'MQTT': <GlobeIcon />,
//     'CI/CD': <WrenchIcon />,
//     'Time Management': <ClockIcon />,
//     'Multilingual: English, French, Arabic, Chinese': <LanguageIcon />,
//   };

//   return (
//     <section id="skills" className="section bg-gray-900 h-screen">
//       <div className="container-custom">
//         <h2 className="my-6 section-title">My Skills</h2>
//         <p className="my-8 section-subtitle">
//           A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience.
//         </p>

//         <div className="mt-12">
//           {/* Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
//                     : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-sm font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           {/* Skills Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {skills[activeTab as keyof typeof skills].map((skill, index) => {
//               const deviconClass = deviconMap[skill];
//               const customIcon = customIconMap[skill];

//               return (
//                 <div
//                   key={index}
//                   className="glass-card p-4 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50 flex items-center gap-3"
//                 >
//                   {deviconClass ? (
//                     <i className={`${deviconClass} colored text-xl`}></i>
//                   ) : customIcon ? (
//                     <span className="text-xl">{customIcon}</span>
//                   ) : (
//                     <span className="text-green-400 text-xl">✔</span>
//                   )}
//                   <p className="text-gray-300 font-medium text-sm">{skill}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Custom Fallback Icons (emoji-based)
// const FlaskIcon = () => <span role="img" aria-label="flask">🧪</span>;
// const BrainIcon = () => <span role="img" aria-label="brain">🧠</span>;
// const CameraIcon = () => <span role="img" aria-label="camera">📷</span>;
// const FireIcon = () => <span role="img" aria-label="fire">🔥</span>;
// const ClockIcon = () => <span role="img" aria-label="clock">⏱️</span>;
// const GlobeIcon = () => <span role="img" aria-label="network">🌐</span>;
// const WrenchIcon = () => <span role="img" aria-label="tools">🛠️</span>;
// const LanguageIcon = () => <span role="img" aria-label="languages">🈯</span>;
// const SettingsIcon = () => <span role="img" aria-label="sensor">⚙️</span>;
















// import React, { useState } from 'react';
// import {
//   Code, Server, Wrench, Cloud, Cpu, Users,
//   MessageSquareText, Book, Brain, Clock, Puzzle
// } from 'lucide-react';

// export const Skills: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('languages');

//   const tabs = [
//     { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
//     { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
//     { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
//     { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
//     { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
//     { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
//   ];

//   const deviconMap: Record<string, string> = {
//     Java: 'devicon-java-plain',
//     Python: 'devicon-python-plain',
//     JavaScript: 'devicon-javascript-plain',
//     TypeScript: 'devicon-typescript-plain',
//     C: 'devicon-c-plain',
//     'C++': 'devicon-cplusplus-plain',
//     HTML: 'devicon-html5-plain',
//     CSS: 'devicon-css3-plain',
//     SQL: 'devicon-mysql-plain',
//     PHP: 'devicon-php-plain',
//     Bash: 'devicon-bash-plain',
//     JSON: 'devicon-nodejs-plain',
//     YAML: 'devicon-linux-plain',
//     'Vue.js': 'devicon-vuejs-plain',
//     React: 'devicon-react-original',
//     'Spring Boot': 'devicon-spring-plain',
//     Flask: 'devicon-python-plain',
//     'Tailwind CSS': 'devicon-tailwindcss-plain',
//     Bootstrap: 'devicon-bootstrap-plain',
//     'Express.js': 'devicon-express-original',
//     TensorFlow: 'devicon-tensorflow-original',
//     PyTorch: 'devicon-pytorch-original',
//     Pandas: 'devicon-python-plain',
//     NumPy: 'devicon-python-plain',
//     Git: 'devicon-git-plain',
//     GitHub: 'devicon-github-original',
//     Vite: 'devicon-vitejs-plain',
//     Postman: 'devicon-postman-plain',
//     Docker: 'devicon-docker-plain',
//     'VS Code': 'devicon-vscode-plain',
//     Figma: 'devicon-figma-plain',
//     Jupyter: 'devicon-jupyter-plain',
//     Lucidchart: 'devicon-markdown-plain',
//     'Arduino IDE': 'devicon-arduino-plain',
//     PlatformIO: 'devicon-platformio-original',
//     'NS-3': 'devicon-linux-plain',
//     Firebase: 'devicon-firebase-plain',
//     AWS: 'devicon-amazonwebservices-original',
//     'GitHub Pages': 'devicon-github-original',
//     Nginx: 'devicon-nginx-original',
//     'CI/CD': 'devicon-travis-plain',
//     Heroku: 'devicon-heroku-original',
//     MQTT: 'devicon-mqtt-original',
//     Grafana: 'devicon-grafana-original',
//     InfluxDB: 'devicon-influxdb-original',
//     'Raspberry Pi': 'devicon-raspberrypi-line',
//     ESP32: 'devicon-c-plain',
//     ESP8266: 'devicon-c-plain',
//     'Arduino Pro Mini': 'devicon-arduino-plain',
//     XBee: 'devicon-c-plain',
//     'DHT22 Sensor': 'devicon-c-plain',
//     'PIR Sensor': 'devicon-c-plain',
//     'LDR Sensor': 'devicon-c-plain',
//     'ESP32-CAM': 'devicon-c-plain',
//   };

//   const lucideMap: Record<string, React.ReactNode> = {
//     'Cross-cultural Communication': <Users size={16} />,
//     'Team Collaboration': <Users size={16} />,
//     'Research Writing': <Book size={16} />,
//     'Technical Documentation': <Book size={16} />,
//     'Problem Solving': <Puzzle size={16} />,
//     Adaptability: <Brain size={16} />,
//     'Public Speaking': <MessageSquareText size={16} />,
//     'Time Management': <Clock size={16} />,
//     'Multilingual: English, French, Arabic, Chinese': <span className="text-lg">🌍</span>,
//   };

//   const skills = {
//     languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'PHP', 'Bash', 'JSON', 'YAML'],
//     frameworks: ['Vue.js', 'React', 'Spring Boot', 'Flask', 'Tailwind CSS', 'Bootstrap', 'Express.js', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
//     tools: ['Git', 'GitHub', 'Vite', 'Postman', 'Docker', 'VS Code', 'Figma', 'Jupyter', 'Lucidchart', 'Arduino IDE', 'NS-3', 'PlatformIO'],
//     cloud: ['Firebase', 'AWS', 'GitHub Pages', 'Nginx', 'CI/CD', 'Heroku', 'MQTT', 'Grafana', 'InfluxDB'],
//     hardware: ['Raspberry Pi', 'ESP32', 'ESP8266', 'Arduino Pro Mini', 'XBee', 'DHT22 Sensor', 'PIR Sensor', 'LDR Sensor', 'ESP32-CAM'],
//     soft: [
//       'Cross-cultural Communication', 'Team Collaboration', 'Research Writing', 'Technical Documentation',
//       'Problem Solving', 'Adaptability', 'Public Speaking', 'Time Management',
//       'Multilingual: English, French, Arabic, Chinese'
//     ],
//   };

//   return (
//     <section id="skills" className="section bg-gray-900 h-screen">
//       <div className="container-custom">
//         <h2 className="my-6 section-title">My Skills</h2>
//         <p className="my-8 section-subtitle">
//           A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience.
//         </p>

//         <div className="mt-12">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
//                     : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-sm font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {skills[activeTab as keyof typeof skills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50"
//               >
//                 {deviconMap[skill] ? (
//                   <i className={`${deviconMap[skill]} colored text-xl`}></i>
//                 ) : (
//                   lucideMap[skill] || <span className="text-green-400 text-lg">✔</span>
//                 )}
//                 <p className="text-gray-300 font-medium text-sm">{skill}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };












// import React, { useState } from 'react';
// import {
//   Code, Server, Wrench, Cloud, Cpu, Users,
//   MessageSquareText, Book, Brain, Clock, Puzzle
// } from 'lucide-react';

// export const Skills: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('languages');

//   const tabs = [
//     { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
//     { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
//     { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
//     { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
//     { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
//     { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
//   ];

//   const deviconMap: Record<string, string> = {
//     Java: 'devicon-java-plain',
//     Python: 'devicon-python-plain',
//     JavaScript: 'devicon-javascript-plain',
//     TypeScript: 'devicon-typescript-plain',
//     C: 'devicon-c-plain',
//     'C++': 'devicon-cplusplus-plain',
//     HTML: 'devicon-html5-plain',
//     CSS: 'devicon-css3-plain',
//     SQL: 'devicon-mysql-plain',
//     PHP: 'devicon-php-plain',
//     Bash: 'devicon-bash-plain',
//     JSON: 'devicon-nodejs-plain',
//     YAML: 'devicon-linux-plain',
//     'Vue.js': 'devicon-vuejs-plain',
//     React: 'devicon-react-original',
//     'Spring Boot': 'devicon-spring-plain',
//     Flask: 'devicon-python-plain',
//     'Tailwind CSS': 'devicon-tailwindcss-plain',
//     Bootstrap: 'devicon-bootstrap-plain',
//     'Express.js': 'devicon-express-original',
//     TensorFlow: 'devicon-tensorflow-original',
//     PyTorch: 'devicon-pytorch-original',
//     Pandas: 'devicon-python-plain',
//     NumPy: 'devicon-python-plain',
//     Git: 'devicon-git-plain',
//     GitHub: 'devicon-github-original',
//     Vite: 'devicon-vitejs-plain',
//     Postman: 'devicon-postman-plain',
//     Docker: 'devicon-docker-plain',
//     'VS Code': 'devicon-vscode-plain',
//     Figma: 'devicon-figma-plain',
//     Jupyter: 'devicon-jupyter-plain',
//     Lucidchart: 'devicon-markdown-plain',
//     'Arduino IDE': 'devicon-arduino-plain',
//     PlatformIO: 'devicon-platformio-original',
//     'NS-3': 'devicon-linux-plain',
//     Firebase: 'devicon-firebase-plain',
//     AWS: 'devicon-amazonwebservices-original',
//     'GitHub Pages': 'devicon-github-original',
//     Nginx: 'devicon-nginx-original',
//     'CI/CD': 'devicon-travis-plain',
//     Heroku: 'devicon-heroku-original',
//     MQTT: 'devicon-mqtt-original',
//     Grafana: 'devicon-grafana-original',
//     InfluxDB: 'devicon-influxdb-original',
//     'Raspberry Pi': 'devicon-raspberrypi-line',
//     ESP32: 'devicon-c-plain',
//     ESP8266: 'devicon-c-plain',
//     'Arduino Pro Mini': 'devicon-arduino-plain',
//     XBee: 'devicon-c-plain',
//     'DHT22 Sensor': 'devicon-c-plain',
//     'PIR Sensor': 'devicon-c-plain',
//     'LDR Sensor': 'devicon-c-plain',
//     'ESP32-CAM': 'devicon-c-plain',
//   };

//   const softSkillIconMap: Record<string, React.ReactNode> = {
//     'Cross-cultural Communication': <span className="text-xl">🌍</span>,
//     'Team Collaboration': <Users className="text-blue-400" size={18} />,
//     'Research Writing': <Book className="text-purple-400" size={18} />,
//     'Technical Documentation': <Book className="text-indigo-400" size={18} />,
//     'Problem Solving': <Puzzle className="text-yellow-400" size={18} />,
//     Adaptability: <Brain className="text-teal-400" size={18} />,
//     'Public Speaking': <MessageSquareText className="text-pink-400" size={18} />,
//     'Time Management': <Clock className="text-orange-400" size={18} />,
//     'Multilingual: English, French, Arabic, Chinese': <span className="text-green-400 text-xl">🌐</span>,
//   };

//   const skills = {
//     languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'PHP', 'Bash'],
//     frameworks: ['Vue.js', 'React', 'Spring Boot', 'Flask', 'Tailwind CSS', 'NumPy', 'Bootstrap', 'Express.js', 'TensorFlow', 'PyTorch', 'Pandas'],
//     tools: ['Git', 'Vite', 'Postman', 'Docker', 'VS Code', 'Figma','GitHub', 'Jupyter', 'Lucidchart', 'Arduino IDE', 'NS-3'],
//     cloud: ['Firebase', 'AWS', 'CI/CD', 'Heroku', 'MQTT', 'Grafana', ],
//     hardware: ['Raspberry Pi','Arduino Pro Mini', 'ESP32 / ESP8266', 'XBee',],
//     soft: [
//       'Cross-cultural Communication', 'Team Collaboration', 'Research Writing', 'Technical Documentation',
//       'Problem Solving', 'Adaptability', 'Public Speaking', 'Time Management',
//       'Multilingual: English, French, Arabic, Chinese'
//     ],
//   };

//   return (
//     <section id="skills" className="section bg-gray-900 h-screen">
//       <div className="container-custom">
//         <h2 className="my-6 section-title">My Skills</h2>
//         <p className="my-8 section-subtitle">
//           A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience.
//         </p>

//         <div className="mt-12">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
//                     : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-sm font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {skills[activeTab as keyof typeof skills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50"
//               >
//                 {deviconMap[skill] ? (
//                   <i className={`${deviconMap[skill]} colored text-xl`}></i>
//                 ) : softSkillIconMap[skill] ? (
//                   softSkillIconMap[skill]
//                 ) : (
//                   <span className="text-green-400 text-lg">✔</span>
//                 )}
//                 <p className="text-gray-300 font-medium text-sm">{skill}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };






// import React, { useState } from 'react';
// import {
//   Code, Server, Wrench, Cloud, Cpu, Users,
//   MessageSquareText, Book, Brain, Clock, Puzzle
// } from 'lucide-react';

// export const Skills: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('languages');

//   const tabs = [
//     { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
//     { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
//     { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
//     { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
//     { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
//     { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
//   ];

//   const deviconMap: Record<string, string> = {
//     Java: 'devicon-java-plain',
//     Python: 'devicon-python-plain',
//     JavaScript: 'devicon-javascript-plain',
//     TypeScript: 'devicon-typescript-plain',
//     C: 'devicon-c-plain',
//     'C++': 'devicon-cplusplus-plain',
//     HTML: 'devicon-html5-plain',
//     CSS: 'devicon-css3-plain',
//     SQL: 'devicon-mysql-plain',
//     PHP: 'devicon-php-plain',
//     Bash: 'devicon-bash-plain',
//     JSON: 'devicon-nodejs-plain',
//     YAML: 'devicon-linux-plain',
//     'Vue.js': 'devicon-vuejs-plain',
//     React: 'devicon-react-original',
//     'Spring Boot': 'devicon-spring-plain',
//     Flask: 'devicon-python-plain',
//     'Tailwind CSS': 'devicon-tailwindcss-plain',
//     Bootstrap: 'devicon-bootstrap-plain',
//     'Express.js': 'devicon-express-original',
//     TensorFlow: 'devicon-tensorflow-original',
//     PyTorch: 'devicon-pytorch-original',
//     Pandas: 'devicon-python-plain',
//     NumPy: 'devicon-python-plain',
//     Git: 'devicon-git-plain',
//     GitHub: 'devicon-github-original',
//     Vite: 'devicon-vitejs-plain',
//     Postman: 'devicon-postman-plain',
//     Docker: 'devicon-docker-plain',
//     'VS Code': 'devicon-vscode-plain',
//     Figma: 'devicon-figma-plain',
//     Jupyter: 'devicon-jupyter-plain',
//     Lucidchart: 'devicon-markdown-plain',
//     'Arduino IDE': 'devicon-arduino-plain',
//     PlatformIO: 'devicon-platformio-original',
//     'NS-3': 'devicon-linux-plain',
//     Firebase: 'devicon-firebase-plain',
//     AWS: 'devicon-amazonwebservices-original',
//     'CI/CD': 'devicon-travis-plain',
//     Heroku: 'devicon-heroku-original',
//     Grafana: 'devicon-grafana-original',
//     InfluxDB: 'devicon-influxdb-original',
//     'Raspberry Pi': 'devicon-raspberrypi-line',
//     'Arduino Pro Mini': 'devicon-arduino-plain',
//     XBee: 'devicon-c-plain',
//   };

//   const softSkillIconMap: Record<string, React.ReactNode> = {
//     'Cross-cultural Communication': <span className="text-xl">🌍</span>,
//     'Team Collaboration': <Users className="text-blue-400" size={18} />,
//     'Research Writing': <Book className="text-purple-400" size={18} />,
//     'Technical Documentation': <Book className="text-indigo-400" size={18} />,
//     'Problem Solving': <Puzzle className="text-yellow-400" size={18} />,
//     Adaptability: <Brain className="text-teal-400" size={18} />,
//     'Public Speaking': <MessageSquareText className="text-pink-400" size={18} />,
//     'Time Management': <Clock className="text-orange-400" size={18} />,
//     'Multilingual: English, French, Arabic, Chinese': <span className="text-green-400 text-xl">🌐</span>,
//     MQTT: <span className="text-purple-400 text-xl">📡</span>, // Fallback for MQTT
//     'ESP32 / ESP8266': <Cpu className="text-gray-300" size={18} />,
//   };

//   const skills = {
//     languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'PHP', 'Bash'],
//     frameworks: ['Vue.js', 'React', 'Spring Boot', 'Flask', 'Tailwind CSS', 'NumPy', 'Bootstrap', 'Express.js', 'TensorFlow', 'PyTorch', 'Pandas'],
//     tools: ['Git', 'Vite', 'Postman', 'Docker', 'VS Code', 'Figma', 'GitHub', 'Jupyter', 'Lucidchart', 'Arduino IDE', 'NS-3'],
//     cloud: ['Firebase', 'AWS', 'CI/CD', 'Heroku', 'MQTT', 'Grafana'],
//     hardware: ['Raspberry Pi', 'Arduino Pro Mini', 'XBee', 'ESP32 / ESP8266'],
//     soft: [
//       'Cross-cultural Communication', 'Team Collaboration', 'Research Writing', 'Technical Documentation',
//       'Problem Solving', 'Adaptability', 'Public Speaking', 'Time Management',
//       'Multilingual: English, French, Arabic, Chinese'
//     ],
//   };

//   return (
//     <section id="skills" className="section bg-gray-900 h-screen">
//       <div className="container-custom">
//         <h2 className="my-6 section-title">My Skills</h2>
//         <p className="my-8 section-subtitle">
//           A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience.
//         </p>

//         <div className="mt-12">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
//                     : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="text-sm font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {skills[activeTab as keyof typeof skills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="glass-card p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50"
//               >
//                 {deviconMap[skill] ? (
//                   <i className={`${deviconMap[skill]} colored text-xl`}></i>
//                 ) : softSkillIconMap[skill] ? (
//                   softSkillIconMap[skill]
//                 ) : (
//                   <span className="text-green-400 text-lg">✔</span>
//                 )}
//                 <p className="text-gray-300 font-medium text-sm">{skill}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
























import React, { useState } from 'react';
import {
  Code, Server, Wrench, Cloud, Cpu, Users,
  MessageSquareText, Book, Brain, Clock, Puzzle
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
    { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
    { id: 'hardware', label: 'Hardware', icon: <Cpu size={18} /> },
    { id: 'soft', label: 'Soft Skills', icon: <Users size={18} /> },
  ];

  const deviconMap: Record<string, string> = {
    Java: 'devicon-java-plain',
    Python: 'devicon-python-plain',
    JavaScript: 'devicon-javascript-plain',
    TypeScript: 'devicon-typescript-plain',
    C: 'devicon-c-plain',
    'C++': 'devicon-cplusplus-plain',
    HTML: 'devicon-html5-plain',
    CSS: 'devicon-css3-plain',
    SQL: 'devicon-mysql-plain',
    PHP: 'devicon-php-plain',
    Bash: 'devicon-bash-plain',
    JSON: 'devicon-nodejs-plain',
    YAML: 'devicon-linux-plain',
    'Vue.js': 'devicon-vuejs-plain',
    React: 'devicon-react-original',
    'Spring Boot': 'devicon-spring-plain',
    Flask: 'devicon-python-plain',
    'Tailwind CSS': 'devicon-tailwindcss-plain',
    Bootstrap: 'devicon-bootstrap-plain',
    'Express.js': 'devicon-express-original',
    TensorFlow: 'devicon-tensorflow-original',
    PyTorch: 'devicon-pytorch-original',
    Pandas: 'devicon-python-plain',
    NumPy: 'devicon-python-plain',
    Git: 'devicon-git-plain',
    GitHub: 'devicon-github-original',
    Docker: 'devicon-docker-plain',
    'VS Code': 'devicon-vscode-plain',
    Figma: 'devicon-figma-plain',
    Jupyter: 'devicon-jupyter-plain',
    Lucidchart: 'devicon-markdown-plain',
    'Arduino IDE': 'devicon-arduino-plain',
    PlatformIO: 'devicon-platformio-original',
    'NS-3': 'devicon-linux-plain',
    Firebase: 'devicon-firebase-plain',
    AWS: 'devicon-amazonwebservices-original',
    'CI/CD': 'devicon-travis-plain',
    Heroku: 'devicon-heroku-original',
    Grafana: 'devicon-grafana-original',
    InfluxDB: 'devicon-influxdb-original',
    'Raspberry Pi': 'devicon-raspberrypi-line',
    'Arduino Pro Mini': 'devicon-arduino-plain',
    XBee: 'devicon-c-plain',
  };

  const softSkillIconMap: Record<string, React.ReactNode> = {
    'Cross-cultural Communication': <span className="text-xl">🌍</span>,
    'Team Collaboration': <Users className="text-blue-400" size={18} />,
    'Research Writing': <Book className="text-purple-400" size={18} />,
    'Technical Documentation': <Book className="text-indigo-400" size={18} />,
    'Problem Solving': <Puzzle className="text-yellow-400" size={18} />,
    Adaptability: <Brain className="text-teal-400" size={18} />,
    'Public Speaking': <MessageSquareText className="text-pink-400" size={18} />,
    'Time Management': <Clock className="text-orange-400" size={18} />,
    'Multilingual: English, French, Arabic, Chinese': <span className="text-green-400 text-xl">🌐</span>,
    MQTT: <span className="text-purple-400 text-xl">📡</span>,
    Vite: <span className="text-yellow-400 text-xl">⚡</span>,
    Postman: <span className="text-orange-400 text-xl">📬</span>,
    'IntelliJ IDEA': <span className="text-indigo-400 text-xl">🧠</span>,
    'ESP32 / ESP8266': <Cpu className="text-gray-300" size={18} />,
  };

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'PHP', 'Bash'],
    frameworks: ['Vue.js', 'React', 'Spring Boot', 'Flask', 'Tailwind CSS', 'NumPy', 'Bootstrap', 'Express.js', 'TensorFlow', 'PyTorch', 'Pandas'],
    tools: [
      'Git', 'Vite', 'Docker', 'VS Code', 'Figma', 'Postman',
      'GitHub', 'Jupyter', 'Lucidchart', 'Arduino IDE', 'IntelliJ IDEA', 'NS-3'
    ],
    cloud: ['Firebase', 'AWS', 'CI/CD', 'Heroku', 'MQTT', 'Grafana'],
    hardware: ['Raspberry Pi', 'Arduino Pro Mini', 'XBee', 'ESP32 / ESP8266'],
    soft: [
      'Cross-cultural Communication', 'Team Collaboration', 'Research Writing', 'Technical Documentation',
      'Problem Solving', 'Adaptability', 'Public Speaking', 'Time Management',
      'Multilingual: English, French, Arabic, Chinese'
    ],
  };

  return (
    <section id="skills" className="section bg-gray-900 h-screen">
      <div className="container-custom">
        <h2 className="my-6 section-title">My Skills</h2>
        <p className="my-8 section-subtitle">
          A comprehensive toolkit of technologies and abilities developed through academic research, practical projects, and international experience.
        </p>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/20 scale-105'
                    : 'bg-gray-800/80 text-gray-400 hover:bg-gray-750 hover:text-white backdrop-blur-sm hover:scale-105'
                }`}
              >
                {tab.icon}
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-gray-750/50"
              >
                {deviconMap[skill] ? (
                  <i className={`${deviconMap[skill]} colored text-xl`}></i>
                ) : softSkillIconMap[skill] ? (
                  softSkillIconMap[skill]
                ) : (
                  <span className="text-green-400 text-lg">✔</span>
                )}
                <p className="text-gray-300 font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



