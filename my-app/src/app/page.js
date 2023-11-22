import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        {/* <ProjectSection />
        <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
