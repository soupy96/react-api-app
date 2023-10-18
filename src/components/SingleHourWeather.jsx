const SingleHourWeather = (props) => {
  const unixTime = props.time;
  const dateTime = new Date(unixTime * 1000);

  // TODO: for each hour print out a readable date with the hour, day of the week, month name, number day of the month, year
  // (1:00pm, thursday, Jan30, 2023)

  return (
    <div className='hourlyWeatherFlexBox'>
      <p>
        <b>Time: </b>
        {dateTime.toLocaleTimeString('en-US')}
      </p>
      <p>
        <b>Apparent Temp: </b>
        {props.apparent_temperature}
        {props.dataUnits.apparent_temperature}
      </p>
      <p>
        <b>Cloudcover: </b>
        {props.cloudcover}
        {props.dataUnits.cloudcover}
      </p>
      <p>
        <b>Precip: </b>
        {props.precipitation}
        {props.dataUnits.precipitation}
      </p>
      <p>
        <b>Relative Humidity: </b>
        {props.relativehumidity_2m}
        {props.dataUnits.relativehumidity_2m}
      </p>
      <p>
        <b>Surface Pressure: </b>
        {props.surface_pressure}
        {props.dataUnits.surface_pressure}
      </p>
      <p>
        <b>Temp 2m: </b>
        {props.temperature_2m}
        {props.dataUnits.temperature_2m}
      </p>
      <p>
        <b>Visibility: </b>
        {props.visibility / 1000}
        {props.dataUnits.visibility}
      </p>
      <p>
        <b>Weathercode: </b>
        <img src={`./src/assets/${props.weathercode}.png`} />
      </p>
      <p>
        <b>Wind Direction 10m: </b>
        {props.winddirection_10m}
        {props.dataUnits.winddirection_10m}
      </p>
      <p>
        <b>Wind Gusts 10m: </b>
        {props.windgusts_10m}
        {props.dataUnits.windgusts_10m}
      </p>
      <p>
        <b>Wind Speed 10m: </b>
        {props.windspeed_10m}
        {props.dataUnits.windspeed_10m}
      </p>
    </div>
  );
};

export default SingleHourWeather;
