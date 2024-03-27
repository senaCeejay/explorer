import React from 'react'
import { CiSearch } from "react-icons/ci";
const HeroSection = () => {
    return (
        <div className='hero h-screen'>
            <div className="absolute inset-0 bg-black opacity-65"></div>
            <div className='text-white relative flex items-center flex-col justify-center h-full max-w-[1240px] mx-auto z-10 mt-[-75px] px-4'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-center lg:text-start'>Where will you go next?</h1>
                <div className='flex bg-white items-center md:w-full lg:w-[800px] rounded-3xl h-[60px] mt-4 md:mt-0 px-7 gap-4'>
                    <CiSearch size={25} className='text-gray-600' />
                    <input type="text" placeholder='Search Your Option' className=' outline-none text-black w-full' />
                </div>
                <p className='w-auto md:w-[700px] text-center leading-7 font-light text-sm text-gray-200 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus, eligendi tempora ullam, iure dolorum asperiores porro reiciendis doloremque, unde velit accusantium dolores possimus consequatur. Rem maiores placeat libero quam.</p>
            </div>
        </div>
    )
}

export default HeroSection