import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const services = [
      {
        id: '1',
        title: 'Web Geliştirme',
        description: 'Modern web uygulamaları ve kurumsal web siteleri geliştirme.',
        icon: '/icons/web-dev.svg'
      },
      {
        id: '2',
        title: 'Mobil Uygulama',
        description: 'iOS ve Android platformları için native ve cross-platform uygulamalar.',
        icon: '/icons/mobile.svg'
      },
      {
        id: '3',
        title: 'E-Ticaret Çözümleri',
        description: 'Kapsamlı e-ticaret platformları ve ödeme sistemleri entegrasyonu.',
        icon: '/icons/ecommerce.svg'
      },
      {
        id: '4',
        title: 'UI/UX Tasarım',
        description: 'Kullanıcı odaklı arayüz tasarımı ve kullanıcı deneyimi optimizasyonu.',
        icon: '/icons/design.svg'
      },
      {
        id: '5',
        title: 'Cloud Çözümleri',
        description: 'AWS, Azure ve Google Cloud platformlarında bulut altyapı çözümleri.',
        icon: '/icons/cloud.svg'
      },
      {
        id: '6',
        title: 'Danışmanlık',
        description: 'Dijital dönüşüm ve teknoloji stratejileri konusunda uzman danışmanlık.',
        icon: '/icons/consulting.svg'
      }
    ];

    return NextResponse.json(services);
  } catch (error) {
    console.error('Services API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}