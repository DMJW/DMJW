import React from 'react';
import PropTypes from 'prop-types';
import Headshake from 'react-reveal/HeadShake';

SignUpCheck.propTypes = {
  pwLengthMes: PropTypes.string,
  pwConfirmMes: PropTypes.string,
  pwAlphabetc: PropTypes.string,
  pwIncludeNumc: PropTypes.string
};

export default function SignUpCheck({ pwLengthMes, pwConfirmMes, pwAlphabetc, pwIncludeNumc }) {
  return (
    <div style={{ backgroundColor: 'black', width: '25%', position: 'absolute' }}>
      <p style={{ color: 'white' }}><font color="#8d8dff">Hello. My name is <font color="89ff7e">Checky</font>. I will be your Password Helper while you make your password.</font> <br />There are 3 things You should do...</p>
      <div style={{ backgroundColor: 'lime' }}>
        <p>{pwAlphabetc}</p>
      </div>
      <div style={{ backgroundColor: 'orange' }}>
        <p>Check your password length<br />{pwLengthMes}</p>
      </div>
      <div style={{ backgroundColor: 'grey' }}>
        <p>{pwIncludeNumc}</p>
      </div>
      <p style={{ color: 'white' }}>Your password LEVEL is <font color="red">0</font> of <font color="blue">3</font>...</p>
      <div>
        <p style={{ color: 'white' }}>{`Your 'password' and 'confirm password' `}<font>{pwConfirmMes}</font></p>
      </div>
    </div>
  );
}
