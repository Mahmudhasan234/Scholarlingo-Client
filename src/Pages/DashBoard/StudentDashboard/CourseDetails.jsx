import React from 'react';
import Swal from 'sweetalert2'
import useSelectedCourse from '../useSelectedCourse';
import { Link } from 'react-router-dom';
const CourseDetails = ({ course }) => {

      console.log(course)
const [, refetch] = useSelectedCourse()
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_APIURL}/usersData/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
        console.log(id)
    }




    return (

        <tbody>
            <tr>
                <th>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={course && course?.image ? course.image : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1686390053~exp=1686390653~hmac=597305f43677950dc44dac3c25ac950df2c539a8f61a70847017e9a53784e90c'} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{course?.courseName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {course?.instructorName}


                </td>
                <td>{course?.availableSeat}</td>
                <td>${course?.price}</td>
                <th>
                    <button className="rounded hover:bg-green-200 btn-xs"><Link to={`/dashboard/payment/${course._id}`}>Pay 
                         </Link></button>
                </th>
                <th>
                    <button onClick={() => handleDelete(course._id)} className="rounded  hover:bg-red-200 btn-xs">Delete</button>
                </th>
            </tr>
        </tbody>

    );
};

export default CourseDetails;