import React from 'react'

const Footer = () => {
    return (
        <div className='p-6 bg-yellow-500 text-white md:flex justify-between '>
            <p>© 2020 TravelBlog All Right Reserved</p>
            <ul className='flex flex-col md:flex-row md:gap-6 mt-8 md:mt-0'>
                <li>
                    <a href="/">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="/">
                        Terms & Conditions
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer