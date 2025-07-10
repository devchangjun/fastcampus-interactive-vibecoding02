import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ImageMergeSection from "./components/sections/ImageMergeSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServiceSection from "./components/sections/ServiceSection";
import Footer from "./components/commons/Footer";
import PageTransition from "./components/commons/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <AboutSection />
        <ImageMergeSection />
        <PortfolioSection />
        <ServiceSection />
        <Footer />
      </main>
    </PageTransition>
  );
}
