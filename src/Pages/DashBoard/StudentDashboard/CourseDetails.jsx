import React from 'react';

const CourseDetails = ({course}) => {

const handleDelete = id => {
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
                <img src={course && course?.image?course.image:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1686390053~exp=1686390653~hmac=597305f43677950dc44dac3c25ac950df2c539a8f61a70847017e9a53784e90c'} />
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
          <button className="rounded hover:bg-green-200 btn-xs">Pay</button>
        </th>
        <th>
          <button onClick={()=>handleDelete(course._id)} className="rounded  hover:bg-red-200 btn-xs">Delete</button>
        </th>
      </tr>
        </tbody> 
        
    );
};

export default CourseDetails;