import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const { data:instructorEmail=[], refetch } = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async()=>{
            const response = await fetch(`${import.meta.env.VITE_APIURL}/users/instructor/${user?.email}`) 
            return response.json()
        },
    })

    return [instructorEmail, refetch]
};

export default useInstructor;