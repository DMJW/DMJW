/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './JP/TokyoNight.jpeg';

export default function GoMain() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce top cascade> Go</Bounce></h1>
      <Slide left cascade count={2} delay={500}><h2>{`The perfect "Go" to somewhere`}</h2></Slide>
      <p>Going to 🤽🏼‍PLAY? or Going on a <span aria-hidden="true" role="img">📍</span>TRIP?<br />{`See the "DMJW's Go!" before and while!`}</p>
      <div style={{ height: '35%' }} className="JapanGoM"><Fade cascade><a href="/go/japan"><img src={Tokyoimg} height="500px" /><br />GO to Japan</a></Fade></div>
    </div>
  );
}