import SingleDayWeather from './SingleDayWeather';

const DailyWeather = (props) => {
  const dailyWeatherData = props.dailyWeatherData;
  const dataUnits = props.dataUnits;
  return (
    <div className='dailyWeatherBox'>
      <p>
        <b>
          <u>DAILY WEATHER SECTION</u>
        </b>
      </p>
      <div className='dailyWeatherFlexBox'>
        {!dailyWeatherData ? (
          <p style={{ textAlign: 'center', padding: 25 }}>
            No Daily Weather Data
          </p>
        ) : (
          dailyWeatherData.time.map((time, index) => (
            <SingleDayWeather
              key={time}
              time={time}
              apparent_temperature_max={
                dailyWeatherData.apparent_temperature_max[index]
              }
              apparent_temperature_min={
                dailyWeatherData.apparent_temperature_min[index]
              }
              precipitation_sum={dailyWeatherData.precipitation_sum[index]}
              sunrise={dailyWeatherData.sunrise[index]}
              sunset={dailyWeatherData.sunset[index]}
              temperature_2m_max={dailyWeatherData.temperature_2m_max[index]}
              temperature_2m_min={dailyWeatherData.temperature_2m_min[index]}
              weathercode={dailyWeatherData.weathercode[index]}
              dataUnits={dataUnits}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DailyWeather;
