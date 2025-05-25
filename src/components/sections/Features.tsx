"use client";

import { useCallback } from 'react';
import useSWR from 'swr';
import { getFeatures, Feature } from '@/lib/api';
import { ErrorBoundary } from 'react-error-boundary';
import Image from 'next/image';

function FeaturesList() {
  const { data: features, error, isLoading } = useSWR<Feature[]>('features', getFeatures, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // 1 dakika
  });

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Özellikler yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features?.map((feature) => (
        <div
          key={feature.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-primary mb-4">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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

export default function Features() {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Özelliklerimiz
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Modern teknolojiler ve yenilikçi çözümler
          </p>
        </div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <FeaturesList />
        </ErrorBoundary>
      </div>
    </section>
  );
} 