import React, { Component } from "react";
import logo from "./img/DMJWLogo.gif";
import PC_header_gif from "./img/PC_header_doraemon.gif";
import Arrow_down_DMJW_gif from "./img/200w_d (1).gif";
import logo_black from "./img/DMJW black bg.png";
import dot from "./img/dot.png";
import Grad_cover from "./gradient";
import Doraemon from "./pages/Doraemon";
import ErrorNF from "./pages/ErrorNF";
import Links from "./pages/Links";
import Videos from "./pages/Videos";
import Special from "./pages/Special";
import Account from "./pages/account";
import SignUp from "./pages/SignUp";
import JPaccount from "./pages/JPaccount";
import KRaccount from "./pages/KRaccount";
import KRRF from "./img/kr round flag.png";
import JPRF from "./img/jp round flag.png";
import UURCF from "./img/usukflag.png";
import Tools from "./pages/tools";
import LearnM from "./Learn/main";
import Math1 from "./Learn/math1";
import FunM from "./Fun/main";
import ArtMe from "./Fun/artsByME";
import FunTop from "./Fun/img/FunT.png";
import websiteTB from "./img/websitTB.png";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import YTI from "./pages/ForPages/175x175bb.jpg";
import { css } from "emotion";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div style={{ height: "64" }} className="NavBar">
          <ul style={{ float: "center" }}>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                color: "#ffffff",
                alignItems: "left"
              }}
            >
              <Link to="/" style={{ color: "black" }}>
                <img src={logo_black} />
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                marginLeft: "2em",
                color: "#ffffff"
              }}
            >
              <Link to="/doraemon/dmjws" style={{ color: "black" }}>
                Doraemon
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                marginLeft: "2em",
                color: "#ffffff"
              }}
            >
              <Link to="/links" style={{ color: "black" }}>
                Link
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                marginLeft: "2em",
                color: "#ffffff"
              }}
            >
              <Link to="/special" style={{ color: "black" }}>
                Special
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                marginLeft: "2em",
                color: "#ffffff"
              }}
            >
              <Link to="/videos/youtube" style={{ color: "black" }}>
                Video
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                listStyle: "none",
                marginLeft: "2em",
                color: "#ffffff"
              }}
            >
              <Link to="/dmjws/tools" style={{ color: "black" }}>
                Tools
              </Link>
            </li>
          </ul>
        </div> */}
        <Switch>
          <Route exact path="/" component={this.Main} />
          <Route path="/jp" component={this.JPH} />
          <Route path="/kr" component={this.KRH} />
          <Route path="/doraemon/dmjws" component={() => <Doraemon />} />
          <Route path="/links" component={() => <Links />} />
          <Route path="/videos/youtube" component={() => <Videos />} />
          <Route path="/account" component={() => <Account />} />
          <Route path="/account/new/dmjw" component={() => <SignUp />} />
          <Route path="/jp/account" component={() => <JPaccount />} />
          <Route path="/kr/account" component={() => <KRaccount />} />
          <Route path="/languages" component={this.Lang} />
          <Route path="/special" component={() => <Special />} />
          <Route path="/dmjws/tools" component={() => <Tools />} />
          <Route path="/Fun/main" component={() => <FunM />} />
          <Route path="/Fun/arts/Me" component={() => <ArtMe />} />
          <Route path="/Learn/LearnM" component={() => <LearnM />} />
          <Route path="/Learn/math/level1" component={() => <Math1 />} />
          <Route component={() => <ErrorNF />} />
        </Switch>
      </div>
    );
  }

  Main() {
    return (
      <div
        className={css`
          width: 100%;
          @media (max-width: 960px) {
            width: 50%;
          }
        `}
      >
        <div className="App-header">
          <h1>WELCOME</h1>
          <h2>to the DMJW's FUNonline, Learn and Developer Tools website!</h2>
          <h3>
            DMJW's Fun온라인, 배움 그리고 개발자 도구 사이트에 오신것을
            환영합니다!
          </h3>
          <h3>DMJW's Fun オンライン,学びと開発者サイトへようこそ!</h3>
          <Link to="/account">
            <button className="button">
              <span>🗝Sign in/Sign up ✅ </span>
            </button>
          </Link>
        </div>
        <h3>
          This Website is still in making but you can still go to the
          <a href="http://www.dmjwweb.com"> DMJWWEB</a>
        </h3>
        <p>
          이웹사이트는 아직 만들는 중이지만{" "}
          <a href="http://www.dmjwweb.com">DMJWWEB</a>은 지금 이용할 수
          있습니다.
        </p>
        <br />
        <div>
          <Link to="/Fun/main">
            <img src={FunTop} style={{ width: "50%", height: 300 }} />
            <p>DMJW's FUN online</p>
          </Link>
        </div>
        <Link to="/languages">
          <p style={{ color: "#ff4b66", fontSize: 17 }}>
            Select your country or region to view content for your country or to
            use DMJW'sFun and change the language.
            <br />
            현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용, 언어를
            바꾸려면 해당 국가 또는 지역을 선택하세요.
          </p>
          <button>
            <span>Language&Country</span>
          </button>
          <p>Now : English - UK, US</p>
        </Link>
        <br />
        <a href="http://www.dmjwweb.com/videos/main">
          <img src={YTI} />
        </a>
      </div>
    );
  }
  JPH() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={PC_header_gif} />
          <Link to="/jp/account">
            <button className="button">
              <span>🗝ログイン/会員加入✅</span>
            </button>
          </Link>
        </div>
        <Grad_cover text="DMJW'sウブサイトへようこそ。" textColor="#00FF92" />
        <Link to="/languages">
          <button className="button">
            <span>言語</span>
          </button>
        </Link>
      </div>
    );
  }
  KRH() {
    return (
      // <div>
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <img src={PC_header_gif} />
      //     <Link to="/kr/account">
      //       <button className="button">
      //         <span>🗝로그인 / 회원가입 ✅ </span>
      //       </button>
      //     </Link>
      //   </div>
      //   <Grad_cover
      //     text="DMJW's 웹사이트에 오신것을 환영합니다!"
      //     textColor="#00FF92"
      //   />
      //   <Link to="/languages">
      //     <button className="button">
      //       <span>언어</span>
      //     </button>
      //   </Link>
      // </div>
      <div>
        <div className="App-header">
          <h1>WELCOME</h1>
          <h2>
            DMJW's Fun온라인, 배움 그리고 개발자 도구 사이트에 오신것을
            환영합니다!
          </h2>
          <h3>to the DMJW's FUNonline, Learn and Developer Tools website!</h3>
          <Link to="/account">
            <button className="button">
              <span>🗝로그인/회원가입 ✅ </span>
            </button>
          </Link>
        </div>
        <h5>
          이웹사이트는 아직 만들는 중이지만{" "}
          <a href="http://www.dmjwweb.com">DMJWWEB</a>은 지금 이용할 수
          있습니다.
        </h5>
        <br />
        <div>
          <Link to="/Fun/main">
            <img src={FunTop} style={{ width: "50%", height: 300 }} />
            <p>DMJW's FUN 온 라인</p>
          </Link>
        </div>
        <Link to="/languages">
          <p style={{ color: "#ff4b66", fontSize: 17 }}>
            Select your country or region to view content for your country or to
            use DMJW'sFun and change the language.
            <br />
            현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용, 언어를
            바꾸려면 해당 국가 또는 지역을 선택하세요.
          </p>
          <button>
            <span>Language&Country</span>
          </button>
          <p>현재 : 한국어 - 한국</p>
        </Link>
        <br />
        <a href="http://www.dmjwweb.com/videos/main">
          <img src={YTI} />
        </a>
      </div>
    );
  }
  Lang() {
    return (
      <div className="lang">
        <Grad_cover text="Select Your Country/Language.•나라 및 언어를 선택하십시오." />
        <Link to="/">
          <button className="button">
            <img src={UURCF} />
            English-UK,US
          </button>
        </Link>
        <button className="button">
          <img src={KRRF} />
          한국•Korea
        </button>
        <button className="button" disabled>
          <img src={JPRF} />
          日本•Japan
        </button>
        <p style={{ color: "#FF0027", fontSize: 15, marginLeft: 615 }}>
          ※日本語の翻訳が正確ではないことができます。
        </p>
        <h4>
          현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용하려면 해당
          국가 또는 지역을 선택하세요.
        </h4>
        <h4>
          Select your country or region to view content for your country or to
          use DMJW'sFun.
        </h4>
        {/* <p>※맨위의 링크들는 한국어/일본어를 지원하지 않습니다.</p>
        <p>맨위의 링크⬇️</p>
        <img src={websiteTB} />
        <p style={{ marginTop: "1em" }}>一番上のリンク⬆️</p>
        <p>※一番上のリンクらは韓国語/日本語をサポートしません。</p> */}
      </div>
    );
  }
}

export default App;
//•言語及び国家•언어 및 국가
