import HeroSection from '@/components/HeroSection';
import Head from 'next/head';

export const metadata = {
  title: "Trung Tâm Điện Tử Bách Khoa",
  description: "Expert TV repair services near you.",
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Trung Tâm Điện Tử Bách Khoa</title>
        <meta name="description" content="Affordable TV repair services for all brands. Book your repair today with expert technicians." />
        <meta name="keywords" content="dien tu bach khoa, sua tv, sua chua tv, sua tivi ha noi, TV repair, television repair, screen fix, electronics repair, local TV repair" />
        <meta name="author" content="Trung Tâm Điện Lạnh Bách Khoa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Trung Tâm Điện Lạnh Bách Khoa",
            "image": "https://yourdomain.com/logo.png",
            "telephone": "+84-946-409-966",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "81 phố Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội.",
              "addressLocality": "Hà Nội",
              "addressCountry": "VN"
            },
            "url": "https://yourdomain.com"
          })
        }} />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}