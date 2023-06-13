import React from 'react';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);
const PaymentSystem = () => {
    const course = useLoaderData()
   
    return (
        <div className='min-w-[800px] mx-5'>
            <Elements stripe={stripePromise}>
            <CheckOutForm price={course.price}></CheckOutForm>

            </Elements>
        </div>
    );
};

export default PaymentSystem;