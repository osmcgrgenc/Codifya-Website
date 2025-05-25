import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "software-development",
    title: "Yazılım Geliştirme",
    description: "Modern teknolojiler kullanarak ölçeklenebilir ve sürdürülebilir yazılım çözümleri geliştiriyoruz.",
    icon: "💻",
  },
  {
    id: "cloud-services",
    title: "Bulut Hizmetleri",
    description: "AWS, Azure ve Google Cloud Platform üzerinde güvenli ve ölçeklenebilir bulut çözümleri sunuyoruz.",
    icon: "☁️",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı, modern ve etkileyici tasarım çözümleri ile kullanıcı deneyimini en üst düzeye çıkarıyoruz.",
    icon: "🎨",
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  
  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: `${service.title} | Codifya`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hizmet Detayları
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Modern teknolojiler ve en iyi pratikler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Deneyimli ve uzman ekip
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Kaliteli ve sürdürülebilir çözümler
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Neden Biz?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Müşteri odaklı yaklaşım
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Hızlı ve etkili çözümler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Sürekli destek ve bakım
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
} 