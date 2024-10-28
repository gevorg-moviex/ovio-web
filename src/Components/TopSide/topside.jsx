import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function TopSide(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="h-[52px] border-b-[0.1px] border-[#e2e2e2] flex items-center justify-between px-16">
            <div className="flex gap-7 items-center ">
                <div>
                    <a href="" className="flex gap-2 items-center">
                        <FaPhone className="text-[#858585]" />
                        <span className="text-xs">+374 60 46 46 46</span>
                    </a>
                </div>
                <div>
                    <a href="" className="flex gap-2 items-center">
                        <FaEnvelope className="text-[#858585]" />
                        <span className="text-xs">info@ovio.am</span>
                    </a>
                </div>
                <div>
                    <a href="" className="flex gap-2 items-center">
                        <FaLocationDot className="text-[#858585]" />
                        <span className="text-xs">Գրասենյակներ և ծածկույթ</span>
                    </a>
                </div>
            </div>
            <div>
                <div className="relative ml-auto flex gap-4 items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span>Լրացուցիչ</span>
                    <img srcSet="Flags/am.svg" alt="Armenia flag" className="w-8 h-8" />
                    {dropdownOpen && (
                        <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md mt-1 z-10">
                            <div className="flex flex-col p-2">
                                <img srcSet="Flags/am.svg" alt="Armenia flag" className="w-8 h-8 cursor-pointer"/>
                                <img srcSet="Flags/ru.svg" alt="Armenia flag" className="w-8 h-8" />
                                <img srcSet="Flags/en.svg" alt="Armenia flag" className="w-8 h-8" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}