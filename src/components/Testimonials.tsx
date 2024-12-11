import React from 'react';
import SectionTitle from './ui/SectionTitle';

const testimonials = [
  {
    quote: "The teachers are amazing and my daughter loves coming to school every day!",
    author: "Sarah mulla",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "We've seen incredible progress in our son's development since joining.",
    author: "piyush sharma",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "The perfect balance of learning and fun. Highly recommended!",
    author: "Rajesh reddy",
    role: "Parent",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Parents Say"
          subtitle="Hear from our community of happy parents and children."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}