const Footer = () => {
  return (
    <>
      <footer className="p-4">
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-(family-name:--font-crimson) underline">
            ABOUT THERAPYTIPS.ORG
          </h2>
          <p className="font-(family-name:--font-crimson) text-base">
            <strong className="font-bold">Therapytips.org</strong> is the news
            and publishing division of{" "}
            <a className="text-blue-900 hover:cursor-pointer hover:underline">
              Awake Therapy
            </a>
            , a telehealth company that provides online psychotherapy,
            counseling, and coaching to individuals, couples, families and
            organizations in over 40 countries worldwide.
          </p>
          <div className="font-(family-name:--font-crimson) text-lg text-blue-800">
            <a
              href="https://www.therapytips.org/weekly-wisdom-signup"
              target="_blank"
              className="hover:underline"
            >
              JOIN OUR 'WEEKLY JOURNAL PROMPT' MAILING LIST
            </a>{" "}
            |{" "}
            <a
              href="https://www.awake-therapy.me/schedule-an-initial-consultation"
              target="_blank"
              className="hover:underline"
            >
              TALK TO A MENTAL HEALTH PROFESSIONAL TODAY
            </a>{" "}
            |{" "}
            <a
              href="https://www.therapytips.org"
              target="_blank"
              className="hover:underline"
            >
              THERAPYTIPS.ORG
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
