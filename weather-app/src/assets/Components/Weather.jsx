import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fetchweather } from '../featured/WeatherSlice';
import { FaSearch } from "react-icons/fa";

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      dispatch(Fetchweather(city));
    }
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border py-3 px-8  rounded-l-md w-3/4 bg-white text-gray-800 outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black px-6 py-4 flex items-center rounded-r-md hover:bg-blue-500 hover:text-white transition"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default WeatherForm;
