import ArticleCard from "./ArticleCard";
import { getArticles } from "@/lib/api";

const articles = await getArticles({
  article_type: "articles",
  limit: 4,
});

const SectionArticles = () => {
  return (
    <section className="flex flex-col gap-1 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          LATEST ARTICLES
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          LATEST ARTICLES
        </h1>
        <div className="grid grid-cols-1 gap-2 w-full p-2">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionArticles;
