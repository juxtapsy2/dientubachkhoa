'use client';

import { SLOGAN, TELEPHONE } from '@/lib/constants';
import React from 'react';
import { PhoneCall, MapPin } from 'lucide-react';
import Image from 'next/image';
import LogoNoBg from '@/assets/logos/logo-removebg.png';

export default function HeroSection() {
  return (
    <section className="relative mt-[60px] bg-[url('/scenic-tv-bg.jpg')] bg-cover aspect-auto bg-center text-white min-h-[600px] flex items-center justify-center">
      {/* Overlay Blur Glass */}
 

      {/* Glass Card Content */}
      <div className="relative flex flex-row z-10 w-full max-w-4xl mx-auto rounded-xl shadow-xl bg-white/20 backdrop-blur-md p-6 md:p-10 text-center space-y-4">
        <div className="align-center my-auto">
          <Image src={LogoNoBg} alt="Logo" className="min-w-[200px] max-w-[200px] aspect-auto transition-transform duration-200 hover:scale-125" />
        </div>
        <div>
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white">
            <div className="flex items-center gap-1 transition-transform duration-200 hover:scale-110">
              <MapPin className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
              <span className="font-semibold">Hà Nội</span>
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold my-4 text-center">
            TRUNG TÂM ĐIỆN TỬ BÁCH KHOA
          </h1>
          <p className="text-base md:text-lg my-4 text-center">
            {SLOGAN}
          </p>

          {/* Call Button */}
          <a
            href={TELEPHONE}
            className="duration-[50ms] inline-flex max-w-fit md:whitespace-nowrap items-center gap-2 z-[9999] justify-center bg-blue-900 cursor-pointer hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold transition"
          >
            <PhoneCall className="w-5 h-5 animate-bounce duration-75" />
            Gọi ngay: 0946 409 966
          </a>
        </div>
      </div>
    </section>
  );
}
