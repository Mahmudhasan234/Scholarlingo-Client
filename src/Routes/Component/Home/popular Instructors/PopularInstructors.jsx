import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';

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
            {
                instructors.slice(0, showAll ? 9: 6).map(instructor => <Instructors instructor={instructor} setShowAll={setShowAll}></Instructors>)
            }
            <button className={`${showAll===true? 'hidden': 'b'}`}  onClick={()=> setShowAll(true)}>show all</button>
        </div>
    );
};

export default PopularInstructors;