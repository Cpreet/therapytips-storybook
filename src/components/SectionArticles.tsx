const SectionArticles = () => {
  const articles = [
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image: "https://picsum.photos/450/250",
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
        LATEST ARTICLES
      </h1>
      <div className="grid grid-cols-2 gap-2">
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </section>
  );
};

type Article = {
  title: string;
  description: string;
  image: string;
};

const ArticleCard = (article: Article) => {
  return (
    <div className="flex flex-col size-full">
      <img
        src={article.image}
        alt={article.title}
        width={450}
        height={250}
        className="object-cover"
      />
      <div className="flex flex-col items-center bg-(--therapy-tips)/22 p-2">
        <h2 className="text-sm font-bold">{article.title}</h2>
        <p className="text-xs">{article.description}</p>
      </div>
    </div>
  );
};
export default SectionArticles;
