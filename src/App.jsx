import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={52ae181bcb63ed3c13c14262a1f95bfb}`
    )
      .then((response) => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className='App'>
      {loading && <p>Loading...</p>}
      {!loading && <p>Fetched data</p>}
    </div>
  );
}

export default App;
