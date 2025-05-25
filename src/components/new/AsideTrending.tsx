import { ChevronRightIcon, TrendingUpIcon } from "lucide-react";

const AsideTrending = () => {
  const items = [
    {
      title: "Highly Sensitive Person Questionnaire",
      views: 4156,
      link: "https://therapytips.org/personality-tests/highly-sensitive-person-questionnaire",
    },
    {
      title: "Authneticity In Relationships",
      views: 2217,
      link: "https://therapytips.org/personality-tests/authenticity-in-realationships",
    },
    {
      title: "Relationship Flourishing Scale",
      views: 1381,
      link: "https://therapytips.org/personality-tests/relationship-flourishing-scale",
    },
    {
      title: "Relationship Satisfaction Scale",
      views: 1282,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Perceived Responsiveness Scale",
      views: 1063,
      link: "https://therapytips.org/personality-tests/perceived-responsiveness-scale",
    },
    {
      title: "Marital Satisfaction Scale",
      views: 848,
      link: "https://therapytips.org/personality-tests/marital-satisfaction-scale",
    },
  ];
  return (
    <aside className="flex flex-col pl-2 gap-1 md:gap-10 text-(--therapy-tips)">
      <div className="hidden md:block">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          MOST
          <br />
          POPULAR
        </h1>
      </div>
      <div className="md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          MOST POPULAR
        </h1>
      </div>
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
      <div className="hidden md:block">
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
      </div>
      <div className="block md:hidden">
        <ol className="flex flex-col gap-2 pr-2">
          {items.map((item, idx) => (
            <li key={item.title}>
              <a href={item.link}>
                <div className="flex items-center justify-between bg-fuchsia-100 px-4 py-1 font-sans text-fuchsia-950">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-extralight font-(family-name:--font-amaranth)">
                      {idx + 1}.
                    </span>
                    <div className="flex flex-col text-fuchsia-950 font-(family-name:--font-avenir)">
                      <h2 className="text-sm font-bold">{item.title}</h2>
                      <p className="text-xs font-normal flex items-center gap-1">
                        {item.views} views this month{" "}
                        <TrendingUpIcon className="size-4" />
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon
                    className="size-14"
                    color="gray"
                    strokeWidth={1}
                  />
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AsideTrending;
