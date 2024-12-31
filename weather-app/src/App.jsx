import React from 'react';
import WeatherForm from './assets/Components/Weather';
import WeatherDisplay from './assets/Components/WeatherDisplay';

const App = () => {
  return (
    <div
      className="min-h-screen bg-blue-200 flex flex-col items-center justify-center text-white"
    >
      <div className="bg-gray-700 bg-opacity-50 p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Weather App</h1>
        <WeatherForm />
        <WeatherDisplay />
      </div>
    </div>
  );
};

export default App;
