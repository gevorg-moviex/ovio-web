import { Swiper, SwiperSlide } from "swiper/react";
import { newsAm } from "../../../dataAm";
import { Navigation, Pagination } from "swiper/modules";

export default function News() {
    return (
        <div className="pl-10 product560x:pl-20 product1190x:pl-36">
            <span className="text-3xl font-bold mx-5">{newsAm.title}</span>
            <Swiper
                slidesPerView={4}
                spaceBetween={150}
                breakpoints={{
                    1568: {
                        slidesPerView: 4,
                        spaceBetween: 150,
                    },
                    1030: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    859: {
                        slidesPerView: 2,
                        spaceBetween: -130
                    },
                    725: {
                        spaceBetween: 10
                    },
                    616: {
                        slidesPerView: 1,
                        spaceBetween: -210
                    },
                    515: {
                        spaceBetween: -100
                    },
                    400: {
                        spaceBetween: -50
                    }
                

                }}
                navigation
                modules={[Navigation, Pagination]}
                className="cursor-grab"
                style={{display: "flex", justifyContent: "center"}}
            >
                {newsAm.products.map((item => (
                    <SwiperSlide key={item.id}>
                        <div className="flex my-10 mx-5 flex-col w-[300px] product1310x:w-[364px] h-[380px] cursor-pointer hover:-translate-y-4 transition-all duration-300 shadow-topSide rounded-[20px]">
                            <div style={{backgroundImage: `url(${item.imageUrl})`}} className="bg-cover flex flex-col items-end overflow-visible rounded-t-[20px] bg-center relative h-[50%] z-0">
                                <span className={`${item.id % 2 == 0 ? "bg-[#53079d]" : "bg-[#04eed2]"} text-white px-3 py-1 rounded-tl-xl rounded-br-xl relative  right-6 -top-4 text-sm`}>{item.top}</span>
                            </div>
                            <div className="h-[50%] px-4 flex flex-col justify-evenly">
                                <div>
                                    <span className="text-base font-semibold">{item.title.length > 45 ? `${item.title.substring(0, 45)}...` : `${item.title}`}</span>
                                </div>
                                <div>
                                    <span className="text-sm font-[500]">{item.date}</span>
                                    <p className="text-xs">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )))}
            </Swiper>
            <div className=" product885x:w-full">
                <button className="bg-[#04eed2] w-[90%] product885x:w-auto font-semibold text-black border-none px-7 py-3 rounded-xl hover:text-white outline-none">Բոլոր նորությունները</button>
            </div>
        </div>
    )
};
