import scales from "@/assets/scales.png";

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
    <section className="space-y-4">
      <h1
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-2xl font-(family-name:--font-crimson) tracking-tight font-bold 
          before:content-[''] before:block before:border-t before:border-(--therapy-tips) before:border-dotted
          after:content-[''] after:block after:border-t after:border-(--therapy-tips) after:border-dotted"
      >
        Featured Personality Tests
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
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
      <img
        src={test.image}
        alt={test.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={test.link}
        className="flex flex-col bg-blue-100 p-2 font-(family-name:--font-crimson) text-blue-900
        group-hover:cursor-pointer group-hover:underline transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{test.title}</h2>
      </a>
    </div>
  );
};

export default SectionPersonalityTests;
