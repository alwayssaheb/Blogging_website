import React from 'react'
import { useState } from 'react'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Addbook = () => {
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [PublishYear,setPublishYear] = useState('');
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const handleSavebook = () => { 
        const data = {
            title,
            author,
            PublishYear,
        };
        setloading(true);
        axios.post('http://localhost:3333/books', data)
        .then(() => {
            setloading(false);
            navigate('/');
        })
        .catch((error) => {
            setloading(false);
        })
    }
  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'> Create book</h1>
      {loading ? <Spinner /> : ' '}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='m-4'>
            <label className='text-xl mr-4 text-gray-500' > Title</label>
            <input
                type='text'
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className='border2 border-gray-500 px-4 py-2 w-full'
             />
        </div>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input 
            type='text'
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>PublishYear</label>
            <input 
            type='text'
            value={PublishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8 o' onClick={handleSavebook}>
            button
        </button>
      </div>
    </div>
  )
}

export default Addbook
