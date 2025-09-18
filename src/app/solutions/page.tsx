"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

const solutions = [
  {
    slug: "software-development",
    title: "Ürün Mühendisliği",
    summary: "Modern teknoloji yığınlarıyla web, mobil ve platform çözümleri geliştiriyoruz.",
  },
  {
    slug: "cloud-services",
    title: "Bulut Modernizasyonu",
    summary: "Miras sistemlerinizi buluta taşıyor, ölçeklenebilir ve güvenli altyapılar kurguluyoruz.",
  },
  {
    slug: "ui-ux-design",
    title: "Deneyim Tasarımı",
    summary: "Kullanıcı araştırmalarıyla desteklenen uçtan uca deneyim tasarımı ve design system kuruyoruz.",
  },
  {
    slug: "consulting",
    title: "Stratejik Danışmanlık",
    summary: "Ürün vizyonu, süreç optimizasyonu ve ekip yapılanmasında stratejik mentorluk sunuyoruz.",
  },
];

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-12 pb-24 pt-28">
        <PageHero
          eyebrow="Çözümler"
          title="Kurumsal dönüşüm için uçtan uca hizmetler"
          description="Strateji, tasarım ve mühendislik deneyimimizi bir araya getirerek kurumların dijital ürünlerini ölçülebilir şekilde ölçekliyoruz."
        />
        <Container className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
              <Card>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{solution.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Detayları incele
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
