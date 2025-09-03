import { navLinks } from "../constants";

const NavWindow = () => {
  return (
    <div className="bg-dark-yellow 	 h-screen  z-20  w-full fixed flex ">
      <ul className="flex-1 flex flex-col gap-12 justify-center items-center">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-3xl text-black"
            >
              {" "}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavWindow;
