import React, { useState } from "react";
import { connect } from "react-redux";
import history from "../../utils/history";
import { NewChatForm } from "../../components";
import { createChatroom } from "../../redux/actions/chat";
import { setChatroom } from "../../redux/actions/auth";
import { profileIcon } from "../../icons/icons";

const SidebarChats = ({
  auth,
  chatrooms,
  setChatroom,
  createChatroom,
  closeChat,
}) => {
  const [newRoomName, setNewRoomName] = useState("");

  const handleClose = (key) => {
    closeChat(key);
  };

  const onChange = (e) => {
    setNewRoomName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (newRoomName.length >= 5) {
      createChatroom(newRoomName, auth._id);
      setNewRoomName("");
    }
  };

  const renderChatroom = (chatroomId) => {
    setChatroom(chatroomId);
    history.push(`/chats/${chatroomId}`);
  };

  const renderChatroomList = () => {
    if (chatrooms === {}) {
      return;
    }
    return Object.keys(chatrooms).map((key) => {
      return (
        <li key={key} className="chatroom__item">
          <div className="chatroom__icon col-2 my-auto text-secondary">
            {profileIcon}
          </div>
          <div className="col-8 px-0">
            <div className="col text-center text-white">
              <div
                onClick={() => renderChatroom(key)}
                className="chatroom__chatroom"
              >
                {" "}
                {/*used to be the LINK tag*/}
                <div className="col text-left">{chatrooms[key].name}</div>
              </div>
            </div>
          </div>
          <div className="chatroom__cta-col">
            <button className="chatroom__cta-close p-0 text-secondary">
              <p className="chatroom__close">&#128473;</p>
            </button>
          </div>
        </li>
      );
    });
  };

  const renderSidebarChats = () => {
    return (
      <ul className="chatroom__list list-unstyled">
        <li className="chatroom__new">
          <NewChatForm
            handleForm={handleForm}
            onChange={onChange}
            newRoomName={newRoomName}
          />
        </li>
        {renderChatroomList()}
      </ul>
    );
  };

  return <div className="chatroom__list">{renderSidebarChats()}</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chatrooms: state.chatrooms,
  };
};

export default connect(mapStateToProps, { createChatroom, setChatroom })(
  SidebarChats
);
