import React, { useState } from 'react';
import moment from 'moment';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { ConfirmationModal, RenderForm } from '../../components';
import { userLogout, userDelete } from "../../redux/actions/auth";
import { pencilIcon } from "../../icons/icons";

const SidebarProfile = ({ auth, userLogout, updateUser, userDelete }) => {
  const [ editing, setEditing ] = useState('')
  const [ modalDisplay, setModalDisplay ] = useState(false);
  const modalConfig = {
    title: 'Delete Account',
    message: 'Are you sure you want to delete your account?',
    btnText: 'Delete',
    btnStyle: 'danger'
  }

  const handleDelete = () => {
    userDelete();
  }

  const handleForm = (formValues) => {
    // updateUser(formValues)
    setEditing('')
  }

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <li className='list-group-item px-3'>
        <div className={`row justify-content-between align-items-center ${className}`}>
          <div className='col-3 text-left p-0'>
            <label className='m-auto font-weight-bold'>
              {label}
            </label>
          </div>
          <div className='col-7'>
            {editing === label ?
              <input className='form-control text-left' {...input} /> :
              <input className='form-control-plaintext text-left' {...input} />}
          </div>
          <div onClick={() => setEditing(label)} className='col-1 text-secondary'>
            {pencilIcon}
          </div>
          {renderError(meta)}
        </div>
      </li>
    )
  }

    console.log('auth user', auth.user)
  const profileCard = () => {
    return (
      <>
        <div className='card profile__card'>
          <div className='card-img-top d-flex justify-content-center'>
            <img
              className='mt-3'
              src={`data:image/png;base64,${auth.user.avatar}`}
              height='150'
              width='150'
              alt='avatar'
            />
          </div>
          <div className='card-body'>
            <RenderForm handleForm={handleForm} >
              <ul className='list-group list-group-flush'>
                <Field name='name' component={renderInput} label='Name' />
                <Field name='username' component={renderInput} label='Username' />
                <Field name='email' component={renderInput} label='Email' />
                <Field name='password' component={renderInput} label='Password' />
                <li className='list-group-item'>
                  <div className='row justify-content-around'>
                    <div className='col text-center'>
                      User Since: {moment(auth.user.createdAt).format("MMM 'YY")}
                    </div>
                  </div>
                </li>
              </ul>
              <input type="submit"
                     className='profile__submit'
                     tabIndex="-1"/>
            </RenderForm>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item m-auto'>
                <button onClick={() => {userLogout()}} className='btn btn-secondary mt-2'>
                  Log Out
                </button>
              </li>
              <li className='list-group-item m-auto'>
                <button onClick={() => setModalDisplay(true)} className='btn btn-danger' disabled={auth.user._id === '5f637fdd0a41ae691c828e50'}>Delete Account</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }


  const profileDisplay =  profileCard()

  return (
    <div className='d-flex flex-column m-3' style={{width: '90%'}}>
      {profileDisplay}
      <ConfirmationModal modalConfig={modalConfig} setModalDisplay={setModalDisplay} modalDisplay={modalDisplay} handleDelete={handleDelete} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, { userLogout, userDelete })(SidebarProfile);
