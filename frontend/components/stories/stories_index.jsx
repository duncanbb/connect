import React from 'react';
import StoryIndexItem from './story_index_item';
import WriteAStoryContainer from './write_a_story_container';

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
      <div className="home-stream-background">
        <div className="home-stream-container">
          <section className="stories-index">
            <ul>
              <WriteAStoryContainer/>
              { storyItems }
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
export default StoriesIndex;
