import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header_container';
import Modal from 'react-modal';
import { signinModalStyle } from './signin_modal_style';
import SignInForm from './sign_in_form';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signup: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formStyle = this.formStyle.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal({ signup }){
    return () => {
      this.setState({ modalOpen: true, signup });
    };
  }

  signInOrAccountDetails(){
    let wrapper;
    const { currentUser, logout } = this.props;
    if (currentUser) {
        wrapper =
        <ul className="header-links group">
          <li>
            <Link to="/write_a_story">Write a story</Link>
          </li>
          <li>
            <button onClick={ logout }>Sign out</button>
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
            <Link to="/write_a_story">Write a story</Link>
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
          <nav name ="top-header group">
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

  render() {
    const { modalOpen } = this.state;
    const { signInForm } = this.props;
    const formstring = this.state.signup === true ? "Sign Up" : "Sign In";
    return (
      <header>
        {this.signInOrAccountDetails()}
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="whatever"
          style={ signinModalStyle }>
          <SignInForm formSubmission={ this.formStyle() } errors={ this.props.errors } closeModal={ this.closeModal } formType = {formstring}/>
        </Modal>
    </header>
  );
}

// TODO: add formmodal then make a form that receives props from the modal and render in that - split the sign in / sign up
// TODO: into two different links - then based on that pass different props - formmodal will have similiar state to session form
// TODO: get rid of those routes
// TODO: fix css styling
// TODO: make errors reset
}


export default Header;
