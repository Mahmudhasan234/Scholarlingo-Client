import React from 'react';

import { Rating } from '@smastrom/react-rating'
import {BsCart4} from 'react-icons/bs'
import '@smastrom/react-rating/style.css'
import Container from '../../Routes/Component/Container/Container';

const IndividualInstructor = ({instructor}) => {
    console.log(instructor)
    return (
        <div>
            
            <Container> 
                <div className="card w-96 mr-5 bg-base-100 shadow-xl mb-5">
                <div className="indicator relative left-16 top-12">
                    <span className='h-10 w-10 mb-5'><img className='rounded' src={instructor.languagesCountryImage[0].countryImage} alt="" /></span>
                </div>
                <figure className="px-10 pt-10 h-80">
                    <img src={instructor.instructorImage} alt="Shoes" className="border-4 p-2 border-rose-400 rounded-full h-[248px] w-[260px]"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.instructorName}</h2>
                    <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(instructor.priceRating)}
                            readOnly
                        />
                         <p className='text-base font-semibold'>Email: {instructor.email}</p>
                    <div className='flex gap-10 items-center'></div>
                        <p className='text-base font-semibold'>Price: ${instructor.price}</p>
                    <div className='flex gap-10 items-center'>
                        <p>Total Seat: {instructor.languagesCountryImage[0].currentEnrollStudent + instructor.languagesCountryImage[0].availableSeatForEnrollment}</p>
                        <p>Available Seat: {instructor.languagesCountryImage[0].availableSeatForEnrollment}</p>   
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-amber-500 hover:bg-amber-600 text-white">Buy Course <BsCart4 className='h-5 w-5'></BsCart4></button>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default IndividualInstructor;