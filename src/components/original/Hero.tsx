import wisdom from "@/assets/weekly-wisdom.jpg";
import journal from "@/assets/journal-prompt.jpg";

const Hero = () => {
  return (
    <div className="space-y-2">
      <img src={wisdom} alt="Hero" className="size-full rounded-md" />
      <img src={journal} alt="Journal" className="size-full rounded-md" />
    </div>
  );
};

export default Hero;
