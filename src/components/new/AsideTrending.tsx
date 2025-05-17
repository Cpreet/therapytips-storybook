import useMobile from "@/hooks/useMobile";
import { ChevronRightIcon, TrendingUpIcon } from "lucide-react";

const AsideTrending = () => {
  const isMobile = useMobile();
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
    <aside className="flex flex-col pl-2 gap-1 md:gap-10 text-(--therapy-tips)">
      {!isMobile && (
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          MOST
          <br />
          POPULAR
        </h1>
      )}
      {isMobile && (
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          MOST POPULAR
        </h1>
      )}
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
  const isMobile = useMobile();
  return (
    <div className="flex flex-col w-full">
      {!isMobile && (
        <ol className="flex flex-col gap-8">
          {items.map((item, idx) => (
            <li key={item.title}>
              <a href={item.link}>
                <div
                  className="flex items-end gap-2 font-normal font-(family-name:--font-amaranth) p-2 rounded-md 
                hover:cursor-pointer hover:bg-fuchsia-300
                transition-all duration-300 group
                "
                >
                  <span className="text-5xl font-normal">{idx + 1}.</span>
                  <div className="flex flex-col font-sans text-fuchsia-950">
                    <h2 className="text-sm font-bold">{item.title}</h2>
                    <p className="text-xs font-normal flex items-center gap-1">
                      {item.views} views this month{" "}
                      <TrendingUpIcon className="size-4" />
                      <ChevronRightIcon
                        className="size-4 opacity-0 
                      group-hover:opacity-100 group-hover:translate-x-2
                      transition-all duration-300
                      "
                      />
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      )}
      {isMobile && (
        <ol className="flex flex-col gap-2 pr-2">
          {items.map((item, idx) => (
            <li key={item.title}>
              <a href={item.link}>
                <div className="flex items-center justify-between bg-fuchsia-200 px-4 py-1 font-sans text-fuchsia-950">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-extralight font-(family-name:--font-amaranth)">
                      {idx + 1}.
                    </span>
                    <div className="flex flex-col text-fuchsia-950 font-(family-name:--font-avenir)">
                      <h2 className="text-sm font-bold">{item.title}</h2>
                      <p className="text-xs font-normal flex items-center gap-1">
                        {item.views} views this month{" "}
                        <TrendingUpIcon
                          className="size-4"
                          absoluteStrokeWidth
                        />
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon className="size-12" color="gray" />
                </div>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default AsideTrending;
