"use client";

import { useCallback } from "react";
import useSWR from "swr";
import Image from "next/image";
import { Testimonial, getTestimonials } from "@/lib/api";
import { ErrorBoundary } from "react-error-boundary";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

function TestimonialsGrid() {
  const { data, error, isLoading } = useSWR<Testimonial[]>("testimonials", getTestimonials, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60_000,
  });

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200/60 bg-red-50/80 p-10 text-center text-red-600">
        Referanslar yüklenemedi. Lütfen sayfayı yenileyin.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-56 animate-pulse rounded-3xl border border-border/40 bg-muted/60" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {data?.map((testimonial) => (
        <Card key={testimonial.id}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-border/40">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-secondary">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              “{testimonial.content}”
            </p>
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg key={index} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ErrorFallback({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="rounded-3xl border border-border/50 bg-background/80 p-10 text-center shadow-sm">
      <h3 className="text-xl font-semibold text-foreground">Referansları gösterirken bir sorun oluştu</h3>
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

export default function Testimonials() {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 -z-20 bg-grid-pattern opacity-[0.05]" />

      <Container className="space-y-16">
        <SectionHeader
          eyebrow="Müşteri deneyimi"
          title="Kurumsal ekiplerin bize güvenmesinin nedeni"
          subtitle="Her projede somut iş hedeflerine odaklanır, şeffaf iletişim ve hızlı geri bildirimle süreci yönetiriz."
        />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <TestimonialsGrid />
        </ErrorBoundary>
      </Container>
    </section>
  );
}
