'use client';

import { COMMITMENT, FEATURES, TELEPHONE, TV_ERRORS } from '@/lib/constants';
import { AlertTriangle } from 'lucide-react';
import React from 'react';

export default function MainContent() {
  return (
    <section id="services" className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6 transition-transform duration-200 hover:scale-110">
          Sửa Chữa Tivi Tại Hà Nội
        </h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
          {COMMITMENT}
        </p>

        <section
            className="relative py-32 bg-[url('/tv-bg.jpg')] bg-cover bg-center text-white sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Glassy features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {FEATURES.map((item, index) => (
                    <div
                    key={index}
                    className="group backdrop-blur-md bg-white/10 border border-white/20 ring-1 ring-white/10 p-5 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 hover:scale-[1.02]"
                    >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                        {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-100">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Common Errors */}
        <div className="bg-gray-50 border border-blue-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-500" />
                Các lỗi tivi phổ biến
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TV_ERRORS.map((group, idx) => (
                <div key={idx}>
                    <h4 className="text-xl font-semibold text-blue-800 mb-2">{group.title}</h4>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                    {group.errors.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            <p className="mt-8 font-medium text-blue-800">
                Nếu bạn không ở Hà Nội, chúng tôi có thể giúp đỡ từ xa miễn phí:<a href={TELEPHONE} className="underline pl-2 inline-block transition-transfrom duration-200 hover:scale-110 hover:text-blue-600">0946.409.966</a>
            </p>
        </div>
        <h2 id="contact" className="mt-8 font-bold text-base md:text-2xl text-blue-900 text-center">Hãy liên hệ với chúng tôi để được tư vấn tốt nhất: <a href={TELEPHONE} className="underline pl-2 inline-block transition-transfrom duration-200 hover:scale-110 hover:text-blue-600">0946.409.966</a></h2>
      </div>
    </section>
  );
}
