import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';
import { Fade } from "react-awesome-reveal"
const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])




    return (
        <div className='flex flex-col items-center gap-5'>

            <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400'>Our Popular Instructors</h1>
            <p className='text-lg mx-52 -mt-12 mb-5 text-center'>Prepare to be amazed by our popular instructor, whose dynamic teaching style and deep expertise create an immersive and impactful learning journey. With a genuine passion for their subject, they empower students to embrace knowledge and unleash their full potential, making every lesson a truly transformative experience.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-center mx-5'>
                <Fade>
                    {
                        instructors.slice(0, 6).map(instructor => <Instructors instructor={instructor} ></Instructors>)
                    }
                </Fade>
            </div>
            <button><span className='btn bg-amber-500  hover:bg-amber-600 text-white mb-5'>show all Instructors</span></button>
        </div>
    );
};

export default PopularInstructors;