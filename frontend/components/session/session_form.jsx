import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionContainer from './session_form_container';
import modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modalOpen: false,
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
      return <Link to="/signup">/ Sign Up</Link>;
    } else {
      return <Link to="/signin">/ Sign In</Link>;
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

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  render(){
    const { errors, formType, processForm } = this.props;
    const { username, password } = this.state;
    return (
      <modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
          <form onSubmit={this.handleSubmit} className ="session-form">
           { this.errors }
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
          <footer className="signin-footer">{ formType } {this.switchLink()}</footer>
          <input type ="submit" value="Submit" />
        </form>
    </modal>
    );
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


export default withRouter(SessionForm);
