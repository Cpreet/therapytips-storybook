import useMobile from "@/hooks/useMobile";

const SectionArticles = () => {
  const isMobile = useMobile();
  const articles = [
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <section className="flex flex-col gap-1 md:gap-8 items-center">
      {!isMobile && (
        <>
          <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
            LATEST ARTICLES
          </h1>
          <div className="grid grid-cols-2 gap-2 w-full p-1">
            {articles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                description={article.description}
                image={article.image}
                link={article.link}
              />
            ))}
          </div>
        </>
      )}
      {isMobile && (
        <>
          <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
            LATEST ARTICLES
          </h1>
          <div className="grid grid-cols-1 gap-2 w-full p-2">
            {articles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                description={article.description}
                image={article.image}
                link={article.link}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

type Article = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const ArticleCard = (article: Article) => {
  return (
    <div className="flex flex-col size-full group">
      <img
        src={article.image}
        alt={article.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={article.link}
        className="flex flex-col items-center bg-(--therapy-tips)/22 p-2
      group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{article.title}</h2>
        <p className="text-xs">{article.description}</p>
      </a>
    </div>
  );
};
export default SectionArticles;
