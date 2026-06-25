import Navbar from "./Navbar";
import Content from "./Content";

const Section = (props) => {
  return (
    <div className="h-screen w-full flex flex-col ">
      <Navbar />
      <Content users={props.users} />
    </div>
  );
};

export default Section;
