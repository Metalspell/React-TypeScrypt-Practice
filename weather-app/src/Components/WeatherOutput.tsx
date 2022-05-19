import React, { FC, useState } from 'react';
import { WeatherData } from '../Redux-store/types';
import style from './WeatherOutput.module.css';

interface WeatherProps {
  data: WeatherData[];
}

const WeatherOutput: FC<WeatherProps> = ({ data }) => {
  const [temperatureState, setTemperatureState] = useState('');
  // const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  // const celsius = (data.main.temp - 273.15).toFixed(2);

  const days = ['Monday ', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  const date = new Date();
  const dateOfMonth = date.getDate();

  console.log(data);

  return (
    <section className={style.section}>
      {data.map((item, i) => {
        return (
          <div key={i} className={style.item}>
            <div className={style.city_Date_TypeOfWeather}>
              <div className={style.cityAndDate}>
                <h1 className={style.title}>{item.name} - {item.sys.country}</h1>
                <h3 className={style.date}>{`${days[date.getDay()]}, ${dateOfMonth} ${month[date.getMonth()]}, 
              ${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`}</h3>
              </div>
              <div className={style.typeOfWeather}>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
                <p className="heading">{item.weather[0].description}</p>
              </div>
            </div>
            <div className="level">
              <div className="temperature">
                <div>
                  <p className="heading">temp</p>
                  <div className={style.temperatureData}>
                    <p className={style.temperatureValue}>
                      {+temperatureState > 0 ? '+' : '-'}
                      {temperatureState === '' ? `${(item.main.temp - 273.15).toFixed(2)}` : `${temperatureState}`}
                    </p>
                    <div className={style.typeOfTemp}>
                      <div
                        className={style.celsius}
                        onClick={() => setTemperatureState((item.main.temp - 273.15).toFixed(2))}
                      >
                        <span>
                          &#8451;
                        </span>
                      </div>
                      |
                      <div
                        className={style.fahrenheit}
                        onClick={() => setTemperatureState((item.main.temp * 1.8 - 459.67).toFixed(2))}
                      >
                        <span>
                          &#8457;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">humidity</p>
                  <p className="title">{item.main.humidity}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">pressure</p>
                  <p className="title">{item.main.pressure}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">wind</p>
                  <p className="title">{item.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
    </section>
  );
}

export default WeatherOutput;