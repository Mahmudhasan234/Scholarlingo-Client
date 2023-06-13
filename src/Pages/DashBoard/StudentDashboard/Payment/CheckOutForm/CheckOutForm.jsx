
import React, { useContext, useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ course }) => {
  console.log(course.instructorId)
  const price = course.price
  const date = new Date()
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  // console.log(user.displayName, user.email)
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('');
  const [proccessing, setProcessing] = useState(false);
  useEffect(() => {
    if (price) {
      fetch(`${import.meta.env.VITE_APIURL}/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price })
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setClientSecret(data.clientSecret)
        })
    }
  }, [])




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error: confirmError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (confirmError) {
      console.log('[error]', confirmError);
      setCardError(confirmError.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true)
    // confirm payment
    const { paymentIntent, error: confoirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown email',
          },
        },
      },
    );
    if (confoirmError) {
      console.log('[error]', confirmError);
      setCardError(confirmError.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      console.log('[Payment intent]', paymentIntent);
    }
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      fetch(`${import.meta.env.VITE_APIURL}/payments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email, transactionId: paymentIntent.id,
          price,
          courseName: course.courseName,
          instructorName: course.instructorName,
          instructorId: course.instructorId,
          date,
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            fetch(`${import.meta.env.VITE_APIURL}/usersData/${course._id}`, { method: 'DELETE' })
              .then(res => res.json())
              .then(data => {


                console.log(data)

              })

            toast.success('payment Successful')
            navigate('/dashboard/history')
          }
        })
    }
    

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {cardError && <p className='mt-5 text-red-500'>{cardError}</p>}
        <button className='btn btn-xs btn-outline mt-5' type="submit" disabled={!stripe || !clientSecret || proccessing}>
          Pay
        </button>
      </form>


    </>
  );
};


export default CheckOutForm;