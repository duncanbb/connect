import { connect } from 'react-redux';
import WriteAStory from './write_a_story';
import { createStory } from '../../actions/story_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.story.errors
});


const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteAStory);
