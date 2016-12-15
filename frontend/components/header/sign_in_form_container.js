import { connect } from 'react-redux';
import { signInUser, signUp, openModal, closeModal, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
});


const mapDispatchToProps = dispatch => ({
    signInSubmission: (user) => dispatch(signInUser(user)),
    signUpSubmission: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
