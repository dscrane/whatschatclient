import React, { useState, useEffect } from "react";
import moment from "moment";
import _ from "lodash";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { ConfirmationModal, RenderForm } from "../../components";
import { userLogout, userDelete, userUpdate } from "../../redux/actions/auth";
import { pencilIconFilled } from "../../icons/icons";

const SidebarProfile = ({ auth, userLogout, userUpdate, userDelete }) => {
  const [editing, setEditing] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {}, [auth.user]);

  const modalConfig = {
    title: "Delete Account",
    message: "Are you sure you want to delete your account?",
    btnText: "Delete",
    btnStyle: "danger",
  };

  const handleDelete = () => {
    userDelete();
  };

  const handleForm = (formValues) => {
    userUpdate(formValues);
    setEditing("");
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, placeholder = null, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <li className="profile__group list-group-item">
        <div
          className={`row justify-content-between align-items-center ${className}`}
        >
          <div className="col-3 text-left p-0">
            <label className="m-auto font-weight-bold">{label}</label>
          </div>
          <div className="col-7 mx-0 pl-2">
            {editing === label ? (
              <input className="form-control text-left text-white" {...input} />
            ) : (
              <input
                className="form-control-plaintext text-left text-white"
                {...input}
                placeholder={placeholder}
              />
            )}
          </div>
          <div
            onClick={() => setEditing(label)}
            className="profile__edit col-1"
          >
            {pencilIconFilled}
          </div>
          {renderError(meta)}
        </div>
      </li>
    );
  };

  const profileCard = () => {
    return (
      <>
        <div className="card profile__card">
          <div className="card-img-top d-flex justify-content-center">
            <img
              className="card__image mt-3"
              src={`data:image/png;base64,${auth.user.avatar}`}
              height="150"
              width="150"
              alt="avatar"
            />
          </div>
          <div className="card-body">
            <RenderForm
              handleForm={handleForm}
              initialValues={_.pick(
                auth.user,
                "name",
                "username",
                "email",
                "password"
              )}
            >
              <ul className="profile__list list-group list-group-flush">
                <Field name="name" component={renderInput} label="Name" />
                <Field
                  name="username"
                  component={renderInput}
                  label="Username"
                />
                <Field name="email" component={renderInput} label="Email" />
                <Field
                  name="password"
                  component={renderInput}
                  label="Password"
                  placeholder="*********"
                />
                <li className="profile__list list-group-item">
                  <div className="row justify-content-around">
                    <div className="col text-center">
                      User Since:{" "}
                      {moment(auth.user.createdAt).format("MMM 'YY")}
                    </div>
                  </div>
                </li>
              </ul>
              <input type="submit" className="profile__submit" tabIndex="-1" />
            </RenderForm>
            <ul className=" list-group list-group-flush">
              <li className="profile__list list-group-item m-auto">
                <button
                  onClick={() => {
                    userLogout();
                  }}
                  className="profile__cta-logout btn mt-2"
                >
                  Log Out
                </button>
              </li>
              <li className="profile__list list-group-item m-auto">
                <button
                  onClick={() => setModalDisplay(true)}
                  className="profile__cta-delete btn"
                  disabled={auth.user._id === "5f637fdd0a41ae691c828e50"}
                >
                  Delete Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  const profileDisplay = profileCard();

  return (
    <div className="profile__display">
      {profileDisplay}
      <ConfirmationModal
        modalConfig={modalConfig}
        setModalDisplay={setModalDisplay}
        modalDisplay={modalDisplay}
        handleDelete={handleDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { userLogout, userDelete, userUpdate })(
  SidebarProfile
);
