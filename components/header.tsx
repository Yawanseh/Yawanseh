import Link from "next/link";
import SocialLinks from "./social-icons";
import ThemeToggle from "./theme-toggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 -mx-5 mb-10 px-5 sm:-mx-8 sm:px-8">
      <div className="mt-4 flex items-center justify-between rounded-full border border-[var(--line-soft)] bg-[var(--glass)] py-2 pl-3 pr-2 shadow-[var(--shadow-md)] backdrop-blur-xl backdrop-saturate-150 sm:pl-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--invert-bg)] text-sm font-semibold text-[var(--invert-ink)] transition-transform duration-300 group-hover:-rotate-6">
            LY
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Laith Younes
            </span>
            <span className="hidden whitespace-nowrap text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ink-faint)] sm:block">
              Eng. Manager · Careem
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-0.5 pr-0.5">
          <SocialLinks variant="header" />
          <span className="mx-1 h-5 w-px bg-[var(--line)]" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
