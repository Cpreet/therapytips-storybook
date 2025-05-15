const Footer = () => {
  return (
    <footer className="px-1">
      <div className="space-y-6">
        <h2 className="text-xl font-bold font-(family-name:--font-crimson) underline">
          ABOUT THERAPYTIPS.ORG
        </h2>
        <p className="font-(family-name:--font-crimson) text-md tracking-tight">
          <strong className="font-bold">Therapytips.org</strong> is the news and
          publishing division of{" "}
          <a className="text-blue-900 hover:cursor-pointer hover:underline">Awake Therapy</a>, a telehealth
          company that provides{" "}
          <strong className="font-bold">
            online psychotherapy, counseling, and coaching
          </strong>{" "}
          to individuals, couples, families and organizations{" "}
          <strong className="font-bold">in over 40 countries worldwide.</strong>{" "}
        </p>
        <div className="font-(family-name:--font-crimson) text-lg text-blue-800">
          <a
            href="https://www.therapytips.org"
            target="_blank"
            className="hover:underline"
          >
            JOIN OUR 'WEEKLY JOURNAL PROMPT' MAILING LIST
          </a>{" "}
          |{" "}
          <a
            href="https://www.therapytips.org"
            target="_blank"
            className="hover:underline"
          >
            TALK TO A MENTAL HEALTH PROFESSIONAL TODAY
          </a>
        </div>
      </div>
      <p className="font-(family-name:--font-crimson) text-sm text-center py-2 font-semibold tracking-tight">
        © Psychology Solutions 2025. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
