import React from 'react'

export default function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <>
            <div className="mt-3 bg-linear-to-br from-[#e3f2fd] to-[#bbdefb] border border-gray-300 shadow-lg rounded-2xl p-6 sm:p-8 text-center text-black w-[90%] max-w-lg mx-auto transition-all duration-300 ease-in-out hover:shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">{weather.name}</h2>
                <p className="text-base sm:text-lg capitalize tracking-wide text-gray-700">
                    {weather.weather[0].description}
                </p>
                <h3 className="text-4xl sm:text-5xl font-extrabold mt-3 text-gray-900">
                    {Math.round(weather.main.temp)}°C
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-6 text-sm sm:text-base">
                    <div className="bg-white/50 px-4 py-3 rounded-xl shadow-sm w-[80%] sm:w-auto">
                        <p className="font-semibold">🌡️ Feels Like</p>
                        <p className="text-gray-800">{Math.round(weather.main.feels_like)}°C</p>
                    </div>
                    <div className="bg-white/50 px-4 py-3 rounded-xl shadow-sm w-[80%] sm:w-auto">
                        <p className="font-semibold">💧 Humidity</p>
                        <p className="text-gray-800">{weather.main.humidity}%</p>
                    </div>
                    <div className="bg-white/50 px-4 py-3 rounded-xl shadow-sm w-[80%] sm:w-auto">
                        <p className="font-semibold">🌬️ Wind</p>
                        <p className="text-gray-800">{weather.wind.speed} m/s</p>
                    </div>
                </div>
            </div>
        </>
    );
}