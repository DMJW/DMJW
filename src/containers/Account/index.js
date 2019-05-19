import React, { useState } from "react";
import PropTypes from "prop-types";
import GradCover from "../../img/gradient";
import request from "axios";
import Flip from "react-reveal/Flip";
import URL from "../../constants/URL";
import GoogleLogin from "react-google-login";

Account.propTypes = {
  login: PropTypes.func.isRequired
};
export default function Account({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInPage, setSignInPage] = useState(true);

  return (
    <div className="account">
      <GradCover text="Your Account•あなたの勘定" />
      {signInPage && (
        <>
          <h2>Sign In</h2>
          <input
            className="form-control"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Username"
          />
          <input
            className="form-control"
            type="password"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          />
          <GoogleLogin
            clientId="879558629714-9e3o4cn33tf5h0i29po9oifmjbkbadrd.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={onGoogleLoginSuccess}
            onFailure={onGoogleLoginFail}
          />
          <button className="button" onClick={signIn}>
            Sign In
          </button>
          <a href="http://www.dmjwweb.com/account">Have A DMJWWEB Account?</a>
          <p>{`Don't have a account?`}</p>
          <a style={{ cursor: "pointer" }} onClick={() => setSignInPage(false)}>
            Sign Up
          </a>
        </>
      )}

      {!signInPage && (
        <div>
          <h2>Sign Up</h2>
          <input
            className="form-control"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            placeholder="First Name"
          />
          <input
            className="form-control"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            placeholder="Last Name"
          />
          <input
            className="form-control"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Username"
          />
          <input
            className="form-control"
            type="password"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          />
          <input
            className="form-control"
            type="password"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
          />
          {/* <select>
            <option>Select</option>
            <option>Email</option>
            <option>Phone + Email</option>
          </select> */}
          <input
            className="form-control"
            style={{
              width: "20%",
              marginLeft: "40%",
              textAlign: "center"
            }}
            placeholder="Email"
          />
          {/* <input
            className="form-control"
            style={{
              width: '20%',
              marginLeft: '40%',
              textAlign: 'center'
            }}
            placeholder="Phone Number"
            value="Please Select"
          /> */}
          <p>Please enter your Birthday(optional)</p>
          <input placeholder="Date" />
          <select>
            <option>---Select Month---</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <input placeholder="Year" />
          <br />
          <p>
            I agree to
            <a
              href="/SUPIA"
              target="_blank"
            >{`"Collection and use of personal information"`}</a>
          </p>
          <button>
            <span role="img" aria-label="Check">
              ✅
            </span>
          </button>
          <button>
            <span role="img" aria-label="No(x)">
              ❌
            </span>
          </button>
          <br />
          <Flip cascade>
            <button className="button" onClick={signUp}>
              Sign Up
            </button>
          </Flip>
          <a href="http://www.dmjwweb.com/new-a-dmjw">
            <br />
            Sign Up to DMJWWEB Account(seperate accounts)
          </a>
          <p>{`Already have this website's account?`}</p>
          <a style={{ cursor: "pointer" }} onClick={() => setSignInPage(true)}>
            Click me to go to Sign In page!
          </a>
        </div>
      )}
      <br />
      <a href="/">Back To Main</a>
    </div>
  );

  function onGoogleLoginSuccess(response) {
    console.log("success", response);
  }

  function onGoogleLoginFail(response) {
    console.log("fail", response);
  }

  async function signIn() {
    try {
      const {
        data: { token, userId }
      } = await request.get(
        `${URL}/users?username=${username}&password=${password}`
      );
      login({
        token,
        userId,
        username
      });
    } catch (error) {
      console.error(error);
      if (
        window.confirm(
          "An error has occured! Please Try again.\nShow error message?\n\\/NO YES\\/"
        )
      ) {
        let errorwin = window.open();
        errorwin.document.write(
          "AN ERROR HAS OCCURED WHILE LOGGING IN!\n" + error
        );
        errorwin.focus();
      }
    }
  }

  async function signUp() {
    const { data } = await request.post(`${URL}/users`, {
      username,
      password
    });
    localStorage.setItem("token", data.token);
  }
}
