import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import NavBar from '@/components/NavBar';

// app/page.tsx or app/home/page.tsx (App Router style)
export const metadata = {
  title: "Trung Tâm Điện Tử Bách Khoa",
  description: "Dịch vụ sửa chữa Tivi chuyên nghiệp, chuyên sửa chữa Tivi tại nhà — nhanh chóng, giá rẻ, phục vụ khắp Hà Nội.",
  keywords: ["sua tv bach khoa", "dien tu bach khoa", "trung tam dien tu bach khoa", "sua tv", "sua chua tv", "sua tivi ha noi", , "sua tivi bach khoa", "TV repair", "television repair", "screen fix", "electronics repair", "local TV repair"],
  authors: [{ name: "Trung Tâm Điện Tử Bách Khoa" }],
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
  icon: "/favicon.png",
  alternates: {
    canonical: "https://suatvbachkhoa.com.vn/",
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <NavBar />
        <HeroSection />
        <MainContent />
        <Footer />
      </main>
    </>
  );
}