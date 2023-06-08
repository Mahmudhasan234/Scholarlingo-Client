
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <div>
            < Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="flex justify-center items-center p-24">
                    <div><h1 className="text-7xl font-bold text-left ">Bring Your in-built <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Translator</span></h1>

                    </div>
                    <div><img src="https://i.ibb.co/PQxC3C9/6435775-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center p-24">
                    <div><h1 className="text-6xl  font-bold text-left ">Keep Yourself Confident Among  <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-500">Colleagues</span></h1>

                    </div>
                    <div><img className="scale-150" src="https://i.ibb.co/m52v938/376402-PBOZ5-F-614-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
                <SwiperSlide><div className="flex justify-center items-center p-24">
                    <div><h1 className="text-6xl  font-bold text-left ">Being Talkative While <br /><span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600">Traveling </span></h1>

                    </div>
                    <div><img className="scale-x-110" src="https://i.ibb.co/Gvwc8zG/2899721-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;