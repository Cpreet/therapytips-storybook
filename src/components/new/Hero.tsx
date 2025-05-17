import ytImg from "@/assets/yt-img.png";
import ytButton from "@/assets/playbutton.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pr-0 md:pr-1">
      <img src={ytImg} alt="Hero" className="size-full" />
      <img
        src={ytButton}
        alt="YT Button"
        className="absolute place-self-center hover:opacity-70 transition-all duration-300"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Hero;
