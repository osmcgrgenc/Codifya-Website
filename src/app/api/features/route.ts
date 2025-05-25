import { NextResponse } from 'next/server';

// Örnek veri
const features = [
  {
    id: '1',
    title: 'Özel Yazılım Geliştirme',
    description: 'İşletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz.',
    icon: '/icons/software.svg',
  },
  {
    id: '2',
    title: 'Web ve Mobil Uygulamalar',
    description: 'Modern ve kullanıcı dostu web ve mobil uygulamalar geliştiriyoruz.',
    icon: '/icons/apps.svg',
  },
  {
    id: '3',
    title: 'Bulut Çözümleri',
    description: 'Güvenli ve ölçeklenebilir bulut tabanlı çözümler sunuyoruz.',
    icon: '/icons/cloud.svg',
  },
];

export async function GET() {
  // Cache-Control header'ı ekle
  const headers = {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  };

  return NextResponse.json(features, { headers });
} 