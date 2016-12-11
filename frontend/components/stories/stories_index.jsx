import React from 'react';
import StoryIndexItem from './story_index_item';
import WriteAStory from './write_a_story';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllStories();
  }

  render () {
    const { stories } = this.props;
    const storyItems = stories.map(story => (
      <StoryIndexItem key={ story.id } story={ story } author = { story.author }/>)
    );

    return (
      <div className="home-stream-container">
        <section className="stories-index">
          <ul>
            <WriteAStory/>
            { storyItems }
          </ul>
        </section>
      </div>
    );
  }
}
export default StoriesIndex;
