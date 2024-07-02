import React, { useState } from 'react'
import { useEffect } from 'react'
import { json } from 'react-router'
import {Link, NavLink} from 'react-router-dom'

function GitHub() {
    const [data ,setData ] = useState({})
    const [reposData, setReposData] = useState([]);
    let repos = {}

    useEffect(
        () =>{

            fetch('https:/api.github.com/users/arshies')
            .then((res) => (res.json()))
            .then(data => {
                console.log(data)
                setData(data)
            });
            
            fetch('https://api.github.com/users/arshies/repos')
            .then((res) => res.json())
            .then((data) => {
                console.log('Repositories Data:', data);
                setReposData(data);
            });
            
        }, []
    )
    
    

    
 
    

    return (
        <>
            <div className='bg-black  p-4 align-baseline text-white '>
                <h1 className='text-3xl'>GitHub name : {data.login}  </h1>

                <NavLink
                                to="/github/followers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    followers : {data.followers}<br />

                                </NavLink>

                <h3>
                    follwing : {data.following}
                </h3>
                <br />
                <h2>Repositories:</h2>
                <ul>
                    {reposData.map((repo) => (
                    <li key={repo.id}>
                        <strong>{repo.name}</strong>: {repo.description}
                    </li>
                    ))}
                </ul>
                
            </div> 
        </>    
    )
}

export default GitHub
