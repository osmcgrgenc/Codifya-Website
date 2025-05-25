"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Empowering Your Digital</span>
              <span className="block text-indigo-600">Transformation Journey</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl">
              We help businesses build modern digital solutions that drive growth and innovation.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <form onSubmit={handleSubmit} className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="block w-full px-5 py-3 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto transition-colors duration-200"
                >
                  Get Started
                </button>
              </form>
              {submitted && (
                <p className="mt-2 text-sm text-green-600">Thank you! We&apos;ll be in touch soon.</p>
              )}
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
              <Image
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                src="https://placehold.co/600x400/indigo/white?text=Codifya+Digital+Solutions"
                alt="Codifya Digital Solutions"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 