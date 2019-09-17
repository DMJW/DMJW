/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GradCover from '../../img/gradient';
import request from 'axios';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Headshake from 'react-reveal/HeadShake';
import URL from '../../constants/URL';
import GoogleLogin from 'react-google-login';
import AppleSIbtn from './AppleSignIn.png';
import NaverSIbtn from './Naverloginbtn.jpg';
import SignUpCheck from './SignUpCheck';

Account.propTypes = {
  login: PropTypes.func.isRequired,
  userId: PropTypes.number,
  acusername: PropTypes.string,
  loading: PropTypes.bool
};
export default function Account({ login, userId, acusername, loading }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signInPage, setSignInPage] = useState('First');
  const [pwLengthMes, setPwLengthMes] = useState('Please write down your password');
  const [pwAlphabetc, setPwAlphabetc] = useState('Hmm....');
  const [pwIncludeNumc, setPwNumc] = useState('Please include number(s)');
  const [pwConfirmMes, setPwConfirmMes] = useState('cannot be compared.');

  return (
    <div className="account">
      {(loading || !userId) && (
        <div>
          <GradCover text="Your Account•あなたの勘定" height="300px" />
        </div>
      )}

      {signInPage === 'First' && !userId && !loading && (
        <div>
          <Zoom cascade><font style={{ fontSize: '2em' }}>Which do you want to do?</font></Zoom>
          <Flip top>
            <div style={{ width: '50%', backgroundColor: '#fff7dc' }}>
              <h2>Sign In</h2>
              <p>{`Click me if you already have an account and want to Sign In!`}</p>
              <button onClick={() => setSignInPage('SignIn')} className="button"><span>Go</span></button>
            </div>
          </Flip>
          <Flip top>
            <div style={{ width: '50%', marginLeft: '50%', backgroundColor: '#fff7dc' }}>
              <h2>Sign Up</h2>
              <p>{`Click me if you don't have an account and want to create one!`}</p>
              <button onClick={() => setSignInPage('SignUp')} className="button"><span>Go</span></button>
            </div>
          </Flip>
        </div>
      )}
      {signInPage === 'SignIn' && !userId && (
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
              <p>Easy Sign in with a few clicks! Use your  <font color="blue">G</font><font color="red">o</font><font color="yellow">o</font><font color="blue">g</font><font color="green">l</font><font color="red">e</font> Account, <font color="green">Naver</font>(<font color="green">네이버</font>) 계정 or <font color="red">Apple</font> <font color="pink">ID</font>.</p>
              <GoogleLogin
                clientId="879558629714-9e3o4cn33tf5h0i29po9oifmjbkbadrd.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={onGoogleLoginSuccess}
                onFailure={onGoogleLoginFail}
              />
              <img src={NaverSIbtn} width="190"></img>
              <img src={AppleSIbtn} />
            </div>
          </Flip>
          <Flip top>
            <div className="SIPgOth">
              <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
              <p>{`Don't have a account?`}</p>
              <a
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => setSignInPage('SignUp')}
              >
                Sign Up<br /><font color="grey">(You can also sign up with other accounts!)</font>
              </a>
            </div></Flip>
        </>
      )}

      {signInPage === 'SignUp' && !userId && (
        <div>
          {/* <h2>We are</h2>
          <Zoom><h1>Sorry</h1></Zoom>
          <h3>The sign up function is being updated! Please wait until the update ends(~ 22 August 2019, V2.5 update)</h3>
          <div> */}
          <Zoom cascade>
            <h2>Sign Up</h2>
          </Zoom>
          <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            placeholder="First Name"
          />
          <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            placeholder="Last Name"
          />
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
            onChange={handleSetPassword}
            placeholder="Password"
          />
          <SignUpCheck pwLengthMes={pwLengthMes} pwConfirmMes={pwConfirmMes} pwAlphabetc={pwAlphabetc} pwIncludeNumc={pwIncludeNumc} />
          <input
            className="form-control"
            type="password"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            value={confirmPassword}
            onChange={confirmNewPassword}
            placeholder="Confirm Password"
          />

          <select style={{ background: '#dd3e54', background: '-webkit-linear-gradient(to bottom, #6be585, #dd3e54)', background: 'linear-gradient(to bottom, #6be585, #dd3e54)', height: '30px' }}>
            <option>Select</option>
            <option>Email</option>
            <option disabled>Phone(Unavailable right now)</option>
            <option disabled>Phone + Email</option>
          </select>
          <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            placeholder="Email"
          />
          <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            placeholder="Phone Number"
            value="Phone Number Unavailable now"
          />
          {/* <input type="checkbox">I am under 14</input>
          <input type="checkbox" defaultChecked>I am older than 14</input> */}
          <p>Please enter your Birthday(optional)</p>
          <input placeholder="Date" />
          <select>
            <option>---Select Month---</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <input placeholder="Year" />
          <br />
          <p>
            I agree to
            <a
              href="/SUPIA"
              target="_blank"
            >{`"Collection and use of personal information"`}</a>
          </p>
          <button>
            <span role="img" aria-label="Check">
              ✅
            </span>
          </button>
          <button>
            <span role="img" aria-label="No(x)">
              ❌
            </span>
          </button>
          <br />
          <Flip cascade>
            <button className="button" onClick={signUp}>
              Sign Up
            </button>
          </Flip>
          <Flip top>
            <div className="SIPgOth" style={{ marginBottom: '15px', border: '3px dotted palegreen' }}>
              <h3>Use one of your other accounts</h3>
              <p>Easy Sign up with clicks! Use your  <font color="blue">G</font><font color="red">o</font><font color="yellow">o</font><font color="blue">g</font><font color="green">l</font><font color="red">e</font> Account, <font color="green">Naver</font>(<font color="green">네이버</font>) 계정 or <font color="red">Apple</font> <font color="pink">ID</font>.</p>
              <GoogleLogin
                clientId="879558629714-9e3o4cn33tf5h0i29po9oifmjbkbadrd.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={onGoogleLoginSuccess}
                onFailure={onGoogleLoginFail}
              />
              <img src={NaverSIbtn} width="190"></img>
              <img src={AppleSIbtn} />
              {/* <p>Unavailable</p> */}
            </div>
          </Flip>
          <Flip top>
            <div className="SIPgOth">
              <a href="http://www.dmjwweb.com/new-a-dmjw">
                Sign Up to DMJWWEB Account(seperate accounts)
          </a>
              <p>{`Already have this website's account?`}</p>
              <a style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setSignInPage('SignIn')}>
                Click me to go to Sign In page!
          </a>
            </div>
          </Flip>
        </div>
      )}
      {userId && (
        <div>
          <GradCover text="Your Account" height="100" />
          <h1>Hi, {acusername}</h1>
          <p>Account info view and Settings service is being prepared...</p>
        </div>
      )}
      {loading && (
        <div>
          <h1>Loading</h1>
          <h2>Your Account info and Login info...</h2>
          <div className="AcLoad">
            <div className="ALdot1"></div>
            <div className="ALdot2"></div>
          </div>
          <p>{`Please Wait! It will only take a few seconds(if it doesn't... ther is an error or something wrong)`}</p>
        </div>
      )}
      <br />
      <a href="/">Back To Main</a>
    </div>
  );

  function handleSetPassword(event) {
    if (event.target.value.length < 8) {
      setPwLengthMes('Password is too short! Password has to be longer than 8');
      console.log(event.target.value + ' short');
    }
    else if (event.target.value.length > 8) {
      setPwLengthMes('✅');
      console.log(event.target.value + ' check');
    }

    for (let i = 0; i < event.target.value.length; i++) {
      if (event.target.value[i] <= 'Z' && event.target.value[i] >= 'A' && event.target.value[i] <= 'z' && event.target.value[i] >= 'a') {
        setPwAlphabetc('Your password has alphabets');
      } else if (9 >= event.target.value[i] && event.target.value[i] >= 0) {
        setPwNumc('You have number(s)');
      }
    }

    // else {
    //   setErrorMessage('...?');
    //   console.log(event.target.value + ' ?');
    // }
    return setPassword(event.target.value);
  }

  function confirmNewPassword(event) {
    setConfirmPassword(event.target.value);
  }

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
        window.prompt(
          'Do you like this error?'
        );
        let errorwin = window.open();
        errorwin.document.write(
          'AN ERROR HAS OCCURED WHILE LOGGING IN!\n\n' + error
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
