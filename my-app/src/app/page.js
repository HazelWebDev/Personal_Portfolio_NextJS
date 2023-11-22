import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
