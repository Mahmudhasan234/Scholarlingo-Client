import React, { useContext, useState } from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../../Provider/AuthProvider';

const Registration = () => {
    // ---get data from authprovider ---
    const { createUser, createUserWithGoogle } = useContext(AuthContext)


    // ------ password show/hide----
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }




    // ------- react form hook start -----
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('clicked');
        // ------ create user ----
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.error(err.message));
    }
    // ------- react form hook end -----

    const handleSignInWithGoogle = () => {
        createUserWithGoogle()
            .then(result => { console.log(result.user); })
            .catch(err => { console.log(err.message); })
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
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name'{...register("name")} placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className=" min-w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email'{...register("email")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className='flex flex-col mt-5 ml-0 w-max mx-auto'>
                                    <label>
                                        <span className="label-text mb-5">Upload your image</span>
                                        <input
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
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={show ? "text" : "password"} name='password' {...register("password")} placeholder="password" className="input input-bordered" />
                                        <p onClick={handleShow} className='text-right absolute left-56 md:left-80 lg:left-80 xl:left-[510px] cursor-pointer'>{show ? <AiFillEyeInvisible className='h-6 w-6'></AiFillEyeInvisible> : <AiFillEye className='h-6 w-6'></AiFillEye>}</p>
                                    </div>
                                </div>
                                {/* <div className="min-w-full">
                                    <label className="label">
                                        <span className="label-text"> Confirm Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={show ? "text" : "password"} name='confirmPassword' {...register("confirmPassword")} placeholder="password" className="input input-bordered" />
                                        <p onClick={handleShow} className='text-right absolute left-56 md:left-80 lg:left-80 xl:left-[510px] cursor-pointer'>{show ? <AiFillEyeInvisible className='h-6 w-6'></AiFillEyeInvisible> : <AiFillEye className='h-6 w-6'></AiFillEye>}</p>
                                    </div>
                                    <label className="label">

                                        <p>Already Have an Account? <Link to='/login'>Login</Link></p>
                                    </label>
                                </div> */}
                                <div className="form-control mt-6">
                                    <div className="flex flex-col w-full border-opacity-50">
                                        <div className="grid card  rounded-box place-items-center"><button className='btn hover:bg-amber-600 bg-amber-500 text-gray-200 min-w-full'>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="divider -mt-1 lg:-mt-16">OR</div>
                        <div onClick={handleSignInWithGoogle} ><button className='btn hover:bg-amber-600 bg-amber-500 relative left-6 lg:left-[95px] w-[315px] text-gray-200'><FcGoogle className='h-5 w-5'></FcGoogle> Login with Google</button></div>
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