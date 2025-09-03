const NavBtn = ({ handelNav, openNav }) => {
  return (
    <div
      className="hidden max-lg:block cursor-pointer z-30 mt-[3.3rem] ml-[20rem] "
      onClick={handelNav}
    >
      <box-icon name={openNav === false ? "menu" : "x"} size="md"></box-icon>
    </div>
  );
};

export default NavBtn;
