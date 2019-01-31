import React from "react";
import { css } from "emotion";

export default function SatM() {
  return (
    <div>
      <div class="SatTop" id="SatTop">
        <h1>S A T Board</h1>
        <h3>Share And Talk with the World</h3>
      </div>
      <div
        className={`SMB ${css`
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
            Select your country or region to change the language.
            <br />
            언어를 변경하려면 해당 국가 또는 지역을 선택하세요.
          </p>
        </a>
        <a href="/developers/main">Developer Tools</a>
        <br />
        <a href="/Fun/Main">DMJW's Fun</a>
        <br />
        <a href="/Sat/main">DMJW's Talk</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          About DMJW's ↗︎(Moving to another web)
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#SatB">SAT Board</a>
        <br />
        <a href="#WWSATB">Everyone's WWSAT</a>
        <br />
      </div>
      <a style={{ fontSize: 30 }}>⇩⇣⇩</a>
      <div>
        <h2>SAT Say Board</h2>
        <p>The Messages Board. The website users are sharing and Talking!</p>
        <h4>Please Login to Send Messages in SAT</h4>
        <input value="Cannot Send Message" />
        <h2>Everyone's WWS</h2>
        <p>
          The World Wide Say Messages Board. Everyone All over the world is
          sharing and talking!
        </p>
        <p>Hi World! | 2019 | from Hello</p>
        <p>2019!! | 2019 | from Hello</p>
        <p>Hi! | 2019 | from Hello</p>
        <p>
          Did you visit <a href="http://www.dmjwweb.com">www.dmjwweb.com</a>? |
          2019 | from Hello
        </p>
        <input placeholder="Type to send..." />
      </div>
    </div>
  );
}
