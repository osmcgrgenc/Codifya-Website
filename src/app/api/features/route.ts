import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const features = [
      {
        id: '1',
        title: 'Çapraz disiplinli ekipler',
        description: 'Ürün, tasarım ve mühendislik ekiplerimiz tek bir sprint ritminde çalışır.',
        icon: '/icons/tech.svg'
      },
      {
        id: '2',
        title: 'Deneyim odaklı yaklaşım',
        description: 'Kullanıcı araştırmaları ve journey haritalarıyla doğru probleme odaklanırız.',
        icon: '/icons/responsive.svg'
      },
      {
        id: '3',
        title: 'Veri destekli karar alma',
        description: 'Analitik ve ölçümleme altyapısıyla hızlı iterasyon kültürü sağlıyoruz.',
        icon: '/icons/seo.svg'
      },
      {
        id: '4',
        title: 'Performans ve güvenlik',
        description: 'Bulut mimarisi, güvenlik testleri ve izleme araçlarıyla sürdürülebilir sistemler.',
        icon: '/icons/performance.svg'
      },
      {
        id: '5',
        title: 'DesignOps & DevOps',
        description: 'Tasarımdan geliştirmeye kadar tüm süreci otomasyonla destekliyoruz.',
        icon: '/icons/security.svg'
      },
      {
        id: '6',
        title: 'Sürekli destek',
        description: 'Lansman sonrası SLA tanımlı bakım, eğitim ve optimizasyon hizmetleri.',
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
