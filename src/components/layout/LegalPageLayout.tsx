import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

interface LegalPageLayoutProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function LegalPageLayout({
  eyebrow = "Yasal",
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-12 pb-24 pt-28">
        <PageHero eyebrow={eyebrow} title={title} description={description} align="center" />
        <Container>
          <Card>
            <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-secondary prose-li:text-secondary prose-a:text-primary">
              {children}
            </div>
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
