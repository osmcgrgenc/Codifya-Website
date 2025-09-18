"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const capabilities = [
  {
    title: "Web & Mobil Uygulamalar",
    description: "React, Next.js ve React Native gibi modern teknolojilerle performanslı ürünler geliştiriyoruz.",
  },
  {
    title: "Platform ve API",
    description: "Mikro servis mimarisi, GraphQL ve REST API tasarımı ile ölçeklenebilir altyapılar kuruyoruz.",
  },
  {
    title: "DevOps ve Otomasyon",
    description: "CI/CD, container orkestrasyonu ve gözlemlenebilirlik çözümleriyle canlı operasyonu güvence altına alıyoruz.",
  },
];

const deliverables = [
  "Teknik keşif ve mimari değerlendirme",
  "Sprint planlama, çevik proje yönetimi",
  "Test otomasyonu ve kalite güvence",
  "Canlıya alma, bakım ve destek",
];

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-16 pb-24 pt-28">
        <PageHero
          eyebrow="Ürün Mühendisliği"
          title="Stratejiden canlıya kadar uçtan uca yazılım geliştirme"
          description="Kurumsal ekiplerle birlikte çalışarak, iş hedeflerinize uygun ölçeklenebilir ürünler geliştiriyoruz."
        />

        <section>
          <Container className="grid gap-6 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title}>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              </Card>
            ))}
          </Container>
        </section>

        <section>
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-foreground">Nasıl çalışıyoruz?</h3>
              <p className="text-lg text-secondary">
                Çevik metodolojilerle sprint bazlı ilerlerken, ürün yöneticileri ve tasarımcılarla yakın çalışarak en doğru çözüme ulaşırız.
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Ölçülebilir çıktılar</p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    6 haftada MVP lansmanı
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    OTA ve versiyonlama stratejileri
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    SLA tanımlı bakım ve destek
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white">
                  Teknik toplantı planla
                </button>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
