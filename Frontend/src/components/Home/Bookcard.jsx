import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';

export const Bookcard = ({books}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {
        books && books.length > 0 ? (
            books.map((book, index) => (
                <div key={book._id} className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{book.title}</div>
                        <p className='text-gray-700 text-base'>
                            Author: {book.author}
                        </p>
                        <p className='text-gray-700 text-base'>
                            Publish Year: {book.PublishYear}
                        </p>
                    </div>
                    <div className='px-6 pt-4 pb-2 flex justify-around'>
                        <Link to={`/books/details/${book._id}`} className='text-green-800'>
                            <BsInfoCircle className='text-2xl' />
                        </Link>
                        <Link to={`/books/edit/${book._id}`} className='text-yellow-600'>
                            <AiOutlineEdit className='text-2xl' />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} className='text-red-600'>
                            <MdOutlineDelete className='text-2xl' />
                        </Link>
                    </div>
                </div>
            ))
        ) : (
            <div className='col-span-full text-center'>No books found</div>
        )
    }
    </div>
  )
}

export default Bookcard
