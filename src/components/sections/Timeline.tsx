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
      title: 'Bachelor\'s Degree',
      subtitle: 'Ibn Zohr University',
      description: 'Started my academic journey in Computer Science, focusing on fundamental programming concepts and software development principles.'
    },
    {
      year: '2022',
      title: 'Internship',
      subtitle: 'Fallah Biougra',
      description: 'Gained practical experience in software development, working on real-world projects and improving my technical skills.'
    },
    {
      year: '2023',
      title: 'Internship',
      subtitle: 'Steamos',
      description: 'Worked on a Vue.js-based messaging app for SMS and email communication. Gained hands-on experience in frontend development and real-time messaging logic.'
    },
    {
      year: '2024',
      title: 'Master\'s Degree',
      subtitle: 'NUIST, China',
      description: 'Began my Master\'s program in Computer Science and Technology, expanding my knowledge in advanced computing concepts.'
    },
    {
      year: '2025',
      title: 'Research Project',
      subtitle: 'Cloud Virtualization Technologies',
      description: 'Explored hypervisor, container, and hardware-assisted virtualization in cloud computing, focusing on their architecture, performance, and security, along with emerging trends like serverless and edge computing.'
    },
    {
      year: '2026',
      title: 'Future Goal',
      subtitle: 'Global Tech Company',
      description: 'Aspire to work at a global software/AI company or launch a technology startup focused on innovative solutions.'
    }
  ];

  return (
    <section id="timeline" className="section bg-gray-950">
      <div className="container-custom">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          The path I've taken and the milestones that have shaped my academic and professional development
        </p>
        
        <div className="timeline-container py-8 mt-12">
          {events.map((event, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
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


