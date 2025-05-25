"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-background text-text font-sans">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Gizlilik Politikası</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p>Codifya Software olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi (codifya.com) ziyaret ettiğinizde hangi kişisel verilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklar.</p>

          <h2>Kişisel Verilerin Toplanması</h2>
          <ul>
            <li>Web sitemizi ziyaret ettiğinizde IP adresiniz, tarayıcı bilgileriniz ve çerezler gibi teknik veriler otomatik olarak toplanabilir.</li>
            <li>İletişim formlarımızı kullandığınızda adınız, e-posta adresiniz ve mesajınız gibi bilgiler tarafımızca alınır.</li>
          </ul>

          <h2>Kişisel Verilerin Kullanımı</h2>
          <ul>
            <li>Hizmetlerimizi sunmak, geliştirmek ve kullanıcı deneyimini iyileştirmek için kullanılır.</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek amacıyla saklanabilir.</li>
            <li>Size özel bilgilendirme ve pazarlama amaçlı iletişimler gönderebiliriz (onayınız dahilinde).</li>
          </ul>

          <h2>Veri Güvenliği</h2>
          <p>Kişisel verileriniz, güvenli sunucularda saklanır ve yetkisiz erişime karşı koruma altındadır. Tüm teknik ve idari önlemler alınmaktadır.</p>

          <h2>Çerezler (Cookies)</h2>
          <p>Web sitemizde kullanıcı deneyimini artırmak için çerezler kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz. Detaylı bilgi için <a href="/legal/cookies">Çerez Politikamıza</a> bakınız.</p>

          <h2>Üçüncü Taraflarla Paylaşım</h2>
          <p>Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü taraflarla paylaşılmaz. Hizmet sağlayıcılarımızla yapılan paylaşımlar, gizlilik sözleşmeleri ile korunur.</p>

          <h2>Haklarınız</h2>
          <ul>
            <li>Verilerinize erişme, düzeltme veya silme hakkına sahipsiniz.</li>
            <li>İstediğiniz zaman iletişim bilgilerimiz üzerinden bizimle iletişime geçebilirsiniz.</li>
          </ul>

          <h2>İletişim</h2>
          <p>Gizlilik politikamızla ilgili sorularınız için <a href="mailto:hello@codifya.com">hello@codifya.com</a> adresinden bize ulaşabilirsiniz.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
} 