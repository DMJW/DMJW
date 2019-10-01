import React from 'react';
import MyDrwnTop from '../img/DrawingsByMT.png';
import NewMailGif from './img/NewMail.gif';
import MailRead from './img/MailRead.GIF';
import printer from './img/printerprinting.GIF';
import wonderfulmb from './img/wonderfulmusicbox.GIF';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default function artsbyMe() {
  return (
    <div>
      <div className="artMeTop">
        <Flip left>
          <img src={MyDrwnTop} />
        </Flip>
      </div>
      <div>
        <Fade left cascade>
          <h3>Select A Drawing type or use the finder</h3>
          <p style={{ fontSize: 20 }}>Find a drawing here.</p>
        </Fade>
        <input
          style={{ backgroundColor: '#15ff00', textAlign: 'center' }}
          onKeyUp="Search()"
        />

        <button
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick="Search()"
        >
          FIND(Still making😅!)
        </button>
        <h2>Animated Drawings!</h2>
        <img src={NewMailGif} width="300"></img>
        <img src={MailRead} width="300"></img>
        <p>18 February 2019</p>
        <p>------------------------</p>
        <img src={printer} width="300"></img>
        <img src={wonderfulmb} width="300"></img>
        <p>Date Unknown(Before 22Feb2019)</p>
      </div>
    </div>
  );
}
