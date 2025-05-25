const SectionAdvice = () => {
  const advice = [
    {
      title: "2 Compliments That Come With Strings Attached",
      image:
        "https://therapytips.org/photos/16x9/woman-holds-fragmented-mirror-reflecting-parts-of-her-face-by-kateryna-hliznitsova-16x9.jpg",
      link: "https://therapytips.org/advice/2-compliments-that-come-with-strings-attached",
    },
    {
      title: "3 Ways To Stop Entitlement From Sabotaging Your Relationship",
      image:
        "https://therapytips.org/photos/16x9/shallow-focus-photography-of-man-and-woman-holding-hands-by-brooke-cagle-16x9.jpg",
      link: "https://therapytips.org/advice/3-ways-to-stop-entitlement-from-sabotaging-your-relationship",
    },
  ];
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          ADVICE COLUMNS
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {advice.map((item) => (
            <AdviceColumnItem key={item.title} advice={item} />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          ADVICE COLUMNS
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {advice.map((item) => (
            <AdviceColumnItem key={item.title} advice={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

type AdviceColumnItem = {
  title: string;
  image: string;
  link: string;
};

const AdviceColumnItem = ({ advice }: { advice: AdviceColumnItem }) => {
  return (
    <div className="flex flex-col group">
      <img
        src={advice.image}
        alt={advice.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={advice.link}
        className="flex flex-col text-center bg-(--therapy-tips)/22 p-2
        group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{advice.title}</h2>
      </a>
    </div>
  );
};

export default SectionAdvice;
