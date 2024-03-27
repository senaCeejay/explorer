import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slider1 from '../assets/img/slider-1.jpg'
import slider2 from '../assets/img/slider-2.jpg'
import slider3 from '../assets/img/slider-3.jpg'
import slider4 from '../assets/img/slider-4.jpg'
import slider5 from '../assets/img/slider-5.jpg'
import slider6 from '../assets/img/slider-6.jpg'

const Category = () => {
    const options = {
        items: 1,
        loop: true,
        margin: 20,
        dots: true,
        navText: ['<span class="prev">Previous</span>', '<span class="next">Next</span>'], // Add navText here
        responsive: {
            1100: {
                items: 6,
                innerHeight: "100%",
                outerWeight: "100%",
            },
            724: {
                items: 6
            },
            500: {
                items: 6
            },
            370: {
                items: 1,
                // innerHeight: "100%",
                // outerWeight: "100%",
            },
        },
    }
    return (
        <div className='max-w-[1240px] mx-auto text-center relative '>
            <h1 className='font-semibold text-3xl my-10'>Choose A Category</h1>
        
            <OwlCarousel className='owl-theme'  {...options}>
                <div className='rounded-xl relative '>
                    <img src={slider1} alt="Road Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">Road Travel</div>
                </div>
                <div className='rounded-xl relative '>
                    <img src={slider2} alt="Mount Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">Mount Travel</div>
                </div>
                <div className='rounded-xl relative '>
                    <img src={slider3} alt="Sea Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">Sea Travel</div>
                </div>
                <div className='rounded-xl relative '>
                    <img src={slider4} alt="Solo Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">Solo Travel</div>
                </div>
                <div className='rounded-xl relative '>
                    <img src={slider5} alt="Osean Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">Osean Travel</div>
                </div>
                <div className='rounded-xl relative '>
                    <img src={slider6} alt="City Travel" />
                    <div className="overlay"></div> {/* Overlay */}
                    <div className="text-overlay text-white z-20 absolute inset-0 flex justify-center items-center">City Travel</div>
                </div>

            </OwlCarousel>
        </div>
    )
}

export default Category