import playbutton from "@/assets/playbutton.png";
import { type NoembedResponse, videoData } from "@/lib/utils";

const ytData: NoembedResponse = await videoData(
  "https://www.youtube.com/watch?v=X9ootQNBzzY"
);

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pr-0 md:pr-1 h-[300px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
      <a
        className="relative w-full h-full"
        href={ytData?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={
            ytData?.thumbnail_url.split("/").slice(0, -1).join("/") +
            "/maxresdefault.jpg"
          }
          alt={ytData?.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          loading="eager"
        />
        <img
          src={playbutton}
          alt={"playbutton"}
          className="size-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </a>
    </div>
  );
};

export default Hero;
