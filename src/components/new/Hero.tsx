const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pr-0 md:pr-1 h-[300px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/X9ootQNBzzY?si=xDzqaF1KsoPx_XBv"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Hero;
