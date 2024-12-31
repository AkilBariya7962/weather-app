import React from 'react';
import { useSelector } from 'react-redux';
import icon from '../Components/img/icon.png';
import { RotatingLines } from 'react-loader-spinner';
const WeatherDisplay = () => {
  const { data, status, error } = useSelector((state) => state.weather);

  if (status === 'loading') return <p className="justify-center ml-44"><RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="15"
    width="36"
    visible={true}
  /></p>;
  if (status === 'failed') return <p className="text-center mt-4 text-red-200 ">{error}</p>;

  if (data) {
    return (
      <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg text-gray-800 max-w-sm mx-auto">
        <div className="flex justify-center mb-4">
          <img className="w-32 h-32 object-cover" src={icon} alt="Weather Icon" />
        </div>
        <h2 className="text-2xl mb-4 font-bold text-center text-blue-600">{data.name}</h2>
        <div className="text-center">
          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-700">Temperature:</span> {data.main.temp}°C
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Humidity:</span> {data.main.humidity}%
          </p>
        </div>
      </div>
    );
  }
  return <p className="text-center mt-4 text-lg">

    <div className="flex justify-center mb-4">
      <img className="w-32 h-32 object-cover" src={icon} alt="Weather Icon" />
    </div>
    <div className="flex justify-center mb-4">
      <p>Enter Your City and Search Here.. </p>
    </div>
  </p>;
};

export default WeatherDisplay;
