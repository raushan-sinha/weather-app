import React from 'react'
import logo from '../assets/weather-logo.jpg';

const Navbar = () => {
    return (
        <header className="fixed top-[2%] left-1/2 -translate-x-1/2 w-[90%] 
bg-linear-to-r from-blue-500/40 via-indigo-500/40 to-sky-500/40 
backdrop-blur-md border border-white/20 shadow-lg 
rounded-2xl p-3 flex items-center gap-4 z-50 transition-all duration-300 hover:shadow-xl">
            <nav className="flex flex-row items-center gap-3">
                <div>
                    <img
                        src={logo}
                        alt="WeatherApp-Logo"
                        className="h-10 w-20 object-contain bg-transparent mix-blend-screen drop-shadow-md transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-semibold font-mono text-white drop-shadow-md">
                        Weather<span className="text-yellow-300">App</span>
                    </h1>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;