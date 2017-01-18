import { connect } from 'react-redux';
import { fetchUserStories } from '../../actions/story_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.params.userId,
});


const mapDispatchToProps = dispatch => ({
  fetchUserStories: (id) => dispatch(fetchUserStories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
