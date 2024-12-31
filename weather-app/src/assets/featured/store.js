import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../featured/WeatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
})

export default store;