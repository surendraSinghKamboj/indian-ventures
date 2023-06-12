import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.jpeg";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import '../../../index.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [themIcon, setThemIcon] = useState(true);
  const [theme, setTheme] = useState("light-theme");
  const OnSlideChange = () => {
    setOpen(false);
  };
  const changeThemState = () => {
    if (themIcon === true && theme === "light-theme") {
      setThemIcon(false);
      setTheme("dark-theme");
    } else {
      setThemIcon(true);
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <nav className="bgClr headClr">
      <div className=" bg-black p-2 text-white flex justify-end md:pr-10 pr-6 defBlack textClr ">
        <div className="flex md:gap-7 gap-2 md:ml-0 ml-3 flex-wrap pr-16 ">
          <p className="flex items-center gap-2">
            <AiOutlineMail />
            dummy@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <BsTelephone />
            Phone No
          </p>
        </div>
        <div className="flex items-center" onClick={changeThemState}>
          {themIcon ? (
            <BsFillMoonFill className="text-white md:text-2xl text-3xl cursor-pointer" />
          ) : (
            <BsFillSunFill className="text-white md:text-2xl text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img
              onClick={OnSlideChange}
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-12 rounded-md"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/about" className={`py-7 px-3 inline-block `}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={` z-20
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-36 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link
              to="/"
              onClick={OnSlideChange}
              className="py-7 px-3 inline-block"
            >
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link
              to="/about"
              onClick={OnSlideChange}
              className="py-7 px-3 inline-block"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={OnSlideChange}
              className="py-7 px-3 inline-block"
            >
              CONTACT
            </Link>
          </li>
          <div className="py-5" onClick={OnSlideChange}>
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
