import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import Spinner from '../components/Spinner';
import Bookcard from '../components/Home/Bookcard'
import Bookcard2 from '../components/Home/Bookcard2';


export const Home = () => {
    const[books,setBooks]= useState([]);
    const [loading,setLoading] = useState(false);
    const [showType, setshowType] = useState('card')
    useEffect(()=> {
      setLoading(true);
      console.log("hello");
      axios.get('http://localhost:3333/blogs')
      .then((response)=>{
        setBooks(response.data);
        setLoading(false);
        console.log("response is detected");
      })
      .catch((error) => {
        console.log(error);
        console.log("error hai bhai");
        setLoading(false);
      })
    } ,[]);
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'> 
            <button  className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g'
            onClick={() => setshowType('table') }>
            card2
            </button>
            <button  className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g'
            onClick={() => setshowType('card') }>
            card
            </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {
                loading ? 
                    <Spinner />
                 : showType === 'card' ? (
                  <Bookcard books={books}/>) : (<Bookcard2 books={books} />)
            }
        </div>
    );
}

export default Home;


//     <div className='p-4'>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Books List</h1>
//         <Link to='/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl' />
//         </Link> 
//       </div>
//       {
//         loading ? (
//             <Spinner />
//         ) : (
//           <table className='w-full border-separate border-spacing-2'>
//             <thead>
//           <tr>
//             <th className='border border-slate-600 rounded-md'>No</th>
//             <th className='border border-slate-600 rounded-md'>Title</th>
//             <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
//             <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
//           </tr>
//             </thead>
//             <tbody>
//             {
//             books && books.length > 0 ? (
//                 books.map(job => (
//              <div key={books._id} className="max-w-xl mx-auto bg-white rounded-md shadow-lg p-6 mb-4 my-10">
//              <h2 className="text-xl font-bold mb-2">Content: {books.title}</h2>
//               <p className="text-gray-600 mb-2">Author: {books.author}</p>
//                <p className="text-gray-800">PublishYear: {job.PublishYear}</p>
//              </div>
//                 )) ) :  ( 
//                 <tr>
//                      <td colSpan="4">No books found</td>
//                 </tr>
//               )
//             }   
//               {/* books.map((Blog,index) => (
//                 <tr key={Blog._id} className='h-8'>
//                   <td className='border border-slate-700 rounded-md text-center'>
//                     {index + 1}
//                   </td>
//                   <td className='border border-slate-700 rounded-md text-center'>
//                     {Blog.title}
//                   </td>
//                   <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                     {Blog.author}
//                   </td>
//                   <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                     {Blog.PublishYear}
//                   </td> */}
//                   {/* <td className='border border-slate-700 rounded-md text-center'>
//                     <div className='flex justify-center gap-x-4'>
//                       <Link to={`/books/details/${book._id}`}>
//                         <BsInfoCircle className='text-2xl text-green-800'/>
//                       </Link>
//                       <Link to={`/books/edit/${book._id}`}>
//                         <AiOutlineEdit className='text-2xl text-yellow-600'/>
//                       </Link>
//                       <Link to={`/books/delete/${book._id}`}>
//                         <MdOutlineDelete className='text-2xl text-red-600'/>
//                       </Link>
//                     </div>
//                   </td> */}
//                 {/* </tr>  */}
//             </tbody>
//           </table>
//         )
//       }
//     </div>
//   )
// }
// export default Home;

