const AsideArticles = () => {
  const articles = [
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "The Importance of Self-Care",
      description: "How to take care of yourself and your mental health",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <aside className="space-y-4">
      <h1 className="text-lg font-(family-name:--font-crimson) tracking-tight font-bold underline">
        MORE ARTICLES FOR YOU
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
    </aside>
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
        className="flex flex-col items-center bg-blue-100 p-2 font-(family-name:--font-crimson) text-blue-900
         group-hover:cursor-pointer group-hover:underline transition-all duration-200 rounded-b-md"
      >
        <h2 className="font-bold tracking-tight">{article.title}</h2>
      </a>
    </div>
  );
};
export default AsideArticles;
