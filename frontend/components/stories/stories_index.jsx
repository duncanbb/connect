import React from 'react';
import StoryIndexItem from './story_index_item';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllStories();
  }

  render () {
    const { stories } = this.props;
    const storyItems = stories.map(story => (
      <StoryIndexItem key={ story.id } story={ story } />)
    );

    return (
      <div>
        <section className="storiesIndex">
          <ul>
            { storyItems }
          </ul>
        </section>
      </div>
    );
  }
}
export default StoriesIndex;
