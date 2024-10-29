import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import TopSide from "../TopSide/topside";

export default function Navbar(){
    const [hamburger, setHamburger] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleHamburger = () => {
        setHamburger(prev => !prev)
    }

    return (
        <div className={`flex fixed top-0 ${isFixed ? "product660x:top-0" : "product660x:top-auto" } z-50 bg-white w-full product1260x:p-5 product1360x:px-10 product1455x:px-20 items-center justify-between py-3`}>
            <div>
                <img src="/header-logo.svg" alt="" width="200" className="pl-3 product1260x:pl-0" />
            </div>
            <div className={`${hamburger ? "block h-screen fixed z-50 pb-5 bg-white top-[70px]" : "hidden"} product1260x:flex items-center justify-center gap-5 w-full px-2`}>
                <nav>
                    <ul className="flex flex-col gap-5 pt-5 w-full product1260x:pt-0 product1260x:gap-0 product1260x:w-auto  product1260x:flex product1260x:flex-row product1310x:gap-1 product1360x:gap-2 text-[15px]">
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Հատուկ առաջարկներ</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Տան համար</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Բիզնեսի համար</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Մեր մասին</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Վճարել</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">Օգնություն</li>
                    </ul>
                </nav>
                <div className="hidden product1260x:block w-0 h-12 border-[#e2e2e2] border-[0.8px]"></div>
                <div className="block product1260x:hidden">
                    <TopSide />
                </div>
                <div>
                    <a href="" className="flex flex-col product1465x:flex-row gap-2 items-start product1465x:items-center">
                        <div className="hidden product1260x:inline-block">
                            <FaUser />
                        </div>
                        <span className="border-b pb-1 w-full text-center product660x:border-none product660x:w-0 border-gray-300 pt-5 mt-5 product640x:mt-0 product1260x:pt-0">Մուտք</span>
                        <div className="block w-full product660x:hidden">
                            <button className="mt-3 bg-[#8c33e1] text-white hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] w-full h-12 rounded-xl border-none outline-none tracking-wider">Միացի՛ր հիմա</button>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="hidden product660x:block bg-[#8c33e1] text-white hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] min-w-60 h-12 rounded-xl border-none outline-none tracking-wider">Միացի՛ր հիմա</button>
                <button onClick={toggleHamburger} className="block px-3 text-xl product1260x:hidden">
                    {hamburger ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
    )
}