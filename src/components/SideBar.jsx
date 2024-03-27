import React from 'react'
import { navbar } from '../data/navbar'
import { IoMdClose } from "react-icons/io";
const SideBar = (props) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-4  relative h-full w-screen z-20">
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl font-bold'><span className='text-[#d5fd7f] text-4xl font-bold'>Travel</span>Blog</h1>
                    <IoMdClose onClick={props.closeModal} />
                </div>
                <ul className='gap-10 font-semibold mt-5'>
                    {navbar.map((val, index) => (
                        <li key={index} className='p-2 ' onClick={props.closeModal}>
                            {val.head}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar