import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Container from '../../Routes/Component/Container/Container';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelectedCourse from '../DashBoard/useSelectedCourse';
import useInstructor from '../../Hooks/useInstructor';
const Language = ({ item }) => {
    console.log(item)
    const { user } = useContext(AuthContext)
    const [instructorEmail] = useInstructor()
    // console.log(instructorEmail)
    const [checkRole, setCheckRole] = useState([])
    // console.log(checkRole.admin)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APIURL}/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setCheckRole(data))
    }, [])

    // console.log(user)
   
    const [, refetch] = useSelectedCourse()

    const name = user?.displayName
    const email = user?.email
    const courseName = item.language
    const instructorName = item.instructorName
    const availableSeat = item.availableSeatForEnrollment
    const price = item.price
    const image = item.countryImage
    const instructorId = item._id
    const currentUser = { name, email, courseName, instructorName, availableSeat, price, image,instructorId }
    const handleBuyCourses = () => {
        console.log(currentUser)
        if(user){
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
                    // console.log(data)
                })
        }
    }
    // console.log(item)
    return (
        <div>

            <Container>
                <div className={`hover:scale-110 transition-transform duration-500 my-10 card w-96 mr-5 ${item.availableSeatForEnrollment == 0 ? 'bg-red-300 text-white' : 'bg-base-100'} shadow-2xl`}>
                    <div>
                        <span ><img className='rounded-2xl p-10  mb-5 ' src={item.countryImage} alt="" /></span>
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
                            <p>Enrolled Students: {item.currentEnrollStudent}</p>
                            <p>Available Seat: {item.availableSeatForEnrollment}</p>
                        </div>
                        {
                            checkRole?.admin || instructorEmail?.admin ? <button disabled className="btn px-8 mt-5 bg-amber-500 hover:bg-amber-600 text-white"><Link>Buy Course</Link></button> : <>
                                {
                                    item.availableSeatForEnrollment == 0 ? <button disabled className="btn px-8 mt-5 bg-amber-500 hover:bg-amber-600 text-white"><Link onClick={handleBuyCourses} to={user && user ? '/languages' : '/login'}>Buy Course</Link></button> : <button className="btn px-8 mt-5 bg-amber-500 hover:bg-amber-600 text-white"><Link onClick={handleBuyCourses} to={user && user ? '/languages' : '/login'}>Buy Course</Link></button>
                                }
                            </>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Language;