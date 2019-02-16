import React, { Component } from 'react';
import GradCover from '../img/gradient';
import request from 'axios';
import { URL } from '../constants/hidden';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      pwConfirm: ''
    };
    this.onUsernameInput = this.onUsernameInput.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.onPWCInput = this.onPWCInput.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    const { username, password, pwConfirm } = this.state;
    return (
      <div className="SignUp">
        <GradCover text="Sign Up" />
        <input
          className="form-control"
          style={{ width: '20%', marginLeft: '40%', textAlign: 'center' }}
          placeholder="First Name"
        />
        <input
          className="form-control"
          style={{
            width: '20%',
            marginLeft: '40%',
            marginTop: '2em',
            textAlign: 'center'
          }}
          placeholder="Last Name"
        />
        <input
          className="form-control"
          value={username}
          style={{
            width: '20%',
            marginLeft: '40%',
            marginTop: '2em',
            textAlign: 'center'
          }}
          onChange={this.onUsernameInput}
          placeholder="New Username"
        />
        <input
          className="form-control"
          type="password"
          value={password}
          style={{
            width: '20%',
            marginLeft: '40%',
            marginTop: '2em',
            textAlign: 'center'
          }}
          onChange={this.onPasswordInput}
          placeholder="New Password"
        />
        <input
          className="form-control"
          type="password"
          value={pwConfirm}
          style={{
            width: '20%',
            marginLeft: '40%',
            marginTop: '2em',
            textAlign: 'center'
          }}
          onChange={this.onPWCInput}
          placeholder="Password Confirm"
        />
        <button
          className="button"
          style={{ marginTop: '1em' }}
          onClick={this.onButtonClick}
        >
          Done ✅
        </button>
      </div>
    );
  }

  onUsernameInput(event) {
    this.setState({ username: event.target.value });
  }
  onPasswordInput(event) {
    this.setState({ password: event.target.value });
  }
  onPWCInput(event) {
    this.setState({ pwConfirm: event.target.value });
  }
  onButtonClick() {
    const { username, password, pwConfirm } = this.state;
    if (password === pwConfirm) {
      request
        .get(`${URL}/user?username=${username}&password=${password}`)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    } else {
      console.log('passwords do not match');
    }
  }
}
