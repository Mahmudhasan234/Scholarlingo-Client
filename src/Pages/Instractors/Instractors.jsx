import React, { useEffect, useState } from 'react';
import IndividualInstructor from './IndividualInstructor';

const Instractors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APIURL}/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])


    return (
        <div>
            <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400'>Our Beloved Instructors</h1>
            {
               instructors.map(instructor=> <IndividualInstructor instructor={instructor}></IndividualInstructor>)
            }
        </div>
    );
};

export default Instractors;