const SectionArticles = () => {
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
    <section className="space-y-4">
      <h1
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-2xl font-(family-name:--font-crimson) tracking-tight font-bold 
          before:content-[''] before:block before:border-t before:border-(--therapy-tips) before:border-dotted
          after:content-[''] after:block after:border-t after:border-(--therapy-tips) after:border-dotted"
      >
        Latest Articles
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
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
        className="flex flex-col items-center bg-blue-100 p-2 font-(family-name:--font-crimson) text-blue-900
       group-hover:cursor-pointer group-hover:underline transition-all duration-200 rounded-b-md"
      >
        <h2 className="font-bold tracking-tight">{article.title}</h2>
      </a>
    </div>
  );
};
export default SectionArticles;
