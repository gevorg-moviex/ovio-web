import { channelsAm } from "../../../dataAm";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Channel({ active }) {
    return (
        <div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2, 
                //     },
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     1024: {
                //         slidesPerView: 2,
                //     },
                // }}
            >
                {active ? (
                    channelsAm.shantTv.products.map(item => (
                        <SwiperSlide key={item.id} style={{ height: '200px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                }}
                                className="h-full bg-cover bg-center flex items-end p-4"
                            >
                                <span className="text-white text-lg font-bold">{item.title}</span>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    channelsAm.viju.products.map(item => (
                        <SwiperSlide key={item.id} style={{ height: '300px' }}>
                            <div
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                }}
                                className="h-full bg-cover bg-center flex items-end p-4"
                            >
                                <span className="text-white text-lg font-bold">{item.title}</span>
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}
