import { connect } from 'react-redux';
import Follow from './follow';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  follows: state.follows,
});


const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
