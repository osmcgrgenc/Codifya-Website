"use client";

import { useCallback } from "react";
import useSWR from "swr";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Service, getServices } from "@/lib/api";
import { ErrorBoundary } from "react-error-boundary";

const iconMap: Record<string, JSX.Element> = {
  "1": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16H3V4.8A1.8 1.8 0 014.8 3h14.4A1.8 1.8 0 0121 4.8z" />
      <path d="M3 16l2.571 3.6a1.8 1.8 0 001.457.72h9.944a1.8 1.8 0 001.457-.72L21 16" />
    </svg>
  ),
  "2": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7.5 3h9l2.25 3.75v3.75c0 4.556-3.694 8.25-8.25 8.25S2.25 15.056 2.25 10.5V6.75z" />
      <path d="M15.75 13.5a3.75 3.75 0 10-7.5 0" />
    </svg>
  ),
  "3": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 5.25h15a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5z" />
      <path d="M9 18.75h6" />
    </svg>
  ),
  "4": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 7.5h15" />
      <path d="M7.5 3h9a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19.5v-15A1.5 1.5 0 017.5 3z" />
    </svg>
  ),
  "5": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 19.5h15" />
      <path d="M6 19.5V7.5l6-4.5 6 4.5v12" />
      <path d="M9 19.5v-6h6v6" />
    </svg>
  ),
  "6": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5.25c3.728 0 6.75 2.186 6.75 4.875S15.728 15 12 15s-6.75-2.186-6.75-4.875S8.272 5.25 12 5.25z" />
      <path d="M5.25 10.125V15c0 1.657 3.022 3 6.75 3s6.75-1.343 6.75-3v-4.875" />
    </svg>
  ),
};

function ServicesGrid() {
  const { data, error, isLoading } = useSWR<Service[]>("services", getServices, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60_000,
  });

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200/60 bg-red-50/80 p-10 text-center text-red-600">
        Hizmetler yüklenemedi. Lütfen sayfayı yenileyin.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-60 animate-pulse rounded-3xl border border-border/40 bg-muted/60" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {data?.map((service) => (
        <Card key={service.id}>
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="space-y-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/12 text-primary">
                {iconMap[service.id]}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{service.description}</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-1">
              Servis detayları
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ErrorFallback({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="rounded-3xl border border-border/50 bg-background/80 p-10 text-center shadow-sm">
      <h3 className="text-xl font-semibold text-foreground">Hizmetler gösterilirken bir sorun oluştu</h3>
      <p className="mt-3 text-sm text-secondary">Lütfen tekrar deneyin.</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-white"
      >
        Yeniden Dene
      </button>
    </div>
  );
}

export default function Services() {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 via-transparent to-muted/50" />
      <Container className="space-y-16">
        <SectionHeader
          eyebrow="Hizmet Portföyü"
          title="Kurumsal hedeflerinize özel tasarlanmış dijital hizmetler"
          subtitle="Ürün ekiplerinizi güçlendirecek tasarım, geliştirme ve danışmanlık hizmetlerini tek çatı altında topluyoruz."
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <ServicesGrid />
        </ErrorBoundary>
      </Container>
    </section>
  );
}
