'use client';

import Image from 'next/image';
import Link from 'next/link';
import ZaloIcon from '@/assets/icons/iconZalo.png';
import { ZALO } from '@/lib/constants';

export default function ZaloButton() {
  return (
    <Link
      href={ZALO}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 bg-none p-3 aspect-auto rounded-full shadow-none transition-transform duration-200 hover:scale-110 animate-ring animate-ring-delay"
      aria-label="Liên hệ Zalo"
    >
      <Image src={ZaloIcon} alt="Zalo" width={40} height={40} />
    </Link>
  );
}
