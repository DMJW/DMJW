import React from "react";
import FunTop from "./img/FunT.png";
import ArtMD from "./img/artMD.png";
import { css } from "emotion";

export default function FunMain() {
  return (
    <div>
      <div class="funTop" id="funTop">
        <h1>DMJW's FUN</h1>
        <img src={FunTop} style={{ width: "50%", height: 300 }} />
        <p>
          📱⤵️When Using in mobile or tablet it is better to use it rotated than
          standing.📱⤵️
          <br />
          Actually, it is much better to use it in (any) computer.(for now)
        </p>
      </div>
      <div
        className={`FunSM ${css`
          @media (max-width: 950px) {
            display: none;
          }
        `}`}
        style={{
          width: "15%",
          color: "#ffffff"
        }}
      >
        <a href="/">Back To MAIN</a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <a href="/languages">
          <p style={{ fontSize: 17 }}>
            Select your country or region to use use DMJW'sFun.
            <br />
            DMJW'sFun을 이용, 언어를 변경하려면 해당 국가 또는 지역을
            선택하세요.
          </p>
        </a>
        <a href="/Dev/tools">Developer Tools</a>
        <br />
        <a href="/Learn/LearnM">Learn</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          About DMJW's ↗︎(Moving to another web)
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#FunMartsme">Arts by D.J.</a>
        <br />
        <a href="#FunMG">Games & Playing</a>
        <br />
        <a href="#funTop">Go to ⤒TOP⤒</a>
      </div>
      <a herf="#FunMm" style={{ fontSize: 30 }}>
        ⇩⇣⇩
      </a>
      <div id="FunMm">
        <div id="FunMartsme">
          <h2>ARTs by D.J.</h2>
          <p>
            Most drawings have names and descriptions. There are many types of
            drawings like Funny, Simple or Complicated types of drawings
          </p>
          <p>
            To see ARTs by D.J,
            <br />
            ⥥Click⥥
          </p>
          <a href="/Fun/arts/ME">
            <img src={ArtMD} width="30%" />
          </a>
        </div>
        <div id="FunMG">
          <h2>Games & Playing</h2>
          <p>
            Play Games and Play fun things. The Games on{" "}
            <a href="http://www.dmjwweb.com/sp/main">DMJWWEB</a> can also be
            here.
          </p>
          <a href="/Fun/games/guess/updown/main">Up&Down Guess Game</a>
        </div>
      </div>
    </div>
  );
}
