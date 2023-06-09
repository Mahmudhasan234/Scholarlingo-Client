import React, { useEffect, useState } from 'react';
import Language from './Language';


const Languages = () => {
    const [language, setLanguage] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APIURL}/instructors`)
            .then(res => res.json())
            .then(data => setLanguage(data))
    }, [])
    return (
        <div>
              <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400'>Language Courses We Offer</h1>
           <div  className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-center mx-5 mt-5'>
           {
                language.map(item=><Language item={item}></Language>)
            }
           </div>
        </div>
    );
};

export default Languages;