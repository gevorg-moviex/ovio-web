import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function TopSide() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [advancedDropdown, setAdvancedDropdown] = useState(false)
    const [flag, setSelectedFlag] = useState("am");

    const handleMouseEnter = () => {
        setDropdownOpen(true);
        setAdvancedDropdown(false);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const mouseAdvanced = () => {
        setAdvancedDropdown(true);
        setDropdownOpen(false);
    }

    const mouseAdvancedLeave = () => {
        setAdvancedDropdown(false);
    }

    const handleSelectFlag = (flag) => {
        setSelectedFlag(flag);
        setDropdownOpen(false);
    };

    return (
        <div className="h-[52px] border-b-[0.1px] border-[#e2e2e2] flex items-center justify-between px-16">
            <div className="flex gap-7 items-center">
                <div>
                    <a href="#" className="flex gap-2 items-center">
                        <FaPhone className="text-[#858585]" />
                        <span className="text-xs">+374 60 46 46 46</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="flex gap-2 items-center">
                        <FaEnvelope className="text-[#858585]" />
                        <span className="text-xs">info@ovio.am</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="flex gap-2 items-center">
                        <FaLocationDot className="text-[#858585]" />
                        <span className="text-xs">Գրասենյակներ և ծածկույթ</span>
                    </a>
                </div>
            </div>
            <div>
                <div className="relative ml-auto flex gap-4 items-center">
                    <div className="flex items-center gap-4">
                        <div className="cursor-pointer" onMouseEnter={mouseAdvanced} onMouseLeave={mouseAdvancedLeave}>
                            <span className="cursor-pointer text-xs">Լրացուցիչ</span>
                        </div>
                        {advancedDropdown && (
                            <div onMouseEnter={mouseAdvanced} onMouseLeave={mouseAdvancedLeave} className={`absolute right-10 top-6 bg-white rounded-xl shadow-topSide mt-1 z-10 transition-opacity duration-300 ${advancedDropdown ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                <ul className="flex flex-col gap-4 w-64 p-4">
                                    <li><a href="">Օգնություն</a></li>
                                    <li><a href="">Հեռախոսային սպասարկում</a></li>
                                    <li><a href="">Աշխատատեղեր</a></li>
                                </ul>
                            </div>
                        )}
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                srcSet={`Flags/${flag}.svg`}
                                alt={`${flag} flag`}
                                className="w-8 h-8 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`absolute -right-3 top-7 bg-white rounded-xl w-14 shadow-topSide mt-1 z-10 transition-opacity duration-300 ${dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    >
                        <div className="flex flex-col items-center p-2 gap-1">
                            <img
                                srcSet="Flags/am.svg"
                                alt="Armenia flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("am")}
                            />
                            <img
                                srcSet="Flags/ru.svg"
                                alt="Russia flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("ru")}
                            />
                            <img
                                srcSet="Flags/en.svg"
                                alt="United States flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("en")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
