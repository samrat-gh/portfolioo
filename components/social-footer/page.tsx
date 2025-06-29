// import TwitterIcon from "@/icons/twitter";
import TwitterIcon from "@/icons/twitter";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const SocialFooter = () => {
  return (
    <div className="mx-auto max-w-3xl w-full">
      <div className="flex justify-around">
        <Link href="https://github.com/samrat-gh" target="_blank">
          <Github className="inline hover:text-cyan-400 py-2 px-2" size={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/samrat-gh/" target="_blank">
          <Linkedin
            className="inline hover:text-cyan-400 py-2 px-2"
            size={40}
          />
        </Link>
        <Link href="https://x.com/samrat0gh" target="_blank">
          <TwitterIcon
            className="inline hover:text-cyan-400 py-2 px-2 w-[40px] h-[40px]"
            color="#fff"
          />
        </Link>
        <a href="mailto:contact@samratghimire.tech">
          <Mail className="inline hover:text-cyan-400 py-2 px-2" size={40} />
        </a>
      </div>
    </div>
  );
};

export default SocialFooter;
