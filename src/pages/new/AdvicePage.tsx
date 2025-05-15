import Footer from "@/components/new/Footer";
import Header from "@/components/new/Header";
import Hero from "@/components/new/Hero";
import { ArticleCard } from "@/components/new/SectionArticles";
import AsideTrending from "@/components/new/AsideTrending";
import AsideJournal from "@/components/new/AsideJournal";
import AsideVideos from "@/components/new/AsideVideos";
import CTA from "@/components/new/CTA";
import { Separator } from "@/components/ui/separator";

const AdvicePage = ({ aside = false }: { aside: boolean }) => {
  const articles = [...Array(16).keys()].map(() => ({
    title: "title",
    description: "description",
    image: "https://picsum.photos/450/250",
    link: "#"
  }))
  console.log(articles)
  return (
    <div className="flex flex-col w-[1400px] mx-auto m-4 border rounded-lg shadow-lg bg-white">
      <Header />
      <main>
        <div className="flex gap-2 px-4 py-6 w-full">
          <div className={"flex flex-col items-center gap-8" + (aside ? " w-4/5" : " w-full")}>
            <Hero />
            <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
              MENTAL HEALTH ADVICE
            </h1>
            <div className="grid grid-cols-2 w-full p-1 gap-8">
              {
                articles.map((article) => <ArticleCard key={article.title} {...article} />)
              }
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
          )
          }
        </div>
      </main>
    </div>
  )
}

export default AdvicePage;
