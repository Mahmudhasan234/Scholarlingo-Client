import React from 'react';

import { Rating } from '@smastrom/react-rating'
import { BsCart4 } from 'react-icons/bs'
import '@smastrom/react-rating/style.css'
import Container from '../../Routes/Component/Container/Container';

const Language = ({ item }) => {
    console.log(item)
    return (
        <div>

            <Container>
                <div className="card w-96 mr-5 bg-base-100 shadow-xl mb-5">
                    <div>
                        <span ><img className='rounded p-10  mb-5' src={item.languagesCountryImage[0].countryImage} alt="" /></span>
                    </div>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.instructorName}</h2>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(item.priceRating)}
                            readOnly
                        />
                        <p className='text-base font-semibold'>Email: {item.email}</p>
                        <div className='flex gap-10 items-center'></div>
                        <p className='text-base font-semibold'>Price: ${item.price}</p>
                        <div className='flex gap-10 items-center'>
                            <p>Total Seat: {item.languagesCountryImage[0].currentEnrollStudent + item.languagesCountryImage[0].availableSeatForEnrollment}</p>
                            <p>Available Seat: {item.languagesCountryImage[0].availableSeatForEnrollment}</p>
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

export default Language;