import therapytips from "@/assets/therapytips-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-start justify-center w-full px-4 pt-6">
      <img src={therapytips} alt="TherapyTips" />
      <div className="flex items-center justify-start gap-0.5 h-10.5 bg-transparent w-full font-(family-name:--font-crimson) font-semibold
      border-b border-(--therapy-tips)/35 border-dotted text-blue-900">
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Home
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Articles
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Interviews
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Advice
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Personality Tests
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Mental Health Topics A-Z
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Find a Therapist
        </a>
        <a
          href="https://www.therapytips.com"
          className="border border-blue px-2 py-0.5 bg-blue-100 rounded-sm hover:border-(--therapy-tips) transition-all duration-200"
        >
          Search
        </a>
      </div>
    </header>
  );
};

export default Header;
