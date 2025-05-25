import scales from "@/assets/scales.png";

const SectionPersonalityTests = () => {
  const tests = [
    {
      title: "Flourishing Measure",
      image: scales,
      link: "https://therapytips.org/personality-tests/flourishing-measure",
    },
    {
      title: "Anger Management Scale",
      image: scales,
      link: "https://therapytips.org/personality-tests/anger-management-scale",
    },
  ];
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          FEATURED PERSONALITY TESTS
        </h1>
        <div className="grid grid-cols-2 w-full gap-2 p-1">
          {tests.map((test) => (
            <PersonalityTestCard
              key={test.title}
              title={test.title}
              image={test.image}
              link={test.link}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          FEATURED <br /> PERSONALITY TESTS
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {tests.map((test) => (
            <PersonalityTestCard
              key={test.title}
              title={test.title}
              image={test.image}
              link={test.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type PersonalityTest = {
  title: string;
  image: string;
  link: string;
};

const PersonalityTestCard = (test: PersonalityTest) => {
  return (
    <div className="flex flex-col text-center group">
      <img
        src={test.image}
        alt={test.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={test.link}
        className="flex flex-col bg-(--therapy-tips)/22 p-2
        group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{test.title}</h2>
      </a>
    </div>
  );
};

export default SectionPersonalityTests;
