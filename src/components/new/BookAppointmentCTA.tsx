import { ChevronRightIcon } from "lucide-react";

const BookAppointmentCTA = () => {
  return (
    <div className="flex flex-col pl-2 py-2 gap-2 md:gap-6 text-(--therapy-tips)">
      <div className="hidden md:flex flex-col gap-2 ">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          BOOK AN APPOINTMENT
        </h1>
        <p>
          In need of <strong>therapy</strong> or <strong>counselling</strong>?
        </p>
        <a href="https://www.therapytips.com/book-appointment">
          <button
            className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 text-sm
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
          >
            SCHEDULE NOW <ChevronRightIcon className="size-4" />
          </button>
        </a>
      </div>
      <div className="flex md:hidden flex-col gap-2 items-center">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          BOOK AN APPOINTMENT
        </h1>
        <p>
          In need of <strong>therapy</strong> or <strong>counselling</strong>?
        </p>
        <a href="https://www.therapytips.com/book-appointment">
          <button
            className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 text-sm
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
          >
            SCHEDULE NOW <ChevronRightIcon className="size-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default BookAppointmentCTA;
