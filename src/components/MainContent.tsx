'use client';

import { COMMITMENT, FAQs, FEATURES, TELEPHONE, TV_ERRORS } from '@/lib/constants';
import { AlertTriangle } from 'lucide-react';
import React from 'react';
import FaqItem from './FAQ';
import repairEngineer1 from "@/assets/fixing/electronic_circuit_repair.png";
import repairEngineer2 from "@/assets/fixing/repair-engineer-2.png";
import Image from 'next/image';

export default function MainContent() {
  return (
    <section id="services" className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-900 mb-6 transition-transform duration-200 hover:scale-110">
          Dịch vụ sửa chữa Tivi tại Hà Nội
        </h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
          {COMMITMENT}
        </p>
        <section
            className="relative py-32 bg-[url('/tv-bg.jpg')] bg-cover bg-center text-white sm:px-6 lg:px-8 rounded-tl-lg rounded-tr-lg"
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
        {/* About & FAQs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 items-start mt-8">
        {/* About Us */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-3 inline-block transition-transform duration-200 hover:scale-110">Về chúng tôi</h2>
          <p className="text-gray-700 font-medium mb-5 leading-relaxed text-base">
            Trung Tâm Điện tử Bách Khoa – Hơn 15 năm sửa chữa Tivi tại nhà uy tín khắp Hà Nội!
          </p>

          {/* About images with hover animation */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <Image
              src={repairEngineer1}
              alt="Kỹ thuật viên sửa tivi"
              loading="lazy"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <Image
              src={repairEngineer2}
              alt="Thợ sửa tivi"
              loading="lazy"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* About description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Thành lập từ những năm <strong>2010</strong> và liên tục hoạt động cho tới nay,
            <strong> Trung Tâm Điện Tử Bách Khoa</strong> chuyên sửa chữa tivi ở Hà Nội.
            Đội ngũ khởi đầu với 3 kỹ thuật viên trình độ kỹ thuật lành nghề tốt nghiệp từ các trường
            <strong> Đại học & Cao đẳng</strong>.
            <br />
            Hiện nay, chúng tôi đã và đang phát triển mạnh mẽ với <strong>12 cơ sở</strong> trải khắp Hà Nội,
            cùng đội ngũ được tuyển chọn kỹ lưỡng theo tiêu chí:
            <span className="text-blue-800 font-semibold"> chuyên nghiệp – nhiệt tình – tận tâm</span>.
          </p>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-3 inline-block transition-transform duration-200 hover:scale-110">Câu hỏi thường gặp</h2>
          <p className="text-gray-600 text-sm mb-5">
            Những thắc mắc thường gặp khi sử dụng dịch vụ của chúng tôi.
          </p>

          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>


        {/* Common Errors */}
        <div className="bg-gray-50 border-none rounded-bl-lg rounded-br-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 items-center gap-2 inline-flex transition-transform duration-200 hover:scale-110">
                <AlertTriangle size={20} className="text-red-500" />
                Các lỗi tivi phổ biến
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TV_ERRORS.map((group, idx) => (
                <div key={idx}>
                    <h4 className="text-xl font-semibold text-blue-800 mb-2 inline-block transition-transform duration-200 hover:scale-110">{group.title}</h4>
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
