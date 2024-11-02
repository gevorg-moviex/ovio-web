import { useEffect, useState } from "react";
import { FaBars, FaBookmark, FaCartPlus, FaTimes, FaUser } from "react-icons/fa";
import TopSide from "../TopSide/topside";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";

export default function Navbar(){
    const [hamburger, setHamburger] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const {language} = useLanguage();

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
                <Link to="/">
                    <img src="/header-logo.svg" alt="" width="200" className="pl-3 product1260x:pl-0" />
                </Link>
            </div>
            <div className={`${hamburger ? "block h-screen fixed z-50 pb-5 bg-white top-[70px]" : "hidden"} product1260x:flex items-center justify-center gap-5 w-full px-2`}>
                <nav>
                    <ul className="flex flex-col gap-5 pt-5 w-full product1260x:pt-0 product1260x:gap-0 product1260x:w-auto  product1260x:flex product1260x:flex-row product1310x:gap-1 product1360x:gap-2 text-[15px]">
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Հատուկ առաջարկներ" : language === "en" ? "Special Offers" : language === "ru" ? "Специальные предложения" : null}</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Տան համար" : language === "en" ? "For home" : language === "ru" ? "Для дома" : null}</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Մեր մասին" : language === "en" ? "About us" : language === "ru" ? "О нас" : null}</li>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Վճարել" : language === "en" ? "Payment" : language === "ru" ? "Оплата" : null}</li>
                        <Link to="/help">
                            <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Օգնություն" : language === "en" ? "Help" : language === "ru" ? "Помощь" : null}</li>
                        </Link>
                        <Link to="/basket">
                            <li className="px-2 border-b pb-2 border-solid text-[#7734b7] border-gray-400 product1260x:border-none cursor-pointer hover:text-black hover:scale-105 font-[700] transition-all duration-300">{language === "am" ? "Զամբյուղ" : language === "en" ? "Basket" : language === "ru" ? "Корзина" : null}</li>
                        </Link>
                    </ul>
                </nav>
                <div className="hidden product1260x:block w-0 h-12 border-[#e2e2e2] border-[0.8px]"></div>
                <div className="block product1260x:hidden">
                    <TopSide />
                </div>
                <div>
                    <Link to="/login" className="flex items-center border-b pb-2 hover:bg-[#51227d] transition-all duration-300 bg-[#2596d7] product1260x:bg-white rounded-xl shadow-topSide product1260x:rounded-none product1260x:shadow-none border-gray-200 flex-col product1465x:flex-row gap-2 product1260x:items-start product1465x:items-center">
                        <div className="hidden product1260x:inline-block">
                            <FaUser />
                        </div>
                        <span className="border-b pb-1 w-full text-center text-xl product660x:border-none product660x:w-0 border-gray-300 py-2 text-white product640x:mt-0 product1260x:pt-0">{language === "am" ? "Մուտք" : language === "en" ? "Login" : language === "ru" ? "Вход" : null}</span>
                    </Link>
                        <div className="block w-full product660x:hidden">
                            <button className="mt-3 bg-[#8c33e1] text-white  hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] w-full h-12 rounded-xl border-none outline-none tracking-wider">{language === "am" ? "Միացի՛ր հիմա" : language === "en" ? "Join Now" : language === "ru" ? "Подключись сейчас" : null}</button>
                        </div>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="hidden product660x:block bg-[#8c33e1] text-white hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] min-w-60 h-12 rounded-xl border-none outline-none tracking-wider">{language === "am" ? "Միացի՛ր հիմա" : language === "en" ? "Join Now" : language === "ru" ? "Подключись сейчас" : null}</button>
                <button onClick={toggleHamburger} className="block px-3 text-xl product1260x:hidden">
                    {hamburger ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
    )
}