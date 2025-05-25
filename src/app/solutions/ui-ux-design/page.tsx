import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Hizmetleri | Codifya",
  description: "Kullanıcı odaklı, modern ve etkileyici UI/UX tasarım çözümleri. Kullanıcı deneyimini en üst düzeye çıkaran tasarımlar.",
  openGraph: {
    title: "UI/UX Design Hizmetleri | Codifya",
    description: "Kullanıcı odaklı, modern ve etkileyici UI/UX tasarım çözümleri.",
    type: "website",
  },
};

const features = [
  {
    title: "Kullanıcı Araştırması",
    description: "Hedef kitlenizi analiz ederek, kullanıcı ihtiyaçlarını ve davranışlarını anlıyoruz.",
    icon: "🔍",
  },
  {
    title: "Wireframe & Prototip",
    description: "Hızlı ve etkili wireframe'ler ile kullanıcı deneyimini test ediyoruz.",
    icon: "📐",
  },
  {
    title: "UI Tasarım",
    description: "Modern ve kullanıcı dostu arayüzler tasarlıyoruz.",
    icon: "🎨",
  },
  {
    title: "UX Tasarım",
    description: "Kullanıcı deneyimini en üst düzeye çıkaran akıcı ve etkili tasarımlar.",
    icon: "✨",
  },
  {
    title: "Kullanılabilirlik Testi",
    description: "Gerçek kullanıcılarla testler yaparak tasarımı optimize ediyoruz.",
    icon: "✅",
  },
  {
    title: "Responsive Tasarım",
    description: "Tüm cihazlarda mükemmel görünen ve çalışan tasarımlar.",
    icon: "📱",
  },
];

const process = [
  {
    title: "Keşif",
    description: "Projenin hedeflerini ve kullanıcı ihtiyaçlarını analiz ediyoruz.",
    step: "01",
  },
  {
    title: "Araştırma",
    description: "Rakip analizi ve kullanıcı araştırması yapıyoruz.",
    step: "02",
  },
  {
    title: "Tasarım",
    description: "Wireframe'ler ve prototipler oluşturuyoruz.",
    step: "03",
  },
  {
    title: "Test",
    description: "Kullanıcı testleri ile tasarımı optimize ediyoruz.",
    step: "04",
  },
  {
    title: "Geliştirme",
    description: "Tasarımı kodlayarak hayata geçiriyoruz.",
    step: "05",
  },
];

export default function UIUXDesignPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UI/UX Design Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Kullanıcı odaklı, modern ve etkileyici tasarım çözümleri
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tasarım Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Kullanıcı deneyimini en üst düzeye çıkaran çözümler
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tasarım Sürecimiz
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Başarılı projeler için izlediğimiz adımlar
              </p>
            </div>
            <div className="space-y-12">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start space-x-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Projenizi Hayata Geçirelim
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kullanıcı deneyimini en üst düzeye çıkaran tasarım çözümleri için
              bizimle iletişime geçin.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
