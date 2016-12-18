import { connect } from 'react-redux';
import { fetchSingleStory, deleteStory } from '../../actions/story_actions';
import StoryDetail from './story_detail';
import { selectStoryDetail, selectComments } from '../../reducers/selectors.js';
import { fetchAllComments, deleteComment } from '../../actions/comment_actions';
import { fetchAllFollows } from '../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => {{
  return ({
    story: selectStoryDetail(state),
    currentUser: state.session.currentUser,
    comments: selectComments(state, ownProps.params.storyId),
    follows: state.follows
  });
}};

const mapDispatchToProps = dispatch => ({
  fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
  fetchAllComments: () => dispatch(fetchAllComments()),
  deleteStory: (story) => dispatch(deleteStory(story)),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
