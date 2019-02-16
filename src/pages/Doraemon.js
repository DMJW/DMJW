import React from 'react';
import DoraIMG from '../img/tv asahi Doraemon.jpg';

export default function Doraemon() {
  return (
    <div className="Doraemon">
      <div className="DoraTop">
        <img alt="" src={DoraIMG} style={{ height: '200' }} />
        <h1>Doraemon</h1>
      </div>
      <div className="DoraAbout">
        <h2>About</h2>
        <p>
          Doraemon is a Japanese manga series written and made by Fujiko •F•
          Fujio.It is also an animation.
        </p>
        <p>
          It is ドラえもん in Japanese.This manga series is also in animation
          too.
        </p>
      </div>
      <div className="DoraEiga">
        <h2>Movies(eiga)</h2>
        <p>
          Latest movie is 「GREAT ADVENTURE IN THE ANTARCTIC KACHI KOCHI」 in
          Japanese 「映画ドラえもん のび太の南極カチコチ大冒険」
        </p>

        <p>Doraemon movies websites</p>
        <p>{`Doraemon movies websites are "www.doraeiga.com/2006~2018"`}</p>
        <p>These are the two latest movie websites</p>
        <p>
          <a href="http://www.doraeiga.com/2018">
            {`2018 movie 「Movie Doraemon Nobita's Treasure Island」`}
          </a>
        </p>
        <p>
          <a href="http://www.doraeiga.com/2017">
            2017 movie 「GREAT ADVENTURE IN THE ANTARCTIC KACHI KOCHI」
          </a>
        </p>
      </div>
      <div className="FujikoFujio">
        <h2>Fujiko F Fujio</h2>
        <h3 style={{ color: 'magenta' }}>Fujiko F Fujio Museum</h3>
        <a href="http://fujiko-museum.com/">
          <button className="button">Museum Website</button>
        </a>
      </div>
    </div>
  );
}
