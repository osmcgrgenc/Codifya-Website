import { NextResponse } from 'next/server';

// Örnek veri
const services = [
  {
    id: '1',
    title: 'Web Geliştirme',
    description: 'Modern ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
    icon: '/icons/web.svg',
  },
  {
    id: '2',
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için native mobil uygulamalar geliştiriyoruz.',
    icon: '/icons/mobile.svg',
  },
  {
    id: '3',
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı ve modern arayüz tasarımları yapıyoruz.',
    icon: '/icons/design.svg',
  },
];

export async function GET() {
  // Cache-Control header'ı ekle
  const headers = {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  };

  return NextResponse.json(services, { headers });
} 