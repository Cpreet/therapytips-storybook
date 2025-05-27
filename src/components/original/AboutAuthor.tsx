const AboutAuthor = () => {
  return (
    <aside className="flex flex-col gap-4">
      <p className="text-lg">
        <strong>
          <u>ABOUT THE AUTHOR</u>
        </strong>
      </p>
      <img
        alt="Mark Travers, Ph.D."
        src=`${process.env.BASE_URL}/photos/mark-travers-phd.png`
        width="100px"
        height="100px"
      />
      <p className="text-base">
        <strong>Mark Travers, Ph.D.</strong>, is the lead psychologist at Awake
        Therapy, responsible for new client intake and placement. Mark received
        his B.A. in psychology, magna cum laude, from Cornell University and his
        M.A. and Ph.D. from the University of Colorado Boulder. His academic
        research has been published in leading psychology journals and has been
        featured in The New York Times and The New Yorker, among other popular
        publications. He is a regular contributor for Forbes and Psychology
        Today, where he writes about psycho-educational topics such as
        happiness, relationships, personality, and life meaning.{" "}
        <a
          href="https://www.awake-therapy.me/schedule-an-initial-consultation"
          target="_blank"
          className="text-blue-900"
        >
          <strong>
            Click here to schedule an initial consultation with Mark or another
            member of the Awake Therapy team
          </strong>
        </a>
        . Or, you can{" "}
        <a
          href="https://www.buymeacoffee.com/marktravers"
          target="_blank"
          className="text-blue-900"
        >
          <strong>drop him a note here</strong>
        </a>
        .
      </p>
    </aside>
  );
};

export default AboutAuthor;
