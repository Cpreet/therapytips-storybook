const SectionAdvice = () => {
  const advice = [
    {
      title: "Advice Column 1",
      description: "Advice Column 1",
      image: "https://picsum.photos/450/250",
    },
    {
      title: "Advice Column 2",
      description: "Advice Column 2",
      image: "https://picsum.photos/450/250",
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
        ADVICE COLUMNS
      </h1>
      <div className="flex flex-row gap-2">
        {advice.map((item) => (
          <AdviceColumnItem key={item.title} advice={item} />
        ))}
      </div>
    </section>
  );
};

type AdviceColumnItem = {
  title: string;
  description: string;
  image: string;
};

const AdviceColumnItem = ({ advice }: { advice: AdviceColumnItem }) => {
  return (
    <div className="flex flex-col">
      <img src={advice.image} alt={advice.title} />
      <div className="flex flex-col text-center bg-(--therapy-tips)/22 p-2">
        <h2 className="text-sm font-bold">{advice.title}</h2>
        <p className="text-xs">{advice.description}</p>
      </div>
    </div>
  );
};

export default SectionAdvice;
