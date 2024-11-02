import { useCallback, useRef, useState } from "react"
import { conditionsAm } from "../../../dataAm";
import { conditionsRu } from "../../../dataRu";
import { conditionsEn } from "../../../dataEn";
import { useNavigate } from "react-router";
import { useLanguage } from "../../Context/language";

    export default function Register() {
        const {language} = useLanguage();
        const [modal, setModal] = useState(false);
        const [checked, isChecked] = useState(false);
        const [error, setError] = useState(false);

        const data = language == "am" ? conditionsAm : language == "ru" ? conditionsRu : conditionsEn

        const passportId = useRef();
        const passwordUser = useRef();

        const navigate = useNavigate();

        const toggleModal = () => {
            setModal(prev => !prev);
        }

        const getInfo = useCallback((event) => {
            event.preventDefault()
            const passportIdValue = passportId.current.value
            const passwordUserValue = passwordUser.current.value;

            if(passportIdValue === "" || passwordUserValue === "" || !checked){
                setError(true)
            }else{
                setError(false);

                const obj = {
                    date: new Date().toString(),
                    passportId: passportIdValue,
                    passwordUser: passwordUserValue
                }

                passportId.current.value = "",
                passwordUser.current.value = "",
                isChecked(false)


                const infosArr = JSON.parse(localStorage.getItem("info")) || [];
                infosArr.push(obj)
                localStorage.setItem("info", JSON.stringify(infosArr))

                navigate("/login")
            }
        },[checked])

        return (
            <div className="py-8 h-[72vh] flex justify-center items-center text-[#101828]">
                {modal && (
                    <div className="w-full px-4 product560x:px-0 fixed flex justify-center items-center z-50 inset-0 bg-black bg-opacity-60">
                        <div className="w-[404px] rounded-xl h-auto px-3 py-4 product560x:py-0 product560x:h-[390px] bg-white flex flex-col gap-6 product560x:px-4 text-center justify-center items-center">
                            <span className="font-semibold">{data.title}</span>
                            <p className="text-xs text-[#555050] font-semibold">{data.description}</p>
                            <button onClick={() => setModal(false)} className="text-[#212529] font-semibold text-sm py-3 px-5 border border-[#c6cdd3] rounded-xl">{data.buttonContent}</button>
                        </div>
                    </div>
                )}
                <form action="" className="flex w-auto px-3 product560x:px-0 product560x:w-[480px] h-[352px] border-none outline-none flex-col justify-around text-sm">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="passportId">{data.titleInputFirst}</label>
                            <input type="text" ref={passportId} autoComplete="username" className="border focus:shadow-register transition-all duration-200 border-[#e3e8ec] h-11 pl-2 rounded-md outline-none" name="" id="passportId" />
                            {error && (
                                <span className="text-xs text-red-600">{data.error1}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password">{data.titleInputSecond}</label>
                            <input type="password" autoComplete="current-password" ref={passwordUser} placeholder="**********" className="border border-[#e3e8ec] placeholder:opacity-90 placeholder:text-[#233353] focus:shadow-register transition-all duration-200 h-11 pl-2 rounded-md outline-none" id="password" />
                            {error && (
                                <span className="text-xs text-red-600">{data.error2}</span>
                            )}
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" onChange={() => isChecked(prev => !prev)} checked={checked} name="" id="" className="text-7xl  w-5 cursor-pointer border border-[#e3e8ec] rounded-md h-5" />
                            <p className={`text-xs ${error ? "text-red-600" : "text-[#858585]"}`}>{data.checkboxText} <span className="text-[#53079d] cursor-pointer" onClick={toggleModal}>{language == "am" ? "պայմաններին" : language == "en" ? "terms and conditions." : language == "ru" ? "условиями." : null}</span> </p>
                        </div>
                    </div>
                    <div onClick={getInfo}>
                        <button type="button" className="rounded-xl outline-none w-full hover:opacity-80 transition-all duration-300 font-semibold bg-[#53079d] px-6 text-white tracking-wide py-4">{language == "am" ? "Գրանցվել" : language == "en" ? "Sign Up" : language == "ru" ? "Pегистрация" : null}</button>
                    </div>
                </form>
            </div>
        )
    };
