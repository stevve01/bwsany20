import React, { useState, useEffect } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const warsawTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Europe/Warsaw',
    hour12: false,
  });

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="text-2xl md:text-3xl font-bold text-white backdrop-blur-sm bg-black/30 px-6 py-3 rounded-xl 
                    shadow-lg border border-white/10 animate-fadeIn">
        <div className="text-sm text-orange-400 mb-1">Warsaw Time</div>
        {warsawTime}
      </div>
    </div>
  );
}