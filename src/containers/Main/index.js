import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import YTI from '../../img/175x175bb.jpg';
import FunTop from '../../img/FunT.jpg';
import Roll from 'react-reveal/Roll';
import Jello from 'react-reveal/Jello';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Jump from 'react-reveal/Jump';

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
        {loading && userId && (
          <><Zoom>
            <div>
              <p>Loading...</p>
            </div>
            <div className="MLoad">
              <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
              </div>
            </div>
          </Zoom>
            <div>
              <h1>Hi, {username}! Welcome Back!</h1>
              <h2>{`to the DMJW's FUNonline and Tools website!`}</h2>
              <h3>{`DMJW's Fun온라인, 도구 사이트에 오신것을 환영합니다!`}</h3>
              <h3>{`DMJW's Funオンラインとツールサイトへようこそ!`}</h3>
            </div>
          </>
        )}
        {loading && !userId && (
          <>
            <div>
              <Zoom cascade>Loading...</Zoom>
            </div>
            <div className="MLoad">
              <div className="spinner">

                <div className="double-bounce1" />
                <div className="double-bounce2" />
              </div>
            </div>
            <div>
              <h1>Welcome</h1>
              <h2>{`to the DMJW's FUNonline and Tools website!`}</h2>
              <h3>{`DMJW's Fun온라인, 도구 사이트에 오신것을 환영합니다!`}</h3>
              <h3>{`DMJW's Funオンラインとツールサイトへようこそ!`}</h3>
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
            <h3>What are you going to do today?</h3>
            <Link to="/account">
              <button className="button">
                <span>👤Your Account</span>
              </button>
            </Link>
          </div>
        )}
      </div>
      {!loading && (
        <div>
          <div style={{ backgroundColor: '#b9fbba' }}>
            <h3>Notice & Events</h3>
            <Fade top cascade>
              <a href="#updates">Updated to V2.55!</a>
              <a href="http://www.dmjwweb.com/dmjws/notice/2" target="blank">   [EVENT]</a>
            </Fade>
          </div>
          <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
            <Link to="/Fun/main">
              <Jello delay={700}>
                <img src={FunTop} style={{ width: 507, height: 253.5 }} />
                <p>{`DMJW's FUN online`}</p>
              </Jello>
            </Link>
          </div>
          <div style={{ backgroundColor: 'white' }} />
          <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
            <Jump delay={1000}>
              <h2>{`🆕DMJW's Talk💬`}</h2>
            </Jump>
            <p>Send Messages and Share!</p>
            <a href="/SAT/main"><button style={{ width: 250, height: 20, fontSize: 15, backgroundColor: 'white' }}><span>SAT</span></button></a>
          </div>
          <div style={{ backgroundColor: 'white', height: 15 }} />
          <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
            <Spin delay={500}>
              <h2>{`🧰Toolbox`}</h2>
            </Spin>
            <p>Tools!</p>
            <a href="/dmjws/tools"><button style={{ width: 250, height: 20, fontSize: 15, backgroundColor: 'white' }}><span>Tools</span></button></a>
          </div>

          <div style={{ backgroundColor: 'white', height: 15 }} />

          <div style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
            <Roll left>
              <h5>Visit Youtube</h5>
              <a href="http://www.dmjwweb.com/links/ytchannel">
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
            <button style={{ width: '13%', backgroundColor: 'white' }}>Language&Country</button>
            <p>Now : English - UK, US</p>
          </Link>
          <div id="updates">
            <p style={{ fontSize: 27 }}>
              <Zoom top>🆙</Zoom><Zoom top cascade>Updated</Zoom>
              <font color="grey" style={{ fontSize: 13, color: '#636363' }}>to version </font><font style={{ fontSize: 13, color: 'red' }}>2.55</font>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
