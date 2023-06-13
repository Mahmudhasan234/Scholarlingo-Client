import React, { useContext, useEffect, useState } from 'react';

// import { AuthContext } from '../../../Provider/AuthProvider';
import CourseDetails from './CourseDetails';
import useSelectedCourse from '../useSelectedCourse';

const SelectedCourse = () => { 

    const [selectedCourses]= useSelectedCourse()
    // const { user } = useContext(AuthContext)
    // const [selectedCourses, setSelectedCourse] = useState([])
    // console.log(selectedCourses)
    // const url = `http://localhost:5000/usersData?email=${user.email}`

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSelectedCourse(data))
    // }, [])


    return (
        <div>
            <h1 className='text-4xl font-bold'>Your Selected Course: {selectedCourses.length}</h1>
         <table className='table'>
         <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Course Name</th>
                            <th>Course Instructor</th>
                            <th>Avaailable Seat</th>
                            <th>price</th>
                        </tr>
                    </thead>
            
                 {
                     selectedCourses.map(course => <CourseDetails course={course}></CourseDetails>)
                    }
                    
            </table>
        </div>
    );
};

export default SelectedCourse;