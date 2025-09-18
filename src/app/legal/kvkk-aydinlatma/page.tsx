"use client";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function KvkkAydinlatma() {
  return (
    <LegalPageLayout
      title="Kişisel Verilerin Korunması Aydınlatma Metni"
      description="6698 sayılı KVKK kapsamında kişisel verilerinizin işlenmesine yönelik bilgilendirme."
    >
      <p>
        Codifya Software olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verilerinizin güvenliğine
        ve gizliliğine büyük önem veriyoruz. Bu aydınlatma metni, kişisel verilerinizin hangi amaçlarla işlendiği, kimlerle paylaşıldığı
        ve haklarınız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <h2>Kişisel Verilerin Toplanması ve İşlenme Amaçları</h2>
      <ul>
        <li>Hizmetlerimizin sunulması ve geliştirilmesi</li>
        <li>Müşteri ilişkileri yönetimi ve iletişim</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Pazarlama ve bilgilendirme faaliyetleri (onayınız dahilinde)</li>
      </ul>

      <h2>Kişisel Verilerin Aktarılması</h2>
      <p>
        Kişisel verileriniz, yasal zorunluluklar ve hizmet sağlayıcılarımız ile yapılan sözleşmeler kapsamında, KVKK&apos;ya uygun şekilde
        üçüncü taraflarla paylaşılabilir.
      </p>

      <h2>Veri Toplama Yöntemleri</h2>
      <ul>
        <li>Web sitesi formları ve iletişim kanalları</li>
        <li>Çerezler ve analitik araçlar</li>
        <li>Otomatik ve manuel yöntemlerle</li>
      </ul>

      <h2>Haklarınız</h2>
      <ul>
        <li>Kişisel verilerinize erişme, düzeltme, silme ve işlenmesini kısıtlama hakkı</li>
        <li>İtiraz etme ve şikayette bulunma hakkı</li>
        <li>Veri sorumlusu olarak bize başvurma hakkı</li>
      </ul>

      <h2>İletişim</h2>
      <p>
        KVKK kapsamındaki haklarınızı kullanmak veya sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
