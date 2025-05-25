import Footer from "@/components/original/Footer";
import Header from "@/components/original/Header";
import Hero from "@/components/original/Hero";
import { ArticleCard } from "@/components/original/SectionArticles";
import AsideTrending from "@/components/original/AsideTrending";
import AsideJournal from "@/components/original/AsideJournal";
import AsideVideos from "@/components/original/AsideVideos";
import CTA from "@/components/original/CTA";
import { Separator } from "@/components/ui/separator";

const AdvicePage = ({ aside = false }: { aside: boolean }) => {
  const articles = [...Array(16).keys()].map(() => ({
    title: "title",
    description: "description",
    image:
      "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
    link: "#",
  }));
  console.log(articles);
  return (
    <div className="w-[940px] mx-auto m-2 rounded-lg bg-white">
      <Header />
      <main>
        <div className="px-4 py-2 w-full space-y-2">
          <div className={"space-y-2" + (aside ? " w-4/5" : " w-full")}>
            <Hero />
            <h1
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 w-full
              text-2xl font-(family-name:--font-crimson) font-bold tracking-tight
              before:content-[''] before:block before:border-t before:border-(--therapy-tips) before:border-dotted
              after:content-[''] after:block after:border-t after:border-(--therapy-tips) after:border-dotted"
            >
              Mental Health Advice
            </h1>
            <div className="grid grid-cols-2 w-full gap-4">
              {articles.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
            <Footer />
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
    </div>
  );
};

export default AdvicePage;
