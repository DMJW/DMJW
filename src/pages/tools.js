import React from 'react';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';

export default function Tools() {
  return (
    <div>
      <>
        <Jump cascade>
          <h2 style={{ paddingTop: '10%' }}>Sorry</h2>
        </Jump>
        <h1>Tools sevice is <HeadShake>not available</HeadShake> now!</h1>
        <p>You can still</p>
        <h2>Take a look</h2>
        <p>{`at what we're making`}</p>
        <h3>Unit Converter</h3>
        {/* <img src={UnitConvimg} /> */}
        <h3>Color Tools</h3>
        <h4>And more coming soon!</h4>
        <a href="/"><button>Go back to Global home</button></a>
        <a href="/kr"><button>Go to Korean home</button></a>
      </>
    </div>
  );
}
