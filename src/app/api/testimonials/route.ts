import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const testimonials = [
      {
        id: '1',
        name: 'Ahmet Yılmaz',
        role: 'CEO, TechStart',
        content: 'Codifya ekibi ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin üzerinde teslim ettiler.',
        avatar: '/avatars/avatar1.jpg'
      },
      {
        id: '2',
        name: 'Elif Kaya',
        role: 'Pazarlama Müdürü, DigitalCorp',
        content: 'Web sitemizin yeniden tasarımında gösterdikleri profesyonellik ve yaratıcılık gerçekten etkileyiciydi.',
        avatar: '/avatars/avatar2.jpg'
      },
      {
        id: '3',
        name: 'Mehmet Demir',
        role: 'Kurucu, E-Shop',
        content: 'E-ticaret platformumuz sayesinde satışlarımız %300 arttı. Teknik destek ekibi de çok yardımcı oluyor.',
        avatar: '/avatars/avatar3.jpg'
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