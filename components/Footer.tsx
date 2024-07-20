import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.slice(1));

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:gpatra1996@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; 2024 Ganesh Patra - Portfolio
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
      <button
        className="text-center w-full flex flex-col items-center justify-center"
        onClick={() => scrollToSection("#home")}
      >
        <SlArrowUp className="text-3xl font-medium animate-bounce text-white" />
        <p className="text-[10px] font-normal uppercase mt-1">Got to home</p>
      </button>
    </footer>
  );
};

export default Footer;
