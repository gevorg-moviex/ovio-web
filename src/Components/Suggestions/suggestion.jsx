import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { suggestionsAm } from "../../../dataAm";
import { Navigation } from "swiper/modules";

export default function Suggestions() {
    return (
        <div className="px-3 product340x:px-7 product660x:px-28">
            <div>
                <h1 className="text-3xl font-bold">{suggestionsAm.title}</h1>
            </div>
            <Swiper
                slidesPerView="auto"
                pagination={{ clickable: false }}
                modules={[Navigation]}
            >
                {suggestionsAm.products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="relative flex justify-center bg-cover bg-center items-end h-[532px] py-8 px-7 text-white rounded-[20px] hover:-translate-y-5 transition-all duration-500 cursor-pointer w-[348px] product970x:w-[448px]"
                            style={{ backgroundImage: `url(${item.imageUrl})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-[20px]" />
                            <div className="relative flex flex-col gap-5 z-10">
                                <p className="text-2xl font-bold">{item.title}</p>
                                <p className="text-base">{item.description}</p>
                                <button 
                                    className={`w-auto md:w-[292px] py-3 text-white text-center transition-all duration-300 ${item.id == 1 ? "bg-[#E5326F]" : "bg-[#53079D]"} cursor-pointer text-sm font-semibold rounded-xl hover:brightness-[140%]`}
                                >
                                    Իմացի՛ր ավելին
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
