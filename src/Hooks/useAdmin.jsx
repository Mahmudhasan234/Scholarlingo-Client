import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  const {user}= useContext(AuthContext)
  const {data: isAdmin, isAdminLoading} = useQuery({
    queryKey: ['iAdmin', user?.email],
    queryFn: async()=>{
        const response = await fetch(`${import.meta.env.VITE_APIURL}/users/admin/${user.email}`) 
        return response.json()
    },
  })
return [isAdmin, isAdminLoading]
};

export default useAdmin;