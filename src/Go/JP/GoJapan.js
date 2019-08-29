/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './TokyoNight.jpeg';
import stay from './stayjp.png';
import move from './movejp.png';
import jpgif from './jpgif.gif';

export default function GoJapan() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce cascade>Go</Bounce></h1>
      <Slide top cascade delay={100}><h2>Japan</h2></Slide>
      <Fade delay={1000}><img src={jpgif} width="300" /></Fade>
      <Slide top delay={1700}><div ><p style={{ fontSize: '25pt' }}>⏬</p></div></Slide>
      <Flip top delay={2300}>
        <div><a href="/go/japan/stay"><img src={stay} width="30%"></img><h3>{`Stay`}</h3></a></div>
        <div><a href="/go/japan/move"><img src={move} width="30%"></img><h3>{`Move`}</h3></a></div>
      </Flip>
    </div>
  );
}