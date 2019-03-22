import React from "react";
import { css } from "emotion";

export default function DevMain() {
  return (
    <div>
      <div>
        <h1>{`DMJW's Developers`}</h1>
      </div>
      <h2>Tools</h2>
      <a href="/dev/tools/color">Color Codes</a>
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
        <a href="/Fun/main">{`DMJW's Fun`}</a>
        <br />
        <a href="/Learn/LearnM">Learn</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          {`About DMJW's ↗︎(Moving to another web)`}
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#devMtools">Tools</a>
        <br />
        <a href="#devMtop">Go to ⤒TOP⤒</a>
      </div>
    </div>
  );
}
