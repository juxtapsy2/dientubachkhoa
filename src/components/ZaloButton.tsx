'use client';

import Image from 'next/image';
import Link from 'next/link';
import ZaloCall from '@/assets/icons/zalo-call.png';
import { ZALO } from '@/lib/constants';

export default function ZaloButton() {
    return (
      <Link
        href={ZALO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Zalo"
        className="fixed bottom-6 right-4 z-50"
      >
        <div className="aura-wrapper">
          <span className="aura-ring bg-blue-500"></span>
          <span className="aura-ring bg-blue-400"></span>
          <span className="aura-ring bg-blue-300"></span>
  
          <div className="relative z-10 bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 animate-ring animate-ring-delay">
            <Image src={ZaloCall} alt="Zalo" width={24} height={24} />
          </div>
        </div>
      </Link>
    );
  }
