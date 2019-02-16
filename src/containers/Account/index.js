import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GradCover from '../../img/gradient';
import request from 'axios';
import URL from '../../constants/URL';

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
      <GradCover text="Your Account•あなたの勘定" />
      {signInPage && (
        <>
          <h2>Sign In</h2>
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
          <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
          <p>{`Don't have a account?`}</p>
          <a style={{ cursor: 'pointer' }} onClick={() => setSignInPage(false)}>
            Sign Up
          </a>
        </>
      )}
      {!signInPage && (
        <>
          <h2>Sign Up</h2>
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
          <p>Confirm password</p>
          <input
            className="form-control"
            type="password"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            placeholder="Password"
          />
          <button className="button" onClick={signUp}>
            Sign Up
          </button>
          <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
          <p>{`Already a user?`}</p>
          <a style={{ cursor: 'pointer' }} onClick={() => setSignInPage(true)}>
            Sign In
          </a>
        </>
      )}
    </div>
  );

  async function signIn() {
    try {
      const {
        data: { token, userId }
      } = await request.get(
        `${URL}/users?username=${username}&password=${password}`
      );
      login({ token, userId, username });
    } catch (error) {
      console.error(error);
    }
  }

  async function signUp() {
    const { data } = await request.post(`${URL}/users`, {
      username,
      password
    });
    localStorage.setItem('token', data.token);
  }
}
