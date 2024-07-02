import React from 'react'
import { useParams } from 'react-router'

function User() {


    const {id} = useParams();

    return (
        <>
           <div className='bg-black h-20 p-4 align-baseline text-white '> 
            <h1 className='text-3xl'>user : {id}</h1>
            </div> 
        </>    
    )
}

export default User
