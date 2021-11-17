import React, { FC, useState, useEffect } from 'react';
import './Infooutput.css';
import { OutputContent } from '../../Types/types'

interface OutputProps {
  myContacts: OutputContent[];
  click?: string;
  active?: boolean;
}

const InfoOutPut: FC<OutputProps> = ({ myContacts, click}) => {
  const [activeContent, setactiveContent] = useState<string | undefined>('');

  useEffect(() => {
    setactiveContent(click)
  }, [click]);

  return (
    <div className='output-wrapper'>
      {myContacts.map((items, i) => {
        return (
          <div key={i} className={activeContent === i+'' ? "content-item active" : "inactive"}>
            <h1>Tab {i+1}</h1>
            <img src={items.text} alt="" />
            <h2>{items.text}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default InfoOutPut;