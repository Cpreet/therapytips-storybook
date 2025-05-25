const SectionAdvice = () => {
  const advice = [
    {
      title: "Advice Column 1",
      description: "Advice Column 1",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Advice Column 2",
      description: "Advice Column 2",
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
        Advice Columns
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
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
      <img
        src={advice.image}
        alt={advice.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={advice.link}
        className="flex flex-col text-center bg-blue-100 p-2 font-(family-name:--font-crimson) text-blue-900 rounded-b-md
        group-hover:cursor-pointer group-hover:underline transition-all duration-200"
      >
        <h2 className="font-bold">{advice.title}</h2>
      </a>
    </div>
  );
};

export default SectionAdvice;
