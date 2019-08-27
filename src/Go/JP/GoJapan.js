/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './TokyoNight.jpeg';
import stay from './stayjp.png';
import move from './movejp.png';

export default function GoJapan() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce cascade>Go</Bounce></h1>
      <Slide top cascade delay={200}><h2>Japan</h2></Slide>
      <div><a href="/go/jp/hotels"><img src={stay} width="30%"></img><h3>{`Stay`}</h3></a></div>
      <div><a href="/go/jp/move"><img src={move} width="30%"></img><h3>{`Move`}</h3></a></div>
    </div>
  );
}