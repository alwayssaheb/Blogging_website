import { Link } from "react-router-dom";
// import { BsArrowleft } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai';

const Backbutton = ( { destinaion = '/' }) => {
    return (
       <div className="flex">
       <Link to = { destinaion}
       className='bg-sky-800 text-white px`  py-1 rounded-1g w-fit'
       > 
       <AiOutlineEdit className='text-2xl' /> 
       </Link>
       Backbutton
       </div> 
    )
}
export default Backbutton ;
