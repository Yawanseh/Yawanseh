import Link from "next/link";

const SocialLinks: React.FC = () => {
  return (
    <>
      <Link
        href="https://twitter.com/LaithYounesY"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </Link>
      <Link
        href="https://github.com/Yawanseh"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1.1-.3 3.5 1.3a12.3 12.3 0 016.4 0c2.3-1.6 3.5-1.3 3.5-1.3.7 1.7.3 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"></path>
        </svg>
      </Link>
      <Link
        href="https://www.linkedin.com/in/yawanseh/"
        className="px-3 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
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
