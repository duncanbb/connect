import { connect } from 'react-redux';
import WriteComment from './write_comment';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});


const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteComment);
