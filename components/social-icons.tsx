import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

const SocialLinks: React.FC = () => {
  return (
    <>
      <Link
        href="https://twitter.com/LaithYounesY"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="Twitter"
      >
        <TwitterIcon />
      </Link>
      <Link
        href="https://github.com/Yawanseh"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="Github"
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yawanseh/"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="Linkedin"
      >
        <LinkedinIcon />
      </Link>
    </>
  );
};

export default SocialLinks;
