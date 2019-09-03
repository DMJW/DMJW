import React from 'react';
import PropTypes from 'prop-types';
import Headshake from 'react-reveal/HeadShake';

SignUpCheck.propTypes = {
  errorMessage: PropTypes.string
};

export default function SignUpCheck({ errorMessage }) {
  return <Headshake cascade><p style={{ color: 'grey' }}>{errorMessage}</p></Headshake>;
}
