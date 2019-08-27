/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './TokyoNight.jpeg';
import hotels from './hotelsjp.jpeg';

export default function GoJapan() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce cascade>Go</Bounce></h1>
      <Slide top cascade delay={200}><h2>Japan Hotels</h2></Slide><Fade delay={1000}><img src={hotels} width="25%" /></Fade>
    </div>
  );
}