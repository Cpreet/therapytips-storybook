import AsideJournal from "@/components/AsideJournal";
import AsideTrending from "@/components/AsideTrending";
import AsideVideos from "@/components/AsideVideos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionAdvice from "@/components/SectionAdvice";
import SectionArticles from "@/components/SectionArticles";
import SectionInterviews from "@/components/SectionInterviews";
import SectionPersonlityTests from "@/components/SectionPersonalityTests";
import { Separator } from "@/components/ui/separator";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-[1200px] mx-auto m-4 border rounded-lg shadow-lg bg-white">
      <Header />
      <main>
        <div className="flex gap-2 px-4 py-6 w-full">
          <div className="flex flex-col w-4/5 gap-8">
            <Hero />
            <SectionArticles />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <SectionPersonlityTests />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <SectionInterviews />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <SectionAdvice />
            <Footer />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-px bg-fuchsia-950/35"></div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <AsideTrending />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <AsideJournal />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <AsideVideos />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <CTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
