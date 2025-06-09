// // import React from 'react';

// // type TimelineEvent = {
// //   year: string;
// //   title: string;
// //   subtitle: string;
// //   description: string;
// // };

// // export const Timeline: React.FC = () => {
// //   const events: TimelineEvent[] = [
// //     {
// //       year: '2021',
// //       title: 'Bachelor\'s Degree',
// //       subtitle: 'Ibn Zohr University',
// //       description: 'Started my academic journey in Computer Science, focusing on fundamental programming concepts and software development principles.'
// //     },
// //     {
// //       year: '2022',
// //       title: 'Internship',
// //       subtitle: 'Fallah Biougra',
// //       description: 'Gained practical experience in software development, working on real-world projects and improving my technical skills.'
// //     },
// //     {
// //       year: '2023',
// //       title: 'Internship',
// //       subtitle: 'Steamos',
// //       description: 'Worked on a Vue.js-based messaging app for SMS and email communication. Gained hands-on experience in frontend development and real-time messaging logic.'
// //     },
// //     {
// //       year: '2024',
// //       title: 'Master\'s Degree',
// //       subtitle: 'NUIST, China',
// //       description: 'Began my Master\'s program in Computer Science and Technology, expanding my knowledge in advanced computing concepts.'
// //     },
// //     {
// //       year: '2025',
// //       title: 'Research Project',
// //       subtitle: 'Cloud Virtualization Technologies',
// //       description: 'Explored hypervisor, container, and hardware-assisted virtualization in cloud computing, focusing on their architecture, performance, and security, along with emerging trends like serverless and edge computing.'
// //     },
// //     {
// //       year: '2026',
// //       title: 'Future Goal',
// //       subtitle: 'Global Tech Company',
// //       description: 'Aspire to work at a global software/AI company or launch a technology startup focused on innovative solutions.'
// //     }
// //   ];

// //   return (
// //     <section id="timeline" className="section bg-gray-950">
// //       <div className="container-custom">
// //         <h2 className="section-title">My Journey</h2>
// //         <p className="section-subtitle">
// //           The path I've taken and the milestones that have shaped my academic and professional development
// //         </p>
        
// //         <div className="timeline-container py-8 mt-12">
// //           {events.map((event, index) => (
// //             <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
// //               <div className="timeline-content">
// //                 <div className="flex items-center mb-3">
// //                   <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-500">
// //                     {event.year}
// //                   </span>
// //                 </div>
// //                 <h3 className="text-xl font-semibold mb-1 text-white">{event.title}</h3>
// //                 <p className="text-sm font-medium text-blue-400 mb-3">{event.subtitle}</p>
// //                 <p className="text-gray-400">{event.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };


// import React from 'react';

// type TimelineEvent = {
//   year: string;
//   title: string;
//   subtitle: string;
//   description: string;
// };

// export const Timeline: React.FC = () => {
//   const events: TimelineEvent[] = [
//     {
//       year: '2021',
//       title: "Bachelor's Degree",
//       subtitle: 'Ibn Zohr University',
//       description: 'Started my academic journey in Computer Science, focusing on fundamental programming concepts and software development principles.',
//     },
//     {
//       year: '2022',
//       title: 'Internship',
//       subtitle: 'Fallah Biougra',
//       description: 'Gained practical experience in software development, working on real-world projects and improving my technical skills.',
//     },
//     {
//       year: '2023',
//       title: 'Internship',
//       subtitle: 'Steamos',
//       description: 'Worked on a Vue.js-based messaging app for SMS and email communication. Gained hands-on experience in frontend development and real-time messaging logic.',
//     },
//     {
//       year: '2024',
//       title: "Master's Degree",
//       subtitle: 'NUIST, China',
//       description: 'Began my Master\'s program in Computer Science and Technology, expanding my knowledge in advanced computing concepts.',
//     },
//     {
//       year: '2025',
//       title: 'Research Project',
//       subtitle: 'Cloud Virtualization Technologies',
//       description: 'Explored hypervisor, container, and hardware-assisted virtualization in cloud computing, focusing on their architecture, performance, and security, along with emerging trends like serverless and edge computing.',
//     },
//     {
//       year: '2026',
//       title: 'Future Goal',
//       subtitle: 'Global Tech Company',
//       description: 'Aspire to work at a global software/AI company or launch a technology startup focused on innovative solutions.',
//     },
//   ];

//   return (
//     <section id="timeline" className="section bg-gray-950 py-16">
//       <div className="container-custom">
//         <h2 className="section-title text-center">My Journey</h2>
//         <p className="section-subtitle text-center max-w-2xl mx-auto">
//           The path I've taken and the milestones that have shaped my academic and professional development
//         </p>

//         <div className="mt-12 space-y-10">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="relative p-6 bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:shadow-green-500/10"
//               style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
//             >
//               <div className="flex items-center mb-2">
//                 <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
//                   {event.year}
//                 </span>
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-white">{event.title}</h3>
//               <p className="text-blue-400 text-sm font-medium mb-2">{event.subtitle}</p>
//               <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';

type TimelineEvent = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2021',
      title: "Bachelor's Degree",
      subtitle: 'Ibn Zohr University',
      description: 'Started my academic journey in Computer Science, focusing on fundamental programming concepts and software development principles.',
    },
    {
      year: '2023',
      title: 'Internship',
      subtitle: 'Steamos',
      description: 'Worked on a Vue.js-based messaging app for SMS and email communication. Gained hands-on experience in frontend development and real-time messaging logic.',
    },
    {
      year: '2024',
      title: "Master's Degree",
      subtitle: 'NUIST, China',
      description: 'Began my Master\'s program in Computer Science and Technology, expanding my knowledge in advanced computing concepts.',
    },
    {
      year: '2025',
      title: 'Research Project',
      subtitle: 'Cloud Virtualization Technologies',
      description: 'Explored hypervisor, container, and hardware-assisted virtualization in cloud computing, focusing on their architecture, performance, and security, along with emerging trends like serverless and edge computing.',
    },
    {
      year: '2026',
      title: 'Future Goal',
      subtitle: 'Global Tech Company',
      description: 'Aspire to work at a global software/AI company or launch a technology startup focused on innovative solutions.',
    },
  ];

  return (
    <section id="timeline" className="section bg-gray-950 py-16">
      <div className="container-custom">
        <h2 className="section-title text-center">My Journey</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          The path I've taken and the milestones that have shaped my academic and professional development
        </p>

        {/* Mobile version: stacked cards */}
        <div className="mt-12 space-y-10 lg:hidden">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-2">
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {event.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{event.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-2">{event.subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Laptop/Desktop version: timeline layout */}
        <div className="timeline-container py-8 mt-12 hidden lg:block">
          {events.map((event, index) => (
            <div
              key={index}
              className="timeline-item mb-10"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="timeline-content">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-500">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{event.title}</h3>
                <p className="text-sm font-medium text-blue-400 mb-3">{event.subtitle}</p>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
