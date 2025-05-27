import ArticleCard from "./ArticleCard";
import { getArticles } from "@/lib/api";

const tests = await getArticles({
  article_type: "personality-tests",
  limit: 2,
});

const SectionPersonalityTests = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          FEATURED PERSONALITY TESTS
        </h1>
        <div className="grid grid-cols-2 w-full gap-2 p-1">
          {tests.map((test) => (
            <ArticleCard key={test.title} {...test} />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          FEATURED <br /> PERSONALITY TESTS
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {tests.map((test) => (
            <ArticleCard key={test.title} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPersonalityTests;
