
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { BsTrashFill } from 'react-icons/bs';
import { FcAcceptDatabase, FcDeleteDatabase } from 'react-icons/fc';
import { BsPencilSquare } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
const PendingRequest = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    // feedback
    const [feedback, setFeedback] = useState('');
    console.log(feedback)
    const handleChange = (event) => {
        setFeedback(event.target.value);
    };
    const handleFeedback = (id) => {
        // setIsModalOpen(false);
        fetch(`${import.meta.env.VITE_APIURL}/reviews/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch(data)
                    toast.success('FeedBack sent!!')

                    setIsModalOpen(false);
                }
            })
    }

    const { user } = useContext(AuthContext);
    const { data: course = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_APIURL}/reviews`);
        return res.json();
    });
    console.log(course)
    const handleApproved = id => {
        fetch(`${import.meta.env.VITE_APIURL}/reviews/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch(data)
                    toast.success('Course Status Updated')
                }
            })
    }

    const handleDenied = id => {
        fetch(`${import.meta.env.VITE_APIURL}/reviews/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch(data)
                    toast.success('Course Status Updated')
                }
            })
    }

    console.log(course)
    return (
        <div>
            <h1 className="text-4xl px-6 font-bold mb-5">number of Pending Courses: {course.length}</h1>
            <table className="min-w-full divide-y divide-gray-200 text-center">
                <thead className="bg-gray-100">
                    <tr className=''>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course Image
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course Name
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Instructor Name
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Instructor Email
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Available Seats
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Enrolled Student
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">

                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Feedback
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
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.email}</td>
                            <td className="px-6 py-4">{item.availableSeatForEnrollment}</td>
                            <td className="px-6 py-4">{item?.enrolledStudent || 0}</td>
                            <td className="px-6 py-4">${item.price}</td>
                            {item.status === 'approved' ?
                                <td
                                    className="px-6 p-4 text-green-500 rounded-full">{item.status}</td> : <td
                                        className="px-6 py-4 text-red-500 rounded-full">{item.status}</td>}
                            <td>
                                {
                                    item.status === 'pending'
                                        ?
                                        <div className='flex flex-col gap-3'>
                                            <FcAcceptDatabase onClick={() => handleApproved(item._id)} className='h-7 w-7 cursor-pointer' title='Approved'></FcAcceptDatabase>
                                            <FcDeleteDatabase onClick={() => handleDenied(item._id)} className='h-7 w-7 cursor-pointer' title='Denied'></FcDeleteDatabase>
                                        </div>
                                        :
                                        <div className='flex flex-col gap-3 opacity-30'>
                                            <FcAcceptDatabase className='h-7 w-7 ' ></FcAcceptDatabase>
                                            <FcDeleteDatabase className='h-7 w-7 ' ></FcDeleteDatabase>
                                        </div>
                                }
                            </td>
                            <td>
                                <div>
                                    <BsPencilSquare
                                        className="relative mx-auto h-6 w-6 cursor-pointer"
                                        onClick={toggleModal}
                                    />
                                    {isModalOpen && (
                                        <div
                                            className="fixed inset-0 flex items-center opacity-70  bg-gray-400 justify-center z-50"
                                            onClick={closeModal}
                                        >
                                            <div className="bg-white rounded-lg p-8" onClick={handleModalClick}>
                                                <h3 className="font-bold text-l">Add Feedback</h3>
                                                <textarea onChange={handleChange}
                                                    className="w-[450px] h-80 resize-none focus:outline-none border mt-5 border-gray-300 rounded p-2"
                                                />
                                                <div className="modal-action">
                                                    <button onClick={() => handleFeedback(item._id)}><FiSend className='h-5 w-5 cursor-pointer'></FiSend></button>
                                                    <button className='pl-5' onClick={closeModal}><AiOutlineClose className='h-5 w-5'></AiOutlineClose></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>
                                {/* <button>
                                    <BsTrashFill className='h-5 w-5 cursor-pointer'></BsTrashFill>
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PendingRequest;