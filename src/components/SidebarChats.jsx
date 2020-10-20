import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createChatRoom, displayChatRooms, closeChat } from "../../redux/actions/chat";
// import { NewChatForm } from '../userForms';
import { profileIcon } from "../icons/icons";

const SidebarChats = ({ auth, chatRooms, displayChatRooms, createChatRoom, closeChat }) => {
  // const [ newRoomName, setNewRoomName ] = useState('');
  // const numChats = Object.keys(chatRooms).length
  // useEffect(() => {
  //   if (auth.token){
  //     displayChatRooms()
  //   }
  // }, [numChats, auth.token, displayChatRooms])
  //
  // const onChange = (e) => {
  //   setNewRoomName(e.target.value)
  // }
  //
  // const handleClose = (key) => {
  //   closeChat(key)
  // }
  //
  // const handleForm = (e) => {
  //   e.preventDefault()
  //   if (newRoomName.length >= 5) {
  //     createChatRoom(newRoomName, auth._id)
  //     setNewRoomName('')
  //   }
  // }
  const chatrooms = ['Room 1', 'Room 2', 'Room 3']
  const renderChatData = () => {
    if (chatRooms === {}) {
      return
    }
    return Object.keys(chatrooms).map(key => {
      return (
        <li key={key} className='chatroom__item'>
          <div className='chatroom__icon col-2 my-auto text-secondary'>
            {profileIcon}
          </div>
          <div className='col-8'>
            <div className='col text-center' >
              {key}
            </div>
          </div>
          <div className='chatroom__cta-col'>
            <button  className='chatroom__cta-close p-0 text-secondary'>
              <p className='chatroom__close'>&#128473;</p>
            </button>
          </div>
        </li>
      )
    })
  }

  const renderChats = () => {
    return (
      <ul className='chatroom__list list-unstyled'>
        <li className='chatroom__new'>
          {/*<NewChatForm handleForm={handleForm} onChange={onChange} newRoomName={newRoomName} />*/}
        </li>
        {renderChatData()}
      </ul>
    )
  }

  const chatDisplay =  renderChats()

  return (
    <div className='chatroom__list my-3'>
      {chatDisplay}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chatRooms: state.chatRooms
  }
}

export default connect(mapStateToProps, {  })(SidebarChats);
