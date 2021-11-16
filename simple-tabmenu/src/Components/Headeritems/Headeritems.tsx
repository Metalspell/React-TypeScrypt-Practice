import React, { FC, useState, useEffect } from 'react';
import { TabNav, Contacts, Foto, About } from '../../Types/types'
import '../Headeritems/Headeritems.css';
import InfoOutPut from '../Infooutput/Infooutput';
import Button, { ButtonProps } from '../Button/Button';

export interface HeaderElementsProps extends ButtonProps {
  headerNavElem: TabNav[];
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

  const [clickTab, setclickTab] = useState<string>('0');
  const [activeTab, setactiveTab] = useState<boolean>(false);

  useEffect(() => {
    let butElem = document.querySelector('button')?.id;
    if (butElem === '0') {
      setactiveTab(true);
    }
  }, []);


  const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    setclickTab(event.currentTarget.id);
  };

  return (
    <>
      <div role="tablist" aria-label="Sample Tabs" className='header-nav'>
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
        about={aboutMe} click={clickTab} active={activeTab} />
    </>
  )
}

export default HeaderItems;