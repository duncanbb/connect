import { connect } from 'react-redux';
import EditAStory from './edit_a_story';
import { fetchSingleStory, updateStory } from '../../actions/story_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  story: state.storyDetail,
});


const mapDispatchToProps = dispatch => ({
    fetchSingleStory: (id) => dispatch(fetchSingleStory(id)),
    updateStory: (story) => dispatch(updateStory(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAStory);
