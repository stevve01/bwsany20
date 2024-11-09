import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
            alt="BMW Logo"
            className="w-12 h-12 mx-auto mb-6 opacity-50"
          />
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-white/60 hover:text-bmw-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-bmw-blue transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-bmw-blue transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-white/60">
            Создано Андреем Серапиным WEB pro
          </p>
        </div>
      </div>
    </footer>
  );
}