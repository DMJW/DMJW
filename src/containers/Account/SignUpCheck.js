import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

SignUpCheck.propTypes = {
  confirmPassword: PropTypes.string,
  password: PropTypes.string
};

export default function SignUpCheck({ confirmPassword, password }) {
  const [passwordTooShort, setPasswordTooShort] = useState(true);
  const [hasAlphabet, setHasAlphabet] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [passwordMatches, setPasswordMatches] = useState(false);
  useEffect(() => {
    if (password.length < 8) {
      setPasswordTooShort(true);
    } else if (password.length >= 8) {
      setPasswordTooShort(false);
    }

    for (let i = 0; i < password.length; i++) {
      if (
        password[i] <= 'Z' &&
        password[i] >= 'A' &&
        password[i] <= 'z' &&
        password[i] >= 'a'
      ) {
        setHasAlphabet(true);
      } else if (password[i] >= 9 && password[i] >= 0) {
        setHasNumber(true);
      }
    }
    setPasswordMatches(password === confirmPassword);
  }, [password, confirmPassword]);
  return (
    <div
      style={{ backgroundColor: 'black', width: '25%', position: 'absolute' }}
    >
      <p style={{ color: 'white' }}>
        <font color="#8d8dff">
          Hello. My name is <font color="89ff7e">Checky</font>. I will be your
          Password Helper while you make your password.
        </font>{' '}
        <br />
        There are 3 things You should do...
      </p>
      <div style={{ backgroundColor: hasAlphabet ? 'lime' : 'grey' }}>
        <p>
          {hasAlphabet ? 'Your password has alphabets' : 'Please include alphabets'}
        </p>
      </div>
      <div style={{ backgroundColor: passwordTooShort ? 'orange' : 'lime' }}>
        <p>
          Check your password length
          <br />
          {passwordTooShort
            ? 'Password is too short! Password has to be 8 letters or longer'
            : 'Good length of password'}
        </p>
      </div>
      <div style={{ backgroundColor: hasNumber ? 'lime' : 'grey' }}>
        <p>
          {hasNumber
            ? 'You have number(s)'
            : 'Please include number(s)'}
        </p>
      </div>
      <p style={{ color: 'white' }}>
        Your password LEVEL is <font color="red">0</font> of{' '}
        <font color="blue">3</font>...
      </p>
      <div>
        <p style={{ color: 'white' }}>
          {`Your 'password' and 'confirm password' `}
          <font>{passwordMatches ? 'matches' : 'does not match'}</font>
        </p>
      </div>
    </div>
  );
}
