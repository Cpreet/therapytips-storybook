import therapytips from "@/assets/therapytips.svg";
import therapytipsInverted from "@/assets/therapytips-inverted.svg";
import { MenuIcon, SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <div className="hidden md:flex flex-col items-center justify-center w-full">
        <>
          <img src={therapytips} alt="TherapyTips" />
          <div className="flex items-center justify-center gap-14 h-10.5 bg-(--therapy-tips) w-full text-white font-normal">
            <a
              href="https://www.therapytips.org"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Home
            </a>
            <a
              href="https://www.therapytips.org/articles"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Articles
            </a>
            <a
              href="https://www.therapytips.org/interviews"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Interviews
            </a>
            <a
              href="https://www.therapytips.org/advice"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Advice
            </a>
            <a
              href="https://www.therapytips.org/personality-tests"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Personality Tests
            </a>
            <a
              href="https://www.therapytips.org/mental-health-topics-a-z"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Mental Health Topics A-Z
            </a>
            <a
              href="https://www.awake-therapy.me/schedule-an-initial-consultation"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              Find a Therapist
            </a>
            <a
              href="https://www.therapytips.org/search"
              className="border-b border-transparent hover:border-white transition-all duration-200"
            >
              <SearchIcon className="size-4" />
            </a>
          </div>
        </>
      </div>
      <div className="md:hidden flex items-center justify-center h-16 bg-(--therapy-tips) w-full p-4">
        <img
          src={therapytipsInverted}
          alt="TherapyTips"
          className="ml-auto"
          width={250}
        />
        <div className="relative text-left ml-auto">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="inline-flex justify-center w-full rounded-md border px-1 py-2 text-white text-sm font-medium outline-none border-none hover:cursor-pointer focus:outline-none"
          >
            <MenuIcon className="size-8" />
          </label>
          <div className="absolute right-0 w-60 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-200 ease-in-out transform scale-95 peer-checked:scale-100 z-50">
            <div className="py-1">
              <a
                href="https://www.therapytips.org/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Home
              </a>
              <a
                href="https://www.therapytips.org/articles"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Articles
              </a>
              <a
                href="https://www.therapytips.org/interviews"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Interviews
              </a>
              <a
                href="https://www.therapytips.org/advice"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Advice
              </a>
              <a
                href="https://www.therapytips.org/personality-tests"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Personality Tests
              </a>
              <a
                href="https://www.therapytips.org/mental-health-topics-a-z"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Mental Health Topics A-Z
              </a>
              <a
                href="https://www.awake-therapy.me/schedule-an-initial-consultation"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                Find a Therapist
              </a>
              <a
                href="https://www.therapytips.org/search"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
              >
                <span className="inline-flex items-center gap-2">
                  <SearchIcon className="size-4" />
                  Search
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
