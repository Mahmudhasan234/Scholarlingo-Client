import React, { useContext, useState } from 'react';
import Container from '../../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineArrowRight, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../../Provider/AuthProvider';

const Registration = () => {
    // ---get data from authprovider ---
    const { createUser, createUserWithGoogle, UpdateUserContent } = useContext(AuthContext)
    const navigate = useNavigate()

    // ------ password show/hide----
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }



    // ------- react form hook start -----
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const confirmPassword = watch("confirmPassword");
    const password = watch("password");
    const onSubmit = data => {
        
        const name = data.name
        // upload image
        const formData = new FormData()
        formData.append('image', data.image[0])
        const url = ` https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`
        fetch(url, { method: 'POST', body: formData })
            .then(res => res.json()
                .then(imageurl => {
                    console.log(imageurl)
                    const image = imageurl.data.display_url
                    console.log(name, image)
                    // ------ create user ----
                    createUser(data.email, data.password)
                        .then(result => {
                            console.log(result.user)
                            UpdateUserContent(name, image)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email }
                                    fetch(`${import.meta.env.VITE_APIURL}/users`, {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.insertedId) {
                                                toast.success(`welcome 🖐`)
                                            }
                                        })
                                    navigate('/')
                                })
                        })
                        .catch(err => { toast.error("Something went Wrong 😔 please try again!!") })
                }))
    }
    // ------- react form hook end -----

    const handleSignInWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                const saveUser = { name: result.user.displayName, email: result.user.email }
                fetch(`${import.meta.env.VITE_APIURL}/users`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success(`welcome ${result.user.displayName} 🖐`)
                        }
                    })
                navigate('/')


                console.log(result.user);
            })
            .catch(err => {
                toast.error("Something went Wrong 😔 please try again!!")
                console.log(err.message)
            })
    }


    return (
        <div>
            <Container>
                <div className='lg:flex lg:gap-16 lg:justify-center lg:items-center'>
                    <div>
                        <h1 className='scale-150'> <Link to='/'><AiOutlineArrowRight></AiOutlineArrowRight></Link></h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="lg:p-24 p-6 min-w-full">
                                <h1 className='text-xl md:text-4xl text-center font-bold mb-5'>Create an Account</h1>
                                <div className=" min-w-full">
                                    <label className="label">
                                        <span className="label-text">Name *</span>
                                    </label>
                                    <input required type="text" name='name'{...register("name")} placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className=" min-w-full">
                                    <label className="label">
                                        <span className="label-text">Email *</span>
                                    </label>
                                    <input required type="text" name='email'{...register("email")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className='flex flex-col mt-5 ml-0 w-max mx-auto'>
                                    <label>
                                        <span className="label-text mb-5">Upload your image *</span>
                                        <input required
                                            className='cursor-pointer hidden'
                                            type='file'
                                            name='image'
                                            {...register("image")}
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-amber-500 text-white border border-gray-300 rounded font-semibold cursor-pointer my-2 p-1 px-3 hover:bg-amber-600'>
                                            Upload Your Image
                                        </div>
                                    </label>
                                </div>

                                <div className="min-w-full">
                                    <label className="label">
                                        <span className="label-text">Password *</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input required type={show ? "text" : "password"} name='password' {...register("password", {
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters long."
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
                                                message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                                            }
                                        })} placeholder="password" className="input input-bordered" />
                                        <p onClick={handleShow} className='text-right absolute left-56 md:left-80 lg:left-80 xl:left-[700px] cursor-pointer'>{show ? <AiFillEyeInvisible className='h-6 w-6'></AiFillEyeInvisible> : <AiFillEye className='h-6 w-6'></AiFillEye>}</p>
                                    </div>
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                </div>
                                <div className="min-w-full">
                                    <label className="label">
                                        <span className="label-text"> Confirm Password *</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input required type={show ? "text" : "password"} name='confirmPassword' {...register("confirmPassword", {
                                            validate: value => value === password || "Passwords do not match."
                                        })} placeholder="password" className="input input-bordered" />
                                        <p onClick={handleShow} className='text-right absolute left-56 md:left-80 lg:left-80 xl:left-[700px] cursor-pointer'>{show ? <AiFillEyeInvisible className='h-6 w-6'></AiFillEyeInvisible> : <AiFillEye className='h-6 w-6'></AiFillEye>}</p>
                                    </div>
                                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                                    <label className="label">

                                        <p>Already Have an Account? <Link to='/login'>Login</Link></p>
                                    </label>
                                </div>
                                {/* <label className="label">

                                    <p>Already Have an Account? <Link to='/login'>Login</Link></p>
                                </label> */}
                                <div className="form-control mt-6">
                                    <div className="flex flex-col w-full border-opacity-50">
                                        <div className="grid card  rounded-box place-items-center"><button className='btn hover:bg-amber-600 bg-amber-500 text-gray-200 min-w-full'>Create Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="divider -mt-1 lg:-mt-16">OR</div>
                        <div onClick={handleSignInWithGoogle} ><button className='btn hover:bg-amber-600 bg-amber-500 relative left-6 lg:left-[95px] w-[315px] text-gray-200 mb-12'><FcGoogle className='h-5 w-5'></FcGoogle> Login with Google</button></div>
                        <div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src="https://i.ibb.co/dg2Pd9v/3d-hand-hold-smartphone-with-authentication-form-removebg-preview.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Registration;