import Link from "next/link";
import { GithubIcon, TwitterIcon } from "./icons";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7.342 20.168H3.667V9h3.675v11.168zM5.505 7.667a2.117 2.117 0 01-2.122-2.115 2.117 2.117 0 012.122-2.115 2.117 2.117 0 012.122 2.115 2.117 2.117 0 01-2.122 2.115zm15.251 12.501h-3.666v-5.569c0-1.328-.026-3.037-1.852-3.037-1.852 0-2.134 1.445-2.134 2.939v5.667H9.489V9h3.517v1.52h.05c.49-.916 1.685-1.882 3.468-1.882 3.71 0 4.392 2.413 4.392 5.556v6.974z"></path>
        </svg>
      </Link>
    </>
  );
};

export default SocialLinks;
