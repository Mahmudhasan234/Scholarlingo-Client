import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import{BsFillTrashFill} from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import{RiShieldUserLine} from 'react-icons/ri'
const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch(`${import.meta.env.VITE_APIURL}/users`)
        return res.json()
    })
const handleAdmin =(id)=>{
    fetch(`${import.meta.env.VITE_APIURL}/users/admin/${id}`, {
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.modifiedCount){
            refetch(data)
            toast.success('admin created successfully')
        }
    })
}

    const handleDelete=()=>{
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
                            users.map(user=> 
                                <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <div>
                                <td>{user.role ==='instructor'? 'instructor':<GiTeacher className="h-5  cursor-pointer  w-5" title="make Instructor"></GiTeacher>} </td>
                                <td onClick={()=>handleAdmin(user._id)}>{user.role ==='admin'? 'admin':<RiShieldUserLine className="h-5 w-5 cursor-pointer " title="Make Admin"></RiShieldUserLine>} </td>
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