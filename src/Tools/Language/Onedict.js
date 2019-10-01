import React from 'react';
import { css } from 'emotion';

export default function OneD() {
  return (
    <div>
      <div>
        <h1>OneD</h1>
        <p>dictionary & more</p>
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
        <a href="#">Mini dictionary</a>
        <br />
        <a href="#">Mini Translator</a>
      </div>
      <div>
        <p>I want to use...</p>
        <a href="#dict"><i style={{ color: 'red' }}>Dictionary</i> and <i>Thesaurus</i>!</a>
        <a href="#top" style={{ color: 'black' }}>  or  </a>
        <a href="#trans"><i style={{ color: 'red' }}>Translator</i>!</a>
        <br></br>
        <div id="dict">
          <iframe src="https://www.lexico.com/en" style={{ height: 500, width: 500 }}></iframe>
          <iframe src="https://www.lexico.com/search?utf8=✓&filter=thesaurus&dictionary=en&query=" style={{ height: 500, width: 500 }}></iframe>
          <br />
          <iframe src="https://dict.naver.com" style={{ height: 500, width: 1000 }}></iframe>
          <br></br>
          <iframe src="https://www.dictionary.com" scrolling="no" style={{ height: 700, width: 500 }}></iframe>
          <iframe src="https://www.thesaurus.com" scrolling="no" style={{ height: 700, width: 500 }}></iframe>
        </div>
        <div id="trans">
          <iframe src="https://papago.naver.com" style={{ height: 500, width: 1000 }}></iframe>
          <iframe src="https://translate.google.com" style={{ height: 500, width: 1000 }}></iframe>
          <iframe src="https://translate.kakao.com" style={{ height: 500, width: 1000 }}></iframe>
        </div>
      </div>
    </div>
  );
}
