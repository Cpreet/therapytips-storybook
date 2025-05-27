const FurtherReadingCTA = () => {
  return (
    <div className="flex flex-col pl-2 py-2 gap-2 md:gap-6 text-(--therapy-tips)">
      <div className="hidden md:flex flex flex-col gap-2">
        <h1 className="text-4xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          FURTHER READING
        </h1>
        <a href="https://www.therapytips.com/book-appointment">
          <button
            className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 text-sm
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
          >
            MENTAL HEALTH <br />
            TOPICS A-Z
          </button>
        </a>
      </div>
      <div className="flex md:hidden flex-col gap-2 items-center">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          FURTHER READING
        </h1>
        <a href="https://www.therapytips.com/book-appointment">
          <button
            className="flex w-fit items-center gap-2 border-2 border-fuchsia-900 rounded-md px-4 py-2 
        hover:bg-fuchsia-950 hover:cursor-pointer hover:text-white transition-all duration-200"
          >
            MENTAL HEALTH TOPICS A-Z
          </button>
        </a>
      </div>
    </div>
  );
};

export default FurtherReadingCTA;
