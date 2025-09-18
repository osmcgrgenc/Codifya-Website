import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const services = [
      {
        id: '1',
        title: 'Ürün Mühendisliği',
        description: 'Web, mobil ve platform çözümlerini modern teknoloji yığınlarıyla geliştiriyoruz.',
        icon: '/icons/web-dev.svg'
      },
      {
        id: '2',
        title: 'Mobil Deneyim',
        description: 'iOS ve Android için performanslı native ve cross-platform uygulamalar.',
        icon: '/icons/mobile.svg'
      },
      {
        id: '3',
        title: 'E-Ticaret Platformları',
        description: 'Headless mimari, çok kanallı deneyim ve ödeme entegrasyonları sunuyoruz.',
        icon: '/icons/ecommerce.svg'
      },
      {
        id: '4',
        title: 'Deneyim Tasarımı',
        description: 'Araştırma odaklı UI/UX tasarımı ve ölçeklenebilir design system kurulumu.',
        icon: '/icons/design.svg'
      },
      {
        id: '5',
        title: 'Bulut Modernizasyonu',
        description: 'AWS, Azure ve GCP üzerinde güvenli ve optimize altyapılar inşa ediyoruz.',
        icon: '/icons/cloud.svg'
      },
      {
        id: '6',
        title: 'Stratejik Danışmanlık',
        description: 'Dijital dönüşüm yol haritası, süreç tasarımı ve ekip yapılandırmasında rehberlik.',
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
