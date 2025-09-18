"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const openings = [
  {
    title: "Kıdemli Frontend Developer",
    location: "İstanbul / Hibrit",
    type: "Tam Zamanlı",
    description: "TypeScript, Next.js ve tasarım sistemleri konusunda deneyimli takım arkadaşı arıyoruz.",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Tam Zamanlı",
    description: "Karmaşık iş süreçlerini yalın deneyimlere dönüştürebilecek araştırma odaklı tasarımcı.",
  },
  {
    title: "Delivery Manager",
    location: "İstanbul / Hibrit",
    type: "Tam Zamanlı",
    description: "Kurumsal müşterilerle proje planlama ve sprint yönetimi yapacak proje lideri.",
  },
];

const benefits = [
  "Esnek çalışma modeli ve uzaktan çalışma opsiyonu",
  "Kişisel gelişim bütçesi, konferans ve eğitim desteği",
  "Sağlık sigortası ve yan haklar",
  "Global müşterilerle çalışma fırsatı",
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-20 pb-24 pt-28">
        <PageHero
          eyebrow="Kariyer"
          title="Kurumsal ürünleri dönüştüren ekipte yer alın"
          description="Tasarım, ürün ve mühendislik disiplinlerinde büyüyen ekibimize katılacak, öğrenmeye meraklı takım arkadaşları arıyoruz."
          align="center"
        />

        <section>
          <Container className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground">Açık pozisyonlar</h2>
              <p className="text-sm text-secondary">Tüm pozisyonlar için güçlü portfolyo ve İngilizce iletişim beklenmektedir.</p>
            </div>
            <div className="space-y-4">
              {openings.map((opening) => (
                <Card key={opening.title}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{opening.title}</h3>
                      <p className="text-sm text-secondary">{opening.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-secondary/70">
                        <span>{opening.location}</span>
                        <span>{opening.type}</span>
                      </div>
                    </div>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/20"
                      href="mailto:talent@codifya.com"
                    >
                      Başvur
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground">Codifya&apos;da çalışma kültürü</h2>
              <p className="text-lg text-secondary">
                Ekiplerimizi küçük, öz yönetimli ve disiplinler arası oluşturuyoruz. Her sprint sonunda düzenli geribildirim seanslarıyla öğrenme kültürünü destekliyoruz.
              </p>
              <ul className="space-y-3 text-sm text-secondary">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Mentorluk Programı</p>
                <p className="text-sm leading-relaxed text-secondary">
                  Yeni başlayan ekip arkadaşlarımız için 12 haftalık mentorluk programı sunuyoruz. Teknik ve kariyer gelişimi destekleyen özelleştirilmiş planlar oluşturuyoruz.
                </p>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white">
                  Mentorluk detayları
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
