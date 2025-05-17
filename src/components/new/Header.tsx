import therapytips from "@/assets/therapytips.svg";
import therapytipsInverted from "@/assets/therapytips-inverted.svg";
import { MenuIcon, SearchIcon } from "lucide-react";
import useMobile from "@/hooks/useMobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const isMobile = useMobile();

  return (
    <header className="flex flex-col items-center justify-center w-full">
      {!isMobile && (
        <>
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
        </>
      )}
      {isMobile && (
        <div className="flex items-center justify-center h-16 bg-(--therapy-tips) w-full p-4">
          <img
            src={therapytipsInverted}
            alt="TherapyTips"
            className="ml-auto"
            width={250}
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto text-white">
              <MenuIcon className="size-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="rounded-sm font-(family-name:--font-avenir) text-sm"
            >
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Articles</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Interviews</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Advice</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Personality Tests</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Mental Health Topics A-Z</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>Find a Therapist</DropdownMenuItem>
              </a>
              <DropdownMenuSeparator className="bg-fuchsia-950/35" />
              <a href="https://www.therapytips.com">
                <DropdownMenuItem>
                  <SearchIcon className="size-4" />
                  Search
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
