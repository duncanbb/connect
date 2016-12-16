import { connect } from 'react-redux';
import Follow from './follow';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  follows: ownProps.follows,
});


const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
