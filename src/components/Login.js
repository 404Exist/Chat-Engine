import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import firebase from 'firebase/app';
import { auth } from '../firebase';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome To 404Exist Chat App!</h2>

        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  )
}

export default Login;