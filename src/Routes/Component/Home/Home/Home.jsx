import React from 'react';
import Slider from './Slider/Slider';
import PopularInstructors from '../popular Instructors/PopularInstructors';
import PopularLanguage from '../PopularLanguage/PopularLanguage';
import ExtraComponent from './ExtraComponent/ExtraComponent';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <PopularInstructors></PopularInstructors>
        <PopularLanguage></PopularLanguage>
        <ExtraComponent></ExtraComponent>
        </div>
    );
};

export default Home;