import React, { useState } from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useForm } from "react-hook-form";
const Login = () => {
    // ------ password show/hide----
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }



    // ------- react form hook start -----
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container>
                <div className='lg:flex lg:gap-16 lg:justify-center lg:items-center'>
                    <div>
                        <h1 className='scale-150'> <Link to='/'><AiOutlineArrowRight></AiOutlineArrowRight></Link></h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="lg:p-24 p-6 min-w-full">
                                <h1 className='text-xl md:text-4xl text-center font-bold mb-5'>Please Login</h1>
                                <div className=" min-w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email'{...register("name")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="min-w-full">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={show ? "text" : "password"} name='password' {...register("Password")} placeholder="password" className="input input-bordered" />
                                        <p onClick={handleShow} className='text-right absolute left-56 md:left-80 lg:left-80 xl:left-[550px] cursor-pointer'>{show ? <AiFillEyeInvisible className='h-6 w-6'></AiFillEyeInvisible> : <AiFillEye className='h-6 w-6'></AiFillEye>}</p>
                                    </div>
                                    <label className="label">

                                        <p>New Here? <Link to='/registration'>Create an Account</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <div className="flex flex-col w-full border-opacity-50">
                                        <div className="grid h-20 card  rounded-box place-items-center"><button className='btn hover:bg-amber-600 bg-amber-500 text-gray-200 min-w-full'>Login</button></div>
                                        <div className="divider">OR</div>
                                        <div className="grid h-20 card rounded-box place-items-center"><button className='btn hover:bg-amber-600 bg-amber-500 min-w-full text-gray-200'><FcGoogle className='h-5 w-5'></FcGoogle> Login with Google</button></div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className='hidden md:block'>
                        <img src="https://i.ibb.co/N2WMnGk/340365-PAPUL8-568-removebg-preview.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;