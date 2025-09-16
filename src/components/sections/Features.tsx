"use client";

import { useCallback } from 'react';
import useSWR from 'swr';
import { getFeatures, Feature } from '@/lib/api';
import { ErrorBoundary } from 'react-error-boundary';

// Icon components
const TechIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ResponsiveIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const SEOIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PerformanceIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l7.071 7.071-7.071 7.071-7.071-7.071L12 2.944z" />
  </svg>
);

const iconMap: Record<string, React.ComponentType> = {
  '1': TechIcon,
  '2': ResponsiveIcon,
  '3': SEOIcon,
  '4': PerformanceIcon,
  '5': SecurityIcon,
  '6': SupportIcon,
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const IconComponent = iconMap[feature.id] || TechIcon;
  
  return (
    <div 
      className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-secondary leading-relaxed">
          {feature.description}
        </p>
        
        <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Daha fazla bilgi</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeaturesList() {
  const { data: features, error, isLoading } = useSWR<Feature[]>('features', getFeatures, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000,
  });

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-red-500 font-medium">Özellikler yüklenirken bir hata oluştu.</p>
        <p className="text-secondary text-sm mt-2">Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-background border border-border rounded-2xl p-8">
            <div className="w-16 h-16 bg-muted rounded-xl mb-6"></div>
            <div className="h-6 bg-muted rounded-lg w-3/4 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features?.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}

function ErrorFallback({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <p className="text-red-500 font-medium mb-4">Bir şeyler yanlış gitti.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
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
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Özelliklerimiz
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Neden <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Codifya</span>?
          </h2>
          
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve yenilikçi yaklaşımlarla, işletmenizin dijital dönüşümünde 
            güvenilir ortağınız oluyoruz.
          </p>
        </div>
        
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <FeaturesList />
        </ErrorBoundary>
      </div>
    </section>
  );
} 