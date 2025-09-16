# 🚀 Codifya Website - Modern Dijital Çözümler

Modern, responsive ve performanslı bir kurumsal web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## ✨ Özellikler

- **Modern Tasarım**: Gradient'lar, animasyonlar ve modern UI bileşenleri
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Performanslı**: Next.js 15 ve optimizasyonlar ile hızlı yükleme
- **SEO Optimized**: Arama motorları için optimize edilmiş
- **PWA Desteği**: Progressive Web App özellikleri
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Accessibility**: WCAG standartlarına uygun erişilebilirlik
- **Dark Mode**: Otomatik tema desteği

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Data Fetching**: SWR
- **Error Handling**: React Error Boundary
- **PWA**: next-pwa
- **Linting**: ESLint + TypeScript ESLint

## 🚀 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/codifya/website.git
cd website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
│   ├── layout/           # Layout bileşenleri
│   └── sections/         # Sayfa bölümleri
└── lib/                  # Utility fonksiyonları
    ├── api.ts            # API fonksiyonları
    └── fetcher.ts        # HTTP client
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Blue (#3b82f6)
- **Accent**: Amber (#f59e0b)
- **Background**: Dynamic (light/dark)
- **Text**: Dynamic (light/dark)

### Animasyonlar
- Fade-in animasyonları
- Hover efektleri
- Smooth scroll
- Loading states

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npx vercel

# Veya GitHub integration kullanın
```

### Diğer Platformlar
```bash
# Build oluşturun
npm run build

# Static export (isteğe bağlı)
npm run export
```

## 🔍 SEO Optimizasyonları

- Meta tags ve Open Graph
- Structured data
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Image optimization

## ♿ Erişilebilirlik

- ARIA labels ve roles
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Focus management

## 🔒 Güvenlik

- Content Security Policy
- XSS protection
- HTTPS enforcement
- Secure headers

## 📊 Performans

- Core Web Vitals optimizasyonu
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Website**: [https://codifya.com](https://codifya.com)
- **Email**: info@codifya.com
- **GitHub**: [@codifya](https://github.com/codifya)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!