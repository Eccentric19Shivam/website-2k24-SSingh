import { gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      {/* <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      /> */}
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div >
      {/* Hey Brainwave, enhance this photo */}
      {/* <ChatBubbleWing className="absolute left-full bottom-0" /> */}
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div >

      <div >
        {/* <img
          src=''
          width={26}
          height={26}
          alt="Brainwave"
        /> */}
      </div>
      {/* <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        
      </p> */}
      {/* <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      /> */}
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div >
      {/* <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      /> */}

      {/* <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div> */}
    </div>
  );
};