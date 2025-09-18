import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "Ürün Stratejisi",
    description: "Hedef pazar, kullanıcı segmentleri ve iş hedeflerini netleştirmek için stratejik keşif seansları düzenliyoruz.",
    bullets: ["Paydaş workshop'ları", "Kullanıcı persona & journey", "Yol haritası ve OKR tanımı"],
  },
  {
    title: "Deneyim Tasarımı",
    description: "Tüm temas noktalarını kapsayan kullanıcı deneyimi akışlarını ve ölçeklenebilir tasarım sistemlerini oluşturuyoruz.",
    bullets: ["Düşük/orta seviye prototip", "Design system & UI kit", "Kullanılabilirlik testleri"],
  },
  {
    title: "Ürün Geliştirme",
    description: "Modern DevOps yaklaşımlarıyla güvenli, performanslı ve sürdürülebilir ürün geliştirme sürecini yönetiyoruz.",
    bullets: ["Çevik sprint planlama", "QA otomasyonu", "Canlıya alma ve izleme"],
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-gradient-to-l from-accent/10 to-transparent lg:block" />

      <Container className="space-y-16">
        <SectionHeader
          eyebrow="Çalışma Modelimiz"
          title="Kurumsal ekiplerle entegre çalışan üç aşamalı yaklaşım"
          subtitle="Strateji, tasarım ve geliştirmeyi tek bir çatı altında birleştirerek projelerinizi hızla canlıya alıyoruz."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title}>
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{step.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-secondary">
                  {step.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
