import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}