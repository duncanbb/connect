import { connect } from 'react-redux';
import Like from './like';
import { createLike, deleteLike } from '../../actions/like_actions';
import { selectuserLikes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  likes: ownProps.likes,
});


const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
