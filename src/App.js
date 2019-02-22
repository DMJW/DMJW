import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Doraemon from "./pages/Doraemon";
import ErrorNF from "./pages/ErrorNF";
import Links from "./pages/Links";
import Videos from "./pages/Videos";
import Special from "./pages/Special";
import Account from "./containers/Account";
import JPaccount from "./pages/JPaccount";
import KRaccount from "./pages/KRaccount";
import Tools from "./pages/tools";
import LearnM from "./Learn/main";
import FunM from "./Fun/main";
import ArtMe from "./Fun/artsByME";
import UpDwnGameM from "./Fun/Game/UpDown";
import DevMain from "./Dev/main";
import DtColor from "./Dev/TColor";
import ServerM from "./Servermc/main";
import SatM from "./containers/SAT/SatM";
import SatBoard from "./containers/SAT/SatBoard";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Lang from "./containers/Lang";
import Main from "./containers/Main";
import JPH from "./containers/JPH";
import KRH from "./containers/KRH";
import request from "axios";
import URL from "./constants/URL";
import SUPIA from "./pages/SUPI";

App.propTypes = {
  history: PropTypes.object.isRequired
};
export default function App({ history }) {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function getSession() {
      const token = localStorage.getItem("token");
      const { data } = await request.get(`${URL}/users/session`, {
        headers: {
          authorization: token
        }
      });
      setUsername(data.username);
      setUserId(data.userId);
    }
    getSession();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Main
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
        <Route path="/account" component={() => <Account login={login} />} />
        <Route path="/SUPIA" component={() => <SUPIA />} />
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

  function login({ token, userId, username }) {
    localStorage.setItem("token", token);
    setUserId(userId);
    setUsername(username);
    history.push("/");
  }

  function logout() {
    localStorage.removeItem("token");
    setUserId(null);
    setUsername("");
  }
}
