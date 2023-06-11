import React, { useContext, useEffect, useState } from 'react';
import Container from '../../Routes/Component/Container/Container';
import Logo from './Logo/Logo';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { BiLogInCircle, BiLogOutCircle, BiCart } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../Provider/AuthProvider';
import useSelectedCourse from '../../Pages/DashBoard/useSelectedCourse';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
const [selectedCourses] = useSelectedCourse()
    const handleLogOut = () => {
        logOut()
            .then(toast('See you next time!!', {
                icon: '👏',
            }))
            .catch()
    }







    //------------toggle setting plus changing logo based on toggle settings-----------
    const [logo, setLogo] = useState('https://i.ibb.co/FmGd9Pz/removal-ai-tmp-6481260c2086f.png')
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
            setLogo('https://i.ibb.co/1ZCWH5P/Screenshot-2023-06-07-211423-removebg-preview.png')
        } else {
            setLogo('https://i.ibb.co/FmGd9Pz/removal-ai-tmp-6481260c2086f.png')
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    //-------- end ---------

    // ----toggle btn start------
    const toggleBtn = <>
        <div>
            <label className="swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className='mb-1'
                    onChange={handleToggle}
                    // show toggle image based on localstorage theme
                    checked={theme === "light" ? false : true} />

                {/* sun icon */}
                <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>

        </div>
    </>
    // ----toogle btn end------

    // ----Nav items start------
    const navItems = <>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'lg:tab-bordered py-2 font-bold' : ''
        }
            to='/' >Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'lg:tab-bordered py-2 font-bold' : ''
        }
            to='/instractors'>Instractors</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'lg:tab-bordered py-2 font-bold' : ''
        }
            to='/languages'>Languages</NavLink></li>

    </>
    // ----Nav items end------


    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-5 shadow bg-base-300 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link><Logo logo={logo} theme={theme}></Logo> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex flex-row ">
                        <ul className=' menu-horizontal gap-5'>{navItems}</ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <div>
                            
                            <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                                <label tabIndex={0} className="badge"><BiCart className='h-8 w-8' ></BiCart> </label>
                                <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                                    <p>{selectedCourses?.length}</p>
                                </ul>
                            </div>
                        </div>
                        {
                            user && user ? <div>
                                <div className="dropdown dropdown-hover dropdown-left">
                                    <label tabIndex={0} className="m-1">{user.photoURL ? <div><img className='rounded-full h-8 w-8' src={user.photoURL} alt="" /></div> : <FaUserCircle className='h-5 w-5'></FaUserCircle>}</label>
                                    <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-200 rounded-box w-52">
                                        <li className='p-2'>{user.displayName}</li>
                                        <li><Link to='/dashboard'>DashBoard</Link></li>
                                        <li><p><BiLogOutCircle onClick={handleLogOut} className='h-8 w-8 cursor-pointer'></BiLogOutCircle></p></li>
                                    </ul>
                                </div>

                            </div> :
                                <Link to='/login'><BiLogInCircle className='h-8 w-8'></BiLogInCircle></Link>
                        }
                        {toggleBtn}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;