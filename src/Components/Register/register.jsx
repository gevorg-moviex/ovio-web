    import { useCallback, useRef, useState } from "react"
    import { conditionsAm } from "../../../dataAm";

    export default function Register() {
        const [modal, setModal] = useState(false);
        const [checked, isChecked] = useState(false);
        const [error, setError] = useState(false);

        const passportId = useRef();
        const numberPhone = useRef();

        const toggleModal = () => {
            setModal(prev => !prev);
        }

        const getInfo = useCallback((event) => {
            event.preventDefault()
            const passportIdValue = passportId.current.value
            const numberPhoneValue = numberPhone.current.value;

            if(passportIdValue === "" || numberPhoneValue === "" || !checked){
                setError(true)
            }else{
                setError(false);

                const obj = {
                    date: new Date().toString(),
                    passportId: passportIdValue,
                    numberPhone: numberPhoneValue
                }

                passportId.current.value = "",
                numberPhone.current.value = "",
                isChecked(false)


                const infosArr = JSON.parse(localStorage.getItem("info")) || [];
                infosArr.push(obj)
                localStorage.setItem("info", JSON.stringify(infosArr))
            }
        },[checked])

        return (
            <div className="py-8 h-[72vh] flex justify-center items-center text-[#101828]">
                {modal && (
                    <div className="w-full px-4 product560x:px-0 fixed flex justify-center items-center z-50 inset-0 bg-black bg-opacity-60">
                        <div className="w-[404px] rounded-xl h-auto px-3 py-4 product560x:py-0 product560x:h-[390px] bg-white flex flex-col gap-6 product560x:px-4 text-center justify-center items-center">
                            <span className="font-semibold">{conditionsAm.title}</span>
                            <p className="text-xs text-[#555050] font-semibold">{conditionsAm.description}</p>
                            <button onClick={() => setModal(false)} className="text-[#212529] font-semibold text-sm py-3 px-5 border border-[#c6cdd3] rounded-xl">{conditionsAm.buttonContent}</button>
                        </div>
                    </div>
                )}
                <form action="" className="flex w-auto px-3 product560x:px-0 product560x:w-[480px] h-[352px] border-none outline-none flex-col justify-around text-sm">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="passportId">{conditionsAm.titleInputFirst}</label>
                            <input type="text" ref={passportId} className="border focus:shadow-register transition-all duration-200 border-[#e3e8ec] h-11 pl-2 rounded-md outline-none" name="" id="passportId" />
                            {error && (
                                <span className="text-xs text-red-600">{conditionsAm.error1}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="number">{conditionsAm.titleInputSecond}</label>
                            <input type="number" ref={numberPhone} placeholder="xxx xx xx xx" className="border border-[#e3e8ec] placeholder:opacity-90 placeholder:text-[#233353] focus:shadow-register transition-all duration-200 h-11 pl-2 rounded-md outline-none" id="number" />
                            {error && (
                                <span className="text-xs text-red-600">{conditionsAm.error2}</span>
                            )}
                        </div>
                        <div className="flex gap-3 items-center">
                            <input type="checkbox" onChange={() => isChecked(prev => !prev)} checked={checked} name="" id="" className="text-7xl  w-5 cursor-pointer border border-[#e3e8ec] rounded-md h-5" />
                            <p className={`text-xs ${error ? "text-red-600" : "text-[#858585]"}`}>{conditionsAm.checkboxText} <span className="text-[#53079d] cursor-pointer" onClick={toggleModal}>պայմաններին</span> </p>
                        </div>
                    </div>
                    <div onClick={getInfo}>
                        <button type="button" className="rounded-xl outline-none w-full hover:opacity-80 transition-all duration-300 font-semibold bg-[#53079d] px-6 text-white tracking-wide py-4">Գրանցվել</button>
                    </div>
                </form>
            </div>
        )
    };