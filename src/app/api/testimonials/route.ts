import { NextResponse } from 'next/server';

// Örnek veri
const testimonials = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    role: 'CEO, TechStart',
    content: 'Codifya ile çalışmak harika bir deneyimdi. Profesyonel ekip ve kaliteli iş çıkardılar.',
    avatar: '/avatars/ahmet.jpg',
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    role: 'CTO, InnovateCo',
    content: 'Modern ve ölçeklenebilir çözümler sundular. Kesinlikle tavsiye ediyorum.',
    avatar: '/avatars/ayse.jpg',
  },
  {
    id: '3',
    name: 'Mehmet Kaya',
    role: 'Kurucu, NextGen',
    content: 'Projemizi zamanında ve bütçe dahilinde tamamladılar. Mükemmel bir iş çıkardılar.',
    avatar: '/avatars/mehmet.jpg',
  },
];

export async function GET() {
  // Cache-Control header'ı ekle
  const headers = {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  };

  return NextResponse.json(testimonials, { headers });
} 