'use client';

import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/logos/logo.png';
import IconZalo from '@/assets/icons/iconZalo.png';
import { NAVLINKS, ZALO, ADDRESSES, TELEPHONE } from '@/lib/constants';

export default function Footer() {
  const midpoint = Math.ceil(ADDRESSES.length / 2);
  const column1 = ADDRESSES.slice(0, midpoint);
  const column2 = ADDRESSES.slice(midpoint);

  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding + Logo */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Trung Tâm Điện Tử Bách Khoa"
              width={48}
              height={48}
              className="object-contain transition-transform duration-200 hover:scale-110"
            />
            <h3 className="text-xl font-bold">Trung Tâm Điện Tử Bách Khoa</h3>
          </div>
          <p className="mt-2 text-sm text-gray-300 max-w-[350px]">
            Chuyên sửa chữa Tivi tại nhà — nhanh chóng, giá rẻ, phục vụ khắp Hà Nội.
          </p>
        </div>

        {/* Locations - split into 2 columns */}
        <div className="sm:col-span-1 max-w-sm">
          <h4 className="font-semibold mb-2">Cơ sở tại Hà Nội</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-36 text-sm text-gray-300 min-w-0">
            {[column1, column2].map((column, idx) => (
              <ul key={idx} className="space-y-1 min-w-0 overflow-x-visible text-nowrap">
                {column.map((location, i) => (
                  <li key={i} className="flex items-start gap-1 transition-transform duration-200 hover:scale-110">
                    <MapPin size={16} className="mt-0.5 shrink-0" />
                    <span>
                      {/* Visible on all screens */}
                      <span className="block sm:hidden">{location.district}</span>

                      {/* Full address only on md+ */}
                      <span className="hidden sm:inline">
                        {location.district} – {location.address}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-0 pl-0 md:ml-36 md:pl-4">
          <h4 className="font-semibold mb-2 text-nowrap">Điều hướng</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {NAVLINKS.map((navlink) => (
              <li key={navlink.to}>
                <a href={navlink.to} className="hover:underline">{navlink.label}</a>
              </li>
            ))}
          </ul>
          {/* Phone */}
          <a
            href={TELEPHONE}
            className="mt-4 group inline-flex items-center justify-start min-w-full gap-2 hover:text-blue-400 transition-colors duration-200"
          >
            <Phone className="w-[20px] h-[20px] transition-transform duration-200 group-hover:rotate-6 animate-bounce hover:scale-110" />
            0946 409 966
          </a>

          {/* Zalo Button */}
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex gap-2 min-w-fit items-center justify-start rounded-full bg-none cursor-pointer group hover:text-blue-400 transition-colors duration-200"
            title="Liên hệ qua Zalo"
          >
            <Image
              src={IconZalo}
              alt="Zalo"
              width={20}
              height={20}
              className="object-contain animate-bounce transition-transform duration-200 hover:scale-110"
            />
            0946 409 966
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-blue-800 pt-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Trung Tâm Điện Tử Bách Khoa. All rights reserved.
      </div>
    </footer>
  );
}
