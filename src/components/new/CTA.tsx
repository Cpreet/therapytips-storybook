import bmc from "@/assets/bmc.png";

const CTA = () => {
  return (
    <div className="flex flex-col pl-2 py-2 gap-2 md:gap-6 text-(--therapy-tips)">
      <div className="hidden md:block">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          ENJOYING OUR <br /> CONTENT?
        </h1>
        <a href="https://www.buymeacoffee.com/marktravers">
          <img src={bmc} alt="BMC" width={300} height={100} />
        </a>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
            ENJOYING OUR <br /> CONTENT?
          </h1>
          <a href="https://www.buymeacoffee.com/marktravers">
            <img src={bmc} alt="BMC" width={250} height={100} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
