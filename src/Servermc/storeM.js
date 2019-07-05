import React from 'react';
import { css } from 'emotion';

export default function mcStoreM() {
  return (
    <div>
      <div>
        <h1>Server Store</h1>
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
            Select your country or region to use use {`DMJW'sFun.`}
            <br />
            {`DMJW'sFun을`} 이용, 언어를 변경하려면 해당 국가 또는 지역을
            선택하세요.
          </p>
        </a>
        <a href="/developers/main">Developer Tools</a>
        <br />
        <a href="/Fun/main">{`DMJW's Fun`}</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          About {`DMJW's`} ↗︎(Moving to another web)
        </a>
        <div
          style={{ backgroundColor: '#ffffff', height: 30, width: '100%' }}
        />
        <h3>Things from inside this page</h3>
        <a>Items</a>
        <br />
        <a>Ranks</a>
        <br />
        <a>Go to ⤒TOP⤒</a>
      </div>
      <div>
        <div>
          <h2>Ranks</h2>
        </div>
      </div>
    </div>
  );
}
