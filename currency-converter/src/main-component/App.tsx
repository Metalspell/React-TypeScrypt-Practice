import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import { Paper, TextField, FormControl, Select, Button, InputLabel } from '@mui/material';

function App() {
  const [value, setValue] = useState<string>('');
  const [firstCountry, setFirstCountry] = useState('');
  const [secondCountry, setSecondCountry] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [countriesList, setCountriesList] = useState<string[]>([]);
  const [readyToConvert, setReadyToConvert] = useState<boolean>(false);

  // const [fuck, setFuck] = useState();

  const myHeaders = new Headers();
  myHeaders.append("apikey", "q5JOSrvv7LpDPDj0ciToQ7zU1raE3DJy");

  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch("https://api.apilayer.com/currency_data/list", requestOptions)
      .then(response => response.text())
      .then(result => setCountriesList(Object.keys(JSON.parse(result).currencies)))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  const convert = async () => {
    await fetch(`https://api.apilayer.com/fixer/convert?to=${secondCountry}&from=${firstCountry}&amount=${value}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  

  return (
    <div className={style.generalWrapper}>
      <Paper>
        <h2 className={style.mainTitle}>Currency converter</h2>
        <form className={style.form}>
          <div className={style.body}>
            <TextField
              label="Enter your currency amount"
              variant='outlined'
              value={value}
              onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
            <FormControl className={style.formControl}>
              <Select
                variant='outlined'
                native
                onChange={(e) => setFirstCountry((e.target as HTMLInputElement).value)}
              >
                {
                  countriesList.map((item) => (
                    <option key={item + ' first select'}>{item}</option>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl className={style.formControl}>
              <Select
                variant='outlined'
                native
                labelId='type-currency-to-convert'
                onChange={(e) => setSecondCountry((e.target as HTMLInputElement).value)}
              >
                {
                  countriesList.map((item) => (
                    <option key={item + ' second select'}>{item}</option>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <Button
            type='submit'
            variant='contained'
            className={style.actionButton}
            onClick={convert}
          >
            Convert!
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
