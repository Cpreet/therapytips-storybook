import bmc from "../assets/bmc.png";

const CTA = () => {
  return (
    <div className="flex flex-col pl-2 py-2 gap-6 text-(--therapy-tips)">
      <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
        ENJOYING OUR <br /> CONTENT?
      </h1>
      <a href="https://www.buymeacoffee.com/therapytips">
        <img src={bmc} alt="BMC" width={300} height={100} />
      </a>
    </div>
  );
};

export default CTA;
