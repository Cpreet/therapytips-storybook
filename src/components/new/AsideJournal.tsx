import useMobile from "@/hooks/useMobile";
import { ChevronRightIcon } from "lucide-react";

const AsideJournal = () => {
  const isMobile = useMobile();

  return (
    <aside className="flex flex-col pl-2 py-0.5 md:py-6 gap-6 text-(--therapy-tips)">
      {!isMobile && (
        <>
          <h1 className="text-5xl font-(family-name:--font-amaranth) font-bold tracking-wider">
            JOURNAL
            <br />
            CLUB
          </h1>
          <p className="text-sm font-light">
            Want to join our{" "}
            <strong className="font-bold">
              weekly <br />
              journal prompt
            </strong>{" "}
            mailing list?
          </p>
          <a href="https://www.therapytips.com/journal-club">
            <button
              className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
            >
              MORE DETAILS <ChevronRightIcon className="size-4" />
            </button>
          </a>
        </>
      )}
      {isMobile && (
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
            JOURNAL CLUB!
          </h1>
          <p className="text-sm font-light">
            Want to join our{" "}
            <strong className="font-bold">weekly journal prompt</strong> mailing
            list?
          </p>
          <a href="https://www.therapytips.com/journal-club">
            <button
              className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
            >
              MORE DETAILS <ChevronRightIcon className="size-4" />
            </button>
          </a>
        </div>
      )}
    </aside>
  );
};

export default AsideJournal;
