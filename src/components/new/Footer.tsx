import therapytips from "@/assets/therapytips.svg";
import bmc from "@/assets/bmc.png";
import useMobile from "@/hooks/useMobile";
const Footer = () => {
  const isMobile = useMobile();
  return (
    <footer className="flex flex-col items-center justify-center md:px-1">
      <div className="flex flex-col w-full bg-fuchsia-300 text-white text-center py-4 px-4 md:px-40 items-center gap-1 md:gap-2">
        <h1 className="text-xl md:text-3xl text-(--therapy-tips) font-bold font-(family-name:--font-amaranth) tracking-wider">
          ABOUT
        </h1>
        {!isMobile && (
          <img
            src={therapytips}
            alt="Therapytips"
            className="mb-2"
            width={320}
            height={80}
          />
        )}
        {isMobile && (
          <img
            src={therapytips}
            alt="Therapytips"
            className="mb-2"
            width={200}
            height={50}
          />
        )}
        <p className="text-xs md:text-sm text-fuchsia-950 font-extralight w-3/4 md:w-1/2">
          <strong className="text-fuchsia-950 font-bold">
            Therapytips.org
          </strong>{" "}
          is the news and publishing division of{" "}
          <strong className="text-fuchsia-950 font-bold">Awake Therapy</strong>,
          a telehealth company that provides{" "}
          <strong className="text-fuchsia-950 font-bold">
            online psychotherapy, counseling, and coaching
          </strong>{" "}
          to individuals, couples, families and organizations{" "}
          <strong className="text-fuchsia-950 font-bold">
            in over 40 countries worldwide.
          </strong>{" "}
        </p>
        <a
          href="https://www.therapytips.org"
          target="_blank"
          className="underline hover:cursor-pointer text-sm md:text-base"
        >
          JOIN OUR 'WEEKLY JOURNAL PROMPT' MAILING LIST
        </a>
        <a
          href="https://www.therapytips.org"
          target="_blank"
          className="underline hover:cursor-pointer text-sm md:text-base"
        >
          TALK TO A MENTAL HEALTH PROFESSIONAL TODAY
        </a>
        <a href="https://www.buymeacoffee.com/awake" target="_blank">
          <img
            src={bmc}
            alt="BMC"
            className="mb-2"
            width={isMobile ? 150 : 296}
          />
        </a>
      </div>
      <p className="text-xs text-fuchsia-950 font-extralight text-center py-2">
        2025 Psychology Solutions, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
