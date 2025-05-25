"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Codifya Ana Sayfa"
          >
            <Image
              src="/favicon_io/android-chrome-192x192.png"
              alt="Codifya Logo"
              width={36}
              height={36}
              className="w-9 h-9"
              priority
            />
            <span className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-200">Codifya</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10" role="navigation" aria-label="Ana Menü">
            <a href="#features" className="text-secondary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1">Features</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1">Services</a>
            <a href="#testimonials" className="text-secondary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1">Testimonials</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-secondary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-secondary"
            role="navigation"
            aria-label="Mobil Menü"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-secondary hover:text-primary transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md" 
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#services" 
                className="text-secondary hover:text-primary transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md" 
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="text-secondary hover:text-primary transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md" 
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-secondary hover:text-primary transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 