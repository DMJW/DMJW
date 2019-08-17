import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GradCover from '../../img/gradient';
import request from 'axios';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import URL from '../../constants/URL';
import GoogleLogin from 'react-google-login';
import AppleSIbtn from './AppleSignIn.png';
import NaverSIbtn from './Naverloginbtn.jpg';

Account.propTypes = {
  login: PropTypes.func.isRequired
};
export default function Account({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signInPage, setSignInPage] = useState(true);

  return (
    <div className="account">
      <GradCover text="Your Account•あなたの勘定" height="300" />
      {signInPage && (
        <>
          <Zoom cascade><h2>Sign In</h2></Zoom>
          <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Username"
          />
          <input
            className="form-control"
            type="password"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          />
          <button className="button" onClick={signIn}>
            Sign In
          </button>
          <Flip top>
            <div
              className="SIPgOth"
              style={{ marginBottom: '15px', border: '3px dotted palegreen' }}
            >
              <h3>Use one of your other accounts</h3>
              <p>No sign up needed!</p>
              <font color="blue">G</font><font color="red">o</font><font color="yellow">o</font><font color="blue">g</font><font color="green">l</font><font color="red">e</font>
              <GoogleLogin
                clientId="879558629714-9e3o4cn33tf5h0i29po9oifmjbkbadrd.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={onGoogleLoginSuccess}
                onFailure={onGoogleLoginFail}
              />
              {/* <button style={{ backgroundColor: '#5ecb6a' }}>
              Sign in with NAVER
            </button> */}
              {/* <button>
              <img src={NaverSIbtn} width="190"></img>
            </button> */}
              <img src={NaverSIbtn} width="190"></img>
              {/* <button> */}
              <img src={AppleSIbtn} />
              {/* </button> */}
            </div>
          </Flip>
          <Flip top>
            <div className="SIPgOth">
              <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
              <p>{`Don't have a account?`}</p>
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => setSignInPage(false)}
              >
                Sign Up
            </a>
            </div></Flip>
        </>
      )}

      {!signInPage && (
        <div>
          <h2>We are</h2>
          <Zoom><h1>Sorry</h1></Zoom>
          <h3>The sign up function is being updated! Please wait until the update ends(~ 20 August 2019, V2.5 update)</h3>
          <p>{`Already have this website's account?`}</p>
          <a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setSignInPage(true)}>
            Click me to go to Sign In page!
          </a>
        </div>
      )}
      <br />
      <a href="/">Back To Main</a>
    </div>
  );

  async function onGoogleLoginSuccess(response) {
    const { profileObj, googleId } = response;
    console.log('logging in with google');
    const { data } = await request.post(`${URL}/users/google`, {
      profileObj,
      googleId
    });
    console.log(data);
  }

  function onGoogleLoginFail(response) {
    console.dir('fail', response);
  }

  async function signIn() {
    try {
      const {
        data: { token, userId }
      } = await request.get(
        `${URL}/users?username=${username}&password=${password}`
      );
      login({
        token,
        userId,
        username
      });
    } catch (error) {
      console.error(error);
      if (
        window.confirm(
          'An error has occured! Please Try again.\nShow error message?\n\\/NO YES\\/'
        )
      ) {
        let errorwin = window.open();
        errorwin.document.write(
          'AN ERROR HAS OCCURED WHILE LOGGING IN!\n\n' + error
        );
        window.prompt(
          'Do you like this error?'
        );
        errorwin.focus();
      }
    }
  }

  async function signUp() {
    if (password.length > 8) {
      console.log(`it is longer than 8`);
    } else {
      console.log(`it is not longer than 8`);
      return;
    }
    if (password === confirmPassword) {
      console.log(`Password Matches`);
    } else {
      console.log(`Password does not match`);
      return;
    }

    const { data } = await request.post(`${URL}/users`, {
      username,
      password
    });
    localStorage.setItem('token', data.token);
  }
}
