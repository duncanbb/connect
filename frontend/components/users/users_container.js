import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllStories } from '../../actions/story_actions';
import { fetchAllFollows } from '../../actions/follow_actions';
import UserShow from './user_show';
import { storiesByAuthorId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.params.userId,
  user: state.user,
  stories: storiesByAuthorId(state, ownProps.params.userId),
});


const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllStories: () => dispatch(fetchAllStories()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
