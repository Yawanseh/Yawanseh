import Image from "next-image-export-optimizer";
import SocialLinks from "./social-icons";

const Banner = (): JSX.Element => {
  return (
    <div className="card bg-base-300 w-full mb-4 border border-base-content/30">
      <div className="card-body flex flex-column justify-between md:flex-row items-center md:items-start">
        <div className="w-full flex flex-col items-start justify-between max-w-4xl">
          <h1 className="card-title font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-base-content to-base-content/50 pb-5">
            Hi, I&apos;m Laith
          </h1>
          <p>
            currently serving as an Engineering Manager at Majid Al Futtaim.
            I&apos;m based in Amman, Jordan, and my core expertise lies in
            managing and leading technical teams to drive innovation and
            excellence in product development.
          </p>
          <div className="pt-12 flex m-auto md:ml-0">
            <SocialLinks />
          </div>
        </div>
        <div className="w-full max-w-[320px]">
          <Image
            src="/images/laith-memoji.png"
            alt="blog image"
            width="250"
            height="250"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
