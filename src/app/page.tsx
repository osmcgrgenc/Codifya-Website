"use client";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
