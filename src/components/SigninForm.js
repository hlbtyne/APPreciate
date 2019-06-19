import React, { Component } from "react";

import { signin } from "../services/api";

class SigninForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    signin(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.signin(data.username);
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <h1>
              <i className="fas fa-fire-alt" /> APPreciate
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        <h2 style={{padding: 15, paddingLeft: 30, textAlign: "left", background: "#e9ecef"}}>Sign in</h2>
        <br />
        <form onSubmit={this.handleSubmit} style={{ width: 800, textAlign: "left", paddingLeft: 30}}>
          <div className="form-group">
            <label htmlFor="username"><h4 style={{marginBottom: 0}}>Username</h4></label>
            <input
              onChange={this.handleChange}
              name="username"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><h4 style={{marginBottom: 0}}>Password</h4></label>
            <input
              onChange={this.handleChange}
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default SigninForm;
