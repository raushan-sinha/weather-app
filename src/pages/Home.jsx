import React from 'react'
import Search from '../components/Search';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
    const [weatherData, setWeatherData] = useState('')

    const fetchWetherAPI = () => {
        console.log('Weather API Fetching...');
    }

    return (
        <section className='fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-md px-5 py-3 rounded-2xl border border-white/20 bg-linear-to-r from-sky-400/40 via-blue-500/30 to-indigo-500/30 backdrop-blur-lg shadow-lg z-50 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]'>
            <Search onSearch={fetchWetherAPI} />
            <WeatherCard weather={weather} />
        </section>
    );
}