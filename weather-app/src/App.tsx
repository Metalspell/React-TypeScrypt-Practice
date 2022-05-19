import React, { FC } from 'react';
import './App.css';

import { RootState } from './Redux-store';
import Input from './Components/Input';
import Alert from './Components/Alert';
import WeatherOutput from './Components/WeatherOutput';
import { setAlert } from './Redux-store/Actions/alertActions';
import { setError } from './Redux-store/Actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <div className="App">
      <Input title="Enter city name and press search button" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <WeatherOutput data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
