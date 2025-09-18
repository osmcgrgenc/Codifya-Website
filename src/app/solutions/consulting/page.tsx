"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "Dijital Dönüşüm Stratejisi",
    description: "Kurumsal hedeflerinizi teknoloji yol haritasına dönüştürerek ölçülebilir OKR'ler belirliyoruz.",
  },
  {
    title: "Ürün Portföy Yönetimi",
    description: "Ürün yaşam döngüsü, backlog yönetimi ve GTM planları için stratejik danışmanlık sunuyoruz.",
  },
  {
    title: "Ekip Yapılanması",
    description: "Ürün, tasarım ve mühendislik ekipleri için organizasyon modeli ve süreç tasarımı gerçekleştiriyoruz.",
  },
];

const services = [
  "Atölye ve strateji oturumları",
  "Modernizasyon yol haritaları",
  "DesignOps & DevOps adaptasyonu",
  "Teknik borç analizi ve önceliklendirme",
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-16 pb-24 pt-28">
        <PageHero
          eyebrow="Danışmanlık"
          title="Sürdürülebilir dijital dönüşüm için stratejik danışmanlık"
          description="Yönetim ekipleriyle birlikte çalışarak teknolojik yatırımlarınızı uzun vadeli büyüme hedeflerinizle hizalıyoruz."
        />

        <section>
          <Container className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title}>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground">{pillar.title}</h2>
                  <p className="text-sm text-secondary">{pillar.description}</p>
                </div>
              </Card>
            ))}
          </Container>
        </section>

        <section>
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-foreground">Kurumsal dönüşüm yolculuğunuz için</h3>
              <p className="text-lg text-secondary">
                Dönüşüm projelerinizde yönetim, ürün ve teknoloji ekipleri arasında ortak dil oluşturuyoruz. Karar süreçlerini veri ve kullanıcı içgörüleriyle destekliyoruz.
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Danışmanlık Paketleri</p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>4 haftalık hızlı değerlendirme</li>
                  <li>12 haftalık dönüşüm programı</li>
                  <li>Quarterly OKR eşleştirme seansları</li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/20">
                  Program planı iste
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
