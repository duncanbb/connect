import { connect } from 'react-redux';
import Header from './header';
import { signInUser, logout, signUp, clearErrors } from '../../actions/session_actions';
// import SignInModal from 'form_modal';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()).then(() => (window.currentUser = null)),
    signInUser: (user) => dispatch(signInUser(user)),
    signup: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
