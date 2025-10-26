import React, { useState } from 'react';
import Search from '../components/Search';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
    const [weather, setWeather] = useState(null);

    const fetchWeatherAPI = async (city) => {
        try {
            const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();

            if (data.cod === 200) {
                setWeather(data);
            } else {
                alert('City not found');
            }
        } catch (error) {
            console.error(error);
            alert('Error fetching weather data');
        }
    };

    return (
        <section className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-md px-5 py-3 rounded-2xl border border-white/20 bg-linear-to-r from-sky-400/40 via-blue-500/30 to-indigo-500/30 backdrop-blur-lg shadow-lg z-50 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <Search onSearch={fetchWeatherAPI} />
            <WeatherCard weather={weather} />
        </section>
    );
}
