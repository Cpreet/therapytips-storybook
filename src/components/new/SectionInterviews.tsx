import useMobile from "@/hooks/useMobile";

const SectionInterviews = () => {
  const isMobile = useMobile();
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
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      {!isMobile && (
        <>
          <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips)">
            NEW INTERVIWES
          </h1>
          <div className="grid grid-cols-2 gap-2 w-full p-1">
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
        </>
      )}
      {isMobile && (
        <>
          <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
            NEW INTERVIWES
          </h1>
          <div className="grid grid-cols-1 w-full gap-2 p-2">
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
        </>
      )}
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
    <div className="flex flex-col group">
      <img
        src={interview.image}
        alt={interview.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={interview.link}
        className="flex flex-col text-center bg-(--therapy-tips)/22 p-2
        group-hover:bg-fuchsia-950 group-hover:cursor-pointer group-hover:text-white transition-all duration-200"
      >
        <h2 className="text-sm font-bold">{interview.title}</h2>
        <p className="text-xs">{interview.description}</p>
      </a>
    </div>
  );
};

export default SectionInterviews;
