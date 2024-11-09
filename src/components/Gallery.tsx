import React from 'react';

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    title: 'Современное совершенство',
    description: 'Последние достижения инженерии BMW'
  },
  {
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    title: 'Классическое наследие',
    description: 'Вневременная философия дизайна'
  },
  {
    url: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80',
    title: 'ДНК производительности',
    description: 'Создан для удовольствия от вождения'
  },
  {
    url: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=800&q=80',
    title: 'Взгляд в будущее',
    description: 'Инновации завтрашнего дня уже сегодня'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Искусство <span className="text-bmw-blue">совершенства</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMAGES.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl transform 
                         hover:scale-[1.02] transition-all duration-300 ease-out"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}