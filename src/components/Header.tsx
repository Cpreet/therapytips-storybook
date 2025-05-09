import therapytips from "../assets/therapytips.svg";
import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <img src={therapytips} alt="TherapyTips" />
      <div className="flex items-center justify-center gap-14 h-10.5 bg-(--therapy-tips) w-full text-white font-normal">
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Home
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Articles
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Interviews
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Advice
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Personality Tests
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Mental Health Topics A-Z
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          Find a Therapist
        </a>
        <a
          href="https://www.therapytips.com"
          className="border-b border-transparent hover:border-white transition-all duration-200"
        >
          <SearchIcon className="size-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
