import thumbnail from "@/assets/thumbnail1.png";
import mark from "@/assets/mark.png";

const ArticleMain = () => {
  return (
    <>
      <div>
        <img
          src={thumbnail}
          alt="Article Thumbnail"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tighter">Article Title</h1>
        <p className="text-2xl text-gray-500">
          Byline description lorem ipsum dolor sit amet consectetur
        </p>
        <div className="flex flex-col gap-4">
          <img
            src={mark}
            alt="Article Thumbnail"
            width={48}
            height={48}
            className="rounded-full border border-fuchsia-950"
          />
          <p className="text-gray-500">
            By <span className="font-bold text-black">Mark Travers, Ph.D.</span>{" "}
            | May 16, 2015
          </p>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        <p className="text-lg">
          <em>
            Do you and your partner really tune in to each other's emotions?
            Take the{" "}
          </em>
          <a
            href="https://therapytips.org/personality-tests/active-empathic-listening-scale"
            className="text-blue-900"
          >
            <em>Active-Empathic Listening Scale</em>
          </a>
          <em>
            {" "}
            to find out if your conversations are as connected as they should
            be.
          </em>
        </p>
        <p className="text-lg">
          <em>
            A similar version of this article can also be found on Forbes.com,{" "}
            <a
              href="https://www.forbes.com/sites/traversmark/2025/05/09/3-signs-of-the-pet-name-trap-in-relationships---by-a-psychologist/"
              target="_blank"
              className="text-blue-900"
            >
              here
            </a>
            .
          </em>
        </p>
      </div>
    </>
  );
};

export default ArticleMain;
