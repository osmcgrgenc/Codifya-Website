"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const practiceAreas = [
  {
    title: "Dijital Ürün Stratejisi",
    description: "Yeni ürün fırsatlarını tanımlamak, MVP kapsamını belirlemek ve ölçeklenebilir yol haritası oluşturmak için çalışıyoruz.",
  },
  {
    title: "Deneyim Tasarımı",
    description: "Servis blueprint, kullanıcı arayüzü ve tasarım sistemleriyle tüm temas noktalarında bütünsel deneyim sunarız.",
  },
  {
    title: "Platform Geliştirme",
    description: "Modern teknolojilerle geliştirilen performanslı, güvenli ve bulut tabanlı uygulamalar teslim ederiz.",
  },
];

const highlights = [
  {
    title: "TechStart Banking",
    description: "KOBİ bankacılığı için dijital onboarding platformu. 6 ayda %45 daha hızlı müşteri edinimi sağlandı.",
  },
  {
    title: "PharmaOne",
    description: "Global ilaç firması için saha ekipleri yönetim uygulaması. 14 ülkede eş zamanlı canlıya çıktı.",
  },
  {
    title: "Retailfy",
    description: "Omni-channel perakende yönetimi için headless e-ticaret altyapısı. %210 gelir artışı elde edildi.",
  },
];

export default function CompanyIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-20 pb-24 pt-28">
        <PageHero
          eyebrow="Codifya"
          title="Kurumsal ekiplerin dijital ürün geliştirme partneri"
          description="2020'den bu yana finans, telekom, sağlık ve perakende sektörlerinde karmaşık iş süreçlerini sade dijital deneyimlere dönüştürüyoruz."
        />

        <section>
          <Container className="space-y-12">
            <SectionHeader
              align="left"
              eyebrow="Uzmanlık Alanlarımız"
              title="Stratejiden canlı operasyonlara kadar ortaklaşa çalışıyoruz"
              subtitle="Projelerinize kullanıcı araştırması, deneyim tasarımı ve çevik geliştirme perspektifleriyle değer katıyoruz."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {practiceAreas.map((item) => (
                <Card key={item.title}>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
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
              eyebrow="Öne çıkan projeler"
              title="Dönüşüm yolculuğunda iş ortaklarımız"
              subtitle="Her projede birlikte belirlediğimiz metriklere göre ilerlemeyi raporluyoruz."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.title}>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-secondary">{item.description}</p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Vaka incelemesi
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <SectionHeader
                align="left"
                eyebrow="Kültür"
                title="Şeffaf ve ölçülebilir süreçlerle iş birliği"
                subtitle="Her sprint sonunda ekipler arası retro ve planlama seansları düzenliyor, paydaşlarımızla birlikte sürekli öğrenmeyi benimsiyoruz."
              />
            </div>
            <Card>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Çalışma Prensipleri</p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    Haftalık demo ve ölçülebilir KPI raporlaması
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    Müşteri ekipleriyle ortak iletişim platformları
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    DesignOps ve DevOps entegrasyonu ile hızlı iterasyon
                  </li>
                </ul>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
