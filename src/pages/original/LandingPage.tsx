// import AsideJournal from "@/components/original/AsideJournal";
import AsideTrending from "@/components/original/AsideTrending";
import AsideVideos from "@/components/original/AsideVideos";
// import CTA from "@/components/original/CTA";
import Footer from "@/components/original/Footer";
import Header from "@/components/original/Header";
import Hero from "@/components/original/Hero";
import SectionAdvice from "@/components/original/SectionAdvice";
import SectionArticles from "@/components/original/SectionArticles";
import SectionInterviews from "@/components/original/SectionInterviews";
import SectionPersonlityTests from "@/components/original/SectionPersonalityTests";

const LandingPage = () => {
  return (
    <>
      <div className="w-[940px] mx-auto m-2 rounded-lg bg-white">
        <Header />
        <main>
          <div className="py-2 px-4">
            <div className="space-y-4">
              <Hero />
              <SectionArticles />
              <SectionPersonlityTests />
              <SectionInterviews />
              <SectionAdvice />
              <AsideVideos />
              <AsideTrending />
            </div>
            {/* <div className="relative">
              <div className="absolute inset-y-0 left-0 w-px bg-fuchsia-950/35"></div>
            </div>
            <div className="flex flex-col gap-4 w-1/5">
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
            </div> */}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
