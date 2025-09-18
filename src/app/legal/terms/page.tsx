"use client";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function Terms() {
  return (
    <LegalPageLayout
      title="Kullanım Şartları"
      description="Web sitemizi ve hizmetlerimizi kullanırken geçerli olan kurallar ve koşullar."
    >
      <p>
        Bu kullanım şartları, Codifya Software web sitesini (codifya.com) ziyaret eden tüm kullanıcılar için geçerlidir. Web
        sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
      </p>

      <h2>Hizmet Tanımı</h2>
      <p>
        Codifya Software, dijital dönüşüm, yazılım geliştirme ve danışmanlık hizmetleri sunar. Web sitemizde yer alan tüm
        içerik bilgilendirme amaçlıdır.
      </p>

      <h2>Kullanıcı Yükümlülükleri</h2>
      <ul>
        <li>Web sitesini yasalara ve ahlaka uygun şekilde kullanmakla yükümlüsünüz.</li>
        <li>Başka kullanıcıların haklarını ihlal edecek davranışlarda bulunamazsınız.</li>
        <li>Web sitesinin güvenliğini tehdit edecek girişimlerde bulunamazsınız.</li>
      </ul>

      <h2>Fikri Mülkiyet</h2>
      <p>
        Web sitesinde yer alan tüm içerik, marka ve logolar Codifya Software&apos;e aittir. İzinsiz kopyalanamaz veya kullanılamaz.
      </p>

      <h2>Sorumluluk Reddi</h2>
      <p>
        Web sitesinde sunulan bilgiler genel bilgilendirme amaçlıdır. Codifya Software, içeriklerin doğruluğu veya güncelliği
        konusunda garanti vermez.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Codifya Software, bu şartları önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Güncel şartlar web
        sitesinde yayınlandığı andan itibaren geçerlidir.
      </p>

      <h2>İletişim</h2>
      <p>
        Şartlarla ilgili sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
