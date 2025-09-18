"use client";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function IptalIade() {
  return (
    <LegalPageLayout
      title="İptal ve İade Politikası"
      description="Codifya üzerinden satın alınan hizmet ve dijital ürünlerde iptal ve iade koşulları."
    >
      <p>Bu iptal ve iade politikası, Codifya Software üzerinden yapılan tüm ürün ve hizmet alımları için geçerlidir.</p>

      <h2>İptal Koşulları</h2>
      <ul>
        <li>
          Satın alınan dijital ürün veya hizmetlerde, teslimattan önce iptal talebinizi <a href="mailto:hello@codifya.com">hello@codifya.com</a>
          adresine iletebilirsiniz.
        </li>
        <li>İptal talepleri, ürün veya hizmetin kullanılmamış olması koşuluyla değerlendirilir.</li>
      </ul>

      <h2>İade Koşulları</h2>
      <ul>
        <li>Hizmet veya dijital ürün tesliminden sonra, yasal süreler ve koşullar dahilinde iade talebinde bulunabilirsiniz.</li>
        <li>İade talepleri, hizmetin veya ürünün niteliğine göre değerlendirilir ve onaylanırsa ödemeniz 7 iş günü içinde iade edilir.</li>
      </ul>

      <h2>İstisnalar</h2>
      <ul>
        <li>Kullanılmış, kişiye özel hazırlanmış veya teslimatı tamamlanmış dijital ürün ve hizmetlerde iade yapılamaz.</li>
        <li>Yasal zorunluluklar hariç, iade ve iptal talepleri Codifya Software&apos;in onayına tabidir.</li>
      </ul>

      <h2>İletişim</h2>
      <p>
        İptal ve iade talepleriniz için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
