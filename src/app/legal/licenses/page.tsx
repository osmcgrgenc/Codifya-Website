"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Licenses() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Lisanslar ve Fikri Mülkiyet</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p>Bu sayfa, Codifya Software tarafından geliştirilen yazılımların ve web sitesinin lisans ve fikri mülkiyet haklarını açıklar.</p>

          <h2>Yazılım Lisansları</h2>
          <p>Codifya Software tarafından sunulan tüm yazılım ve dijital ürünler, aksi belirtilmedikçe Codifya Software&apos;e aittir ve telif hakkı ile korunmaktadır. Üçüncü taraf açık kaynak yazılımlar, ilgili lisansları kapsamında kullanılmaktadır.</p>

          <h2>Fikri Mülkiyet Hakları</h2>
          <ul>
            <li>Web sitesinde yer alan tüm içerik, marka, logo ve görseller Codifya Software&apos;e aittir.</li>
            <li>İzinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</li>
            <li>Üçüncü taraf içerikler, ilgili sahiplerinin izniyle kullanılmaktadır.</li>
          </ul>

          <h2>Üçüncü Taraf Lisanslar</h2>
          <p>Web sitemizde kullanılan üçüncü taraf kütüphaneler ve araçlar, kendi lisansları kapsamında kullanılmaktadır. Detaylı bilgi için ilgili açık kaynak projelerin lisanslarına bakınız.</p>

          <h2>İletişim</h2>
          <p>Lisanslar ve fikri mülkiyet haklarıyla ilgili sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 