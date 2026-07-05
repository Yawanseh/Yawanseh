import { companyLabel, previousWork, roleLabel } from "@/constants";
import LiquidOrb from "./liquid-orb";
import SocialLinks from "./social-icons";

const Banner = () => {
  return (
    <section className="mb-20 pt-6 sm:pt-10">
      <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="rise rise-1 flex flex-wrap items-center gap-2">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ink-faint)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ink)]" />
              </span>
              Open to conversations
            </span>
          </div>

          <h1 className="rise rise-2 display mt-7 text-[2.75rem] leading-[1.03] tracking-tight text-[var(--ink)] sm:text-6xl md:text-[4.25rem]">
            I build scalable products,
            <span className="block text-[var(--ink-faint)]">
              and the teams behind them.
            </span>
          </h1>

          <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            I&apos;m Laith, {roleLabel} at {companyLabel}. I help businesses
            grow their products and their teams through thoughtful, user-centric
            engineering.
          </p>

          <div className="rise rise-4 mt-8">
            <span className="eyebrow">Previously</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {previousWork.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rise rise-5 mt-9 flex items-center gap-4">
            <SocialLinks />
            <span className="h-px w-8 bg-[var(--line)]" />
            <span className="text-sm font-medium text-[var(--ink-faint)]">
              Let&apos;s connect
            </span>
          </div>
        </div>

        <div className="rise rise-3 relative mx-auto shrink-0 md:mx-0">
          <div className="portrait-light relative h-60 w-60 sm:h-72 sm:w-72">
            <LiquidOrb />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/laith-memoji-light.webp"
              alt="Laith Younes"
              draggable={false}
              className="portrait-light__img h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
