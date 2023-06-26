"use client";

import Image from "next-image-export-optimizer";
import Link from "next/link";

const NotFound = (): JSX.Element => {
  return (
    <div className="card bg-base-300 w-full mb-4 border border-base-content/30">
      <div className="card-body flex flex-column justify-between items-center">
        <p className="card-title font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-base-content to-base-content/50 pb-5">
          404
        </p>
        <p className="card-title font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-b from-base-content to-base-content/50 pb-5">
          PAGE NOT FOUND
        </p>
        <Link href="/" className="btn btn-wide mt-32 capitalize">
          Back to Home
        </Link>
      </div>
      <Image
        src="/images/laith-memoji-calm.png"
        alt="blog image"
        width="250"
        height="250"
        className="m-auto"
      />
    </div>
  );
};

export default NotFound;
