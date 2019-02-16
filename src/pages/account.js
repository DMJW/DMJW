import React from 'react';
import GradCover from '../img/gradient';

export default function Account() {
  return (
    <div className="account">
      <GradCover text="Your Account•あなたの勘定" />
      <h2>Sign In</h2>
      <input
        className="form-control"
        style={{
          width: '20%',
          marginLeft: '40%',
          textAlign: 'center'
        }}
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
        placeholder="Password"
      />
      <button className="button">Sign In</button>
      <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
      <p>{`Don't have a account?`}</p>
      <a href="/new/dmjw/id">Sign Up</a>
    </div>
  );
}
