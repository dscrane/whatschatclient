import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMessages, joinChatroom, sendMessage, leaveChatroom } from "../../redux/actions/chat";
import { default as ChatroomDisplay } from "./ChatroomDisplay";

const ChatContainer = ({ auth, chatrooms, fetchMessages, joinChatroom, sendMessage, leaveChatroom }) => {
  const [message, setMessage] = useState("");
  const [activeChatroom, setActiveChatroom] = useState(auth.currentChatroom)

  useEffect(() => {
    Object.keys(chatrooms).forEach((chatroom) => {
      fetchMessages(chatroom);
    });
  }, []);

  useEffect(() => {
    leaveChatroom(activeChatroom, auth.user.username)
    joinChatroom(auth.currentChatroom, auth.user.username)
    setActiveChatroom(auth.currentChatroom)
  }, [auth.currentChatroom, auth.user.username])



  if (!chatrooms[auth.currentChatroom]) {
    return <></>;
  }

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage({
      message,
      chatroomId: auth.currentChatroom,
      userId: auth._id,
      author: auth.user.username
    })
    setMessage('')
  };

  return (
    <div className="chatroom__display bg-secondary">
      <div className="chatroom__container">
        <div className="chatroom__heading">
          <h2 className="chatroom__title">
            {chatrooms[auth.currentChatroom].name}
          </h2>
        </div>
        <ChatroomDisplay messages={chatrooms[auth.currentChatroom].messages} />
        <div className="chatroom__input mb-2 mx-auto">
          <form onSubmit={onSubmit} className="w-100">
            <div className="row ">
              <div className="col-10">
                <input
                  className="form-control w-100"
                  placeholder="Message..."
                  type="text"
                  value={message}
                  onChange={onChange}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-md btn-outline-secondary ">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chatrooms: state.chatrooms,
  };
};

export default connect(mapStateToProps, { fetchMessages, joinChatroom, sendMessage, leaveChatroom })(ChatContainer);
