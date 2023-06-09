
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Typewriter } from 'react-simple-typewriter'
import { Pagination } from "swiper";
import "./styles.css";

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
                <SwiperSlide><div className="md:flex gap-36 justify-center items-center p-24">
                    <div><h1 className="text-xl md:text-7xl font-bold text-left ">Bring Your in-built <br /> <span className="text-xl md:text-7xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"><Typewriter
                        words={['Translator', 'অনুবাদক ', 'अनुवादक ', 'Übersetzer/in', 'مُتَرْجِم ']}
                        loop={20}
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={90}
                        delaySpeed={1000}

                    /></span></h1>

                    </div>
                    <div><img src="https://i.ibb.co/PQxC3C9/6435775-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
                <SwiperSlide><div className="md:flex justify-center items-center p-24">
                    <div><h1 className="text-xl md:text-5xl  font-bold text-left ">Keep Yourself Confident with <br />  <span className="text-xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-500"><Typewriter
                        words={['Colleagues', 'Kollegen ', 'Collègues', 'Colegas','Collega']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={90}
                        delaySpeed={1000}

                    /></span></h1>

                    </div>
                    <div><img className="" src="https://i.ibb.co/m52v938/376402-PBOZ5-F-614-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
                <SwiperSlide><div className="md:flex justify-center items-center p-24">
                    <div><h1 className="text-xl md:text-6xl  font-bold text-left ">Being Talkative While <br /><span className="text-xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600"><Typewriter
                        words={['Traveling', 'Reisen', '旅行 ', 'Viaggiare']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={90}
                        delaySpeed={1000}

                    /></span></h1>

                    </div>
                    <div><img className="scale-x-110" src="https://i.ibb.co/Gvwc8zG/2899721-removebg-preview.png" alt="" /></div>

                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;