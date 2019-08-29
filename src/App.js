import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Doraemon from './Pages/Doraemon';
import ErrorNF from './Pages/ErrorNF';
import Links from './Pages/Links';
import Videos from './Pages/Videos';
import Special from './Pages/Special';
import Account from './containers/Account';
import JPaccount from './Pages/JPaccount';
import KRaccount from './Pages/KRaccount';
import Tools from './Pages/tools';
import LearnM from './Learn/main';
import FunM from './Fun/main';
import ArtMe from './Fun/artsByME';
import UpDwnGameM from './Fun/Game/UpDown';
import DevMain from './Tools/Dev/main';
import DtColor from './Tools/Dev/TColor';
import OneD from './Tools/Language/Onedict';
import UnitConv from './Tools/UnitConv';
import ServerM from './Servermc/main';
import SatM from './containers/SAT/SatM';
import SatBoard from './containers/SAT/SatBoard';
import TechDMJWsSat from './containers/SAT/TechDMJW';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Lang from './containers/Lang';
import Main from './containers/Main';
import JPH from './containers/JPH';
import KRH from './containers/KRH';
import request from 'axios';
import URL from './constants/URL';
import SUPIA from './Pages/SUPI';
import SUTS from './Pages/SignUpSel';
import GoMain from './Go/Gomain';
import GoJapan from './Go/JP/GoJapan';
import GoJpStay from './Go/JP/stay';

App.propTypes = {
  history: PropTypes.object.isRequired
};
export default function App({ history }) {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSession();

    async function getSession() {
      const token = localStorage.getItem('token');
      if (!token) {
        return setTimeout(() => setLoading(false), 2000);
      }
      try {
        const { data } = await request.get(`${URL}/users/session`, {
          headers: {
            authorization: token
          }
        });
        setUsername(data.username);
        setUserId(data.userId);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Main
              loading={loading}
              history={history}
              logout={logout}
              username={username}
              userId={userId}
            />
          )}
        />
        <Route path="/jp" component={JPH} />
        <Route path="/kr" component={KRH} />
        <Route path="/doraemon/dmjws" component={() => <Doraemon />} />
        <Route path="/links" component={() => <Links />} />
        <Route path="/videos/youtube" component={() => <Videos />} />
        <Route path="/account" component={() => <Account login={login} userId={userId} username={username} loading={loading} />} />
        <Route path="/SUPIA" component={() => <SUPIA />} />
        <Route path="/SUTS" compnent={() => <SUTS />} />
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
        <Route path="/Sat/main" component={() => <SatM userId={userId} />} />
        <Route
          path="/Sat/WorldBoard"
          component={() => <SatBoard userId={userId} username={username} />}
        />
        <Route path="/Sat/DMJWs/Tech" component={() => <TechDMJWsSat />} />
        <Route path="/Learn/LearnM" component={() => <LearnM />} />
        <Route path="/mc/servers/dmjws/main" component={() => <ServerM />} />
        <Route path="/tools/oned" component={() => <OneD />} />
        <Route path="/tools/unitconv" component={() => <UnitConv />} />
        <Route path="/go/main" component={() => <GoMain />} />
        <Route path="/go/japan/first" component={() => <GoJapan />} />
        <Route path="/go/japan/stay" component={() => <GoJpStay />} />
        <Route component={() => <ErrorNF />} />
      </Switch>
    </div>
  );

  function login({ token, userId, username }) {
    localStorage.setItem('token', token);
    setUserId(userId);
    setUsername(username);
    history.push('/');
  }

  function logout() {
    if (window.confirm('🔐Log out from the account ' + username + '?')) {
      localStorage.removeItem('token');
      setUserId(null);
      setUsername('');
      console.log('Log out succesful!✅');
    } else {
    }
  }
}
