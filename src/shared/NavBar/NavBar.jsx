import { IoMenu, IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={`sticky top-0 z-50 duration-500 ${color ? 'bg-[#151414d5]' : ''}`}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className='md:flex justify-between items-center py-5'>

            <Link to="home" smooth={true} offset={-300} duration={600}>
              <img src={logo} alt="Logo" className="w-[60px] cursor-pointer mt-3 md:mt-0 mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#dab558] mt-5 md:mt-0" /> : <IoMenu className="text-[#dab558] mt-5 md:mt-0" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] px-4 ${open ? 'top-[87px] opacity-100 bg-[#614112] z-10' : 'top-[-490px] navBg'}`}>

              <li>
                <Link to="about" smooth={true} offset={-30} duration={600} className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter ml-5 md:ml-4 cursor-pointer">About</Link>
              </li>

              <li>
                <Link to="features" smooth={true} offset={-150} duration={600} className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300 cursor-pointer">Features</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-120} duration={600} className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300 cursor-pointer">Tokenomics</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={-30} duration={600} className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300 cursor-pointer">Roadmap</Link>
              </li>

              <li>
                <Link to="docs" smooth={true} offset={-30} duration={600} className="text-[#EAE8E1] hover:text-[#FFCC4C] font-inter duration-300 cursor-pointer">Docs</Link>
              </li>

              <div className="block md:hidden">
                <div className="flex items-center">
                  <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                    <FaTelegramPlane className="text-[25px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                  </a>

                  <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[13px] 2xl:p-4 rounded-full group duration-300">
                    <FaXTwitter className="text-[22px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                  </a>
                </div>
              </div>
            </ul>

            <div className="md:block hidden">
              <div className="flex items-center">
                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                  <FaTelegramPlane className="text-[25px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>

                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[13px] 2xl:p-4 rounded-full group duration-300">
                  <FaXTwitter className="text-[22px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
