import scales from "../assets/scales.png";

const SectionPersonalityTests = () => {
  const tests = [
    {
      title: "Personality Test 1",
      description: "Description of Personality Test 1",
      image: scales,
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Personality Test 2",
      description: "Description of Personality Test 2",
      image: scales,
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
        FEATURED PERSONALITY TESTS
      </h1>
      <div className="grid grid-cols-2 w-full gap-2 p-1">
        {tests.map((test) => (
          <PersonalityTestCard
            key={test.title}
            title={test.title}
            description={test.description}
            image={test.image}
            link={test.link}
          />
        ))}
      </div>
    </section>
  );
};

type PersonalityTest = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const PersonalityTestCard = (test: PersonalityTest) => {
  return (
    <div className="flex flex-col text-center group">
      <img src={test.image} alt={test.title} height={250} className="object-cover group-hover:cursor-pointer" />
      <a
        href={test.link}
        className="flex flex-col bg-(--therapy-tips)/22 p-2
        group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{test.title}</h2>
        <p className="text-xs">{test.description}</p>
      </a>
    </div>
  );
};

export default SectionPersonalityTests;
