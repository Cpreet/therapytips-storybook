import { type Article } from "@/lib/api";

const ArticleCard = (article: Article) => {
  return (
    <div className="flex flex-col size-full group">
      <img
        src={article.hero_image_url}
        alt={article.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={`/${article.article_type}/${article.slug}`}
        className="flex flex-col items-center bg-(--therapy-tips)/22 p-2
            group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{article.title}</h2>
      </a>
    </div>
  );
};

export default ArticleCard;
