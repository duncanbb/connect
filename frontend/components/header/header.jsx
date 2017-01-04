import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderContainer from './header_container';
import Modal from 'react-modal';
import { signinModalStyle } from './signin_modal_style';
import SignInForm from './sign_in_form';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formStyle = this.formStyle.bind(this);
    this.writeStory = this.writeStory.bind(this);
    this.logoutHelper = this.logoutHelper.bind(this);
  }

  closeModal(){
    this.props.clearErrors();
    this.props.closeModal();
  }

  openModal({ signup }){
    return () => {
      this.setState({ signup });
      this.props.openModal();
    };
  }

  signInOrAccountDetails(){
    let wrapper;
    const { currentUser } = this.props;
    if (currentUser) {
        wrapper =
        <ul className="header-links group">
          <li>
            <button onClick={ this.writeStory }>Write a story</button>
          </li>
          <li>
            <button onClick={ this.logoutHelper }>Sign out</button>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>;
      } else {
        // TODO: pull out into subcomponent
        wrapper =
        <ul className="header-links group">
          <li>
            <button onClick={ this.writeStory }>Write a story</button>
          </li>
          <li>
            <button onClick={ this.openModal({ signup: false}) }>Sign In </button>
          </li>
          <li>
            <button onClick={ this.openModal({ signup: true }) }>Sign Up</button>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>;
      }
      return (
        <div className="metabar">
          <nav className ="top-header group">
            <Link to="/" className="logo">Connect</Link>
            { wrapper }
          </nav>
        </div>
      );
  }

  formStyle(){
    if ( this.state.signup === true ){
      return (this.props.signup);
    } else {
      return (this.props.signInUser);
    }
  }

  logoutHelper(){
    this.props.logout().then(() => this.props.router.push('/'))
  }

  render() {
    const { signInForm, signInUser, signup, clearErrors } = this.props;
    const formstring = this.state.signup === true ? "Sign Up" : "Sign In";
    return (
      <header>
        {this.signInOrAccountDetails()}
        <Modal
          isOpen={ this.props.openModalState }
          onRequestClose={ this.closeModal }
          contentLabel="whatever"
          style={ signinModalStyle }>
          <SignInForm signInSubmission={ signInUser }signUpSubmission={ signup }
            errors={ this.props.errors }closeModal={ this.closeModal }
            formType= {formstring} clearErrors = {clearErrors}/>
        </Modal>
    </header>
    );
  }

  writeStory(){
    if ( this.props.loggedIn ){
      this.props.router.push('write_a_story')
    } else {
      this.props.openModal();
    }
  }

}


export default withRouter(Header);
