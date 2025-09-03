import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import "boxicons";

import { useState } from "react";
import NavWindow from "./NavWindow";
import NavBtn from "./NavBtn";
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const hendelNav = function () {
    setOpenNav(!openNav);
  };
  return (
    <div className="flex justify-evenly">
      {openNav === true ? (
        <NavWindow />
      ) : (
        <header className="padding-x py-8 absolute z-10 w-full">
          <nav className="flex justify-between items-center max-container">
            <a href="./">
              <img src={headerLogo} alt="Logo" width={100} height={100}></img>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {" "}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* <div
            className="  max-lg:block cursor-pointer z-30"
            onClick={() => setOpenNav(!openNav)}
          >
            <box-icon
              name={openNav === false ? "menu" : "x"}
              size="md"
            ></box-icon>
          </div> */}
          </nav>
        </header>
      )}
      <NavBtn handelNav={hendelNav} openNav={openNav} />
    </div>
  );
};

export default Nav;
