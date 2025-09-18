"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const metrics = [
  { label: "Büyüyen ekip", value: "45+", detail: "Ürün, tasarım ve mühendislik uzmanı" },
  { label: "Global müşteri", value: "18", detail: "Farklı sektör ve pazarda aktif projeler" },
  { label: "Teslim edilen proje", value: "120", detail: "Kurumsal dönüşüm ve ürün lansmanı" },
];

const values = [
  {
    title: "İnsan odaklı kültür",
    description: "Ekipler arası güveni pekiştiren şeffaf iletişim ve öğrenme ortamı inşa ederiz.",
  },
  {
    title: "Doğru problemler",
    description: "Her projeye kullanıcı araştırması ve iş hedefleriyle başlayan stratejik yaklaşım uygularız.",
  },
  {
    title: "Ölçeklenebilir mimari",
    description: "Modern DevOps pratiğiyle yönetilen, sürdürülebilir ve güvenli altyapılar tasarlarız.",
  },
];

const leadership = [
  {
    name: "Deniz Aksoy",
    role: "Kurucu Ortak & CEO",
    bio: "Ürün stratejisi ve inovasyon alanında 12 yıllık deneyim. Daha önce Avrupa'da SaaS girişimleri yönetti.",
  },
  {
    name: "Mert Yıldırım",
    role: "Teknoloji Lideri",
    bio: "Bulut mimarisi ve platform modernizasyonu projelerinde uzman. AWS ve GCP sertifikalı.",
  },
  {
    name: "Selin Acar",
    role: "Tasarım Direktörü",
    bio: "Kurumsal deneyim platformları ve hizmet tasarımı projelerinde 10+ yıl deneyime sahip.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-20 pb-24 pt-28">
        <PageHero
          eyebrow="Hakkımızda"
          title="Kurumsal ekiplerin dijital dönüşüm yolculuğundaki stratejik partneri"
          description="Codifya, araştırma odaklı tasarım yaklaşımı ve ölçeklenebilir mühendislik altyapısıyla, şirketlerin yeni nesil ürünlerini hızla hayata geçirmesine yardımcı olur."
          align="center"
        />

        <section>
          <Container className="grid gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <div className="space-y-2">
                  <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                  <p className="text-sm text-secondary">{metric.label}</p>
                  <p className="text-xs uppercase tracking-widest text-secondary/70">{metric.detail}</p>
                </div>
              </Card>
            ))}
          </Container>
        </section>

        <section>
          <Container className="space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold">Çapraz disiplinli ekiplerle çalışan bir dijital stüdyo</h2>
              <p className="text-lg text-secondary">
                Tasarımcılar, ürün yöneticileri ve yazılım mühendislerinden oluşan hibrit ekibimiz, şirket içi ekiplerinizle
                entegre çalışarak veri odaklı karar alma süreçlerini destekler.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title}>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Liderlik
              </span>
              <h2 className="text-3xl font-semibold text-foreground">Ekiplerimizi yönlendiren uzmanlar</h2>
              <p className="max-w-2xl text-sm text-secondary">
                Ürün keşiflerinden canlı operasyonlara kadar tüm yolculukta deneyimli liderlerimiz projeleri yönlendirir.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {leadership.map((leader) => (
                <Card key={leader.name}>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-semibold text-foreground">{leader.name}</p>
                      <p className="text-sm text-secondary">{leader.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">{leader.bio}</p>
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
