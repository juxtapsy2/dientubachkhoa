'use client';

import { TELEPHONE } from '@/lib/constants';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function CallButton() {
  return (
    <Link
      href={TELEPHONE}
      aria-label="Gọi ngay"
      className="fixed bottom-24 right-4 z-50"
    >
      <div className="aura-wrapper">
        <span className="aura-ring bg-green-500"></span>
        <span className="aura-ring bg-green-400"></span>
        <span className="aura-ring bg-green-300"></span>

        <div className="relative z-10 bg-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-ring">
          <PhoneCall size={24} />
        </div>
      </div>
    </Link>
  );
}
