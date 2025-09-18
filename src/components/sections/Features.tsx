"use client";

import { useCallback } from "react";
import useSWR from "swr";
import { Feature, getFeatures } from "@/lib/api";
import { ErrorBoundary } from "../ErrorBoundary";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, JSX.Element> = {
  "1": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16.5 6.75H21m-4.5 4.5H21M16.5 16.5H21m-6.75 3.75h-9a1.5 1.5 0 01-1.5-1.5v-13.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5z" />
    </svg>
  ),
  "2": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 4.5h18v13.5H3z" />
      <path d="M8.25 19.5h7.5v.75a1.5 1.5 0 01-1.5 1.5h-4.5a1.5 1.5 0 01-1.5-1.5z" />
    </svg>
  ),
  "3": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 21l-5.197-5.197m0 0A6.75 6.75 0 105.197 5.197a6.75 6.75 0 0010.606 10.606z" />
    </svg>
  ),
  "4": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l-1.5 9h3L12 21" />
      <path d="M5 13.5h3m8 0h3" />
    </svg>
  ),
  "5": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8.485 4.125v5.25c0 5.092-3.633 9.815-8.485 10.5-4.852-.685-8.485-5.408-8.485-10.5v-5.25L12 3z" />
      <path d="M9.75 12l1.5 1.5 3-4.5" />
    </svg>
  ),
  "6": (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a9 9 0 00-9 9v0a4.5 4.5 0 004.5 4.5h.75v1.5A1.5 1.5 0 009.75 19.5h4.5A1.5 1.5 0 0015.75 18v-1.5h.75A4.5 4.5 0 0021 12v0a9 9 0 00-9-9z" />
    </svg>
  ),
};

function FeaturesGrid() {
  const { data, error, isLoading } = useSWR<Feature[]>("features", getFeatures, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60_000,
  });

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200/50 bg-red-50/70 p-10 text-center text-red-600">
        Özellikler yüklenirken bir sorun oluştu. Lütfen sayfayı yenileyin.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-48 animate-pulse rounded-3xl border border-border/40 bg-muted/60" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data?.map((feature) => (
        <Card key={feature.id}>
          <div className="space-y-5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15 text-primary">
              {iconMap[feature.id]}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{feature.description}</p>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary/80">
              Daha fazla bilgi
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
      <h3 className="text-xl font-semibold text-foreground">Beklenmedik bir hata oluştu</h3>
      <p className="mt-3 text-sm text-secondary">
        Sayfayı yenileyerek tekrar deneyebilirsiniz.
      </p>
      <button
        onClick={resetErrorBoundary}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-white"
      >
        Yeniden Dene
      </button>
    </div>
  );
}

export default function Features() {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/40 to-transparent" />

      <Container className="space-y-16">
        <SectionHeader
          eyebrow="Kabiliyetlerimiz"
          title="Her aşamada güvenebileceğiniz mühendislik kültürü"
          subtitle="Ürün stratejisinden canlı destek süreçlerine kadar ekiplerinizle entegre çalışan uçtan uca çözümler sunuyoruz."
        />

        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <FeaturesGrid />
        </ErrorBoundary>
      </Container>
    </section>
  );
}
