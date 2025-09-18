import Link from "next/link";
import { Container } from "@/components/ui/Container";

const solutionLinks = [
  { label: "Ürün Mühendisliği", href: "/solutions/software-development" },
  { label: "Bulut Modernizasyonu", href: "/solutions/cloud-services" },
  { label: "Deneyim Tasarımı", href: "/solutions/ui-ux-design" },
  { label: "Stratejik Danışmanlık", href: "/solutions/consulting" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/company/about" },
  { label: "Kariyer", href: "/company/careers" },
  { label: "Basın Odası", href: "/company/press" },
  { label: "Blog", href: "/company/blog" },
];

const legalLinks = [
  { label: "Gizlilik Politikası", href: "/legal/privacy" },
  { label: "Kullanım Şartları", href: "/legal/terms" },
  { label: "Çerez Politikası", href: "/legal/cookies" },
  { label: "KVKK Aydınlatma", href: "/legal/kvkk-aydinlatma" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/codifya" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background/95 text-secondary">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-primary/5 via-background to-accent/10" />

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 text-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-semibold">
                C
              </span>
              <span className="text-xl font-semibold">Codifya</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-secondary">
              Yazılım, tasarım ve danışmanlık ekiplerimizle uluslararası standartlarda ürünler geliştiriyor, kurumların dijital dönüşümüne rehberlik ediyoruz.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-widest text-secondary/70">
              <span>ISO 27001</span>
              <span>Next.js Partner</span>
              <span>DesignOps Certified</span>
            </div>
          </div>

          <nav className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary/70">
              Çözümler
            </p>
            <ul className="space-y-3 text-sm">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors duration-200 hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary/70">
              Şirket
            </p>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors duration-200 hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary/70">
              Yasal & Sosyal
            </p>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors duration-200 hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-secondary/70">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/40 pt-8 text-xs text-secondary/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Codifya Digital. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Maslak, İstanbul</span>
            <span>+90 212 123 45 67</span>
            <span>hello@codifya.com</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
