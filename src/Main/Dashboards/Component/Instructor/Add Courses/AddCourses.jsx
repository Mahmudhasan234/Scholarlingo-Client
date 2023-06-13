import React, { useContext, useState, } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddCourses = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(img)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = user.displayName
        const email = user.email
        const instructorImage = user.photoURL
        const language = form.courseName.value
        const image = form.image.files[0]
        const availableSeatForEnrollment = form.availableSeat.value
        const price = form.price.value
        const status = 'pending'
        const newCourse= {name, email, language, availableSeatForEnrollment,price,instructorImage,status}
        const formData= new FormData() 
        formData.append('image', image )
        const url = ` https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`
        fetch(url,{method: 'POST', body:formData})
        .then(res=>res.json())
        .then(image=>{
        const countryImage= image.data.display_url
        const {name, email, language, availableSeatForEnrollment,price,status}= newCourse
        const finalCourse = {name, email, language, availableSeatForEnrollment,price, instructorImage, countryImage,status}
        console.log(finalCourse)
        fetch(`${import.meta.env.VITE_APIURL}/reviews`, {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(finalCourse)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('your course is uploaded for review')
                navigate('/dashboard')

            }
        })
        })
            // console.log(newCourse)
    }
    return (
        <div>
            <div className="flex min-w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Course Name"
                                name='courseName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <div className='flex flex-col mt-5 ml-0 w-max mx-auto'>
                                <label>
                                    <span className="label-text mb-5">Upload your image</span>
                                    <input
                                        className='cursor-pointer hidden'
                                        type='file'
                                        name='image'
                                        // {...register("image")}
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-amber-500 text-white border border-gray-300 rounded font-semibold cursor-pointer my-2 p-1 px-3 hover:bg-amber-600'>
                                        Upload Your Image
                                    </div>
                                </label>
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input disabled defaultValue={user.email} type="text" name='userEmail' placeholder="email" className="input input-bordered opacity-40" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input disabled defaultValue={user.displayName} name='userName' type="text" placeholder="email" className="input input-bordered opacity-40" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Seat</span>
                            </label>
                            <input type="number" placeholder="Your Total seat" name='availableSeat' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white  hover:bg-amber-600 bg-amber-500">Add Course</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourses;