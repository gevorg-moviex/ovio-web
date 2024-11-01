import { act, useState } from "react";
import { channelsAm } from "../../dataAm";
import Channel from "../Components/Channel/channel";

export default function SuggestionsLayout() {
    const [active, setActive] = useState(false)

    return (
        <div className="flex flex-col mt-20 gap-4 items-center">
            <div className="w-[90%] flex flex-col gap-8">
                <h1 className="text-3xl font-medium">{channelsAm.title}</h1>
                <div>
                    <ul className="flex bg-[#f4f4f4] items-center rounded-xl px-4 gap-3">
                        <li className={`px-10 cursor-pointer py-3 font-semibold ${active ? "border-none" : "border-b-[3px] border-[#53079d] text-[#53079d]"}`} onClick={() => setActive(false)}>{channelsAm.viju.channelTitle}</li>
                        <li className={`px-5 cursor-pointer py-3 font-semibold ${active ? "border-b-[3px] border-[#53079d] text-[#53079d]" : "border-none"}`} onClick={() => setActive(true)}>{channelsAm.shantTv.title}</li>
                    </ul>
                </div>
                <Channel active={active} />
                <div className="flex gap-6">
                    <button className="min-w-60 bg-[#53079d] text-white rounded-xl font-semibold transition-all duration-300 px-4 py-2 hover:brightness-[130%]">Փաթեթներ</button>
                    <button className="min-w-60 bg-[#04eed2] text-white rounded-xl font-semibold transition-all duration-300 px-4 py-2 hover:brightness-[130%]">Բոլոր ալիքները</button>
                </div>
            </div>
        </div>
    )
};
