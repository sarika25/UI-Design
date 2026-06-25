const Navbar = () => {
  return (
    <div className="py-6 px-4 md:px-8 lg:px-18 flex flex-col sm:flex-row gap-4 justify-between items-center">
      {/* <div className="py-8 px-18 flex justify-between items-center "> */}
      <h4 className="uppercase tracking-widest text-white bg-black py-2 px-6 rounded-full text-sm">
        Target audience
      </h4>
      <p className="uppercase text-xs md:text-sm tracking-widest bg-gray-100 py-2 px-6 rounded-full  ">
        Digital Banking Platform
      </p>
    </div>
  );
};

export default Navbar;
