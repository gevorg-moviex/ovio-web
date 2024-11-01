import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { cardsAm } from "../../../dataAm";
import { Navigation } from "swiper/modules";

export default function Cards() {
    return (
        <div className="px-3 mt-16 product340x:px-7 product660x:px-28">
            <div>
                <h1 className="text-3xl font-bold">{cardsAm.title}</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: false }}
                modules={[Navigation]}
                breakpoints={{
                    800: { 
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1020: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                    1420: { 
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                className="cursor-grab py-10 rounded-r-[21px]"
            >
                {cardsAm.products.map((item) => (
                    <SwiperSlide key={item.number} className="w-[453px] my-10 rounded-[20px]">
                        <div className="flex gap-5 h-[152px] shadow-lg rounded-[12px] overflow-hidden">
                            <div
                                className={`bg-[${item.bgColor}] flex justify-center items-center rounded-[21px_120px_120px_21px] py-2 px-10 text-[44px] font-bold text-white`}
                            >
                                <span>{item.number}</span>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-xs text-[#858585] leading-4">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))} 
            </Swiper>
        </div>
    );
}
