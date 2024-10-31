import { useCallback, useRef, useState } from "react"
import { conditionsAm } from "../../../dataAm";
import { FaIdCard, FaLock } from "react-icons/fa";

export default function Login() {
    const [error, setError] = useState(false);

    const userPassportId = useRef();
    const userPassword = useRef();

    return (
        <div className="py-9 mt-14 h-[72vh] flex justify-center items-center text-[#101828]">
            <form action="" className="flex w-auto px-3 product560x:px-0 product560x:w-[480px] h-[352px] border-none outline-none flex-col justify-center gap-6 text-sm">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col relative gap-1 text-[#858585] tracking-wide">
                        <FaIdCard className="absolute text-lg left-4 top-5" />
                        <input type="text" ref={userPassportId} autoComplete="username" placeholder={conditionsAm.titleInputFirst} className="border focus:shadow-register transition-all text-[#101828] duration-200 border-[#e3e8ec] h-14 text-base pl-11 rounded-xl outline-none" name="" id="passportId" />
                        {error && (
                            <span className="text-xs text-red-600">{conditionsAm.error1}</span>
                        )}
                    </div>
                    <div className="flex flex-col relative gap-1 text-[#858585]">
                        <FaLock className="absolute text-lg left-4 top-5" />
                        <input type="password" autoComplete="current-password" ref={userPassword} placeholder={conditionsAm.titleInputSecond} className="border border-[#e3e8ec] focus:shadow-register text-[#101828] transition-all duration-200 h-14 text-base pl-11 rounded-xl outline-none" id="password" />
                        {error && (
                            <span className="text-xs text-red-600">{conditionsAm.error2}</span>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex w-[60%] flex-col justify-center gap-3 items-center">
                        <a href="#" className="text-[#53079d] text-[13px] no-underline">Մոռացե՞լ եք գաղտնաբառը</a>
                        <button type="button" className="rounded-xl outline-none w-full hover:opacity-80 transition-all duration-300 font-semibold bg-[#53079d] px-6 text-white tracking-wide py-4">Մուտք</button>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="flex w-[70%] flex-col justify-center gap-3 items-center text-center">
                        <p className="text-[#858585] text-[13px]">{conditionsAm.loginInfo}</p>
                        <button type="button" className="rounded-2xl outline-none w-[80%] hover:bg-[#101828] hover:text-white transition-all duration-300 font-semibold text-[#101828] border border-[#101828] px-6 tracking-wide py-3">Գրանցվել հիմա</button>
                    </div>
                </div>
            </form>
        </div>
    )
};
