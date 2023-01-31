const CurrentWeather = (props) => {
  const unixTime = props.currentWeatherData.time;
  const date = new Date(unixTime * 1000);

  return (
    <div className='currentWeatherBox'>
      <p>
        <b>
          <u>CURRENT WEATHER SECTION</u>
        </b>
      </p>
      <p>
        <b>Latitude: </b>
        {props.lat ? props.lat : 'N/A'}
      </p>
      <p>
        <b>Longitude: </b>
        {props.long ? props.long : 'N/A'}
      </p>
      <p>
        <b>Temp: </b>
        {props.currentWeatherData.temperature
          ? props.currentWeatherData.temperature
          : 'N/A'}
      </p>
      <p>
        <b>Time: </b>
        {date.toLocaleTimeString('en-US')
          ? date.toLocaleTimeString('en-US')
          : 'N/A'}
      </p>
      <p>
        <b>Weather Code: </b>
        {props.currentWeatherData.weathercode
          ? props.currentWeatherData.weathercode
          : 'N/A'}
      </p>
      <p>
        <b>Wind Direction: </b>
        {props.currentWeatherData.winddirection
          ? props.currentWeatherData.winddirection
          : 'N/A'}
      </p>
      <p>
        <b>Windspeed: </b>
        {props.currentWeatherData.windspeed
          ? props.currentWeatherData.windspeed
          : 'N/A'}
      </p>
    </div>
  );
};

export default CurrentWeather;
