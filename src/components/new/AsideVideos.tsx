import { videoData } from "@/lib/utils";
import { type NoembedResponse } from "@/lib/utils";

const ytUrlArr = [
  "https://www.youtube.com/watch?v=IaJmyY1rjs8",
  "https://www.youtube.com/watch?v=EFC_IolRbh0",
];

const ytDataArr: NoembedResponse[] = await Promise.all(
  ytUrlArr.map((url) => videoData(url))
);

const AsideVideos = () => {
  return (
    <aside className="flex flex-col py-2 gap-6 text-(--therapy-tips)">
      <div className="hidden md:flex flex-col gap-4">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
          RECOMMENDED <br />
          VIDEOS
        </h1>
        <div className="flex flex-col gap-4">
          {ytDataArr.map((data) => (
            <a
              key={data.title}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data.thumbnail_url}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-4">
        <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider text-center">
          RECOMMENDED VIDEOS
        </h1>
        <div className="flex flex-col gap-4 items-center pr-2">
          {ytDataArr.map((data) => (
            <a
              key={data.title}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data.thumbnail_url}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AsideVideos;
