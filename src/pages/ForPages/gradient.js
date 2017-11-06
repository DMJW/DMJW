import React from 'react';

export default function GradCover({text, textColor}) {
  return (
    <div
      className="grad_cover"
      style={{
        height: '550px',
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
  )
}