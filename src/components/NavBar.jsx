import React from 'react'
import { navbar } from '../data/navbar'
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = (props) => {
    return (
        <>
            <div className='max-w-[1240px] mx-auto p-4 relative z-20 text-white flex justify-between border-b border-white'>
                <h1 className='text-4xl font-bold'><span className='text-[#d5fd7f] text-4xl font-bold'>Travel</span>Blog</h1>
                <ul className=' gap-7 items-center hidden lg:flex'>
                    {navbar.map((val, index) => (
                        <li key={index} className=''>
                            <Link className='flex items-center gap-1 '>
                                {val.head}<IoIosArrowDown size={13} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='items-center gap-4 hidden lg:flex'>
                    <button className='rounded-full bg-white hover:bg-yellow-500 duration-300'><FaFacebookF size={30} className='hover:text-white p-2 rounded-full text-gray-500 duration-300' /></button>
                    <button className='rounded-full bg-white hover:bg-yellow-500 duration-300'><FaTwitter size={30} className='hover:text-white p-2 rounded-full text-gray-500 duration-300' /></button>
                    <button className='rounded-full bg-white hover:bg-yellow-500 duration-300'><AiFillInstagram size={30} className='hover:text-white p-[0.4rem] rounded-full text-gray-500 duration-300' /></button>
                </div>
                <div className='flex lg:hidden'>
                    <button>
                        <GiHamburgerMenu onClick={props.showSidebar} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar