import React from "react";
import { plusIcon } from "../../icons/icons";

const NewChatForm = (props) => {
  const onChange = (e) => {
    props.onChange(e);
  };

  const handleForm = (e) => {
    props.handleForm(e);
  };

  const errorStyle =
    props.newRoomName.length < 5 && props.newRoomName.length !== 0
      ? "is-invalid"
      : null;

  return (
    <form className="w-100" onSubmit={handleForm}>
      <div className="chatroom__form">
        <div className="col-10">
          <input
            onChange={onChange}
            className={`form-control ${errorStyle}`}
            type="text"
            placeholder={"Create Chat Room...."}
            name="chatForm"
            required
          />
        </div>
        <div className="d-flex justify-content-end col-2 mx-auto">
          <button type="submit" className="chatroom__cta-new btn p-0">
            <div className="chatroom__new-cta text-secondary">{plusIcon}</div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewChatForm;
