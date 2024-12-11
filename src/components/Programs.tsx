import React from 'react';
import { BookOpen, Music, Palette, Users } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const programs = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Early Learning",
    description: "Foundation program for ages 2-3 focusing on basic skills and social development.",
  },
  {
    icon: <Music className="h-8 w-8 text-blue-600" />,
    title: "Fun & Movement",
    description: "Interactive sessions combining music, dance, and motor skill development.",
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: "Creative Arts",
    description: "Exploring creativity through painting, crafts, and imaginative activities.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Social Skills",
    description: "Building confidence and communication through group activities and play.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Programs"
          subtitle="Discover our comprehensive range of educational programs designed to nurture your child's development."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}