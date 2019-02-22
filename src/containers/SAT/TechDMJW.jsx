import React from "react";
import { css } from "emotion";

export default function TechDMJWsSAT() {
  return (
    <div>
      <div class="SatTop" id="SatTop">
        <h1>DMJW's Sat</h1>
        <a href="/Sat/verify/info">✅This SAT(er) is verified</a>
        <h2>DMJW's Technologies</h2>
        <h4>Description</h4>
        <p>Hello! This is DMJW's! Welcome to the DMJW's Technologies SAT!</p>
        <p>In this page, you can read and go to many "Talk" and "Share"d links uploaded by DMJW's.<br />These "Talks" and "Shares" are about technology, computer, phones and more.<br /><font style={{ color: "purple", fontSize: 20 }}> If you are interested start reading the talks and shares!</font></p>
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
        <a href="http://www.DMJWWEB.com/about">
          About DMJW's ↗︎(Moving to another web)
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#SatBoardM">SAT Board</a>
        <br />
        <a href="#TktkMp">TalkTalk</a>
        <br />
        <a href="#othersat">Other SAT things</a>
        <br />
        <a href="#SatTop">Go to ⤒TOP⤒</a>
      </div>
      <div>
        <h2>Talks</h2>
        <div style={{ backgroundColor: "skyblue" }}>
          <h4>iPhone Tips!</h4>
          <p>If you need one here is a recommendation for printers.</p>
          <p><a href="https://www.samsung.com/sec/printers/package-sl-c486fwa4s/">Color Lazer Printer + Scanner</a>
          </p>
        </div>
      </div>
    </div>
  );
}
