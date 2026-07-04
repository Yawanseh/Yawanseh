import { companyLabel, copyWrite } from "@/constants";
import SocialLinks from "./social-icons";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24">
      <div className="border-t border-[var(--line-soft)] pt-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="display text-lg tracking-tight text-[var(--ink)]">
              Laith Younes
            </span>
            <p className="text-sm text-[var(--ink-faint)]">{companyLabel}</p>
          </div>

          <SocialLinks />
        </div>

        <p className="mt-10 text-center text-xs text-[var(--ink-faint)] md:text-left">
          {`© ${new Date().getFullYear()} ${copyWrite}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
