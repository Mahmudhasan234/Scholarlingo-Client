import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';
import { Fade } from "react-awesome-reveal"
const PopularInstructors = () => {
const [instructors, setInstructors] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/instructors')
    .then(res=>res.json())
    .then(data=> setInstructors(data))
},[])

const [showAll, setShowAll] = useState(false)


    return (
        <div>
     
            <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400'>Our Popular Instructors</h1>
           
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                       <Fade>
            {
                instructors.slice(0, showAll ? 9: 6).map(instructor => <Instructors instructor={instructor} setShowAll={setShowAll}></Instructors>)
            }
            </Fade>
            </div>
            <button className={`${showAll===true? 'hidden': 'block'}`}  onClick={()=> setShowAll(true)}>show all</button>
        </div>
    );
};

export default PopularInstructors;