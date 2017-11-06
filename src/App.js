import React, { Component } from 'react';
import logo from './img/DMJWLogo.gif';
import PC_header_gif from './img/PC_header_doraemon.gif';
import Arrow_down_DMJW_gif from './img/200w_d (1).gif';
import logo_black from './img/DMJW black bg.png';
import dot from './img/dot.png';
import Grad_cover from './gradient';
import Doraemon from './pages/Doraemon';
import ErrorNF from './pages/ErrorNF';
import Links from './pages/Links'
import Videos from './pages/Videos';
import Special from './pages/Special';
import Account from './pages/account';
import SignUp from './pages/SignUp';
import JPaccount from './pages/JPaccount';
import KRaccount from './pages/KRaccount';
import KRRF from './img/kr round flag.png';
import JPRF from './img/jp round flag.png';
import UURCF from './img/usukflag.png'
import Tools from './pages/tools'
import websiteTB from './img/websitTB.png';
import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{height: '64'}} className="NavBar">
          <ul style={{float: 'center'}}>
            <li
              style={{display: 'inline-block', listStyle: 'none', color: '#ffffff', alignItems: 'left'}}
            >
              <Link to="/" style={{color: 'black'}}><img src={logo_black} /></Link>
            </li>
            <li
              style={{display: 'inline-block', listStyle: 'none', marginLeft: '2em', color: '#ffffff'}}
            >
              <Link to="/doraemon/dmjws" style={{color: 'black'}}>Doraemon</Link>
            </li>
            <li
              style={{display: 'inline-block', listStyle: 'none', marginLeft: '2em', color: '#ffffff'}}
            >
              <Link to="/links" style={{color: 'black'}}>Link</Link>
            </li>
            <li
              style={{display: 'inline-block', listStyle: 'none', marginLeft: '2em', color: '#ffffff'}}
            >
              <Link to="/special" style={{color: 'black'}}>Special</Link>
            </li>
            <li
              style={{display: 'inline-block', listStyle: 'none', marginLeft: '2em', color: '#ffffff'}}
            >
              <Link to="/videos/youtube" style={{color: 'black'}}>Video</Link>
            </li>
            <li
              style={{display: 'inline-block', listStyle: 'none', marginLeft: '2em', color: '#ffffff'}}
            >
              <Link to="/dmjws/tools" style={{color: 'black'}}>Tools</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={this.Home} />
          <Route path="/jp" component={this.JPH} />
          <Route path="/kr" component={this.KRH} />
          <Route path="/doraemon/dmjws" component={() => <Doraemon />} />
          <Route path="/links" component={() => <Links />} />
          <Route path="/videos/youtube" component={() => <Videos />} />
          <Route path="/account" component={() => <Account />} />
          <Route path="/new/dmjw/id" component={() => <SignUp />} />
          <Route path="/jp/account" component={() => <JPaccount />} />
          <Route path="/kr/account" component={() => <KRaccount />}/>
          <Route path="/languages" component={this.Lang} />
          <Route path="/special" component={() => <Special />} />
          <Route path="/dmjws/tools" component={() => <Tools />} />
          <Route component={() => <ErrorNF />} />
        </Switch>
      </div>
    );
  }

  Home() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <img src={PC_header_gif} />
          <Link to="/account"><button className="button"><span>🗝Sign in/Sign up ✅ </span></button></Link>
        </div>
        <Grad_cover text="Welcome to DMJW's website!•DMJW'sウブサイトへようこそ。" textColor="#00FF92"/>
        <Link to="/languages"><button className="button"><span>Language•言語•언어</span></button></Link>
      </div>
    )
  }
  JPH() {
    return (
      <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={PC_header_gif} />
        <Link to="/jp/account"><button className="button"><span>🗝ログイン/会員加入✅</span></button></Link>
      </div>
      <Grad_cover text="DMJW'sウブサイトへようこそ。" textColor="#00FF92"/>
      <Link to="/languages"><button className="button"><span>言語</span></button></Link>
    </div>
    )
  }
  KRH() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={PC_header_gif} />
          <Link to="/kr/account"><button className="button"><span>🗝로그인 / 회원가입 ✅ </span></button></Link>
        </div>
        <Grad_cover text="DMJW's 웹사이트에 오신것을 환영합니다!" textColor="#00FF92"/>
        <Link to="/languages"><button className="button"><span>언어</span></button></Link>
      </div>
    )
  }
  Lang() {
    return (
      <div className="lang">
        <Grad_cover
        text="Select Your Language.•あなたの言語を選択します。•언어를 선택하십시오."/>
        <Link to="/"><button className="button"><img src={UURCF}/>English</button></Link>
        <Link to="/kr"><button className="button"><img src={KRRF}/>한국어•Korean</button></Link>
        <Link to="/jp"><button className="button"><img src={JPRF} />日本語•Japanese</button></Link>
        <p>※맨위의 링크들는 한국어/일본어를 지원하지 않습니다.</p>
        <p>맨위의 링크⬇️</p>
        <img src={websiteTB} />
        <p style={{marginTop: '1em'}}>一番上のリンク⬆️</p>
        <p>※一番上のリンクらは韓国語/日本語をサポートしません。</p>
      </div>
    )
  }
}


export default App; 
