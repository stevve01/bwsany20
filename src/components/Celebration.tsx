import React from 'react';
import { Gift, Heart, Music } from 'lucide-react';

export function Celebration() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Gift className="w-16 h-16 text-orange-400 mx-auto mb-8" />
          
          <h2 className="text-4xl font-bold mb-8">
            С 20-летием, Александр!
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            В твои 20 лет пусть путь впереди будет таким же захватывающим, как поездка на BMW M series по открытой дороге.
            Твоя страсть к совершенству и любовь к BMW показывают твой отличный вкус в жизни.
            За многие годы успеха, счастья и потрясающих поездок впереди!
          </p>

          <div className="aspect-w-16 aspect-h-9 mb-12">
            <iframe
              className="w-full h-[500px] rounded-xl"
              src="https://www.youtube.com/embed/Zv5Kj6kyRgY?si=MjbLBgezF3q2FgWL"
              title="Miyagi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex items-center justify-center gap-3 text-orange-400 mb-8">
            <Music className="w-6 h-6" />
            <p className="text-lg italic">
              Не забудь послушать Miyagi для лучшего настроения и смысла в жизни
            </p>
            <Music className="w-6 h-6" />
          </div>
          
          <div className="flex justify-center items-center gap-2 text-orange-400">
            <Heart className="w-6 h-6" />
            <span className="text-lg font-semibold">С Днем Рождения!</span>
            <Heart className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}