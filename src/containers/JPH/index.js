import React from 'react';
import logo from '../../img/DMJWLogo.gif';
import pcHeaderGif from '../../img/PC_header_doraemon.gif';
import GradCover from '../../img/gradient';
import { Link } from 'react-router-dom';

export default function JPH() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pcHeaderGif} />
        <Link to="/jp/account">
          <button className="button">
            <span>🗝ログイン/会員加入✅</span>
          </button>
        </Link>
      </div>
      <GradCover text="DMJW'sウブサイトへようこそ。" textColor="#00FF92" />
      <Link to="/languages">
        <button className="button">
          <span>言語</span>
        </button>
      </Link>
    </div>
  );
}
