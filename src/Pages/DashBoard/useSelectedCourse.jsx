import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const useSelectedCourse = () => {
    const {user} = useContext(AuthContext)
    const { isLoading,  refetch, isError, data:selectedCourses= [], error } = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async()=>{
            const response = await fetch(`${import.meta.env.VITE_APIURL}/usersData?email=${user?.email}`) 
            return response.json()
        },
      })
 return [selectedCourses, refetch, isLoading]
};

export default useSelectedCourse;