"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const news = [
  {
    title: "Codifya, Avrupa finans sektöründe yeni dijital platform projesi başlattı",
    date: "Mayıs 2024",
    link: "#",
  },
  {
    title: "Codifya DesignOps ekibi, Uluslararası UX Zirvesi'nde sunum yaptı",
    date: "Mart 2024",
    link: "#",
  },
  {
    title: "Codifya'nın bulut modernizasyon projesi IDC tarafından örnek vaka seçildi",
    date: "Ocak 2024",
    link: "#",
  },
];

const kitItems = [
  "Logo seti (SVG ve PNG)",
  "Kurumsal kimlik kılavuzu",
  "Şirket tanıtım sunumu",
  "Basın iletişim dosyası",
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-20 pb-24 pt-28">
        <PageHero
          eyebrow="Basın"
          title="Codifya hakkında güncel haberler ve medya kaynakları"
          description="Medya temsilcileri için basın bültenleri, görsel varlıklar ve iletişim detaylarını bu sayfadan indirebilirsiniz."
          align="center"
        />

        <section>
          <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold text-foreground">Son basın bültenleri</h2>
                <div className="space-y-4">
                  {news.map((item) => (
                    <div key={item.title} className="space-y-2 rounded-2xl border border-border/40 bg-background/70 p-4">
                      <p className="text-sm uppercase tracking-widest text-secondary/70">{item.date}</p>
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary" href={item.link}>
                        PDF&apos;i indir
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                          <path d="M7 11l5 5 5-5" />
                          <path d="M12 4v12" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Basın kiti</h2>
                  <p className="mt-2 text-sm text-secondary">
                    Codifya&apos;nın güncel logosu, renk paleti ve basın bülteni şablonlarını içeren medya paketini indirin.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-secondary">
                  {kitItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white">
                  Basın kitini indir
                </button>
              </div>
            </Card>
          </Container>
        </section>

        <section>
          <Container className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Basın iletişim</p>
                <h3 className="text-xl font-semibold text-foreground">Medya iletişim hattı</h3>
                <p className="text-sm text-secondary">Basın bültenleri, röportaj talepleri ve etkinlik iş birlikleri için iletişime geçebilirsiniz.</p>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-foreground">press@codifya.com</p>
                  <p className="text-secondary">+90 212 555 00 11</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary/70">Medya kaynakları</p>
                <h3 className="text-xl font-semibold text-foreground">Marka hikayemiz</h3>
                <p className="text-sm text-secondary">
                  Codifya, karmaşık iş süreçlerini kullanıcı dostu dijital ürünlere dönüştüren bağımsız bir teknoloji stüdyosudur. Daha fazla bilgi için şirket tanıtım sunumumuzu inceleyin.
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Sunumu aç
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
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
