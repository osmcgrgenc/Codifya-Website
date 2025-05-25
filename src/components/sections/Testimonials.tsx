"use client";

import { useCallback } from 'react';
import useSWR from 'swr';
import { getTestimonials, Testimonial } from '@/lib/api';
import { ErrorBoundary } from 'react-error-boundary';
import Image from 'next/image';

function TestimonialsList() {
  const { data: testimonials, error, isLoading } = useSWR<Testimonial[]>('testimonials', getTestimonials, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // 1 dakika
  });

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Referanslar yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="ml-4">
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials?.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
        </div>
      ))}
    </div>
  );
}

function ErrorFallback({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="text-center py-12">
      <p className="text-red-500 mb-4">Bir şeyler yanlış gitti.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
      >
        Tekrar Dene
      </button>
    </div>
  );
}

export default function Testimonials() {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Müşteri Referansları
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Müşterilerimizin deneyimleri
          </p>
        </div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <TestimonialsList />
        </ErrorBoundary>
      </div>
    </section>
  );
} 