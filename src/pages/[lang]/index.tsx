import { useRouter } from "next/router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Banner from "@/components/Banner";
import EvolutionSystem from "@/components/GameFeatures/EvolutionSystem";
import GamePartners from "@/components/GamePartners";
import Features from "@/components/Features";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  const { lang } = router.query;
  return (
    <LanguageProvider locale={lang}>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Navbar />
        <main className="pt-16">
          <Banner />
          <EvolutionSystem />
          <GamePartners />
          <Faq />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "vi" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { lang: string } }) {
  return {
    props: {
      lang: params.lang,
    },
  };
}
