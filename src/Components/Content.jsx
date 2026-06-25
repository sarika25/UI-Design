import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
  return (
    <div className="py-4 px-4 md:px-8 lg:px-18 flex flex-col lg:flex-row gap-10 items-stretch flex-1">
      {/* <div className="py-4 px-18 flex gap-10 items-stretch flex-1 "> */}
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Content;
