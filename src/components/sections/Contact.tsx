import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const contactChannels = [
  {
    title: "Satış Soruları",
    description: "Yeni projeler, teklif ve demo talepleri için satış ekibimizle görüşün.",
    value: "hello@codifya.com",
    type: "email",
  },
  {
    title: "Teknik Destek",
    description: "Canlı projeleriniz için 7/24 teknik destek hattı.",
    value: "+90 212 123 45 67",
    type: "phone",
  },
  {
    title: "Ofis",
    description: "Maslak Mah. Ahi Evran Cad. No:11 Sarıyer / İstanbul",
    value: "Haritada görüntüle",
    type: "location",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/70 to-background" />
      <div className="absolute inset-x-0 top-12 -z-10 h-40 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl" />

      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            İletişime Geçin
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Birlikte etkileyici dijital deneyimler üretelim
          </h2>
          <p className="text-lg text-secondary">
            Projenizi, hedeflerinizi ve teknik gereksinimlerinizi dinleyelim.
            48 saat içinde kapsamlı bir yol haritası ve teklif hazırlayalım.
          </p>

          <Card>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-secondary" htmlFor="contact-name">
                  Adınız Soyadınız
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Ör. Elif Kaya"
                    className="mt-2 h-12 w-full rounded-xl border border-border/60 bg-background/80 px-4 text-sm text-foreground placeholder:text-secondary/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="text-sm font-medium text-secondary" htmlFor="contact-email">
                  İş E-postanız
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="ornek@firma.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border/60 bg-background/80 px-4 text-sm text-foreground placeholder:text-secondary/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>
              <label className="text-sm font-medium text-secondary" htmlFor="contact-company">
                Şirketiniz
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Şirket Adı"
                  className="mt-2 h-12 w-full rounded-xl border border-border/60 bg-background/80 px-4 text-sm text-foreground placeholder:text-secondary/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="text-sm font-medium text-secondary" htmlFor="contact-message">
                Projenizi anlatın
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Konu, hedefler ve mevcut teknoloji altyapısı hakkında bilgi verin." 
                  className="mt-2 w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-25px_rgba(59,130,246,0.9)] transition-transform duration-200 hover:scale-[1.01]"
              >
                Görüşme talep et
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-secondary">
                Form verileri yalnızca iletişim için kullanılır. <a href="/legal/privacy" className="text-primary underline">Gizlilik Politikasını</a> inceleyebilirsiniz.
              </p>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-foreground">Çağrı Merkezimiz</h3>
            <p className="mt-2 text-sm text-secondary">
              Hafta içi 09:00 - 19:00 saatleri arasında ürün danışmanlarımız sorularınızı yanıtlıyor.
            </p>
            <div className="mt-6 space-y-5">
              {contactChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl border border-border/40 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground">{channel.title}</p>
                  <p className="mt-1 text-sm text-secondary">{channel.description}</p>
                  <p className="mt-3 text-sm font-medium text-primary">{channel.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-foreground">Toplantı Takvimi</h3>
            <p className="mt-2 text-sm text-secondary">
              Proje kapsamınız doğrultusunda 30 dakikalık çevrim içi bir keşif görüşmesi planlayalım.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/40 bg-muted/50 p-4 text-sm text-secondary">
                <p className="font-semibold text-foreground">Ücretsiz keşif</p>
                <p className="mt-1">Ürün vizyonu analizi ve teknik yol haritası.</p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-muted/50 p-4 text-sm text-secondary">
                <p className="font-semibold text-foreground">Teknik workshop</p>
                <p className="mt-1">Mimari değerlendirme ve PoC planlaması.</p>
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/20">
              Takvimden slot seç
            </button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
