import { getArticles } from "@/lib/api";
import ArticleCard from "./ArticleCard";

const interviews = await getArticles({
  article_type: "interviews",
  limit: 4,
});

const SectionInterviews = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          NEW INTERVIWES
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {interviews.map((interview) => (
            <ArticleCard key={interview.title} {...interview} />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          NEW INTERVIWES
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {interviews.map((interview) => (
            <ArticleCard key={interview.title} {...interview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionInterviews;
