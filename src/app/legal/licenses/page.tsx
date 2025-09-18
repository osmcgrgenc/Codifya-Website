"use client";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function Licenses() {
  return (
    <LegalPageLayout
      title="Lisanslar ve Fikri Mülkiyet"
      description="Codifya tarafından geliştirilen yazılımların ve web sitesinin kullanım koşulları, telif hakları ve üçüncü taraf lisansları."
    >
      <p>
        Bu sayfa, Codifya Software tarafından geliştirilen yazılımların ve web sitesinin lisans ve fikri mülkiyet haklarını açıklar.
      </p>

      <h2>Yazılım Lisansları</h2>
      <p>
        Codifya Software tarafından sunulan tüm yazılım ve dijital ürünler, aksi belirtilmedikçe Codifya Software&apos;e aittir ve telif
        hakkı ile korunmaktadır. Üçüncü taraf açık kaynak yazılımlar, ilgili lisansları kapsamında kullanılmaktadır.
      </p>

      <h2>Fikri Mülkiyet Hakları</h2>
      <ul>
        <li>Web sitesinde yer alan tüm içerik, marka, logo ve görseller Codifya Software&apos;e aittir.</li>
        <li>İzinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</li>
        <li>Üçüncü taraf içerikler, ilgili sahiplerinin izniyle kullanılmaktadır.</li>
      </ul>

      <h2>Üçüncü Taraf Lisanslar</h2>
      <p>
        Web sitemizde kullanılan üçüncü taraf kütüphaneler ve araçlar, kendi lisansları kapsamında kullanılmaktadır. Detaylı bilgi
        için ilgili açık kaynak projelerin lisanslarına bakınız.
      </p>

      <h2>İletişim</h2>
      <p>
        Lisanslar ve fikri mülkiyet haklarıyla ilgili sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
