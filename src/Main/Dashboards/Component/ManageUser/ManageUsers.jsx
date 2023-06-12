import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { BsFillTrashFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { RiShieldUserLine } from 'react-icons/ri'
const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch(`${import.meta.env.VITE_APIURL}/users`)
        return res.json()
    })
    // admin
    const handleAdmin = (id) => {
        fetch(`${import.meta.env.VITE_APIURL}/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch(data)
                    toast.success('admin created successfully')
                }
            })
    }

    // instructor

    const handleInstructor = (id) => {
        fetch(`${import.meta.env.VITE_APIURL}/users/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch(data)
                    toast.success('Instructor created successfully')
                }
            })
    }

    // handle delete
    const handleDelete = () => {
        console.log('delete')
    }

    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold mb-5 mx-5">
                Total Users: {users.length}
            </h1>
            <div className="overflow-x-auto mx-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Manage</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <div>
                                        <td onClick={()=>handleInstructor(user._id)} >{user?.role === 'instructor' ? <button  className="opacity-20" disabled ><GiTeacher className="h-5 w-5"
                                        title="Already Instructor"></GiTeacher></button> : <GiTeacher className="h-5  cursor-pointer  w-5" title="make Instructor"></GiTeacher>} </td>
                                        <td onClick={() => handleAdmin(user._id)}>{user?.role === 'admin' ? <button className="opacity-20" disabled>
                                        <RiShieldUserLine className="h-5 w-5" title="Admin"></RiShieldUserLine>
                                        </button> : <RiShieldUserLine className="h-5 w-5 cursor-pointer " title="Make Admin"></RiShieldUserLine>} </td>
                                    </div>
                                    <td onClick={handleDelete}> <BsFillTrashFill className="h-5 w-5 cursor-pointer"></BsFillTrashFill></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;