import React from 'react';
import PropTypes from 'prop-types';

GradCover.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string
};
export default function GradCover({ text, textColor, height }) {
  return (
    <div
      className="grad_cover"
      style={{
        height: height || '550px',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2px',
        textAlign: 'center'
      }}
    >
      <div className="container-fluid">
        <h1
          className="display-3"
          style={{
            color: textColor || '#fff',
            fontSize: '2.5em',
            marginTop: '2px',
            marginBottom: '2px',
            fontWeight: 'bold'
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
