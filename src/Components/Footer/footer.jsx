import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";
import { footerLinksAm } from "../../../dataAm";

export default function Footer(){
    return (
        <footer className="w-full text-white py-8 bg-[#101828]">
            <div className="flex flex-col gap-9">
                <div className=" flex justify-center product700x:pl-16 product700x:justify-start">
                    <img src="/header-logo.svg" width="130" alt="" />
                </div>
                <div className="flex flex-col gap-10 product700x:gap-0 items-center product700x:flex-row flex-wrap product700x:items-start justify-around py-8">
                    <div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl">Կայքի բաժինները</h3>
                            <hr />
                            <div className="flex gap-9">
                                <div>
                                    <ul className="flex flex-col text-sm">
                                        {footerLinksAm.partOne.map((item, index) => (
                                            <li key={index}>
                                                <a href="#">{item.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col text-sm">
                                        {footerLinksAm.partTwo.map((item, index) => (
                                            <li key={index}>
                                                <a href="#">{item.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col items-center product700x:items-start gap-3 mt-11">
                                {footerLinksAm.contact.map((item, index) => (
                                    <div key={index} className="flex gap-2 items-center text-3xl">
                                        {item.icon == "<FaPhone />" ? <FaPhone className="text-[#1ca18f]" /> : <FaEnvelope className="text-[#1ca18f]" />}
                                        <span>{item.content}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl">Սպասարկման քարտեզ</h3>
                        <hr />
                        <div className=" product1100x:w-[300px] product1100x:h-[200px] product1190x:w-[400px] product1190x:h-[250px]">
                            <iframe className="rounded-xl" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.89614181804!2d44.4059947585326!3d40.15349228404703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1730104966911!5m2!1sru!2sam" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="flex justify-center gap-4 mt-8">
                            <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                                <FaFacebook />  
                            </a>
                            <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                                <FaYoutube />
                            </a>
                            <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                                <FaInstagram />
                            </a>
                            <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                                <FaTelegram />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-5 w-[95%] product700x:w-full product700x:px-20 mt-10 product1064x:mt-0 product1064x:px-0 product1064x:w-[380px] mx-3">
                        <h3 className="text-xl">Որակի վերահսկում</h3>
                        <hr />
                        <div className="text-sm font-normal flex flex-col gap-5">
                            <select className="bg-[#27303f] border cursor-pointer px-3 w-full py-3 border-[#4b515e] rounded-md outline-none">
                                {footerLinksAm.options.map((item, index) => (
                                    <option key={index} className="cursor-pointer" value={item.value}>{item.option}</option>
                                ))}
                            </select>
                            <div className="flex flex-col gap-5">
                                <input type="text" name="" id="" placeholder="Ձեր անունը" className="bg-[#27303f] border px-3 py-3 border-[#4b515e] rounded-md outline-none" />
                                <input type="text" name="" id="" placeholder="Ձեր էլ․ փոստի հասցեն" className="bg-[#27303f] border px-3 py-3 border-[#4b515e] rounded-md outline-none" />
                                <input type="text" name="" id="" placeholder="Հեռ․ 091XXXXXX" className="bg-[#27303f] border px-3 py-3 border-[#4b515e] rounded-md outline-none" />
                                <input type="text" name="" id="" placeholder="Ձեր հաղորդագրությունը" className="bg-[#27303f] border px-3 h-24 border-[#4b515e] rounded-md outline-none" />
                                <button className="min-w-60 text-sm bg-[#53079d] font-bold py-4 px-6 rounded-xl border-none outline-none">Ուղարկել</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}