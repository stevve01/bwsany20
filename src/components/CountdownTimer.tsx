import React, { useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

const BIRTHDAY_DATE = new Date('2024-03-10T00:00:00');

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +BIRTHDAY_DATE - +new Date();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        triggerCelebration();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-wrap justify-center gap-4">
        <TimeBox value={timeLeft.days} label="Дней" />
        <TimeBox value={timeLeft.hours} label="Часов" />
        <TimeBox value={timeLeft.minutes} label="Минут" />
        <TimeBox value={timeLeft.seconds} label="Секунд" />
      </div>
      <PartyPopper className="w-8 h-8 text-yellow-400 animate-bounce" />
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center backdrop-blur-sm bg-black/30 px-6 py-4 rounded-xl
                    border border-white/10 shadow-lg transform hover:scale-105 transition-transform">
      <span className="text-3xl md:text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm text-orange-400">{label}</span>
    </div>
  );
}