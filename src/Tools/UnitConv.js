import React from 'react';
import { css } from 'emotion';
import UCT from "./img/UtconvT.png";

export default function unitConv() {
  return (
    <div>
      <div>
        <h1><img src={UCT} width="35%"></img></h1>
      </div>
      <div
        className={`SMB ${css`
          @media (max-width: 950px) {
            display: none;
          }
        `}`}
        style={{
          width: '15%',
          color: '#ffffff'
        }}
      >
        <a href="/">Back To MAIN</a>
        <div
          style={{ backgroundColor: '#ffffff', height: 30, width: '100%' }}
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
        <a href="/tools/m">Tools</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          {`About DMJW's ↗︎(Moving to another web)`}
        </a>
        <div
          style={{ backgroundColor: '#ffffff', height: 30, width: '100%' }}
        />
        <h3>{`Tools inside tools`}</h3>
        <p>Nothing Yet!</p>
      </div>
      <div>
        <h3>Select.</h3>
        <select>
          <option>from here</option>
          <option>Area</option>
          <option>Weight</option>
          <option>Temperature</option>
          <option>Length</option>
          <option>Data</option>

        </select>
      </div>
    </div>
  );
}
