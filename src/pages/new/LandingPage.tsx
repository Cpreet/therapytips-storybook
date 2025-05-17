import AsideJournal from "@/components/new/AsideJournal";
import AsideTrending from "@/components/new/AsideTrending";
import AsideVideos from "@/components/new/AsideVideos";
import CTA from "@/components/new/CTA";
import Footer from "@/components/new/Footer";
import Header from "@/components/new/Header";
import Hero from "@/components/new/Hero";
import SectionAdvice from "@/components/new/SectionAdvice";
import SectionArticles from "@/components/new/SectionArticles";
import SectionInterviews from "@/components/new/SectionInterviews";
import SectionPersonlityTests from "@/components/new/SectionPersonalityTests";
import { Separator } from "@/components/ui/separator";
import useMobile from "@/hooks/useMobile";

const LandingPage = () => {
  const isMobile = useMobile();

  return (
    <div className="flex flex-col max-w-[1400px] md:m-4 xl:mx-auto border rounded-lg shadow-lg bg-white">
      <Header />
      <main>
        <div className="flex py-2 md:py-6 w-full">
          <div className="flex flex-col w-full md:w-4/5 gap-4 md:gap-8 md:px-3">
            <Hero />
            {isMobile && (
              <>
                <AsideJournal />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <AsideTrending />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
              </>
            )}
            <SectionArticles />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            {isMobile && (
              <>
                <CTA />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
              </>
            )}
            <SectionPersonlityTests />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <SectionInterviews />
            <Separator orientation="horizontal" className="bg-fuchsia-950/35" />
            <SectionAdvice />
            {isMobile && (
              <>
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <AsideVideos />
              </>
            )}
            <Footer />
          </div>
          {!isMobile && (
            <>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-px bg-fuchsia-950/35"></div>
              </div>
              <div className="flex flex-col gap-4 w-1/5 md:px-3">
                <AsideTrending />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <AsideJournal />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <AsideVideos />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <CTA />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
