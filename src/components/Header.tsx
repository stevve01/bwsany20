import React from 'react';
import { Clock } from './Clock';
import { CountdownTimer } from './CountdownTimer';
import { ChevronDown, Play } from 'lucide-react';

export function Header() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-bmw-driving-through-city-at-night-4584/1080p.mp4"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      
      <Clock />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-fadeIn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
            alt="BMW Logo"
            className="w-20 h-20 mx-auto mb-4"
          />
          <p className="text-bmw-blue font-semibold tracking-wider">С ДНЕМ РОЖДЕНИЯ</p>
          <h2 className="text-2xl font-bold text-white mt-2">Александр Гриневич</h2>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fadeIn">
          Празднуем твои <span className="text-bmw-blue">20 лет</span>
        </h1>
        
        <div className="mb-12 animate-fadeIn delay-300">
          <CountdownTimer />
        </div>

        <button
          onClick={scrollToTimeline}
          className="inline-flex items-center gap-2 px-8 py-4 bg-bmw-blue text-white rounded-full
                     font-semibold transform hover:scale-105 transition-all duration-300
                     animate-fadeIn delay-500 group"
        >
          Начать путешествие
          <Play className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </header>
  );
}