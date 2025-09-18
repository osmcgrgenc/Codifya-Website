"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/solutions", label: "Çözümler" },
  { href: "#services", label: "Hizmetler" },
  { href: "/company", label: "Şirket" },
  { href: "/company/blog", label: "Blog" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.15)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <Container className="flex h-20 items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rounded-full bg-background/60 px-3 py-2 text-foreground shadow-[0_10px_30px_rgba(59,130,246,0.15)] backdrop-blur transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Codifya Ana Sayfa"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-primary to-accent">
            <Image
              src="/favicon_io/android-chrome-192x192.png"
              alt="Codifya Logo"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
          </span>
          <span className="text-xl font-semibold tracking-tight sm:text-2xl">
            Codifya
          </span>
        </Link>

        <nav
          className="hidden items-center space-x-1 text-sm font-medium text-secondary md:flex"
          aria-label="Ana Menü"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/company/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_-20px_rgba(59,130,246,0.8)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Keşif Randevusu
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground backdrop-blur transition-colors duration-200 hover:border-primary/40 hover:text-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Mobil Menü"
      >
        <Container className="pb-6">
          <div className="overflow-hidden rounded-3xl border border-border/40 bg-background/95 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="space-y-1 p-4">
              {NAV_LINKS.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  {item.label}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            <div className="border-t border-border/30 bg-muted/40 p-4">
              <Link
                href="/company/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-base font-semibold text-white shadow-[0_15px_35px_-20px_rgba(59,130,246,0.8)]"
              >
                Keşif Randevusu Al
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
