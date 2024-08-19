import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

function Socials({ containerStyles, iconsStyles }) {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/Saeid-Rezaei0", name: "گیت هاب" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/saeid_89999", name: "اینستاگرام" },
    { icon: <FaTelegram />, path: "https://t.me/Saeidfrontend", name: "تلگرام" },
    { icon: <AiOutlineMail />, path: "mailto:saeid.rezaei695@gmail.com", name: "ایمیل" },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <TooltipProvider key={item.path} delayDuration={10}>
          <Tooltip>
            <TooltipTrigger>
              <Link href={item.path} target="_blank" className={iconsStyles}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="mb-1 text-gray-100 background-custom z-50">
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

export default Socials;
