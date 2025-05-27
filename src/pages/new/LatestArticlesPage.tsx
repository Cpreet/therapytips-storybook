import Footer from "@/components/new/Footer";
import Header from "@/components/new/Header";
import Hero from "@/components/new/Hero";
import ArticleCard from "@/components/new/ArticleCard";
import AsideTrending from "@/components/new/AsideTrending";
import AsideJournal from "@/components/new/AsideJournal";
import AsideVideos from "@/components/new/AsideVideos";
import CTA from "@/components/new/CTA";
import { Separator } from "@/components/ui/separator";
import BookAppointmentCTA from "@/components/new/BookAppointmentCTA";
import FurtherReadingCTA from "@/components/new/FurtherReadingCTA";
import { getArticles } from "@/lib/api";

const articles = await getArticles({
  article_type: "articles",
  limit: 16,
});

const LatestArticlesPage = ({ aside = false }: { aside: boolean }) => {
  return (
    <div className="flex flex-col max-w-[1400px] md:m-4 xl:mx-auto border rounded-lg shadow-lg bg-white">
      <Header />
      <main>
        <div className="flex gap-2 px-2 md:px-4 py-6 w-full">
          <div
            className={
              "flex flex-col items-center gap-8 w-full" +
              (aside ? " md:w-4/5" : " w-full")
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
                  {idx === 3 && (
                    <div className="block md:hidden">
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <CTA key={`cta-${idx}`} />
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </div>
                  )}
                  {idx === 7 && (
                    <div className="block md:hidden">
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <BookAppointmentCTA key={`book-appointment-cta-${idx}`} />
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </div>
                  )}
                  {idx === 11 && (
                    <div className="block md:hidden">
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                      <FurtherReadingCTA key={`further-reading-cta-${idx}`} />
                      <Separator
                        key={`separator-${idx}`}
                        orientation="horizontal"
                        className="bg-fuchsia-950/35"
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
            <Footer />
          </div>
          {aside && (
            <div className="hidden md:flex md:w-1/5">
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
          )}
        </div>
      </main>
    </div>
  );
};

export default LatestArticlesPage;
