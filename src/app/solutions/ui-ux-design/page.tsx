import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "UI/UX Design Hizmetleri | Codifya",
  description: "Kullanıcı odaklı, modern ve etkileyici UI/UX tasarım çözümleri. Kullanıcı deneyimini en üst düzeye çıkaran tasarımlar.",
  openGraph: {
    title: "UI/UX Design Hizmetleri | Codifya",
    description: "Kullanıcı odaklı, modern ve etkileyici UI/UX tasarım çözümleri.",
    type: "website",
  },
};

const features = [
  {
    title: "Kullanıcı Araştırması",
    description: "Hedef kitlenizi analiz ederek, kullanıcı ihtiyaçlarını ve davranışlarını anlıyoruz.",
    icon: "🔍",
  },
  {
    title: "Wireframe & Prototip",
    description: "Hızlı ve etkili prototiplerle hipotezleri test ediyoruz.",
    icon: "📐",
  },
  {
    title: "UI Tasarım",
    description: "Markanızla uyumlu, ölçeklenebilir tasarım sistemleri oluşturuyoruz.",
    icon: "🎨",
  },
  {
    title: "UX Strateji",
    description: "Kullanıcı yolculuklarını analiz ederek akıcı deneyimler tasarlıyoruz.",
    icon: "✨",
  },
  {
    title: "Kullanılabilirlik Testi",
    description: "Gerçek kullanıcı testleriyle tasarımları optimize ediyoruz.",
    icon: "✅",
  },
  {
    title: "DesignOps",
    description: "Tasarım ve geliştirme ekipleri arasında tutarlı süreçler kuruyoruz.",
    icon: "⚙️",
  },
];

const process = [
  {
    step: "01",
    title: "Keşif",
    description: "İş hedeflerini, kullanıcı ihtiyaçlarını ve mevcut deneyimi analiz ediyoruz.",
  },
  {
    step: "02",
    title: "Araştırma",
    description: "Persona, journey ve servis blueprint gibi çıktılarını oluşturuyoruz.",
  },
  {
    step: "03",
    title: "Tasarım",
    description: "Wireframe, prototip ve görsel tasarımları iteratif şekilde geliştiriyoruz.",
  },
  {
    step: "04",
    title: "Test",
    description: "Kullanıcı testleri ve A/B deneyleriyle deneyimi doğruluyoruz.",
  },
  {
    step: "05",
    title: "Entegrasyon",
    description: "Geliştirici ekipleriyle ortak çalışarak tasarım sistemini devreye alıyoruz.",
  },
];

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-16 pb-24 pt-28">
        <PageHero
          eyebrow="Tasarım"
          title="Doğru probleme odaklanan kullanıcı deneyimleri"
          description="Araştırma odaklı yaklaşımımızla karmaşık iş süreçlerini kullanıcılar için sezgisel deneyimlere dönüştürüyoruz."
        />

        <section>
          <Container className="space-y-10">
            <SectionHeader
              align="left"
              eyebrow="Hizmet kapsamı"
              title="UX ve UI uzmanlığını tek çatı altında topluyoruz"
              subtitle="Stratejiden görsel tasarıma kadar uçtan uca tasarım hizmeti sunuyoruz."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <div className="space-y-3">
                    <span className="text-3xl" aria-hidden>{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-secondary">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="space-y-10">
            <SectionHeader
              align="left"
              eyebrow="Süreç"
              title="Her projede deneyimlediğimiz metodoloji"
              subtitle="Şeffaf iletişim ve düzenli teslimlerle projenizi birlikte ilerletiyoruz."
            />
            <div className="grid gap-6 lg:grid-cols-5">
              {process.map((step) => (
                <Card key={step.step}>
                  <div className="space-y-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary/70">{step.step}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-secondary">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
