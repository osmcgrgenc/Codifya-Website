"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#features", label: "Özellikler" },
    { href: "#services", label: "Hizmetler" },
    { href: "#testimonials", label: "Referanslar" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`} 
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Codifya Ana Sayfa"
          >
            <div className="relative">
              <Image
                src="/favicon_io/android-chrome-192x192.png"
                alt="Codifya Logo"
                width={40}
                height={40}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
              Codifya
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Ana Menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
            
            <div className="ml-6 flex items-center space-x-4">
              <button className="p-2 text-secondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <Link
                href="#contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Başlayalım
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-secondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              <svg 
                className="h-6 w-6 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
        <div 
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobil Menü"
        >
          <div className="py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-foreground hover:text-primary hover:bg-muted transition-all duration-200 px-4 py-3 rounded-lg font-medium animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 px-4">
                <Link
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Başlayalım
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 