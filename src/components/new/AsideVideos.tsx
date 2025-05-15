import thumbnail1 from "@/assets/thumbnail1.png";
import thumbnail2 from "@/assets/thumbnail2.png";

const AsideVideos = () => {
  return (
    <aside className="flex flex-col pl-2 py-2 gap-6 text-(--therapy-tips)">
      <h1 className="text-3xl font-(family-name:--font-amaranth) font-bold tracking-wider">
        RECOMMENDED <br />
        VIDEOS
      </h1>
      <div className="flex flex-col gap-4">
        <img src={thumbnail1} alt="Video" width={350} height={170} />
        <img src={thumbnail2} alt="Video" width={350} height={170} />
      </div>
    </aside>
  );
};

export default AsideVideos;
