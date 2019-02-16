import React from 'react';
import Doraemon from './pages/Doraemon';
import ErrorNF from './pages/ErrorNF';
import Links from './pages/Links';
import Videos from './pages/Videos';
import Special from './pages/Special';
import Account from './pages/account';
import SignUp from './pages/SignUp';
import JPaccount from './pages/JPaccount';
import KRaccount from './pages/KRaccount';
import Tools from './pages/tools';
import LearnM from './Learn/main';
import FunM from './Fun/main';
import ArtMe from './Fun/artsByME';
import UpDwnGameM from './Fun/Game/UpDown';
import DevMain from './Dev/main';
import DtColor from './Dev/TColor';
import ServerM from './Servermc/main';
import SatM from './SAT/SatM';
import SatBoard from './SAT/SatBoard';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Lang from './containers/Lang';
import Main from './containers/Main';
import JPH from './containers/JPH';
import KRH from './containers/KRH';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/jp" component={JPH} />
        <Route path="/kr" component={KRH} />
        <Route path="/doraemon/dmjws" component={() => <Doraemon />} />
        <Route path="/links" component={() => <Links />} />
        <Route path="/videos/youtube" component={() => <Videos />} />
        <Route path="/account" component={() => <Account />} />
        <Route path="/account/new/dmjw" component={() => <SignUp />} />
        <Route path="/jp/account" component={() => <JPaccount />} />
        <Route path="/kr/account" component={() => <KRaccount />} />
        <Route path="/languages" component={Lang} />
        <Route path="/special" component={() => <Special />} />
        <Route path="/dmjws/tools" component={() => <Tools />} />
        <Route path="/Fun/main" component={() => <FunM />} />
        <Route path="/Fun/arts/Me" component={() => <ArtMe />} />
        <Route
          path="/Fun/games/guess/updown/main"
          component={() => <UpDwnGameM />}
        />
        <Route path="/developers/main" component={() => <DevMain />} />
        <Route path="/dev/tools/color" component={() => <DtColor />} />
        <Route path="/Sat/main" component={() => <SatM />} />
        <Route path="/Sat/WorldBoard" component={() => <SatBoard />} />
        <Route path="/Learn/LearnM" component={() => <LearnM />} />
        <Route path="/mc/servers/dmjws/main" component={() => <ServerM />} />

        <Route component={() => <ErrorNF />} />
      </Switch>
    </div>
  );
}
