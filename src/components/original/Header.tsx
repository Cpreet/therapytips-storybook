import therapytips from "@/assets/therapytips-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-start justify-center w-full px-4 pt-6 gap-2">
      <img src={therapytips} alt="TherapyTips" />
      <div
        className="flex flex-wrap items-center justify-start gap-1 h-fit bg-transparent w-full font-(family-name:--font-crimson) font-bold tracking-tighter
      border-b border-(--therapy-tips)/35 border-dotted text-blue-900 pb-2 text-base"
      >
        <a
          href="https://www.therapytips.org/"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Home
        </a>
        <a
          href="https://www.therapytips.org/latest-articles"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Articles
        </a>
        <a
          href="https://www.therapytips.org/interviews"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Interviews
        </a>
        <a
          href="https://www.therapytips.org/advice"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Advice
        </a>
        <a
          href="https://www.therapytips.org/personality-tests"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Personality Tests
        </a>
        <a
          href="https://www.therapytips.org/mental-health-topics-a-z"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Mental Health Topics A-Z
        </a>
        <a
          href="https://www.therapytips.org/find-a-therapist"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Find A Therapist
        </a>
        <a
          href="https://www.therapytips.org/search"
          className="border border-blue px-2 py-1 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Search
        </a>
      </div>
    </header>
  );
};

export default Header;
