import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SignupForm, LoginForm } from '../components';
import { userLogin } from "../redux/actions/auth";
import classNames from 'classnames';


const Landing = (props) => {
  const [activeForm, setActiveForm] = useState('signup');

  const handleSignup = (formValues) => {
    // props.userSignup
  }

  const handleLogin = (formValues) => {
    props.userLogin(formValues)
  }

  const updateCurrentForm = () => {
    if (activeForm === 'signup') {
      setActiveForm('login')
    }
    if (activeForm === 'login') {
      setActiveForm('signup')
    }
  }

  const renderForm = () => {
    return activeForm === 'signup' ?
      <SignupForm
        handleForm={handleSignup}
      />
      :
      <LoginForm
        handleForm={handleLogin}
      />;
  }

  return (
    <div className='landing__area col'>
      <div className='landing__container container pb-3 px-3 bg-dark'>
        <div className='row mb-2'>
          <div className='col p-0'>
            <button
              onClick={() => updateCurrentForm()}
              className={classNames({
                                      'btn btn-large text-white w-100 p-3': true,
                                      'btn-outline-dark': activeForm === 'signup',
                                      'btn-secondary': activeForm === 'login'
                                    })}
              disabled={activeForm === 'signup'}
            >
              Sign Up Here!
            </button>
          </div>

          <div className='col h-100 p-0'>
            <button
              onClick={() => updateCurrentForm()}
              className={classNames({
                                      'btn btn-large text-white w-100 p-3': true,
                                      'btn-outline-dark disabled': activeForm === 'login',
                                      'btn-secondary': activeForm === 'signup'
                                    })}
              disabled={activeForm === 'login'}
            >
              Log In Here!
            </button>
          </div>
        </div>
        {renderForm()}
      </div>
    </div>
  )
}

export default connect(null, { userLogin })(Landing);
