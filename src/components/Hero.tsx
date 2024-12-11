import React, { useState } from 'react';
import Button from './ui/Button';
import Modal from './ui/Modal';
import TourForm from './TourForm';
import HeroImg from '../Assests/Hero.jpeg'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Where Learning Meets{' '}
              <span className="text-blue-600 inline-block animate-bounce">Fun</span> and{' '}
              <span className="text-blue-600 inline-block animate-pulse">Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Nurturing young minds through creative learning, play, and discovery in a safe and inspiring environment.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>Schedule a Tour</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="relative group">
              <img
                src={HeroImg}
                alt="Happy children learning"
                className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300">
              <p className="text-blue-600 font-bold animate-pulse">10+ Years</p>
              <p className="text-gray-600">of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TourForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}