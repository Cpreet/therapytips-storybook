const SectionInterviews = () => {
  const interviews = [
    {
      title:
        "New Research Explains The Role Of 'Future Anxiety' In Delayed Parenthood",
      image:
        "https://therapytips.org/photos/16x9/a-woman-holding-a-baby-while-laughing-on-top-of-a-bed-16x9.jpg",
      link: "https://therapytips.org/interviews/new-research-explains-the-role-of-future-anxiety-in-delayed-parenthood",
    },
    {
      title:
        "A Successful Entrepreneur Explains What It Takes To 'Reinvent Yourself'",
      image:
        "https://therapytips.org/photos/16x9/a-person-sitting-in-a-room-with-a-coffee-in-front-of-their-laptop-16x9.jpg",
      link: "https://therapytips.org/interviews/a-successful-entrepreneur-explains-what-it-takes-to-reinvent-yourself",
    },
    {
      title:
        "Azusa Pacific University Researchers Reveal The Psychological Driving Forces Behind 'The Ick'",
      image:
        "https://therapytips.org/photos/16x9/woman-on-top-of-the-building-cringing-into-her-sweater-16x9.jpg",
      link: "https://therapytips.org/interviews/azusa-pacific-university-researchers-reveal-the-psychological-driving-forces-behind-the-ick",
    },
    {
      title:
        "New Research Reveals A Simple And Effective Way For Couples To Reduce Conflict",
      image:
        "https://therapytips.org/photos/16x9/a-man-and-a-woman-gazing-into-each-others-eyes-as-they-hold-hands-near-the-water-16x9.jpg",
      link: "https://therapytips.org/interviews/new-research-reveals-a-simple-and-effective-way-for-couples-to-reduce-conflict",
    },
  ];
  return (
    <section className="flex flex-col gap-2 md:gap-8 items-center">
      <div className="hidden md:block w-full">
        <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          NEW INTERVIWES
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full p-1">
          {interviews.map((interview) => (
            <InterviewCard
              key={interview.title}
              title={interview.title}
              image={interview.image}
              link={interview.link}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-(--therapy-tips) text-center">
          NEW INTERVIWES
        </h1>
        <div className="grid grid-cols-1 w-full gap-2 p-2">
          {interviews.map((interview) => (
            <InterviewCard
              key={interview.title}
              title={interview.title}
              image={interview.image}
              link={interview.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Interview = {
  title: string;
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
      </a>
    </div>
  );
};

export default SectionInterviews;
