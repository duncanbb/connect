import { connect } from 'react-redux';
import { selectAllStories } from '../../reducers/selectors';
import { fetchAllStories } from '../../actions/story_actions';
import StoriesIndex from './stories_index';

const mapStateToProps = state => ({
  stories: selectAllStories(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllStories: () => dispatch(fetchAllStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
