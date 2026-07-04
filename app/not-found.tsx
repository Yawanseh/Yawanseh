"use client";

import Image from "next-image-export-optimizer";
import Link from "next/link";

const NotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-6 py-20 text-center sm:py-28">
      <div className="grid h-36 w-36 place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)]">
        <Image
          src="/images/laith-memoji-calm.png"
          alt="Laith Younes"
          width="140"
          height="140"
        />
      </div>

      <p className="display mt-9 text-7xl tracking-tight text-[var(--ink)] sm:text-8xl">
        404
      </p>
      <p className="mt-3 text-lg text-[var(--ink-soft)]">
        This page wandered off. Let&apos;s get you back on track.
      </p>

      <Link href="/" className="btn-pill mt-10">
        Back to home
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
