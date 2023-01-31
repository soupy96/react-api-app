import SingleHourWeather from './SingleHourWeather';

const HourlyWeather = (props) => {
  const hourlyWeatherData = props.hourlyWeatherData;
  const dataUnits = props.dataUnits;
  return (
    <div className='hourlyWeatherBox'>
      <p>
        <b>
          <u>HOURLY WEATHER SECTION</u>
        </b>
      </p>
      <div>
        {!hourlyWeatherData ? (
          <p style={{ textAlign: 'center', padding: 25 }}>
            No Hourly Weather Data
          </p>
        ) : (
          hourlyWeatherData.time.map((time, index) => (
            <SingleHourWeather
              key={time}
              time={time}
              apparent_temperature={
                hourlyWeatherData.apparent_temperature[index]
              }
              cloudcover={hourlyWeatherData.cloudcover[index]}
              precipitation={hourlyWeatherData.precipitation[index]}
              relativehumidity_2m={hourlyWeatherData.relativehumidity_2m[index]}
              surface_pressure={hourlyWeatherData.surface_pressure[index]}
              temperature_2m={hourlyWeatherData.temperature_2m[index]}
              visibility={hourlyWeatherData.visibility[index]}
              weathercode={hourlyWeatherData.weathercode[index]}
              winddirection_10m={hourlyWeatherData.winddirection_10m[index]}
              windgusts_10m={hourlyWeatherData.windgusts_10m[index]}
              windspeed_10m={hourlyWeatherData.windspeed_10m[index]}
              dataUnits={dataUnits}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HourlyWeather;
