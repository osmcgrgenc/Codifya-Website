"use client";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function Cookies() {
  return (
    <LegalPageLayout
      title="Çerez Politikası"
      description="Web sitemizde kullanılan çerezlerin türleri, kullanım amaçları ve yönetim seçenekleri hakkında bilgi."
    >
      <p>
        Bu çerez politikası, Codifya Software web sitesinde (codifya.com) kullanılan çerezlerin türlerini, amaçlarını ve yönetimini açıklar.
      </p>

      <h2>Çerez Nedir?</h2>
      <p>
        Çerezler, web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Ziyaretçilerin site üzerindeki deneyimini iyileştirmek ve bazı teknik işlevleri sağlamak için kullanılır.
      </p>

      <h2>Kullanılan Çerez Türleri</h2>
      <ul>
        <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevleri için gereklidir.</li>
        <li><strong>Analitik Çerezler:</strong> Ziyaretçi davranışlarını analiz ederek siteyi geliştirmemize yardımcı olur.</li>
        <li><strong>İşlevsel Çerezler:</strong> Kullanıcı tercihlerini hatırlayarak kişiselleştirilmiş deneyim sunar.</li>
      </ul>

      <h2>Çerezlerin Kullanım Amaçları</h2>
      <ul>
        <li>Web sitesinin çalışmasını sağlamak</li>
        <li>Kullanıcı deneyimini iyileştirmek</li>
        <li>Site trafiğini analiz etmek</li>
        <li>Hizmetlerimizi geliştirmek</li>
      </ul>

      <h2>Çerez Yönetimi</h2>
      <p>
        Çerez tercihlerinizi tarayıcı ayarlarınızdan değiştirebilir veya silebilirsiniz. Çerezleri devre dışı bırakmak, bazı site işlevlerinin çalışmamasına neden olabilir.
      </p>

      <h2>Üçüncü Taraf Çerezler</h2>
      <p>
        Web sitemizde Google Analytics gibi üçüncü taraf hizmet sağlayıcılarının çerezleri de kullanılabilir. Bu çerezler, ilgili sağlayıcıların gizlilik politikalarına tabidir.
      </p>

      <h2>İletişim</h2>
      <p>
        Çerez politikamızla ilgili sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
