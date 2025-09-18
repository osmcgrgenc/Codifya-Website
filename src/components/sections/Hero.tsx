"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const stats = [
  { label: "Tamamlanan Proje", value: "120+" },
  { label: "Memnuniyet Oranı", value: "%98" },
  { label: "Uzmanlık Alanı", value: "15" },
];

const partners = ["TechStart", "Finora", "Retailfy", "HealthPlus", "Neovista"];

const roadmap = [
  {
    title: "Keşif Atölyesi",
    description: "İhtiyaçlarınızı derinlemesine anlayarak stratejik yol haritası çıkarıyoruz.",
  },
  {
    title: "Deneyim Tasarımı",
    description: "Kullanıcı araştırmalarıyla desteklenmiş arayüz ve deneyim tasarımları oluşturuyoruz.",
  },
  {
    title: "Ürün Geliştirme",
    description: "Çevik metodolojilerle hızlı iterasyonlar eşliğinde geliştirme sürecini yürütüyoruz.",
  },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    setIsLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 900);
  };

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
      <div className="absolute inset-x-0 top-[6rem] -z-10 h-[28rem] skew-y-3 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl" />
      <div className="absolute left-1/2 top-16 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl sm:h-80 sm:w-80" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary shadow-[0_10px_30px_-20px_rgba(59,130,246,0.6)]">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Kurumsal Dijital Dönüşüm Ajansı
          </span>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Stratejiden ürüne kadar <span className="bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-transparent">uçtan uca dijital deneyimler</span> tasarlıyoruz.
            </h1>
            <p className="max-w-2xl text-lg text-secondary sm:text-xl">
              Codifya, veri odaklı yaklaşımıyla kurumsal şirketlere modern web, mobil ve bulut çözümleri sunar. Her projeyi, hızlı iterasyon ve ölçülebilir başarı kriterleriyle uçtan uca yönetiriz.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/70 p-3 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] backdrop-blur sm:flex-row sm:items-center"
          >
            <label className="sr-only" htmlFor="hero-email">
              İş e-posta adresiniz
            </label>
            <input
              id="hero-email"
              type="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              placeholder="İş e-posta adresiniz"
              className="h-12 flex-1 rounded-xl border border-transparent bg-muted/60 px-4 text-base text-foreground placeholder:text-secondary/70 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-[0_20px_40px_-25px_rgba(59,130,246,0.85)] transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                "Ücretsiz danışmanlık alın"
              )}
            </button>
          </form>

          {submitted ? (
            <div className="rounded-2xl border border-green-200/40 bg-green-50/70 p-4 text-sm font-medium text-green-800 shadow-sm">
              Teşekkürler! Ekibimiz en kısa sürede sizinle iletişime geçecek.
            </div>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/50 bg-background/60 p-5 shadow-[0_12px_35px_-28px_rgba(15,23,42,0.6)] backdrop-blur"
              >
                <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                <p className="mt-2 text-sm text-secondary">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70">
              Bizimle büyüyen markalar
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base font-medium text-foreground/80">
              {partners.map((partner) => (
                <span key={partner} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden">
          <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -left-12 bottom-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">Proje Yolculuğu</p>
                <h2 className="text-2xl font-semibold text-foreground">
                  6 haftada canlıya çıkış
                </h2>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                <Image src="/window.svg" alt="Dashboard önizlemesi" width={48} height={48} />
              </div>
            </div>

            <div className="space-y-4">
              {roadmap.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-border/40 bg-background/80 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-sm font-semibold text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/40 bg-muted/60 p-5 text-sm text-secondary">
              <p className="font-semibold text-foreground">
                Her ay sadece 3 yeni projeyi kabul ediyoruz.
              </p>
              <p className="mt-2 leading-relaxed">
                Ücretsiz keşif toplantısında ürün vizyonunuzu değerlendirelim ve ilk yol haritasını birlikte oluşturalım.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
