import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default function CTA() {
  return (
    <section className="pb-28 pt-10">
      <Container>
        <Card className="overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
          <div className="relative grid gap-10 px-8 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                Hazırız
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Dijital ürününüz için doğru ekip partneriyle tanışın
              </h2>
              <p className="text-base text-white/80">
                Deneyimli mühendislik ve tasarım ekibimiz, şirket içi ekiplerinizle entegre çalışarak projenizi 6 hafta içinde canlı ortama taşır.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-background/80 p-6 text-sm text-secondary shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)]">
              <p className="text-base font-semibold text-foreground">Neler sunuyoruz?</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Strateji, tasarım ve geliştirme ekiplerinden oluşan hibrit çalışma modeli
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Yönetim panelleriyle şeffaf sprint ilerleme raporları
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  SLA tanımlı destek ve bakım hizmetleri
                </li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/company/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white"
                >
                  Keşif görüşmesi planla
                </Link>
                <Link
                  href="/company/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-transparent px-6 py-3 text-sm font-semibold text-primary"
                >
                  Codifya hakkında
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
