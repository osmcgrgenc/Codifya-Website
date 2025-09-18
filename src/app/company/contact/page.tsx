"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import ContactSection from "@/components/sections/Contact";

export default function CompanyContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-12 pb-24 pt-28">
        <PageHero
          eyebrow="İletişim"
          title="Projelerinizi konuşmaya hazırız"
          description="Kurumsal dönüşüm projeleriniz ve ürün geliştirme ihtiyaçlarınız için keşif görüşmesi planlayalım."
          align="center"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
