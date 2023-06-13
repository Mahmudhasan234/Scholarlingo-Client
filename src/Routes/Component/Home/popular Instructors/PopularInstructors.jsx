import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Imort Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper";
import Instructors from './Instructors';
import { Fade } from "react-awesome-reveal"
import { Link } from 'react-router-dom';
import {MdOutlineArrowForward} from 'react-icons/md'

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APIURL}/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])




    return (
        <div className='flex flex-col items-center gap-5'>

            <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400'>Our Popular Instructors</h1>
            <p className='text-sm lg:text-lg lg:mx-52 -mt-12 lg:mb-5 text-center'>Prepare to be amazed by our popular instructor, whose dynamic teaching style and deep expertise create an immersive and impactful learning journey. With a genuine passion for their subject, they empower students to embrace knowledge and unleash their full potential, making every lesson a truly transformative experience.</p>

            <p><MdOutlineArrowForward className='animate-bounce h-5 w-10 inline-block '></MdOutlineArrowForward> Swipe to view Instructors</p>
            <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
               <div>
               {
                        instructors.slice(0, 6).map(instructor =><SwiperSlide>

                            <Instructors instructor={instructor} ></Instructors>
                        </SwiperSlide> 
                            )
                    }
               </div>
                
            </Swiper>
            <button><span className='btn bg-amber-500  hover:bg-amber-600 text-white mb-5'><Link to='/instractors'>show all Instructors</Link></span></button>
        </div>
    );
};

export default PopularInstructors;