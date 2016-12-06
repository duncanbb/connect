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
    if (this.props.formType === "login"){
      return <Link to="/signup">Or signup</Link>;
    } else {
      return <Link to="/login">Or login</Link>;
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

  render(){
    const { errors, formType, processForm } = this.props;
    const { username, password } = this.state;


    return <form onSubmit={this.handleSubmit} className ="session-form">
      <header>{ formType } {this.switchLink()}</header>

      { errors.map((error, idx) => <p key={idx}>{error}</p>) }
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
    </form>;
  }
}



export default withRouter(SessionForm);
