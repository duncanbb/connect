import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionContainer from './session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
      if (this.props.loggedIn) {
        this.props.router.push("/");
      }
  }

  switchLink() {
    if (this.props.formType === "signin"){
      return <Link to="/signup" className="top-header">/ Sign Up</Link>;
    } else {
      return <Link to="/signin" className="top-header">/ Sign In</Link>;
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const { processForm } = this.props;
    const user = Object.assign({}, this.state);
    processForm(user).then(() => this.props.router.push("/"));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

  render(){
    const { errors, formType, processForm } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className ="session-form">
        <header className="top-header">{ formType } {this.switchLink()}</header>
       { this.errors ()}
        <label>
          Username:
          <input type="text"
            value={ username }
            onChange={this.update("username")}
            className="login-input" />
        </label><br/>
        <label>
          Password:
          <input type="password"
            value={ password }
            onChange={this.update("password")} />
        </label>
        <br/>
      <input type ="submit" value="Submit" />
      </form>
    );
  }
}



export default withRouter(SessionForm);
