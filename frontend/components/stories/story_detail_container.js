import { connect } from 'react-redux';
import { fetchSingleStory } from '../../actions/story_actions';
import StoryDetail from './story_detail';
import { selectStoryDetail, selectComments } from '../../reducers/selectors.js';
import { fetchAllComments } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  story: selectStoryDetail(state),
  currentUser: state.session.currentUser,
  comments: selectComments(state, ownProps.params.storyId)
});

const mapDispatchToProps = dispatch => ({
  fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
  fetchAllComments: () => dispatch(fetchAllComments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
