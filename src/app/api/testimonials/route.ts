import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const testimonials = [
      {
        id: '1',
        name: 'Ahmet Yılmaz',
        role: 'CEO, TechStart Banking',
        content: 'Codifya ile çalışmaya başladıktan sonra lansman sürecimizi 8 haftadan 4 haftaya indirdik. Ürün ekiplerimizle tam bir iç ekip gibi çalıştılar.',
        avatar: '/avatars/ay.svg'
      },
      {
        id: '2',
        name: 'Elif Kaya',
        role: 'CMO, Finora',
        content: 'Deneyim odaklı yaklaşım sayesinde müşteri edinim funnelımız %37 oranında iyileşti. Tüm kararlar ölçülebilir verilere dayandı.',
        avatar: '/avatars/ek.svg'
      },
      {
        id: '3',
        name: 'Mehmet Demir',
        role: 'Operasyon Direktörü, Retailfy',
        content: 'Bulut modernizasyon projemizle 14 ülkedeki operasyonu tek platformda toplamayı başardık. DevOps ekibi hâlâ aktif destek veriyor.',
        avatar: '/avatars/md.svg'
      }
    ];

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Testimonials API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
