import React, { useEffect } from "react";

import { connect } from "react-redux";
import { ChatContainer } from "../components/chats";

const Chatroom = ({ chatrooms }) => {
  const renderChatContainer =
    chatrooms.length !== 0 ? (
      <ChatContainer />
    ) : (
      <div>Click on a chat room to enter</div>
    );
  return <>{renderChatContainer}</>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chatrooms: state.chatrooms,
  };
};

export default connect(mapStateToProps, {})(Chatroom);
