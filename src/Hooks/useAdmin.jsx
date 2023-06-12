import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const { data:email=[], refetch ,  } = useQuery({
        queryKey: ['admin', user.email],
        queryFn: async()=>{
            const response = await fetch(`${import.meta.env.VITE_APIURL}/users/${user?.email}`) 
            return response.json()
        },
    })

    return [email, refetch, ]
};

export default useAdmin;