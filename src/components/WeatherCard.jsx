import React from 'react'

export default function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <>
            <div className="mt-6 bg-white/20 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-4 text-center text-white w-[90%] max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
                <p className="text-lg">{weather.weather[0].description}</p>
                <h3 className="text-4xl font-bold mt-2">{Math.round(weather.main.temp)}°C</h3>

                <div className="flex justify-center gap-6 mt-4 text-sm">
                    <div>
                        <p>🌡️ Feels Like</p>
                        <p>{Math.round(weather.main.feels_like)}°C</p>
                    </div>
                    <div>
                        <p>💧 Humidity</p>
                        <p>{weather.main.humidity}%</p>
                    </div>
                    <div>
                        <p>🌬️ Wind</p>
                        <p>{weather.wind} m/s</p>
                    </div>
                </div>
            </div>
        </>
    );
}