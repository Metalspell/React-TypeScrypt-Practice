import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { InputProps } from '../../Redux-store/types';
import style from  './Input.module.css';
import { setAlert } from '../../Redux-store/Actions/alertActions';
import { getWeather, setLoading } from '../../Redux-store/Actions/weatherActions';

const Input: FC<InputProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className={style.tytle}>{title}</h1>
          <form className={style.form} onSubmit={submitHandler}>
            <input
              type="text"
              className={style.formField}
              placeholder="Enter city name"
              spellCheck="false"
              value={city}
              onChange={changeHandler}
            />
            <button className={style.button}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
