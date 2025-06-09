import React from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  relationship: string;
};

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Mohamed is a serious, motivated, and diligent student with excellent scientific and technical qualities. He successfully completed his final year project with distinction, demonstrating strong potential for advanced studies in computer science.",
      name: "Prof. Abdellah Boulouz",
      title: "Professor and Researcher",
      relationship: "University of Ibn Zohr, Agadir"
    },
    {
      quote: "Mohamed showed solid research skills and critical thinking while working on his paper. He tackled complex computer science topics with clarity and depth, reflecting both his technical understanding and his ability to communicate ideas effectively.",
      name: "Prof. Xu Cheng",
      title: "Research Supervisor",
      relationship: "Computer Science Department"
    },
    {
      quote: "Collaborating with Mohamed during our Master's studies at NUIST has been a rewarding experience. His dedication, attention to detail, and commitment to writing clean, efficient code truly stand out.",
      name: "Ilias Ait Al Abas",
      title: "Master's Student",
      relationship: "Friend and Classmate at NUIST"
    }

  ];

  return (
    <section id="testimonials" className="section bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          What others have to say about working and collaborating with me
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card card-hover relative"
            >
              <div className="absolute -top-4 -left-2 text-green-500 opacity-20">
                <Quote size={42} />
              </div>
              
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="pt-4 border-t border-gray-700">
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-400">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.relationship}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};