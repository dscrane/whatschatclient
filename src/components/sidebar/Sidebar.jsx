import React, { useState } from 'react';
import { IconButton, SidebarProfile, SidebarChats,  } from '../../components';


const Sidebar = (props) => {
  const [ activeIcon, setActiveIcon ] = useState('chats')
  const icons = ['profile', 'chats']

  const setCurrentIcon = (e) => {
    if (e.currentTarget.id === 'profile-cta') {
      setActiveIcon('profile');
    }
    if (e.currentTarget.id === 'chats-cta') {
      setActiveIcon('chats');
    }
  }

  const renderIcons = () => {
    return icons.map(icon => {
      return (
        <li
          id={`${icon}-cta`}
          key={icon}
          className='nav-item'
          onClick={(e) => setCurrentIcon(e)}
        >
          <IconButton icon={icon} activeIcon={activeIcon} />
        </li>
      )
    })
  }

  const renderSidebarContent = () => {
    if (activeIcon === 'profile') {
      return <SidebarProfile />
    }
    if (activeIcon === 'chats') {
      return <SidebarChats />
    } else {
      return <div>Sign In or Create an account to see available rooms and profile</div>
    }
  }

  return (
    <div className='sidebar__content'>
      <nav className='sidebar__nav'>
        <div className='sidebar__row py-4'>
          <h2 className='text-white'>WhatsChat</h2>
        </div>
        <div className='sidebar__row'>
          <div className='sidebar__break'></div>
        </div>
        <div className='sidebar__row'>
          <ul className='sidebar__list list-unstyled components py-3 mb-0'>
            { renderIcons() }
          </ul>
        </div>
        <div className='sidebar__row'>
          <div className='sidebar__break'></div>
        </div>
        <div className='sidebar__row'>
          {renderSidebarContent()}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;
