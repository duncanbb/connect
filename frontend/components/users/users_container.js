import { connect } from 'react-redux';
import { fetchUserStories } from '../../util/story_api_util';
import UserShow from './user_show';

const mapStateToProps = state => ({
  user: state.user,
});


const mapDispatchToProps = dispatch => ({
    fetchUserStories: (id) => dispatch(fetchUserStories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
