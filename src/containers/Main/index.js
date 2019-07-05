import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import YTI from '../../img/175x175bb.jpg';
import FunTop from '../../img/FunT.jpg';
import Roll from 'react-reveal/Roll';
import Jello from 'react-reveal/Jello';

Main.propTypes = {
  history: PropTypes.object,
  loading: PropTypes.bool,
  logout: PropTypes.func,
  userId: PropTypes.number,
  username: PropTypes.string
};

export default function Main({ history, loading, userId, username, logout }) {
  return (
    <div>
      <div className="App-header">
        {loading && (
          <>
            <div>
              <p>Loading...</p>
            </div>
            <div className="MLoad">
              <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
              </div>
            </div>
            <div>
              <h1>Welcome</h1>
              <h2>{`to the DMJW's FUNonline and Developer Tools website!`}</h2>
              <h3>{`DMJW's Fun온라인, 개발자 도구 사이트에 오신것을 환영합니다!`}</h3>
              <h3>{`DMJW's Fun オンライン, 開発者サイトへようこそ!`}</h3>
            </div>
          </>
        )}
        {!userId && !loading && (
          <div>
            <h1>Welcome</h1>
            {/* <h2>{`to the DMJW's FUNonline and Developer Tools website!`}</h2>
            <h3>{`DMJW's Fun온라인, 개발자 도구 사이트에 오신것을 환영합니다!`}</h3>
            <h3>{`DMJW's Fun オンライン, 開発者サイトへようこそ!`}</h3> */}
            {/* <Link to="/Fun/main"><button>Fun!</button></Link> */}
            <Link to="/account">
              <button className="button">
                <span>🗝Sign in/Sign up ✅ </span>
              </button>
            </Link>
          </div>
        )}
        {userId && !loading && (
          <div>
            <h1>Hi {username}</h1>
            {/* <h2>{`to the DMJW's FUNonline and Developer Tools website!`}</h2>
            <h3>{`DMJW's Fun온라인, 개발자 도구 사이트에 오신것을 환영합니다!`}</h3>
            <h3>{`DMJW's Fun オンライン, 開発者サイトへようこそ!`}</h3> */}
            <Link to="/account">
              <button className="button">
                <span>👤Your Account</span>
              </button>
            </Link>
          </div>
        )}
      </div>
      <Jello>
        <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
          <Link to="/Fun/main">
            <img src={FunTop} style={{ width: 507, height: 253.5 }} />
            <p>{`DMJW's FUN online`}</p>
          </Link>
        </div>
      </Jello>
      <div style={{ backgroundColor: 'white' }} />
      <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
        <h2>{`🆕DMJW's Talk💬`}</h2>
        <p>Send Messages and Share!</p>
        <button onClick={() => history.push('/Sat/main')}>Go to Chat</button>
      </div>

      <div style={{ backgroundColor: 'white', height: 15 }} />

      <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
        <Roll left>
          <h5>Visit Youtube</h5>
          <a href="http://www.dmjwweb.com/videos/main">
            <img src={YTI} />
          </a>
        </Roll>
        <p>Click</p>
      </div>
      {userId && (
        <button style={{ fontSize: '17pt' }} onClick={logout}>
          Log Out 🔐
        </button>
      )}
      <Link to="/languages">
        <p style={{ color: '#ff4b66', fontSize: 17 }}>
          {`Select your country or region to view content for your country or to
          use DMJW'sFun and change the language.`}
          <br />
          {`현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용, 언어를
          바꾸려면 해당 국가 또는 지역을 선택하세요.`}
        </p>
        <button>
          <span>Language&Country</span>
        </button>
        <p>Now : English - UK, US</p>
      </Link>
      <button>🆙Updated</button>
    </div>
  );
}
