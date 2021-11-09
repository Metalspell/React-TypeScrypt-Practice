import React, { FC, useState } from 'react';
import { TabNav, Contacts, Foto, About} from '../../Types/types'
import '../Headeritems/Headeritems.css';
import InfoOutPut from '../Infooutput/Infooutput';

interface HeaderElementsProps {
  headerNavElem: TabNav[];
}

const myContacts: Contacts[] = [
  { contacts: 'Phone: 0938559908' }
]

const myFoto: Foto[] = [
  { link: 'https://s.mind.ua/img/forall/a/202159/51.jpg?1609428881' }
]

const aboutMe: About[] = [
  { text: "My name is Dmitry and I am a beginning a web developer!" }
]


const HeaderItems: FC<HeaderElementsProps> = ({ headerNavElem }) => {

  const [clickTab, setclickTab] = useState<string>('');
  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    setclickTab(event.currentTarget.id);
  };

  return (
    <>
      <div className='header-nav'>
        {headerNavElem.map((items, i) => {
          return (
            <div id={`${i}`} onClick={handleMouseEvent}
              className={clickTab === `${i}` ? "header-item active" : "inactive"}
              key={i}><h1>{items.text}</h1></div>
          )
        })}
      </div>
      <InfoOutPut myContacts={myContacts} myFoto={myFoto}
        about={aboutMe} click={clickTab} />
    </>
  )
}

export default HeaderItems;