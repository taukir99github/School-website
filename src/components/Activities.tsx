import React from 'react';
import SectionTitle from './ui/SectionTitle';
import outdoor1 from '../Assests/outdoor1.jpeg';
import outdoor2 from '../Assests/outdoor2.jpeg';
import outdoor3 from '../Assests/art.jpeg';

const activities = [
  {
    image: outdoor1,
    title: "Outdoor Play",
    description: "Safe and supervised outdoor activities.",
  },
  {
    image: outdoor2,
    title: "Story Time",
    description: "Interactive reading and storytelling sessions.",
  },
  {
    image: outdoor3,
    title: "Art & Craft",
    description: "Creative expression through various mediums.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Daily Activities"
          subtitle="Engaging activities that make learning fun and memorable for your child."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}