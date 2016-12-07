import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { signinModalStyle } from './signin_modal_style';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestsignIn = this.guestsignIn.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
      if (this.props.loggedIn) {
        this.props.router.push("/");
      }
  }


  handleSubmit(e) {
    e.preventDefault();
    const { formSubmission } = this.props;
    const user = Object.assign({}, this.state);
    formSubmission(user).then(() => this.props.closeModal());
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const { errors, formSubmission } = this.props;
    const { username, password } = this.state;
    const button = this.props.formType === "Sign Up" ? "" : <button className="submitButton" onClick={ this.guestsignIn }>Guest Sign In</button>;
    return (
      <div>
        <img src={ window.plant } width="100%"/>
        <form onSubmit={this.handleSubmit} className ="session-form">
           { this.errors() }
            <label className="loginLabel">Username
              <input type="text"
                value={ username }
                onChange={this.update("username")}
                className="login-input" />
            </label><br/>
          <label className="loginLabel">Password
              <input type="password"
                value={ password }
                onChange={this.update("password")}
                className="login-input" />
            </label>
            <br/>
          <footer className="signin-footer"> </footer>
          <input className="submitButton" type ="submit" value="Submit" />
          { button }
        </form>
      </div>
    );
  }

  guestsignIn(e){
    e.preventDefault();
    const user = Object.assign({}, {username: "test", password:"password"});
    this.props.formSubmission(user).then(() => this.props.closeModal());
  }

  errors(){
    const { errors } = this.props;
    if (errors.length === 0){
      return;
    } else {
      return(
        <ul className="signin-login-errors">
          { errors.map((error, idx) => <li key={idx}> {error} </li>) }
        </ul>
      );
    }
  }

}


export default withRouter(SignInForm);
