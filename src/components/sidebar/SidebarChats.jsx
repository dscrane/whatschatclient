import React from 'react';
import { connect } from 'react-redux';
import { profileIcon } from "../../icons/icons";

const SidebarChats = ({ auth, chatRooms, displayChatRooms, createChatRoom, closeChat }) => {

  const chatrooms = ['Room 1', 'Room 2', 'Room 3']
  const renderChatData = () => {
    if (chatRooms === {}) {
      return
    }
    return chatrooms.map(key => {
      return (
        <li key={key} className='chatroom__item'>
          <div className='chatroom__icon col-2 my-auto text-secondary'>
            {profileIcon}
          </div>
          <div className='col-8'>
            <div className='col text-center text-white' >
              <div className='chatroom__chatroom'> {/*used to be the LINK tag*/}
                <div className='col text-center'>
                  {key}
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
