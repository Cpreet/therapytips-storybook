const SectionInterviews = () => {
  const interviews = [
    {
      title: "Interview 1",
      description: "Description of Interview 1",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 2",
      description: "Description of Interview 2",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 3",
      description: "Description of Interview 3",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 4",
      description: "Description of Interview 4",
      image: "https://picsum.photos/450/250",
      link: "https://www.therapytips.com/self-care",
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
        NEW INTERVIWES
      </h1>
      <div className="grid grid-cols-2 gap-2">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.title}
            title={interview.title}
            description={interview.description}
            image={interview.image}
            link={interview.link}
          />
        ))}
      </div>
    </section>
  );
};

type Interview = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const InterviewCard = (interview: Interview) => {
  return (
    <div className="flex flex-col">
      <img
        src={interview.image}
        alt={interview.title}
        width={450}
        height={250}
        className="object-cover"
      />
      <a
        href={interview.link}
        className="flex flex-col text-center bg-(--therapy-tips)/22 p-2
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{interview.title}</h2>
        <p className="text-xs">{interview.description}</p>
      </a>
    </div>
  );
};

export default SectionInterviews;
