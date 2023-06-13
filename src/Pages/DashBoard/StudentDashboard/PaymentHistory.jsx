import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [enroll, setEnroll] = useState([])
    console.log(enroll)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APIURL}/payments/${user.email}`)
            .then(response => response.json())
            .then(data => setEnroll(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold'>Your Payment History</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Instructor</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {enroll.map((data) => (
                        <tr key={data._id}>
                            <td>{data.courseName}</td>
                            <td>{data.instructorName}</td>
                            <td>${data.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;