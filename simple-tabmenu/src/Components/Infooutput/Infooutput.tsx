import React, { FC, useState, useEffect } from 'react';
import './Infooutput.css';
import { Contacts, Foto, About } from '../../Types/types'

interface OutputProps {
  myContacts: Contacts[];
  myFoto: Foto[];
  about: About[];
  click?: string;
  active?: boolean;
}

const InfoOutPut: FC<OutputProps> = ({ myContacts, myFoto, about, click, active }) => {
  const [activeContent, setactiveContent] = useState<string | undefined>('');
  const [activeTab, setactiveTab] = useState<boolean | undefined>(false);

  useEffect(() => {
    setactiveContent(click)
    setactiveTab(active);
  }, [click, active]);

  return (
    <div className='output-wrapper'>
      <div className={activeContent === '2' ? "content-item active  " : "inactive"}>
        <h1>Tab 3</h1>
        <h2>{myContacts[0].contacts}</h2>
      </div>
      <div className={activeContent === '1' ? "content-item active" : "inactive"}>
        <h1>Tab 2</h1>
        <img src={myFoto[0].link} alt="" />
      </div>
      <div className={activeContent === '0' && activeTab === true ? "content-item active" : "inactive"}>
        <h1>Tab 1</h1>
        <h2>{about[0].text}</h2>
      </div>
    </div>
  )
}

export default InfoOutPut;