import { connect } from 'react-redux';
import { fetchSingleStory } from './../../actions/story_actions';
import StoryDetail from './story_detail';
import { selectStoryDetail } from './../../reducers/selectors.js';


const mapStateToProps = state => ({
  story: selectStoryDetail(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleStory: (id) => dispatch(fetchSingleStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
