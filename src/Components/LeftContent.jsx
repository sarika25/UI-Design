import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col justify-between">
      {/* <div className="w-1/3 flex flex-col justify-between"> */}
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
