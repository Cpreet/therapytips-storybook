const SectionInterviews = () => {
  const interviews = [
    {
      title: "Interview 1",
      description: "Description of Interview 1",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 2",
      description: "Description of Interview 2",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 3",
      description: "Description of Interview 3",
      image:
        "https://wallpapers.com/images/hd/vibrant-mountain-lake-scenic-yif3zbqokb0oq5yw.jpg",
      link: "https://www.therapytips.com/self-care",
    },
    {
      title: "Interview 4",
      description: "Description of Interview 4",
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
        New Interviews
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
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
    <div className="flex flex-col group">
      <img
        src={interview.image}
        alt={interview.title}
        height={250}
        className="object-cover group-hover:cursor-pointer"
      />
      <a
        href={interview.link}
        className="flex flex-col text-center bg-blue-100 p-2 rounded-b-md font-(family-name:--font-crimson) text-blue-900
        group-hover:cursor-pointer group-hover:underline transition-all duration-200"
      >
        <h2 className="font-bold">{interview.title}</h2>
      </a>
    </div>
  );
};

export default SectionInterviews;
