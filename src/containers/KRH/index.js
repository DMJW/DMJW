import React from 'react';
import FunTop from '../../img/FunT.png';
import YTI from '../../img/175x175bb.jpg';
import { Link } from 'react-router-dom';

export default function KRH() {
  return (
    <div>
      <div className="App-header">
        <h1>WELCOME</h1>
        <h2>
          {`DMJW's Fun온라인, 배움 그리고 개발자 도구 사이트에 오신것을
          환영합니다!`}
        </h2>
        <h3>{`to the DMJW's FUNonline, Learn and Developer Tools website!`}</h3>
        <Link to="/account">
          <button className="button">
            <span>🗝 로그인/회원가입 ✅ </span>
          </button>
        </Link>
      </div>
      <div>
        <Link to="/kr/Fun/main">
          <img src={FunTop} style={{ width: '50%', height: 300 }} />
          <p>{`DMJW's FUN 온 라인`}</p>
        </Link>
      </div>
      <Link to="/languages">
        <p style={{ color: '#ff4b66', fontSize: 17 }}>
          {`Select your country or region to view content for your country or to
          use DMJW'sFun and change the language.`}
        </p>
        <button>
          <span>Language&Country</span>
        </button>
        <p>현재 : 한국어 - 한국</p>
      </Link>
      <br />
      <a href="http://www.dmjwweb.com/kr/videos/main">
        <img src={YTI} />
      </a>
    </div>
  );
}
