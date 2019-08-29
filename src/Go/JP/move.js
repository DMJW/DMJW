/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './TokyoNight.jpeg';
import move from './movejp.jpeg';

export default function GoJapan() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce cascade top>Go</Bounce></h1>
      <Slide top cascade delay={500}><h2>MOVE | Japan</h2></Slide><Fade delay={1000}><img src={move} width="25%" /></Fade>
    </div>
  );
}