"use client";

import { useCallback } from 'react';
import useSWR from 'swr';
import { getServices, Service } from '@/lib/api';
import { ErrorBoundary } from 'react-error-boundary';
import Image from 'next/image';

function ServicesList() {
  const { data: services, error, isLoading } = useSWR<Service[]>('services', getServices, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // 1 dakika
  });

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Servisler yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services?.map((service) => (
        <div
          key={service.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-primary mb-4">
            <Image src={service.icon} alt={service.title} className="w-12 h-12" width={48} height={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="text-center py-12">
      <p className="text-red-500 mb-4">Bir şeyler yanlış gitti.</p>
      <p className="text-red-500 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
      >
        Tekrar Dene
      </button>
    </div>
  );
}

export default function Services() {
  const handleReset = useCallback(() => {
    // SWR cache'ini temizle
    window.location.reload();
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Modern ve yenilikçi çözümler sunuyoruz
          </p>
        </div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <ServicesList />
        </ErrorBoundary>
      </div>
    </section>
  );
} 