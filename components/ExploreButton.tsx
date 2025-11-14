"use client";

import Image from "next/image";

const ExploreButton = () => {
  return (
    <button
      onClick={() => {
        console.log("Clicked");
      }}
      className="bg-dark-200 mt-7 py-3.5 px-7 text-white capitalize rounded-full border border-white cursor-pointer flex items-center gap-1"
      type="button"
      id="explore-btn"
    >
      <a href="#events">explore events</a>
      <Image
        src={"/icons/arrow-down.svg"}
        alt="explore events"
        width={24}
        height={24}
      />
    </button>
  );
};
export default ExploreButton;
