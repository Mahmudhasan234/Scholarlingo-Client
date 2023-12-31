import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGraduationCap } from 'react-icons/fc'
import { MdManageAccounts } from 'react-icons/md'
import { SiGooglehome, SiGoogleclassroom } from 'react-icons/si'
import { BiBookAdd, BiHomeAlt2, BiHistory, BiHome } from 'react-icons/bi'
import { BsBookmarkCheck } from 'react-icons/bs'
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import {MdOutlinePendingActions} from 'react-icons/md'

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [email ] = useAdmin()
    // console.log(isAdminLoading)
    const [instructorEmail] = useInstructor()
    // console.log(instructorEmail.admin)
    // const [role, setrole] = useState()
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_APIURL}/users`)
    //     .then(res=>res.json())
    //     .then(data => setrole(data))
    // },[])
    //     console.log(role)
    // const [isAdmin] = useAdmin()
    // const isAdmin =true

    const isInstructor = false

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">



                        <div className='flex flex-col items-center'>
                            <img className='rounded-full border-2 border-blue-300 p-1' src={user.photoURL} alt="" />
                            <p className="text-lg mt-5">{user.displayName}</p>
                        </div>

                        {
                            email.admin ? <>
                                {/* admin section */}
                                <div className="divider"></div>
                             
                                <li><Link to='allusers'><MdManageAccounts className='h-5 w-5'></MdManageAccounts> Manage Users</Link></li>
                                <li ><Link to='pendingRequest'><MdOutlinePendingActions className='h-5 w-5'></MdOutlinePendingActions> All Courses </Link></li>
                                <li><Link to='/'><SiGooglehome className='h-5 w-5'></SiGooglehome> Admin Home</Link></li>

                            </>
                                :
                                <>
                                    {
                                        instructorEmail.admin ?
                                            <>
                                                {/* instructor section */}
                                                <div className="divider"></div>
                                                <li ><Link to='/dashboard/addCourse'><BiBookAdd className='h-5 2-5'></BiBookAdd> Add Course</Link></li>
                                                <li><Link to='/dashboard/manageCourse'> <FcGraduationCap className='h-5 w-5'></FcGraduationCap> My Courses</Link></li>
                                                <li><Link to='/'><BiHomeAlt2 className='h-5 w-5'></BiHomeAlt2> Home</Link></li>
                                            </>
                                            :
                                            <>
                                                {/* user section */}
                                                <div className="divider"></div>

                                                <li ><Link to='/dashboard/selectedCourse'> <BsBookmarkCheck className='h-5 w-5'></BsBookmarkCheck>Selected Course</Link></li>
                                                <li><Link to='/dashboard/history'> <BiHistory className='h-5 w-5'></BiHistory>Payment History</Link></li>
                                                <li><Link to='/dashboard/myclasses'><SiGoogleclassroom className='h-5 w-5'></SiGoogleclassroom> Enrolled Class</Link></li>
                                                <li><Link to='/'><BiHome className='h-5 w-5'></BiHome> Home</Link></li>

                                            </>
                                    }
                                </>
                        }





                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;