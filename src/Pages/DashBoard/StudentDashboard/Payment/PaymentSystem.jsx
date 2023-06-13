import React, { useEffect, useState } from 'react';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);
const PaymentSystem = () => {
    const course = useLoaderData()
   return (
        <div className='min-w-full px-64'>
            <h1 className="text-4xl font-semibold mb-16">Total Amount: ${course.price}</h1>
            <Elements stripe={stripePromise}>
            <CheckOutForm course={course}></CheckOutForm>

            </Elements>
        </div>
    );
};

export default PaymentSystem;