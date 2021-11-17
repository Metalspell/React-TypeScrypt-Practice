import React from 'react';
import './App.css';
import HeaderItems from './Components/Headeritems/Headeritems';
import { TabNav } from './Types/types';

function App() {

  const headerNavElem: TabNav[] = [
    { text: 'About me' },
    { text: 'My Foto' },
    { text: 'My contacts' },
  ]

  return (
    <div className="general-container">
      <HeaderItems headerNavElem={headerNavElem} />
    </div>
  );
}

export default App;
