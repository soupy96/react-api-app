const SingleDayWeather = (props) => {
  const unixTimeTime = props.time;
  const dateTime = new Date(unixTimeTime * 1000);

  const unixTimeSunrise = props.sunrise;
  const dateSunrise = new Date(unixTimeSunrise * 1000);

  const unixTimeSunset = props.sunset;
  const dateSunset = new Date(unixTimeSunset * 1000);

  // TODO: for each day print out a readable date with day of the week, month name, number day of the month, year
  // (thursday, Jan30, 2023)

  return (
    <div className='singleWeatherBox'>
      <p>
        <b>Time: </b>
        {dateTime.toLocaleTimeString('en-US')}
      </p>
      <p>
        <b>Apparent Temp Max: </b>
        {props.apparent_temperature_max}
        {props.dataUnits.apparent_temperature_max}
      </p>
      <p>
        <b>Apparent Temp Min: </b>
        {props.apparent_temperature_min}
        {props.dataUnits.apparent_temperature_min}
      </p>
      <p>
        <b>Precip Sum: </b>
        {props.precipitation_sum}
        {props.dataUnits.precipitation_sum}
      </p>
      <p>
        <b>Sunrise: </b>
        {dateSunrise.toLocaleTimeString('en-US')}
      </p>
      <p>
        <b>Sunset: </b>
        {dateSunset.toLocaleTimeString('en-US')}
      </p>
      <p>
        <b>Temp 2m Max: </b>
        {props.temperature_2m_max}
        {props.dataUnits.temperature_2m_max}
      </p>
      <p>
        <b>Temp 2m Min: </b>
        {props.temperature_2m_min}
        {props.dataUnits.temperature_2m_min}
      </p>
      <p>
        <b>Weather Code: </b>
        <img src={`./src/assets/${props.weathercode}.png`} />
      </p>
    </div>
  );
};

export default SingleDayWeather;
