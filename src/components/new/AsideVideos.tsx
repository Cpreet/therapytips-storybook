const AsideVideos = () => {
  return (
    <aside className="flex flex-col pl-2 py-2 gap-6 text-(--therapy-tips)">
      <div className="hidden md:flex flex-col gap-4">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          RECOMMENDED <br />
          VIDEOS
        </h1>
        <div className="flex flex-col gap-4">
          <iframe
            className="w-full h-full object-cover"
            width="350"
            height="170"
            src="https://www.youtube.com/embed/IaJmyY1rjs8?si=f9zp1Fn9w-HJXUPm?controls=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-full object-cover"
            width="350"
            height="170"
            src="https://www.youtube.com/embed/EFC_IolRbh0?si=zsKBYfseM880lBrb?controls=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-4">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          RECOMMENDED VIDEOS
        </h1>
        <div className="flex flex-col gap-4 items-center pr-2">
          <iframe
            className="w-full h-full object-cover"
            height="300"
            src="https://www.youtube.com/embed/IaJmyY1rjs8?si=f9zp1Fn9w-HJXUPm?controls=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-full"
            height="300"
            src="https://www.youtube.com/embed/EFC_IolRbh0?si=zsKBYfseM880lBrb?controls=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </aside>
  );
};

export default AsideVideos;
