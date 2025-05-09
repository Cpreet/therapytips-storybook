import { ChevronRightIcon, TrendingUpIcon } from "lucide-react";

const AsideTrending = () => {
  const items = [
    {
      title: "Marital Satisfaction Scale",
      views: 100,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Breakup Distress Scale",
      views: 200,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Relationship Satisfaction Scale",
      views: 300,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Parentification Scale",
      views: 400,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Authenticity in Relationships Scale",
      views: 500,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Fear of Intimacy Scale",
      views: 600,
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <aside className="flex flex-col pl-2 gap-10 text-(--therapy-tips)">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider">
        MOST
        <br />
        POPULAR
      </h1>
      <AsideTrendingItem items={items} />
    </aside>
  );
};

type TrendingItem = {
  title: string;
  views: number;
  link: string;
};

const AsideTrendingItem = ({ items }: { items: TrendingItem[] }) => {
  return (
    <div className="flex flex-col w-full">
      <ol className="flex flex-col gap-8">
        {items.map((item, idx) => (
          <li key={item.title}>
            <a href={item.link}>
              <div
                className="flex items-end gap-2 font-normal font-(family-name:--font-amaranth) p-2
                rounded-md
              hover:cursor-pointer group
              hover:bg-fuchsia-300 transition-all duration-300
              "
              >
                <span className="text-5xl font-normal">{idx + 1}.</span>
                <div className="flex flex-col font-sans text-fuchsia-950">
                  <h2 className="text-sm font-bold">{item.title}</h2>
                  <p className="text-xs font-normal flex items-center gap-1">
                    {item.views} views this month{" "}
                    <TrendingUpIcon className="size-4" />
                    <ChevronRightIcon
                      className="size-4
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                    "
                    />
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AsideTrending;
