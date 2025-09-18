"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const focusAreas = [
  {
    title: "Cloud Migration",
    description: "Mevcut altyapınızı kesintisiz şekilde AWS, Azure veya GCP platformlarına taşıyoruz.",
  },
  {
    title: "Cloud Native Development",
    description: "Sunucusuz mimari, konteyner ve mikro servis yapılarıyla buluta özgü çözümler geliştiriyoruz.",
  },
  {
    title: "Optimization & FinOps",
    description: "Maliyet optimizasyonu, güvenlik denetimleri ve performans iyileştirmeleriyle sürdürülebilir çalışma sunuyoruz.",
  },
];

const checklist = [
  "Mevcut sistem analizi ve geçiş stratejisi",
  "Altyapı otomasyonu (Terraform, Pulumi)",
  "Sürekli entegre ve teslimat boru hatları",
  "Gözlemlenebilirlik: Logging, monitoring ve alerting",
];

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-16 pb-24 pt-28">
        <PageHero
          eyebrow="Bulut Hizmetleri"
          title="Miras sistemlerden bulut yerlisi altyapılara dönüşüm"
          description="Bulut yolculuğunuzun her aşamasında güvenli, ölçeklenebilir ve optimize edilmiş çözümler sunuyoruz."
        />

        <section>
          <Container className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((item) => (
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
              <h3 className="text-3xl font-semibold text-foreground">Operasyonel mükemmeliyet</h3>
              <p className="text-lg text-secondary">
                CloudOps ekibimiz, 7/24 izlenen ortamlar ve otomasyon destekli operasyon yönetimi ile kesintisiz çalışmanızı sağlar.
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Sertifikasyonlar</p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>AWS Solutions Architect Professional</li>
                  <li>Google Cloud Professional Cloud Architect</li>
                  <li>Azure DevOps Engineer Expert</li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/20">
                  Değerlendirme oturumu planla
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
