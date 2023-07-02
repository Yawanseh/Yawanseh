import { copyWrite } from "@/constants";
import SocialLinks from "./social-icons";
import ThemeConfiguratore from "./theme-configuratore";

const Footer: React.FC = () => {
  return (
    <footer className="footer card w-full bg-base-300 border border-base-content/30 mt-4">
      <div className="card-body flex md:flex-row flex-col-reverse justify-between items-center w-full p-3 md:p-6">
        <p className="flex-1">{`${copyWrite} © 2023`}</p>
        <div className="flex-1 flex-row flex md:m-0 my-6">
          <SocialLinks />
        </div>
        <div className="hidden md:block">
          <ThemeConfiguratore />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
