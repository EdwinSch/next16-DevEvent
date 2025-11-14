import ExploreButton from "./ExploreButton";

const Hero = () => {
  return (
    <div className="my-28 flex flex-col items-center">
      <h1 className="text-center capitalize text-4xl md:text-6xl to-shadeBlue bg-linear-to-b from-white via-white bg-clip-text font-semibold text-transparent">
        the hub for every <br /> dev event you can&apos;t miss
      </h1>
      <h2 className="text-sm md:text-lg my-3 text-white">
        Hackathons, Meetups, and Conferences, All in One Place
      </h2>
      <ExploreButton />
    </div>
  );
};
export default Hero;
