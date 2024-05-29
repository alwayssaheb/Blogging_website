import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner.jsx'

export const Showbook = () =>  {
    const [book, setbook ] = useState({});
    const [loading ,setloading] = useState(false);
    const {id } = useParams();

    useEffect(() => { 
        setloading(true);
        axios
        .get(`http://localhost:3333/books/${id}`)
        .then((response) => {
            setbook(response.data);
            setloading(false);
        })
        .catch((error) => {
            console.log(error);
            setloading(false);
        });
    }, []); 
  return (  
    <div className='p4'>
    <Backbutton /> 
    <h1 className='text-3xl my-4'> Show Book </h1>
    { loading ? ( 
            <Spinner /> 
        ) : ( 
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'> 
                <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500 ' > id</span> 
                <span >{book._id} </span>
                </div>
                <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500 ' >Title</span> 
                <span >{book.title} </span>
                </div>
                <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500 '> Author</span> 
                <span >{book.author} </span>
                </div>
                <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500 '> PublishYear</span> 
                <span >{book.PublishYear} </span>
                </div>
            </div>
            ) 
    }
    </div>
  )
}


export default Showbook
