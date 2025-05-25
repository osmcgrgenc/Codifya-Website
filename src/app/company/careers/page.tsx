"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers at Codifya</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Join our team and be part of an innovative company that&apos;s shaping the future of digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600">
                Explore exciting career opportunities in software development, design, and consulting.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Join Us</h2>
              <p className="text-gray-600">
                Work with cutting-edge technologies and be part of a dynamic, innovative team.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 