import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NewChatForm } from '../../components';
import { createChatroom } from '../../redux/actions/chat';
import { profileIcon } from "../../icons/icons";

const SidebarChats = ({ auth, chatrooms, displayChatRooms, createChatroom, closeChat }) => {
  const [ newRoomName, setNewRoomName ] = useState('');


  const handleClose = (key) => {
    closeChat(key)
  }

  const onChange = (e) => {
    setNewRoomName(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    if (newRoomName.length >= 5) {
      createChatroom(newRoomName, auth._id)
      setNewRoomName('')
    }
  }

  const renderChatData = () => {
    if (chatrooms === {}) {
      return
    }
    return Object.keys(chatrooms).map(key => {
      return (
        <li key={key} className='chatroom__item'>
          <div className='chatroom__icon col-2 my-auto text-secondary'>
            {profileIcon}
          </div>
          <div className='col-8'>
            <div className='col text-center text-white' >
              <div className='chatroom__chatroom'> {/*used to be the LINK tag*/}
                <div className='col text-center'>
                  {chatrooms[key].name}
                </div>
              </div>
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
          <NewChatForm handleForm={handleForm} onChange={onChange} newRoomName={newRoomName} />
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
    chatrooms: state.chatrooms
  }
}

export default connect(mapStateToProps, { createChatroom })(SidebarChats);
