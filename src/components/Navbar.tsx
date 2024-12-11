import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-600">MassSmartKids</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#activities" className="text-gray-700 hover:text-blue-600">Activities</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Activities</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}