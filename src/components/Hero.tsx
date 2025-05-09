import ytImg from "../assets/yt-img.png";
import ytButton from "../assets/yt-button.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pr-1">
      <img src={ytImg} alt="Hero" className="size-full" />
      <img
        src={ytButton}
        alt="YT Button"
        className="absolute place-self-center"
      />
    </div>
  );
};

export default Hero;
