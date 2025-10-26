import React from 'react'
import logo from '../assets/weather-logo.jpg';

const Navbar = () => {
    return (
        <header
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] bg-linear-to-r from-sky-500/40 via-blue-500/30 to-indigo-500/40 backdrop-blur-xl border border-white/25 shadow-lg rounded-2xl px-5 py-3 flex items-center justify-between   z-50 transition-all duration-300 hover:shadow-2xl hover:border-white/40">
            <nav className="flex items-center gap-3 sm:gap-5 sm:flex-row justify-center-safe">
                <img
                    src={logo}
                    alt="WeatherApp Logo"
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
                />
                <h1 className="text-2xl sm:text-3xl font-bold font-mono text-white drop-shadow-lg tracking-wide">
                    Weather<span className="text-yellow-300">App</span>
                </h1>
            </nav>
        </header>

    );
}

export default Navbar;