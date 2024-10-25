import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { cardsAm } from "../../../dataAm";
import { Navigation } from "swiper/modules";

export default function Cards() {
    return (
        <div className="px-3 product340x:px-7 product660x:px-28">
            <div>
                <h1 className="text-3xl font-bold">{cardsAm.title}</h1>
            </div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={40}
                pagination={{clickable: false}}
                modules={[Navigation]}
                style={{cursor: "grab", padding: "40px 0", borderRadius: "0 21px"}}
            >
                {cardsAm.products.map((item) => (
                    <SwiperSlide key={item.number} style={{width: "453px", borderRadius: "20px"}}>
                            <div 
                                style={
                                    {
                                        display: "flex",
                                        gap: "20px",
                                        height: "152px",
                                        boxShadow: "0 8px 30px 0 rgba(0,0,0,.15)",
                                        borderRadius: "12px",
                                    }
                                }
                            >
                                <div
                                    style=
                                    {
                                        { 
                                            backgroundColor: item.bgColor,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "21px 120px 120px 21px",
                                            padding: "0 40px 0 30px",
                                            fontSize: "44px",
                                            fontWeight: "bold",
                                            color: "white"
                                        }
                                    }
                                >
                                    <span>{item.number}</span>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}> 
                                    <h4>{item.title}</h4>
                                    <p style={{fontSize: "12px", lineHeight: "1.2", color: "#858585"}}>{item.description}</p>
                                </div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
