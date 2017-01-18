import { connect } from 'react-redux';
import { fetchUserStories } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.params.userId,
  user: state.user,
});


const mapDispatchToProps = dispatch => ({
  fetchUserStories: (id) => dispatch(fetchUserStories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
