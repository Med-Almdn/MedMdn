// import React from 'react';
// import { MapPin, GraduationCap, Globe, Lightbulb } from 'lucide-react';

// export const About: React.FC = () => {
//   return (
//     <section id="about" className="section bg-gray-950">
//       <div className="container-custom">
//         <h2 className="section-title">About Me</h2>
//         <p className="section-subtitle">
//           CS Master's student passionate about technology, innovation, and building solutions that matter
//         </p>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
//           <div className="flex flex-col justify-center">
//             <div className="bg-gray-800 p-6 rounded-xl mb-6">
//               <blockquote className="text-xl italic text-gray-300 mb-4">
//                 "I believe in learning by doing and coding with purpose."
//               </blockquote>
//               <div className="flex items-center justify-end">
//                 <div>
//                   <div className="text-sm font-medium text-green-500">Mohamed Almoudane</div>
//                   <div className="text-xs text-gray-400">Master's Student in CS</div>
//                 </div>
//               </div>
//             </div>
            
//             <p className="text-gray-300 mb-6">
//               I am a Computer Science and Technology Master's student at Nanjing University of Information Science and Technology (NUIST), passionate about leveraging technology to solve real-world problems.
//             </p>
            
//             <p className="text-gray-300 mb-6">
//               My academic journey began in Morocco, where I developed a strong foundation in computer science. Now in China, I'm expanding my knowledge in advanced areas like IoT systems, AI applications, and cloud computing.
//             </p>
            
//             <p className="text-gray-300">
//               I'm a hands-on builder who enjoys turning concepts into functional systems. My cross-cultural background has helped me develop strong communication skills and adaptability, which I apply to collaborative tech projects.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="card card-hover">
//               <div className="p-3 w-14 h-14 rounded-full bg-green-500/10 text-green-500 mb-4 flex items-center justify-center">
//                 <GraduationCap size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Education</h3>
//               <p className="text-gray-400">Master's in Computer Science at NUIST, with a focus on advanced technologies and practical implementations.</p>
//             </div>
            
//             <div className="card card-hover">
//               <div className="p-3 w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 mb-4 flex items-center justify-center">
//                 <Globe size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">International</h3>
//               <p className="text-gray-400">Experience across different cultures has shaped my global perspective and communication abilities.</p>
//             </div>
            
//             <div className="card card-hover">
//               <div className="p-3 w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 mb-4 flex items-center justify-center">
//                 <Lightbulb size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Innovation</h3>
//               <p className="text-gray-400">Passionate about creating innovative solutions using cutting-edge technologies and creative thinking.</p>
//             </div>
            
//             <div className="card card-hover">
//               <div className="p-3 w-14 h-14 rounded-full bg-green-500/10 text-green-500 mb-4 flex items-center justify-center">
//                 <MapPin size={24} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Location</h3>
//               <p className="text-gray-400">Currently based in Nanjing, China, a vibrant tech hub with growing opportunities in research and development.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };







// import React from 'react';
// import { MapPin, GraduationCap, Globe, Lightbulb } from 'lucide-react';
// import profilePic from '../../images/profile.jpg';

// export const About: React.FC = () => {
//   return (
//     <section id="about" className="section bg-gray-950">
//       <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Profile + Quote */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <img
//             src={profilePic}
//             alt="Mohamed Almoudane"
//             className="w-[11rem] h-[11rem] rounded-full object-cover border-4 border-green-500 mb-4 shadow-lg"
//           />
//           <h2 className="section-title">Mohamed Almoudane</h2>
//           <p className="text-gray-400 mb-4 text-sm">CS Master's Student @ NUIST</p>
//           <blockquote className="italic text-gray-300 mb-6 max-w-md">
//             "I believe in learning by doing and coding with purpose."
//           </blockquote>
//         </div>

//         {/* Key Info Cards */}
//         <div className="grid grid-cols-2 gap-6">
//           <div className="card card-hover text-center">
//             <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//               <GraduationCap size={24} />
//             </div>
//             <h3 className="text-lg font-semibold">Education</h3>
//             <p className="text-sm text-gray-400">Master's in CS at NUIST with focus on smart systems.</p>
//           </div>

//           <div className="card card-hover text-center">
//             <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//               <Globe size={24} />
//             </div>
//             <h3 className="text-lg font-semibold">International</h3>
//             <p className="text-sm text-gray-400">Studied in Morocco and China. Cross-cultural mindset.</p>
//           </div>

//           <div className="card card-hover text-center">
//             <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//               <Lightbulb size={24} />
//             </div>
//             <h3 className="text-lg font-semibold">Innovation</h3>
//             <p className="text-sm text-gray-400">Enjoy building creative and tech-driven solutions.</p>
//           </div>

//           <div className="card card-hover text-center">
//             <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//               <MapPin size={24} />
//             </div>
//             <h3 className="text-lg font-semibold">Location</h3>
//             <p className="text-sm text-gray-400">Based in Nanjing, China – a growing tech hub.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// import React from 'react';
// import { MapPin, GraduationCap, Globe, Lightbulb } from 'lucide-react';
// import profilePic from '../../images/profile.jpg';

// export const About: React.FC = () => {
//   return (
//     <section id="about" className="section bg-gray-950">
//       <div className="container-custom">
//         {/* Title and Introduction */}
//         <div className="text-center mb-12">
//           <h2 className="section-title">About</h2>
//           <p className="section-subtitle max-w-3xl mx-auto text-gray-400">
//             I'm Mohamed Almoudane, a computer science master's student at NUIST with a passion for building impactful technology.
//             My journey blends technical skill with creativity, shaped by international experience and a hands-on approach to learning.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Profile + Quote */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <img
//               src={profilePic}
//               alt="Mohamed Almoudane"
//               className="w-[11rem] h-[11rem] rounded-full object-cover border-4 border-green-500 mb-4 shadow-lg"
//             />
//             <h2 className="section-title">Mohamed Almoudane</h2>
//             <p className="text-gray-400 mb-4 text-sm">CS Master's Student @ NUIST</p>
//             <blockquote className="italic text-gray-300 mb-6 max-w-md">
//               "I believe in learning by doing and coding with purpose."
//             </blockquote>
//           </div>

//           {/* Key Info Cards */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <GraduationCap size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Education</h3>
//               <p className="text-sm text-gray-400">Master's in CS at NUIST with focus on smart systems.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <Globe size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">International</h3>
//               <p className="text-sm text-gray-400">Studied in Morocco and China. Cross-cultural mindset.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <Lightbulb size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Innovation</h3>
//               <p className="text-sm text-gray-400">Enjoy building creative and tech-driven solutions.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <MapPin size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Location</h3>
//               <p className="text-sm text-gray-400">Based in Nanjing, China – a growing tech hub.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




// import React from 'react';
// import { MapPin, GraduationCap, Globe, Lightbulb } from 'lucide-react';
// import profilePic from '../../images/profile.jpg';

// export const About: React.FC = () => {
//   return (
//     <section id="about" className="section bg-gray-950">
//       <div className="container-custom">
//         {/* Title and Introduction */}
//         <div className="text-center mb-12">
//           <h2 className="section-title">About</h2>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Profile + Quote */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <img
//               src={profilePic}
//               alt="Mohamed Almoudane"
//               className="w-[11rem] h-[11rem] rounded-full object-cover border-4 border-green-500 mb-4 shadow-lg"
//             />
//             <h2 className="section-title">Mohamed Almoudane</h2>
//             <p className="text-gray-400 mb-4 text-sm">CST Master's Student @<a href="https://www.nuist.edu.cn/">NUIST</a></p>
//             <blockquote className="italic text-gray-300 mb-6 max-w-md">
//               "I believe in learning by doing and coding with purpose."
//             </blockquote>
//             <p className="text-gray-300 text-sm leading-relaxed max-w-md">
//               I'm a Moroccan student currently pursuing my Master's in Computer Science and Technology in China.
//               With a strong interest in IoT, AI, and cloud development, I enjoy turning ideas into real systems that solve meaningful problems.
//               My diverse experiences have shaped me into a flexible and creative developer who thrives in multicultural environments.
//             </p>
//           </div>

//           {/* Key Info Cards */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <GraduationCap size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Education</h3>
//               <p className="text-sm text-gray-400">Master's in CS at NUIST with focus on smart systems.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <Globe size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">International</h3>
//               <p className="text-sm text-gray-400">Studied in Morocco and China. Cross-cultural mindset.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-blue-500/10 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <Lightbulb size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Innovation</h3>
//               <p className="text-sm text-gray-400">Enjoy building creative and tech-driven solutions.</p>
//             </div>

//             <div className="card card-hover text-center">
//               <div className="mx-auto mb-3 p-3 bg-green-500/10 text-green-500 rounded-full w-14 h-14 flex items-center justify-center">
//                 <MapPin size={24} />
//               </div>
//               <h3 className="text-lg font-semibold">Location</h3>
//               <p className="text-sm text-gray-400">Based in Nanjing, China – a growing tech hub.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




import React from 'react';
import { MapPin, GraduationCap, Globe, Lightbulb } from 'lucide-react';
import profilePic from '../../images/profile.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-950">
      <div className="container-custom">
        {/* Title and Introduction */}
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile + Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={profilePic}
              alt="Mohamed Almoudane"
              className="w-[11rem] h-[11rem] rounded-full object-cover border-4 border-green-500 mb-4 shadow-lg"
            />
            <h2 className="section-title">Mohamed Almoudane</h2>
            <p className="text-gray-400 mb-4 text-sm">CST Master's Student @ <a  href="https://www.nuist.edu.cn/" target="_blank" rel="noopener noreferrer">NUIST</a></p>
            <blockquote className="italic text-gray-300 mb-6 max-w-md">
              "I believe in learning by doing and coding with purpose."
            </blockquote>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              I'm a Moroccan student currently pursuing my Master's in Computer Science and Technology in China.
              With a strong interest in IoT, AI, and cloud development, I enjoy turning ideas into real systems that solve meaningful problems.
              My diverse experiences have shaped me into a flexible and creative developer who thrives in multicultural environments.
            </p>
          </div>

          {/* Info Cards - Updated Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card card-hover">
              <div className="p-3 w-14 h-14 rounded-full bg-green-500/10 text-green-500 mb-4 flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">
                Master's in Computer Science at NUIST, with a focus on advanced technologies and practical implementations.
              </p>
            </div>

            <div className="card card-hover">
              <div className="p-3 w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 mb-4 flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">International</h3>
              <p className="text-gray-400">
                Experience across different cultures has shaped my global perspective and communication abilities.
              </p>
            </div>

            <div className="card card-hover">
              <div className="p-3 w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 mb-4 flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">
                Passionate about creating innovative solutions using cutting-edge technologies and creative thinking.
              </p>
            </div>

            <div className="card card-hover">
              <div className="p-3 w-14 h-14 rounded-full bg-green-500/10 text-green-500 mb-4 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Currently based in Nanjing, China, a vibrant tech hub with growing opportunities in research and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

