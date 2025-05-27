import ArticleCard from "./ArticleCard";
import { getArticles } from "@/lib/api";

const advice = await getArticles({
  article_type: "advice",
  limit: 4,
});

const SectionAdvice = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          ADVICE COLUMNS
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {advice.map((item) => (
            <ArticleCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          ADVICE COLUMNS
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {advice.map((item) => (
            <ArticleCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionAdvice;
