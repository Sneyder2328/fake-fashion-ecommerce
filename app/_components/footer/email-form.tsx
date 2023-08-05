import Image from "next/image";
import FbIcon from "../../../public/fb-icon.svg";
import TwIcon from "../../../public/tw-icon.svg";
import YtIcon from "../../../public/yt-icon.svg";
import InIcon from "../../../public/in-icon.svg";

export function EmailForm() {
  return (
    <div className="bg-secondary py-6 lg:py-2">
      <div className="inner flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
        <span className="font-light uppercase text-white">
          Be in touch with us:
        </span>
        <form className="flex grow flex-col justify-center space-y-4 lg:w-1/3 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full max-w-xs rounded bg-gray-700 px-4 py-1 text-white outline-none lg:max-w-[250px]"
          />
          <button className="duration-400 rounded border border-solid border-white px-3 py-1 font-light uppercase text-white transition-colors hover:bg-white hover:text-black">
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
