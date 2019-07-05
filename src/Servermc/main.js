import React from 'react';
import { css } from 'emotion';

export default function ServerM() {
  return (
    <div>
      <div>
        <h1>{`DMJW's Minecraft Server`}</h1>
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
        <a href="#FunMartsme">About the server</a>
        <br />
        <a href="#FunMG">Store</a>
        <br />
        <a href="#funTop">Go to ⤒TOP⤒</a>
      </div>
      <div>
        <h2>About the Server</h2>
        <p>
          In this minecraft server you can play many games including usual
          minecraft games and other{` DMJW's`} MC Games.
          <br />
          For players with rank of gold+ or above can have acess to playrooms
          and lounges according to their rank.
        </p>
        <p>
          The {`DMJW's`} Minecraft Server is not open yet but is expected to
          open soon.
        </p>
        <h2>Server Store</h2>
        <h3>(OnLine)</h3>
        <p>
          Buy Server items, ranks and other useful stuff for gaming in{' '}
          {`DMJW's`}
          server.
        </p>
        <h3>Ranks</h3>
        <p>GO TO SHOP...</p>
        <a href="/mc/servers/dmjws/stores">
          <button className="button">
            <span>ServerStore</span>
          </button>
        </a>
      </div>
    </div>
  );
}
