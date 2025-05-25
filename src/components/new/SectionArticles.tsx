const SectionArticles = () => {
  const articles = [
    {
      title:
        "The Personality Trait You Didn't Know Was Impacting Your Sex Life",
      image:
        "https://therapytips.org/photos/16x9/young-attractive-happy-couple-having-romantic-time-in-bed-by-getty-images-16x9.jpg",
      link: "https://therapytips.org/articles/the-personality-trait-you-didnt-know-was-impacting-your-sex-life",
    },
    {
      title: "6 Stations Of Divorce Most Couples Go Through",
      image:
        "https://therapytips.org/photos/16x9/a-man-and-a-woman-sitting-at-a-table-by-gabriel-ponton-16x9.jpg",
      link: "https://therapytips.org/articles/6-stations-of-divorce-most-couples-go-through",
    },
    {
      title:
        "Why Being Best Friends With Your Partner May Be The Key To Lasting Love",
      image:
        "https://therapytips.org/photos/16x9/a-man-and-a-woman-looking-at-each-other-laughing-by-aliburhan-s-16x9.jpg",
      link: "https://therapytips.org/articles/why-being-best-friends-with-your-partner-may-be-the-key-to-lasting-love",
    },
    {
      title:
        "3 Texting 'Red Flags' That Show They Are Not Emotionally Available",
      image:
        "https://therapytips.org/photos/16x9/person-in-grey-sweater-wearing-black-and-silver-chronograph-watch-holding-a-cell-phone-by-nathan-dumalo-16x9.jpg",
      link: "https://therapytips.org/articles/3-texting-red-flags-that-show-they-are-not-emotionally-available",
    },
  ];
  return (
    <section className="flex flex-col gap-1 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          LATEST ARTICLES
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              image={article.image}
              link={article.link}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          LATEST ARTICLES
        </h1>
        <div className="grid grid-cols-1 gap-2 w-full p-2">
          {articles.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              image={article.image}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Article = {
  title: string;
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
      </a>
    </div>
  );
};
export default SectionArticles;
