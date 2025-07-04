import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import NavBar from '@/components/NavBar';
import Head from 'next/head';

// app/page.tsx or app/home/page.tsx (App Router style)
export const metadata = {
  title: "Trung Tâm Điện Tử Bách Khoa",
  description: "Dịch vụ sửa chữa Tivi chuyên nghiệp, chuyên sửa chữa Tivi tại nhà — nhanh chóng, giá rẻ, phục vụ khắp Hà Nội.",
  keywords: ["sua tv bach khoa", "dien tu bach khoa", "trung tam dien tu bach khoa", "sua tv", "sua chua tv", "sua tivi ha noi", , "sua tivi bach khoa", "TV repair", "television repair", "screen fix", "electronics repair", "local TV repair"],
  authors: [{ name: "Trung Tâm Điện Tử Bách Khoa" }],
  openGraph: {
    title: "Trung Tâm Điện Tử Bách Khoa",
    description: "Dịch vụ sửa chữa tivi chuyên nghiệp gần bạn.",
    url: "https://suatvbachkhoa.com",
    siteName: "Trung Tâm Điện Tử Bách Khoa",
    images: [
      {
        url: "https://suatvbachkhoa.com/assets/logos/logo.png",
        width: 800,
        height: 600,
        alt: "Trung Tâm Điện Tử Bách Khoa logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  }
};


export default function HomePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Trung Tâm Điện Lạnh Bách Khoa",
            "image": "https://suatvbachkhoa.com/assets/logos/logo.png",
            "telephone": "+84-946-409-966",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "81 phố Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội.",
              "addressLocality": "Hà Nội",
              "addressCountry": "VN"
            },
            "url": "https://suatvbachkhoa.com"
          })
        }} />
      </Head>
      <main>
        <NavBar />
        <HeroSection />
        <MainContent />
        <Footer />
      </main>
    </>
  );
}