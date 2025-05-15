const SectionAdvice = () => {
  const advice = [
    {
      title: "Advice Column 1",
      description: "Advice Column 1",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Advice Column 2",
      description: "Advice Column 2",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
        ADVICE COLUMNS
      </h1>
      <div className="grid grid-cols-2 gap-2 w-full p-1">
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
  link: string;
};

const AdviceColumnItem = ({ advice }: { advice: AdviceColumnItem }) => {
  return (
    <div className="flex flex-col group">
      <img src={advice.image} alt={advice.title} height={250} className="object-cover group-hover:cursor-pointer" />
      <a
        href={advice.link}
        className="flex flex-col text-center bg-(--therapy-tips)/22 p-2
        group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{advice.title}</h2>
        <p className="text-xs">{advice.description}</p>
      </a>
    </div>
  );
};

export default SectionAdvice;
