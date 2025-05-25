import Footer from "@/components/new/Footer";
import Header from "@/components/new/Header";
import Hero from "@/components/new/Hero";
import { ArticleCard } from "@/components/new/SectionArticles";
import AsideTrending from "@/components/new/AsideTrending";
import AsideJournal from "@/components/new/AsideJournal";
import AsideVideos from "@/components/new/AsideVideos";
import CTA from "@/components/new/CTA";
import { Separator } from "@/components/ui/separator";
import useMobile from "@/hooks/useMobile";
import BookAppointmentCTA from "@/components/new/BookAppointmentCTA";
import FurtherReadingCTA from "@/components/new/FurtherReadingCTA";

const LatestArticlesPage = ({ aside = false }: { aside: boolean }) => {
  const isMobile = useMobile();
  const articles = [...Array(16).keys()].map(() => ({
    title: "title",
    description: "description",
    image:
      "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
    link: "#",
  }));
  console.log(articles);
  return (
    <div className="flex flex-col max-w-[1400px] md:m-4 xl:mx-auto border rounded-lg shadow-lg bg-white">
      <Header />
      <main>
        <div className="flex gap-2 px-2 md:px-4 py-6 w-full">
          <div
            className={
              "flex flex-col items-center gap-8" +
              (aside ? " w-4/5" : " w-full")
            }
          >
            <Hero />
            <h1 className="text-3xl md:text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
              LATEST ARTICLES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full p-1 gap-8">
              {articles.map((article, idx) => (
                <>
                  <ArticleCard key={article.title} {...article} />
                  {isMobile && idx === 3 && (
                    <>
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <CTA />
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </>
                  )}
                  {isMobile && idx === 7 && (
                    <>
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <BookAppointmentCTA />
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </>
                  )}
                  {isMobile && idx === 11 && (
                    <>
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <FurtherReadingCTA />
                      <Separator
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </>
                  )}
                </>
              ))}
            </div>
          </div>
          {aside && (
            <>
              <div className="relative">
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
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LatestArticlesPage;
