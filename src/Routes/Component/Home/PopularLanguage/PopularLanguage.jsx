import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal"
import LanguageCard from './languageCard';

const PopularLanguage = () => {
    const [language, setLanguage] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setLanguage(data))
    }, [])

    return (
        <div className='flex flex-col items-center gap-5'>

            <h1 className='text-2xl lg:text-7xl font-extrabold text-center m-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400'>Our Courses</h1>
            <p className='text-lg mx-52 -mt-12 mb-5 text-center'>Ignite your curiosity and fuel your intellectual growth with our prestigious selection of top courses, meticulously designed to challenge and inspire. Led by distinguished instructors, these transformative learning experiences provide a gateway to explore new disciplines, expand your horizons, and embark on a journey of continuous self-improvement that sets you apart from the rest.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-center mx-5'>
                <Fade>
                    {
                        language.slice(0, 6).map(language => <LanguageCard language={language}></LanguageCard> )
                    }
                </Fade>
            </div>
            <button><span className='btn bg-amber-500  hover:bg-amber-600 text-white mb-5'>show all Instructors</span></button>
        </div>
    );
};

export default PopularLanguage;