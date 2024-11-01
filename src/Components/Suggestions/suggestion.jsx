import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { suggestionsAm } from "../../../dataAm";
import { Navigation } from "swiper/modules";

export default function Suggestions() {
    return (
        <div className="px-3 mt-4 product340x:px-7 product660x:px-28">
            <div>
                <h1 className="text-3xl w-full font-bold pb-4">{suggestionsAm.title}</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: false }}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1744: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {suggestionsAm.products.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        className={`${
                            index === 0 ? 'col-span-1 row-start-2' : 'col-span-1 row-start-1'
                        } transition-all duration-500`}
                    >
                        <div
                            className="relative my-10 flex justify-center bg-cover bg-center items-end h-[432px] py-8 px-7 text-white rounded-[20px] hover:-translate-y-5 transition-all duration-500 cursor-pointer w-full product640x:max-w-[348px] product970x:max-w-[448px]"
                            style={{ backgroundImage: `url(${item.imageUrl})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-[20px]" />
                            <div className="px-2 product1260x:px-0 relative flex flex-col gap-5 z-10">
                                <p className="text-xl product1260x:text-2xl font-bold">{item.title}</p>
                                <p className="text-base">{item.description}</p>
                                <button 
                                    className={`w-auto product1260x:w-[292px] py-3 text-white text-center transition-all duration-300 ${item.id === 1 ? "bg-[#E5326F]" : "bg-[#53079D]"} cursor-pointer text-sm font-semibold rounded-xl hover:brightness-[140%]`}
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
