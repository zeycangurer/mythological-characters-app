import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';

function Header() {

  let navigate = useNavigate();

  let activeItem = localStorage.getItem("menu")
  const handleItemClick = (name) => {
    localStorage.setItem("menu", name)
    if (name === 'home') {
      navigate("/");
    } else if (name == 'chars') {
      navigate("/charlist")
    }
  };
  
  return (
    <>
      <div className='header-image'>
        <Image src='../../heroes.png' />
      </div>
      <div className='header-menu sticky-menu'>
        <Menu tabular inverted className={'ui small menu-color-fixed  '}>
          <Menu.Item
            name='Anasayfa'
            active={activeItem === 'home'}
            onClick={() => handleItemClick('home')}
          />
          <Menu.Item
            name='Karakterler'
            active={activeItem === 'chars'}
            onClick={() => handleItemClick('chars')}
          />
        </Menu>
      </div>
      </>
  )
}

export default Header