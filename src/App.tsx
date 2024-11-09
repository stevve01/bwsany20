import React from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Celebration } from './components/Celebration';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Timeline />
      <Gallery />
      <Celebration />
      <Footer />
    </div>
  );
}

export default App;