import Image from "next/image";
import FbIcon from "../../../public/fb-icon.svg";
import TwIcon from "../../../public/tw-icon.svg";
import YtIcon from "../../../public/yt-icon.svg";
import InIcon from "../../../public/in-icon.svg";

export function EmailForm() {
  return (
    <div className="bg-secondary py-6 lg:py-2">
      <div className="inner flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between items-center">
        <span className="text-white uppercase font-light">
          Be in touch with us:
        </span>
        <form className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row grow lg:items-center lg:space-x-4 lg:w-1/3 justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="py-1 px-4 outline-none text-white rounded bg-gray-700 w-full max-w-xs lg:max-w-[250px]"
          />
          <button className="uppercase font-light text-white py-1 px-3 border border-solid border-white rounded hover:bg-white hover:text-black transition-colors duration-400">
            JOIN US
          </button>
        </form>
        <div className="flex space-x-2">
          <Image
            src={FbIcon}
            alt="follow us on facebook"
            width="20"
            height="20"
          />
          <Image
            src={TwIcon}
            alt="follow us on twitter"
            width="20"
            height="20"
          />
          <Image
            src={YtIcon}
            alt="follow us on youtube"
            width="20"
            height="20"
          />
          <Image
            src={InIcon}
            alt="follow us on linkedin"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}
