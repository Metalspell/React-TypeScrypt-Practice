import React, { FC, useState } from 'react';
import { TabNav, Contacts, Foto, About } from '../../Types/types'
import '../Headeritems/Headeritems.css';
import InfoOutPut from '../Infooutput/Infooutput';
import Button, { ButtonProps } from '../Button/Button';

export interface HeaderElementsProps extends ButtonProps {
  headerNavElem: TabNav[];
  isActive?: boolean;
}

const myContacts: Contacts[] = [
  { contacts: 'Phone: 0938559908' }
]

const myFoto: Foto[] = [
  { link: 'https://s.mind.ua/img/forall/a/202159/51.jpg?1609428881' }
]

const aboutMe: About[] = [
  { text: "My name is Dmitry and I am a beginning a web developer:)" }
]

const HeaderItems: FC<HeaderElementsProps> = ({ headerNavElem, isActive, ...props }) => {

  const [clickTab, setclickTab] = useState<string>('');
  const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    setclickTab(event.currentTarget.id);
  };

  return (
    <>
      <div className='header-nav'>
        {headerNavElem.map((items, i) => {
          return (
            <Button variant={clickTab === `${i}` ? "primary" : "secondary"}
              id={`${i}`} onClick={handleMouseEvent} key={i}>
              <h1>{items.text}</h1>
            </Button>
          )
        })}
      </div>
      <InfoOutPut myContacts={myContacts} myFoto={myFoto}
        about={aboutMe} click={clickTab} />
    </>
  )
}

export default HeaderItems;