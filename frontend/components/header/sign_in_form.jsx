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
      formStyle: props.formType,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestsignIn = this.guestsignIn.bind(this);
    this.swap = this.swap.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
      if (this.props.loggedIn) {
        this.props.router.push("/");
      }
  }

  swap(e){
      e.preventDefault();
      const { formStyle } = this.state;
      if (formStyle === "Sign Up") {
        this.setState({formStyle: "Sign In"});
      } else {
        this.setState({formStyle: "Sign Up"});
      }
      this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    const { signInSubmission, signUpSubmission, formType } = this.props;
    const { formStyle } = this.state;
    const user = Object.assign({}, this.state);
    let toExecute;
    toExecute = formStyle === "Sign Up" ? signUpSubmission : signInSubmission;
    toExecute(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const { errors, formSubmission } = this.props;
    const { username, password } = this.state;
    const button = this.state.formType === "Sign Up" ? "" : <button className="guestsignIn" onClick={ this.guestsignIn }>Guest Sign In</button>;
    const swapButton =
      this.state.formStyle === "Sign Up" ?
        <button className="loginLabel signIn" onClick={ this.swap }>Or Sign In</button>
          : <button className="loginLabel signUp" onClick={ this.swap }>Or Sign Up</button>;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className ="session-form">
           <h1 className="form-heading">{ this.state.formStyle } to Connect</h1>
            <label className="loginLabel">Username
              <input type="text"
                value={ username }
                onChange={this.update("username")}
                className="login-input" />
            </label>
          <label className="loginLabel">Password
              <input type="password"
                value={ password }
                onChange={this.update("password")}
                className="login-input" />
            </label>
            { this.errors() }
          <footer className="signin-footer"> </footer>
          <input className="submitButton" type ="submit" value="Submit" />
          { button }
          { swapButton }
        </form>
      </div>
    );
  }

  guestsignIn(e){
    e.preventDefault();
    const user = Object.assign({}, {username: "test", password:"password"});
    this.props.signInSubmission(user);
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
