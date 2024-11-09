import React from 'react';
import { Milestone } from 'lucide-react';

const MILESTONES = [
  {
    year: 1916,
    title: "Основание",
    description: "BMW была основана как производитель авиационных двигателей"
  },
  {
    year: 1923,
    title: "Первый мотоцикл",
    description: "Был представлен легендарный мотоцикл R32"
  },
  {
    year: 1928,
    title: "Первый автомобиль",
    description: "BMW начала производство автомобилей с модели Dixi"
  },
  {
    year: 1972,
    title: "Подразделение BMW M",
    description: "Было создано высокопроизводительное подразделение M"
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          История <span className="text-bmw-blue">BMW</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-bmw-blue/30" />

          {MILESTONES.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 flex flex-col items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bmw-blue 
                              shadow-lg shadow-bmw-blue/50" />
                <div className={`w-full ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <Milestone className="w-5 h-5 text-bmw-blue" />
                    <span className="text-2xl font-bold text-bmw-blue">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}