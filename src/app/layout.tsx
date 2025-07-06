import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CallButton from "@/components/CallButton";
import ZaloButton from "@/components/ZaloButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trung Tâm Điện Tử Bách Khoa",
  description:
    "Dịch vụ sửa chữa Tivi chuyên nghiệp, chuyên sửa chữa Tivi tại nhà — nhanh chóng, giá rẻ, phục vụ khắp Hà Nội.",
  keywords: [
    "sửa tv",
    "sửa tivi",
    "sua tv",
    "sua tivi",
    "sửa tv hà nội",
    "sửa tivi hà nội",
    "sửa tv cầu giấy",
    "sửa tv Cầu Giấy",
    "sửa tivi Cầu Giấy",
    "sửa tivi cầu giấy",
    "sửa tv bách khoa",
    "sua tv bach khoa",
    "điện tử bách khoa",
    "dien tu bach khoa",
    "trung tam dien tu bach khoa",
    "trung tâm điện tử bách khoa",
    "sua chua tv",
    "sua tivi ha noi",
    "sua tivi bach khoa",
    "tv repair",
    "TV repair",
    "television repair",
    "screen fix",
    "electronics repair",
    "local TV repair",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Trung Tâm Điện Tử Bách Khoa",
    description: "Dịch vụ sửa chữa Tivi chuyên nghiệp, chuyên sửa chữa Tivi tại nhà — nhanh chóng, giá rẻ, phục vụ khắp Hà Nội.",
    url: "https://suatvbachkhoa.com.vn",
    siteName: "Trung Tâm Điện Tử Bách Khoa",
    images: [
      {
        url: "https://suatvbachkhoa.com.vn/favicon.png",
        width: 800,
        height: 600,
        alt: "Trung Tâm Điện Tử Bách Khoa logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CallButton />
        <ZaloButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Trung Tâm Điện Tử Bách Khoa",
              image: "https://suatvbachkhoa.com.vn/favicon.png",
              telephone: "+84-946-409-966",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "81 phố Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội.",
                addressLocality: "Hà Nội",
                addressCountry: "VN",
              },
              url: "https://suatvbachkhoa.com.vn",
            }),
          }}
        />
      </body>
    </html>
  );
}
