import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionContainer from './session_form_container';
import Modal from 'react-modal';
import { signinModalStyle } from './signin_modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      return <Link to="/signup">or Sign Up</Link>;
    } else {
      return <Link to="/signin">or Sign In</Link>;
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

  convertFormType(){
    if (this.props.formType === "signin"){
      let result = "Sign Up";
      return "Sign In";
    } else {
      return "Sign Up";
    }
  }

  render(){
    const { errors, formType, processForm } = this.props;
    const { username, password, modalOpen } = this.state;
    return (
      <div>
        <button onClick={ this.openModal }>Sign In!!</button>
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="whatever"
          style={ signinModalStyle }>
          <form onSubmit={this.handleSubmit} className ="session-form">
             { this.errors() }
              <label className="loginLabel">Username
                <input type="text"
                  placeholder="username"
                  value={ username }
                  onChange={this.update("username")}
                  className="login-input" />
              </label><br/>
              <label>
                <input type="password"
                  value={ password }
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
              <br/>
            <footer className="signin-footer">{ this.convertFormType() } {this.switchLink()}</footer>
            <input type ="submit" value="Submit" />
          </form>
        </Modal>
      </div>
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
