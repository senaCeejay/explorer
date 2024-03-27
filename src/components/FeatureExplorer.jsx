import React from 'react'
import { cards } from "../data/cards"
const FeatureExplorer = () => {
    return (
        <div className='max-w-[1240px] mx-auto '>
            <h1 className='font-semibold text-3xl my-10 text-center'>Choose A Feature Explorer</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-4 rounded'>
                {cards.map((val, index) => (
                    <div key={index} className='my-2 shadow-lg rounded-xl hover:scale-105 duration-300 cursor-pointer'>
                        <img src={val.image} alt={val.name} className='w-full ' />
                        <div className='p-5 '>
                            <h1 className='font-bold my-4'>{val.title}</h1>
                            <p className='line-clamp-3 text-sm'>{val.description}</p>
                            <div className='flex gap-2 text-sm mt-4 '>
                                <a href="#" className='underline text-yellow-500 underline-offset-4'>Solo Travel</a>
                                <p>By Travel</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureExplorer