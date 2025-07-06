'use client';

import { TELEPHONE } from '@/lib/constants';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function CallButton() {
  return (
    <Link
      href={TELEPHONE}
      className="fixed bottom-24 right-7 z-50 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 animate-ring"
      aria-label="Gọi ngay"
    >
      <PhoneCall size={24} />
    </Link>
  );
}