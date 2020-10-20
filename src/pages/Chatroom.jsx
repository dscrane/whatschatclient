import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchChatrooms } from "../redux/actions/chat";

const Chatroom = ({ fetchChatrooms, chatrooms }) => {


  return(
    <div>Click on a chat room to enter</div>
  )

}

const mapStateToProps = state => {
  return {
    chatrooms: state.chatrooms
  }
}

export default connect(mapStateToProps, { fetchChatrooms })(Chatroom);
