import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { BsTrashFill } from 'react-icons/bs'
import{MdPublish} from 'react-icons/md'
const ManageMyCourse = () => {
    const { user } = useContext(AuthContext);
    const { data: course = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_APIURL}/reviews/${user.email}`);
        return res.json();
    });

    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">My Courses: {course.length}</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Available Seats
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Enrolled Student
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Feedback
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {course.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4">
                                <img src={item.countryImage} alt="Country" className="h-10 w-10 rounded-full" />
                            </td>
                            <td className="px-6 py-4">{item.language}</td>
                            <td className="px-6 py-4">{item.availableSeatForEnrollment}</td>
                            <td className="px-6 py-4">{item?.enrolledStudent || 0}</td>
                            <td className="px-6 py-4">${item.price}</td>
                            {item.status === 'approved' ?
                                <td
                                    className="px-6 p-4 text-green-500 rounded-full">{item.status}</td> : <td
                                        className="px-6 py-4 text-red-500 rounded-full">{item.status}</td>}
                            <td>{item?.feedback}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                    <button>
                                        <BsTrashFill className='h-5 w-5 cursor-pointer'></BsTrashFill>
                                    </button>
                                    <button>
                                        <MdPublish className='h-5 w-5 cursor-pointer' title='Upload Course'></MdPublish>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageMyCourse;
