import React from 'react'
import logo from '../assets/weather-logo.jpg';

const Navbar = () => {
    return (
        <header className='fixed top-[2%] left-1/2 -translate-x-1/2 w-[90%] border border-gray-200 p-1 py-2 flex items-center gap-4 bg-[white/9]0 backdrop-blur-md shadow-md rounded-xl z-50'>
            <nav className='flex flex-row items-center gap-2'>
                <div>
                    <img src={logo} alt="WeatherApp-Logo" className='h-10 w-20 object-cover rounded-full' />
                </div>
                <div>
                    <h1 className='text-3xl text-blue-600 font-mono font-semibold'>WeatherApp</h1>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;