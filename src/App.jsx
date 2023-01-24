import { useState, useEffect } from 'react';

import './App.css';

import CurrentWeather from './components/CurrentWeather';
import DailyWeather from './components/DailyWeather';
import HourlyWeather from './components/HourlyWeather';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=${timezone}`
        )
          .then((response) => response.json())
          .then((weatherData) => {
            console.log(weatherData);
            setLoading(false);
            setData(weatherData);
          })
          .catch((e) => {
            setError(e);
            console.error(`An error occurred: ${e}`);
          });
      },
      () => {
        setError('Unable to retrieve your location');
        console.error('Unable to retrieve your location');
        alert('Unable to retrieve your location');
      }
    );
  }, []);

  return (
    <div>
      <CurrentWeather />
      <DailyWeather />
      <HourlyWeather />
      {loading ? (
        <p>Loading...</p>
      ) : !loading && error ? (
        <p>{error}</p>
      ) : !loading && !error && data ? (
        <div>
          <p>{data.latitude}</p>
          <p>{data.longitude}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
