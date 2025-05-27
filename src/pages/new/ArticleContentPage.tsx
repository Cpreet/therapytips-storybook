import AsideJournal from "@/components/new/AsideJournal";
import AsideTrending from "@/components/new/AsideTrending";
import AsideVideos from "@/components/new/AsideVideos";
import BookAppointmentCTA from "@/components/new/BookAppointmentCTA";
import FurtherReadingCTA from "@/components/new/FurtherReadingCTA";
import CTA from "@/components/new/CTA";
import Footer from "@/components/new/Footer";
import Header from "@/components/new/Header";
import { Separator } from "@/components/ui/separator";
import { type Article, type Author } from "@/lib/api";
import { markdownToSanitizedHtml } from "@/lib/utils";

const ArticleContentPage = ({
  aside = false,
  article,
  author,
}: {
  aside: boolean;
  article: Article;
  author: Author;
}) => {
  return (
    <div className="flex flex-col max-w-[1400px] md:m-4 xl:mx-auto border rounded-lg shadow-lg bg-white">
      <link rel="stylesheet" href="/styles.css" />
      <Header />
      <main>
        <div className="flex py-2 md:py-6 w-full">
          <div className="flex flex-col w-full md:w-4/5 gap-4 md:gap-8 md:px-3">
            <div className="relative flex flex-col gap-2 rounded-lg overflow-hidden">
              <img src={article.hero_image_url} alt={article.title} />
              <h1 className="absolute bottom-10 left-0 w-full text-4xl font-bold text-white text-center bg-fuchsia-400/40 py-5 backdrop-blur-xs">
                {article.title}
              </h1>
            </div>
            <p className="text-xl text-gray-500 text-center">
              {article.subtitle}
            </p>
            <div className="flex gap-2 items-center p-4 bg-fuchsia-600/20 rounded-lg">
              <img
                src={author.image_url}
                alt={author.name}
                className="size-20 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-bold">By {author.name}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(
                    article.publication_date || ""
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div
              className="columns-1 lg:columns-2 gap-4 prose prose-sm max-w-[160ch]"
              style={{ columnRule: "1px solid #e0e0e0" }}
              dangerouslySetInnerHTML={{
                __html: markdownToSanitizedHtml(article.content),
              }}
            />
            <Footer />
          </div>
          {aside && (
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
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <FurtherReadingCTA />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
                <BookAppointmentCTA />
                <Separator
                  orientation="horizontal"
                  className="bg-fuchsia-950/35"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ArticleContentPage;
