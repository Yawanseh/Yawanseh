import Link from "next/link";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

const links = [
  {
    href: "https://x.com/LaithYounesY",
    label: "X",
    Icon: XIcon,
  },
  {
    href: "https://github.com/Yawanseh",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/yawanseh/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
];

const SocialLinks: React.FC<{ variant?: "header" | "default" }> = ({
  variant = "default",
}) => {
  if (variant === "header") {
    return (
      <>
        {links.map(({ href, label, Icon }) => (
          <Link
            key={label}
            href={href}
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] transition-colors duration-200 hover:bg-[var(--surface-2)] hover:text-[var(--ink)] [&_svg]:h-[17px] [&_svg]:w-[17px]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon />
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          className="icon-btn [&_svg]:h-[18px] [&_svg]:w-[18px]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
