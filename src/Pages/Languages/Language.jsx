import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Container from '../../Routes/Component/Container/Container';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelectedCourse from '../DashBoard/useSelectedCourse';
const Language = ({ item }) => {
    const { user } = useContext(AuthContext)
    const[, refetch] =useSelectedCourse()
    const name = user?.displayName
    const email = user?.email
    const courseName = item.language
    const instructorName = item.instructorName
    const availableSeat = item.availableSeatForEnrollment
    const price = item.price
    const image = item.countryImage
    const currentUser = { name, email, courseName, instructorName, availableSeat, price,image }
    const handleBuyCourses = () => {
        console.log(currentUser)
        fetch(`${import.meta.env.VITE_APIURL}/usersData`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(currentUser),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch()
                    toast.success('Course added to your list')
                }
                console.log(data)
            })
    }
    console.log(item)
    return (
        <div>

            <Container>
                <div className="card w-96 mr-5 bg-base-100 shadow-xl mb-5">
                    <div>
                        <span ><img className='rounded p-10  mb-5' src={item.countryImage} alt="" /></span>
                    </div>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.instructorName}</h2>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(item?.priceRating)}
                            readOnly
                        />
                        <p className='text-base font-semibold'>Email: {item.email}</p>
                        <div className='flex gap-10 items-center'></div>
                        <p className='text-base font-semibold'>Price: ${item.price}</p>
                        <div className='flex gap-10 items-center'>
                            <p>Total Seat: {item.currentEnrollStudent + item.availableSeatForEnrollment}</p>
                            <p>Available Seat: {item.availableSeatForEnrollment}</p>
                        </div>
                        <button className="btn px-8 bg-amber-500 hover:bg-amber-600 text-white"><Link onClick={handleBuyCourses} to={user && user ? '/languages' : '/login'}>Buy Course</Link></button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Language;