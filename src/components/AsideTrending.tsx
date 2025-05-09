const AsideTrending = () => {
  const items = [
    { title: "Marital Satisfaction Scale", views: 100 },
    { title: "Breakup Distress Scale", views: 200 },
    { title: "Relationship Satisfaction Scale", views: 300 },
    { title: "Parentification Scale", views: 400 },
    { title: "Authenticity in Relationships Scale", views: 500 },
    { title: "Fear of Intimacy Scale", views: 600 },
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
};

const AsideTrendingItem = ({ items }: { items: TrendingItem[] }) => {
  return (
    <div className="flex flex-col w-full">
      <ol className="flex flex-col gap-10">
        {items.map((item, idx) => (
          <li key={item.title}>
            <div className="flex items-end gap-2 font-no font-(family-name:--font-amaranth)">
              <span className="text-5xl font-normal">{idx + 1}.</span>
              <div className="flex flex-col font-sans text-fuchsia-950">
                <h2 className="text-sm font-bold">{item.title}</h2>
                <p className="text-xs font-normal">
                  {item.views} views this month
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AsideTrending;
