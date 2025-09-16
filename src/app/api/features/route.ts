import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const features = [
      {
        id: '1',
        title: 'Modern Teknolojiler',
        description: 'React, Next.js, TypeScript ve diğer modern teknolojilerle geliştirilmiş çözümler.',
        icon: '/icons/tech.svg'
      },
      {
        id: '2',
        title: 'Responsive Tasarım',
        description: 'Tüm cihazlarda mükemmel görünüm ve kullanıcı deneyimi.',
        icon: '/icons/responsive.svg'
      },
      {
        id: '3',
        title: 'SEO Optimizasyonu',
        description: 'Arama motorlarında üst sıralarda yer almak için optimize edilmiş yapı.',
        icon: '/icons/seo.svg'
      },
      {
        id: '4',
        title: 'Hızlı Performans',
        description: 'Optimize edilmiş kod yapısı ile yüksek performans ve hızlı yükleme.',
        icon: '/icons/performance.svg'
      },
      {
        id: '5',
        title: 'Güvenlik',
        description: 'En son güvenlik standartları ile korumalı ve güvenli uygulamalar.',
        icon: '/icons/security.svg'
      },
      {
        id: '6',
        title: '7/24 Destek',
        description: 'Sürekli teknik destek ve bakım hizmetleri.',
        icon: '/icons/support.svg'
      }
    ];

    return NextResponse.json(features);
  } catch (error) {
    console.error('Features API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}