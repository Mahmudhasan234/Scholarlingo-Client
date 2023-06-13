import React, { useContext } from 'react';

import { Rating } from '@smastrom/react-rating'
import { BsCart4 } from 'react-icons/bs'
import '@smastrom/react-rating/style.css'
import Container from '../../Routes/Component/Container/Container';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const IndividualInstructor = ({ instructor }) => {
    
    // console.log(instructor)



    return (
        <div>

            <Container>
                <div className="hover:scale-105 transition-transform duration-500 card w-96 mr-5 bg-base-100 shadow-xl mb-16">
                    <div className="indicator relative left-16 top-12">
                        <span className='h-10 w-10 mb-5'>{instructor.countryImage? <img className='rounded' src={instructor.countryImage
                        } alt="" />:<p className='text-lg font-bold'>{instructor.language}</p>}</span>
                    </div>
                    <figure className="px-10 pt-10 h-80">
                        <img src={instructor.instructorImage} alt="Shoes" className="border-4 p-2 border-rose-400 rounded-full h-[248px] w-[260px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{instructor.instructorName}</h2>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(instructor?.priceRating)}
                            readOnly
                        />
                        <p className='text-base font-semibold'>Email: {instructor.email}</p>
                        <div className='flex gap-10 items-center'></div>
                        <p className='text-base font-semibold'>Price: ${instructor.price}</p>
                        <div className='flex gap-10 items-center'>
                            <p>Total Seat: {instructor.currentEnrollStudent + instructor.availableSeatForEnrollment}</p>
                            <p>Available Seat: {instructor.availableSeatForEnrollment}</p>
                        </div>
                       
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default IndividualInstructor;