import React from "react";
import FunTop from "./img/FunT.png";
import ArtMD from "./img/artMD.png";

export default function FunMain() {
  return (
    <div>
      <div class="funTop">
        <h1>DMJW's FUN</h1>
        <img src={FunTop} style={{ width: "50%", height: 300 }} />
        <p>
          When Using in mobile or tablet it is better to use it rotated than
          standing.📱⤵️
        </p>
      </div>
      <div
        class="FunVM"
        style={{
          width: "10%",
          backgroundColor: "#000000",
          color: "#ffffff"
        }}
      >
        <a href="/">Back To MAIN</a>
        <div
          style={{ backgroundColor: "#ffffff", height: 50, width: "100%" }}
        />
        <a href="/language">
          <p style={{ fontSize: 17 }}>
            Select your country or region to view content for your country or to
            use DMJW'sFun.
            <br />
            현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용, 언어를
            변경하려면 해당 국가 또는 지역을 선택하세요.
          </p>
        </a>
      </div>
      <a herf="#FunMm" style={{ fontSize: 30 }}>
        ⇩⇣⇩
      </a>
      <div id="FunMm">
        <h2>ARTs by D.J.</h2>
        <p>
          Drawings by D.J. Most drawings have names and descriptions. There are
          Funny, Simple, Complicated tpes of drawings
        </p>
        <img src={ArtMD} width="500px" />
        <h2>Games & Playing</h2>
        <p>
          Play Games and Play fun things. The Games on{" "}
          <a href="https://www.dmjwweb.com/sp/main">DMJWWEB</a> can also be
          here.
        </p>
      </div>
    </div>
  );
}
