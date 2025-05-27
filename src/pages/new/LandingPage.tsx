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

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col max-w-[1400px] md:m-4 xl:mx-auto border rounded-lg shadow-lg bg-white">
        <Header />
        <main>
          <div className="flex py-2 md:py-6 w-full">
            <div className="flex flex-col w-full md:w-4/5 gap-4 md:gap-8 md:px-3">
              <Hero />
              <div className="flex md:hidden flex-col gap-4 w-full">
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
              </div>
              <SectionArticles />
              <Separator
                orientation="horizontal"
                className="bg-fuchsia-950/35"
              />
              <div className="flex md:hidden flex-col gap-4 w-full">
                <CTA />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
              </div>
              <SectionPersonlityTests />
              <Separator
                orientation="horizontal"
                className="bg-fuchsia-950/35"
              />
              <SectionInterviews />
              <Separator
                orientation="horizontal"
                className="bg-fuchsia-950/35"
              />
              <SectionAdvice />
              <div className="flex md:hidden flex-col gap-4 w-full">
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <AsideVideos />
              </div>
              <Footer />
            </div>
            <div className="hidden md:flex w-1/5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-px bg-fuchsia-950/35"></div>
              </div>
              <div className="flex flex-col gap-4 md:px-3">
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
