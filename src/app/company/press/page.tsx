"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Press() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Press</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            Latest news, press releases, and media coverage about Codifya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Press Releases</h2>
              <p className="text-gray-600">
                Stay informed about our latest announcements and company updates.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Media Kit</h2>
              <p className="text-gray-600">
                Download our company information, logos, and press materials.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 