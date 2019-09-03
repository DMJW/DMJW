/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tokyoimg from './TokyoNight.jpeg';
import stay from './stayjp.png';
import tshlogo from './tshlogo.png';
import tsh from './tsh.png';
import mtrHotels from './mtrHotels.jpg';
import edmont from './edmont.jpg';

export default function GoJpStay() {
  return (
    <div>
      <h1>{`DMJW's`} <Bounce cascade top>Go</Bounce></h1>
      <Slide top cascade delay={500}><h2>STAY | Japan</h2></Slide><Fade delay={1000}><img src={stay} width="25%" /></Fade>
      <div>
        <h3>Tokyo</h3>
        <div>
          <a href="https://www.tokyostationhotel.jp">
            <img src={tsh} width="300px" />
            <h4><img src={tshlogo} style={{ backgroundColor: 'black' }}></img></h4>
            <p style={{ color: 'black' }}>Classic Luxury.<br />A hotel with more than 100 year history. In Tokyo station.</p>
          </a>
        </div>
        <div>--------------</div>
        <div>
          <a href="https://www.jre-hotels.jp/metropolitan">
            <h4><img src={mtrHotels} width="200px"></img></h4>
            <p style={{ color: 'black' }}>Crossing comfort and vibrancy</p>
          </a>
          <a href="https://marunouchi.metropolitan.jp/">
            <h4>Hotel Metropolitan Tokyo Marunouchi</h4>
            <p style={{ color: 'black' }}>A hotel right next to Tokyo Station.</p>
          </a>
          <a href="https://edmont.metropolitan.jp/">
            <h4>Hotel Metropolitan Edmont</h4>
            <img src={edmont} width="300" />
            <p style={{ color: 'black' }}>A little away(Right next) from the center of Tokyo. Next to two stations: Suidobashi and Lidabashi</p>
          </a>
        </div>
        <div>--------------</div>
      </div>
    </div>
  );
}