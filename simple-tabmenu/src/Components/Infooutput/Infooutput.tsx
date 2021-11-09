import React, { FC, useState, useEffect } from 'react';
import './Infooutput.css';
import { Contacts, Foto, About } from '../../Types/types'

interface OutputProps {
  myContacts: Contacts[];
  myFoto: Foto[];
  about: About[];
  click?: string;
}

const InfoOutPut: FC<OutputProps> = ({ myContacts, myFoto, about, click }) => {
  const [activeContent, setactiveContent] = useState<string|undefined>('');

  useEffect(() => {
    setactiveContent(click)
  }, [click]);

  console.log(activeContent)
  
  return (
    <div className='output-wrapper'>
      <div className={activeContent === '2' ? "content-item active  " : "inactive"}>
        <h1>{myContacts[0].contacts}</h1>
      </div>
      <div className={activeContent === '1' ? "content-item active" : "inactive"}>
        <img src={myFoto[0].link} alt="" />
      </div>
      <div className={activeContent === '0' ? "content-item active" : "inactive"}>
        <h1>{about[0].text}</h1>
      </div>
    </div>
  )
}

export default InfoOutPut;