import React from 'react';
import Container from '../../Container/Container';

const Instructors = ({ instructor }) => {
    console.log(instructor)
    console.log(instructor.languagesCountryImage[0].countryImage)
    return (
        <div >

            <Container> <div className="card w-96 bg-base-100 shadow-xl mb-5 ">
                <div className="indicator relative left-16 top-12">
                    <span className='h-10 w-10 '><img className='rounded' src={instructor.languagesCountryImage[0].countryImage} alt="" /></span>
                </div>
                <figure className="px-10 pt-10">
                    <img src={instructor.instructorImage} alt="Shoes" className="border-4 p-2 border-rose-400 rounded-full h-[240px] w-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.instructorName}</h2>
                    <div className='flex gap-10 items-center'>
                    <p>Total Seat: {instructor.languagesCountryImage[0].currentEnrollStudent + instructor.languagesCountryImage[0].availableSeatForEnrollment}</p>
                    <p>Available Seat: {instructor.languagesCountryImage[0].availableSeatForEnrollment}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div></Container>

        </div>
    );
};

export default Instructors;